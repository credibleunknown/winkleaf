'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _connectMultiparty = require('connect-multiparty');

var _connectMultiparty2 = _interopRequireDefault(_connectMultiparty);

var _event = require('../controllers/event');

var _update = require('../controllers/update');

var _user = require('../controllers/user');

var _comments = require('../controllers/comments');

var _album = require('../controllers/album');

var _verifytoken = require('../middleware/verifytoken');

var _verifytoken2 = _interopRequireDefault(_verifytoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
var multipartMiddleware = (0, _connectMultiparty2.default)();

// Event Endpoint
router.post('/events', _verifytoken2.default, multipartMiddleware, _event.createEvent);
router.get('/events', _event.getAllEvent);
router.get('/events/:eventId', _event.getSingleEvent);
router.delete('/events/:eventId', _verifytoken2.default, _event.deleteEvent);

// Event Update Endpoint
router.post('/events/:eventId/updates', _verifytoken2.default, multipartMiddleware, _update.createUpdate);
router.get('/events/:eventId/updates/', _update.getAllUpdate);
router.get('/events/:eventId/updates/:updateId', _update.getSingleUpdate);
router.delete('/events/:eventId/updates/:updateId', _verifytoken2.default, _update.deleteUpdate);

// Update Comment Endpoint
router.post('/events/:eventId/updates/:updateId/comments', _verifytoken2.default, _comments.createComment);
router.get('/events/:eventId/updates/:updateId/comments', _comments.getAllComment);

// Album Endpoint
router.post('/albums', _verifytoken2.default, multipartMiddleware, _album.createAlbum);
router.get('/albums', _album.getAllAlbum);
router.get('/albums/:albumId', _album.getSingleAlbum);
router.delete('/albums/:albumId', _album.deleteAlbum);

// User Endpoint
router.post('/users/signup', _user.createUser);
router.post('/users/login', _user.userLogin);
router.get('/users/:userId', _user.getSingleUser);
router.get('/users/', _user.getAllUser);
router.put('/users/:userId/profile', _verifytoken2.default, multipartMiddleware, _user.userProfile);

exports.default = router;