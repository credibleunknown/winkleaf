'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllComment = getAllComment;
exports.createComment = createComment;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _comments = require('../models/comments');

var _comments2 = _interopRequireDefault(_comments);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function getAllComment(req, res) {
  _comments2.default.find().sort({ date: 'desc' }).then(function (allComments) {
    res.status(200).json({
      success: true,
      message: 'A list of all comments',
      allComments: allComments
    });
  }).catch(function () {
    return res.status(500).json({ success: false, message: 'Server error' });
  });
}

function createComment(req, res) {
  var comment = new _comments2.default({
    _id: new _mongoose2.default.Types.ObjectId(),
    comment: req.body.comment
  });
  return comment.save().then(function (newComment) {
    res.status(201).json({
      success: true,
      message: 'comment created',
      newComment: newComment
    });
  }).catch(function () {
    return res.status(500).json({ success: false,
      message: 'Server error, please try again. Thanks'
    });
  });
}

exports.default = _comments2.default;