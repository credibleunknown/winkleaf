'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUpdate = createUpdate;
exports.getSingleUpdate = getSingleUpdate;
exports.getAllUpdate = getAllUpdate;
exports.deleteUpdate = deleteUpdate;

var _cloudinary = require('cloudinary');

var _cloudinary2 = _interopRequireDefault(_cloudinary);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _update = require('../models/update');

var _update2 = _interopRequireDefault(_update);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

_dotenv2.default.config();

_cloudinary2.default.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret
});

function createUpdate(req, res) {
  _cloudinary2.default.uploader.upload(req.files.coverImage.path, function (coverImageResult) {
    var coverImage = coverImageResult.url;
    _cloudinary2.default.uploader.upload(req.files.photo.path, function (photosResult) {
      var photo = photosResult.url;
      var update = new _update2.default({
        _id: new _mongoose2.default.Types.ObjectId(),
        description: req.body.description,
        coverImage: coverImage,
        photo: photo
      });

      if (!update.description || !update.photo) {
        return res.status(400).json({
          success: false,
          message: 'Please add an update and photo'
        });
      }
      return update.save().then(function (newUpdate) {
        return res.status(201).json({
          success: true,
          message: 'Your event has updated successfully',
          newUpdate: newUpdate
        });
      }).catch(function () {
        return res.status(500).json({
          success: false,
          message: 'Server error, please try again. Thanks'
        });
      });
    });
  });
}

function getSingleUpdate(req, res) {
  var id = req.params.updateId;
  _update2.default.findById(id).select('description photo').then(function (singleUpdate) {
    return res.status(200).json({
      success: true,
      message: 'This is the available information for ' + singleUpdate.name,
      singleUpdate: singleUpdate
    });
  }).catch(function () {
    return res.status(500).json({
      success: false,
      message: 'This update does not exist'
    });
  });
}

function getAllUpdate(req, res) {
  _update2.default.find().select('description photo').exec().then(function (allUpdate) {
    res.status(200).json({
      success: true,
      message: 'A list of all updates for this event',
      allUpdate: allUpdate
    });
  }).catch(function () {
    return res.status(500).json({
      success: false,
      message: 'Server error, please try again. Thanks'
    });
  });
}

function deleteUpdate(req, res) {
  var id = req.params.updateId;
  _update2.default.findByIdAndRemove(id).exec().then(function () {
    return res.status(204).json({
      success: true,
      message: 'Your event is deleted'
    });
  }).catch(function () {
    return res.status(500).json({
      success: false,
      message: 'Server error, please try again. Thanks'
    });
  });
}

exports.default = _update2.default;