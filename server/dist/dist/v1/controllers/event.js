'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createEvent = createEvent;
exports.getSingleEvent = getSingleEvent;
exports.getAllEvent = getAllEvent;
exports.deleteEvent = deleteEvent;

var _cloudinary = require('cloudinary');

var _cloudinary2 = _interopRequireDefault(_cloudinary);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _event = require('../models/event');

var _event2 = _interopRequireDefault(_event);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

_dotenv2.default.config();

_cloudinary2.default.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret
});

function createEvent(req, res) {
  _cloudinary2.default.uploader.upload(req.files.coverImage.path, function (result) {
    var coverImage = result.url;
    _cloudinary2.default.uploader.upload(req.files.prePhoto.path, function (photoResult) {
      var prePhoto = photoResult.url;
      var event = new _event2.default({
        _id: new _mongoose2.default.Types.ObjectId(),
        name: req.body.name,
        description: req.body.description,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        category: req.body.category,
        type: req.body.type,
        location: req.body.location,
        access: req.body.access,
        eventurl: req.body.eventurl,
        additionalInfo: req.body.additionalInfo,
        coverImage: coverImage,
        prePhoto: prePhoto
      });

      // test to ensure name is filled
      if (!event.name || !event.description || !event.coverImage || !event.prePhoto) {
        return res.status(400).json({
          message: 'You can\'t create an event without an event name, description, and coverImage'
        });
      }
      return event.save().then(function (newEvent) {
        res.status(201).json({
          success: true,
          message: 'Event created successfully',
          createdEvent: {
            _id: newEvent.id,
            name: newEvent.name,
            description: newEvent.description,
            category: newEvent.category,
            type: newEvent.type,
            location: newEvent.location,
            access: newEvent.access,
            ticket: newEvent.ticket,
            eventurl: newEvent.eventurl,
            coverImage: newEvent.coverImage,
            prePhoto: newEvent.prePhoto,
            additionalInfo: newEvent.additionalInfo
          }
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

function getSingleEvent(req, res) {
  var id = req.params.eventId;
  _event2.default.findById(id).select('name description category type location access ticket eventurl coverImage prePhoto additionalInfo').then(function (singleEvent) {
    return res.status(200).json({
      success: true,
      message: 'This is the available information for ' + singleEvent.name,
      singleEvent: singleEvent
    });
  }).catch(function () {
    return res.status(500).json({
      success: false,
      message: 'This event does not exist.'
    });
  });
}

function getAllEvent(req, res) {
  _event2.default.find().select('name description category location coverImage').sort({ date: 'asc' }).exec().then(function (allEvents) {
    res.status(200).json({
      success: true,
      message: 'A list of all events',
      allEvents: allEvents
    });
  }).catch(function () {
    return res.status(500).json({
      success: false,
      message: 'Server error, please try again. Thanks'
    });
  });
}

function deleteEvent(req, res) {
  var id = req.params.eventId;
  _event2.default.findByIdAndRemove(id).select('_id').exec().then(function () {
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

exports.default = _event2.default;