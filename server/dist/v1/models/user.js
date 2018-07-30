'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = global.Promise;

var userSchema = _mongoose2.default.Schema({
  _id: _mongoose2.default.Schema.Types.ObjectId,
  firstName: {
    type: String,
    required: false,
    trim: [true, 'first name must have no spaces in between']
  },
  lastName: {
    type: String,
    required: false,
    trim: [true, 'last name must have no spaces in between']
  },
  username: {
    type: String,
    required: [true, 'Please enter your username'],
    trim: [true, 'username must have no space between'],
    unique: true,
    lowercase: [true, 'All username are lowercased']
  },
  phone: {
    type: Number,
    required: [true, 'Please enter your phone number'],
    trim: true,
    unique: true,
    validate: [/^\d{10}$/, 'This is not a valid phone number']
  },
  email: {
    type: String,
    required: [true, 'Please enter your email'],
    lowerCase: true,
    trim: true,
    unique: true,
    match: [/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/, 'This email is invalid']
  },
  password: {
    type: String,
    required: true
  },
  userImage: {
    type: String,
    required: false
  }
});

exports.default = _mongoose2.default.model('User', userSchema);