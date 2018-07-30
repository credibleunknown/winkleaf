'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

_mongoose2.default.Promise = global.Promise;

var categoryArray = ['fashion', 'pageant', 'religion', 'concert', 'wedding', 'launching', 'campaign', 'awards', 'politics', 'party', 'fundraiser', 'thanksgiving', 'conference'];

var eventSchema = new _mongoose2.default.Schema({
  _id: _mongoose2.default.Schema.Types.ObjectId,
  name: {
    type: String,
    required: [true, 'Please enter the name of event']
  },
  description: {
    type: String,
    required: [true, 'Please enter the description of event']
  },
  startDate: Date,
  endDate: Date,
  category: {
    type: String,
    enum: categoryArray
  },
  type: {
    type: String,
    enum: ['online', 'onsite']
  },
  location: {
    country: String,
    state: String,
    city: String,
    street: String,
    facilityName: String
  },
  access: {
    type: String,
    enum: ['open', 'invite']
  },
  ticket: String,
  ticketurl: String,
  eventurl: String,
  coverImage: String,
  prePhoto: String,
  additionalInfo: String
});

exports.default = _mongoose2.default.model('Event', eventSchema);