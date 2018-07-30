'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUser = createUser;
exports.userLogin = userLogin;
exports.userProfile = userProfile;
exports.getSingleUser = getSingleUser;
exports.getAllUser = getAllUser;

var _cloudinary = require('cloudinary');

var _cloudinary2 = _interopRequireDefault(_cloudinary);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _user = require('../models/user');

var _user2 = _interopRequireDefault(_user);

var _token = require('../middleware/token');

var _token2 = _interopRequireDefault(_token);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

_cloudinary2.default.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret
});

function createUser(req, res) {
  _bcrypt2.default.hash(req.body.password, 10, function (err, hash) {
    var password = hash;
    var user = new _user2.default({
      _id: new _mongoose2.default.Types.ObjectId(),
      username: req.body.username,
      phone: req.body.phone,
      email: req.body.email,
      password: password
    });
    if (!user.username || !user.email || !user.phone || !user.password) {
      return res.status(400).json({
        success: false,
        message: 'Please ensure all fields are filled'
      });
    }
    return _user2.default.count({
      $or: [{ email: req.body.email }, { phone: req.body.phone }, { username: req.body.username }]
    }).then(function (count) {
      if (count > 0) {
        return res.status(400).json({
          success: false,
          message: 'User exist'
        });
      }
      return user.save().then(function (newUser) {
        console.log('catch');
        var token = (0, _token2.default)(newUser);
        res.status(201).json({
          success: true,
          message: 'User created successfully',
          createdUser: {
            username: newUser.username,
            phone: newUser.phone,
            email: newUser.email,
            _id: newUser.id
          },
          token: token
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

function userLogin(req, res) {
  var _req$body = req.body,
      username = _req$body.username,
      password = _req$body.password;

  _user2.default.findOne({ username: username }).exec().then(function (user) {
    _bcrypt2.default.compare(password, user.password, function (err, result) {
      if (err) {
        return res.status(401).json({
          success: false,
          message: 'Unauthorized Access'
        });
      }
      if (result) {
        var token = (0, _token2.default)(result);
        return res.status(200).json({
          success: true,
          message: 'Authentication successful',
          User: {
            username: user.username,
            id: user.id
          },
          token: token
        });
      }
      return res.status(401).json({
        success: false,
        message: 'Wrong login details'
      });
    });
  }).catch(function () {
    res.status(500).json({
      success: false,
      message: 'Server error, please try again. Thanks'
    });
  });
}

function userProfile(req, res) {
  _cloudinary2.default.uploader.upload(req.files.userImage.path, function (result) {
    console.log(req.files);
    console.log(result);
    var id = req.params.userId;
    _user2.default.findByIdAndUpdate(id, {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userImage: result.url
    }, { new: true }).then(function (updatedUser) {
      if (!updatedUser) {
        return res.status(404).json({
          success: false,
          message: 'No user found'
        });
      }
      return res.status(201).json({
        success: true,
        message: 'Your profile has been updated',
        User: {
          _id: updatedUser.id,
          firstName: updatedUser.firstName,
          lastName: updatedUser.lastName,
          username: updatedUser.username,
          email: updatedUser.email,
          phone: updatedUser.phone,
          userImage: result.secure_url
        }
      });
    }).catch(function () {
      res.status(500).json({
        success: false,
        message: 'Server error, please try again. Thanks'
      });
    });
  });
}

function getSingleUser(req, res) {
  var id = req.params.userId;
  _user2.default.findById(id).then(function (singleUser) {
    return res.status(200).json({
      success: true,
      message: 'This is the available information for ' + singleUser.firstName,
      user: {
        _id: singleUser.id,
        firstName: singleUser.firstName,
        lastName: singleUser.lastName,
        username: singleUser.username,
        email: singleUser.email,
        userImage: singleUser.userImage
      }
    });
  }).catch(function () {
    return res.status(500).json({
      success: false,
      message: 'This user does not exist.'
    });
  });
}

function getAllUser(req, res) {
  _user2.default.find().select('_id username userImage').sort({ date: 'desc' }).then(function (newUsers) {
    var response = {
      success: true,
      allUsers: newUsers.map(function (newUser) {
        return {
          id: newUser.id,
          username: newUser.username,
          userImage: newUser.userImage
        };
      })
    };
    res.status(200).json(response);
  }).catch(function () {
    return res.status(500).json({
      success: false,
      message: 'Server error, please try again. Thanks'
    });
  });
}

exports.default = _user2.default;