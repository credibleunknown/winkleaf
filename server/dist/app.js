'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _main = require('./v1/routes/main');

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
require('dotenv').config();

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use((0, _morgan2.default)('dev'));
app.use((0, _cors2.default)());

_mongoose2.default.connect(process.env.MONGO).then(function () {}).catch(function () {});
_mongoose2.default.Promise = global.Promise;

var port = process.env.PORT || 9900;

app.use(_main2.default);
app.use(_express2.default.static(_path2.default.join(__dirname, '../client/build/')));

app.get('/*', function (req, res) {
  res.sendFile(_path2.default.join(__dirname, '../client/build/index.html'));
});

app.get('*', function (req, res) {
  res.status(400).json({
    message: 'You\'re welcome to Winkleaf API. Please use the documentation for proper routing.'
  });
});

app.listen(port);

exports.default = app;