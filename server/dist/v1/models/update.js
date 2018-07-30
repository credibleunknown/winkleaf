'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = global.Promise;

var updateSchema = new _mongoose2.default.Schema({
  _id: _mongoose2.default.Schema.Types.ObjectId,
  description: {
    type: String,
    required: [true, 'Please enter an update']
  },
  coverImage: String,
  photo: String
});

exports.default = _mongoose2.default.model('Update', updateSchema);