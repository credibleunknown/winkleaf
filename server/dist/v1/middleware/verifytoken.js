'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

exports.default = function (req, res, next) {
  var token = req.headers['x-access-token'];
  if (token) {
    _jsonwebtoken2.default.verify(token, process.env.SECRET, function (err, decoded) {
      if (err) {
        return res.status(401).json({
          message: 'Authentication failed'
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status(401).json({ message: 'Authentication failed' });
  }
};