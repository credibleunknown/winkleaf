'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAlbum = createAlbum;
exports.getAllAlbum = getAllAlbum;
exports.getSingleAlbum = getSingleAlbum;
exports.deleteAlbum = deleteAlbum;

var _cloudinary = require('cloudinary');

var _cloudinary2 = _interopRequireDefault(_cloudinary);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _album = require('../models/album');

var _album2 = _interopRequireDefault(_album);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

_dotenv2.default.config();

_cloudinary2.default.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret
});

function createAlbum(req, res) {
  _cloudinary2.default.uploader.upload(req.files.photo.path, function (photoResult) {
    var photo = photoResult.url;
    _cloudinary2.default.uploader.upload(req.files.video.path, function (videoResult) {
      var video = videoResult.url;
      var album = new _album2.default({
        _id: _mongoose2.default.Types.ObjectId(),
        name: req.body.name,
        description: req.body.description,
        photo: photo,
        video: video
      });
      // ensure that photo, video, name and description are filled out
      if (!album.name || !album.description || !album.photo || !album.video) {
        return res.status(400).json({
          success: false,
          message: 'Please check that all required fields are filled'
        });
      }
      return album.save().then(function (newAlbum) {
        res.status(201).json({
          success: true,
          message: 'New album created successfully',
          newAlbum: newAlbum
        });
      }).catch(function () {
        return res.status(500).json({
          success: false,
          message: 'Server eror, please do try again'
        });
      });
    });
  });
}

function getAllAlbum(req, res) {
  _album2.default.find().select('_id name description photo').sort({ date: 'desc' }).then(function (allAbums) {
    return res.status(200).json({
      success: true,
      message: 'A list of all albums',
      allAbums: allAbums
    });
  }).catch(function () {
    return res.status(500).json({
      success: false,
      message: 'Server error, please do try again'
    });
  });
}

function getSingleAlbum(req, res) {
  var id = req.params.albumId;
  _album2.default.findById(id).then(function (singleAlbum) {
    return res.status(200).json({
      success: true,
      message: 'More about an album',
      singleAlbum: singleAlbum
    });
  }).catch(function () {
    return res.status(500).json({
      success: false,
      message: 'Server failed'
    });
  });
}

function deleteAlbum(req, res) {
  var id = req.params.albumId;
  _album2.default.findByIdAndRemove(id).then(function () {
    return res.status(204).json({ success: true });
  }).catch(function () {
    return res.status(500).json({ success: false });
  });
}

exports.default = _album2.default;