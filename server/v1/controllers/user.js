import cloudinary from 'cloudinary';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import User from '../models/user';
import createToken from '../middleware/token';

dotenv.config();

cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});

export function createUser(req, res) {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    const password = hash;
    const user = new User({
      _id: new mongoose.Types.ObjectId(),
      username: req.body.username,
      phone: req.body.phone,
      email: req.body.email,
      password,
    });
    if (!user.username || !user.email || !user.phone || !user.password) {
      return res.status(400).json({
        success: false,
        message: 'Please ensure all fields are filled',
      });
    }
    return User.count({
      $or: [
        { email: req.body.email },
        { phone: req.body.phone },
        { username: req.body.username },
      ],
    })
      .then((count) => {
        if (count > 0) {
          return res.status(400).json({
            success: false,
            message: 'User exist',
          });
        }
        return user
          .save()
          .then((newUser) => {
            console.log('catch');
            const token = createToken(newUser);
            res.status(201).json({
              success: true,
              message: 'User created successfully',
              createdUser: {
                username: newUser.username,
                phone: newUser.phone,
                email: newUser.email,
                _id: newUser.id,
              },
              token,
            });
          })
          .catch(() => res.status(500).json({
            success: false,
            message: 'Server error, please try again. Thanks',
          }));
      });
  });
}

export function userLogin(req, res) {
  const { username, password } = req.body;
  User.findOne({ username })
    .exec()
    .then((user) => {
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          return res.status(401).json({
            success: false,
            message: 'Unauthorized Access',
          });
        }
        if (result) {
          const token = createToken(result);
          return res.status(200).json({
            success: true,
            message: 'Authentication successful',
            User: {
              username: user.username,
              id: user.id,
            },
            token,
          });
        }
        return res.status(401).json({
          success: false,
          message: 'Wrong login details',
        });
      });
    })
    .catch(() => {
      res.status(500).json({
        success: false,
        message: 'Server error, please try again. Thanks',
      });
    });
}

export function userProfile(req, res) {
  cloudinary.uploader.upload(req.files.userImage.path, (result) => {
    console.log(req.files);
    console.log(result);
    const id = req.params.userId;
    User.findByIdAndUpdate(id, {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userImage: result.url,
    }, { new: true })
      .then((updatedUser) => {
        if (!updatedUser) {
          return res.status(404).json({
            success: false,
            message: 'No user found',
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
            userImage: result.secure_url,
          },
        });
      })
      .catch(() => {
        res.status(500).json({
          success: false,
          message: 'Server error, please try again. Thanks',
        });
      });
  });
}

export function getSingleUser(req, res) {
  const id = req.params.userId;
  User.findById(id)
    .then(singleUser =>
      res.status(200).json({
        success: true,
        message: `This is the available information for ${singleUser.firstName}`,
        user: {
          _id: singleUser.id,
          firstName: singleUser.firstName,
          lastName: singleUser.lastName,
          username: singleUser.username,
          email: singleUser.email,
          userImage: singleUser.userImage,
        },
      }))
    .catch(() => res.status(500).json({
      success: false,
      message: 'This user does not exist.',
    }));
}

export function getAllUser(req, res) {
  User.find()
    .select('_id username userImage')
    .sort({ date: 'desc' })
    .then((newUsers) => {
      const response = {
        success: true,
        allUsers: newUsers.map(newUser => ({
          id: newUser.id,
          username: newUser.username,
          userImage: newUser.userImage,
        })),
      };
      res.status(200).json(response);
    })
    .catch(() => res.status(500).json({
      success: false,
      message: 'Server error, please try again. Thanks',
    }));
}

export default User;

