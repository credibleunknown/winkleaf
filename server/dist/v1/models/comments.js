'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = global.Promise;

var commentSchema = new _mongoose2.default.Schema({
  _id: _mongoose2.default.Schema.Types.ObjectId,
  comment: {
    type: String,
    required: true
  }
});

exports.default = _mongoose2.default.model('Comment', commentSchema);