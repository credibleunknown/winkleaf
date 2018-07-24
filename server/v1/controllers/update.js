import cloudinary from 'cloudinary';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Update from '../models/update';

dotenv.config();

cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});


export function createUpdate(req, res) {
  cloudinary.uploader.upload(req.files.coverImage.path, (coverImageResult) => {
    const coverImage = coverImageResult.url;
  cloudinary.uploader.upload(req.files.photos.path, (photosResult) => {
    const photo = photosResult.url;
    const update = new Update({
      _id: new mongoose.Types.ObjectId(),
      description: req.body.description,
      coverImage,
      photo,
    });

    if (!update.description || !update.photo) {
      return res.status(400).json({
        success: false,
        message: 'Please add an update and photo',
      });
    }
    return update
    .save()
      .then(newUpdate => res.status(201).json({
        success: true,
        message: 'Your event has updated successfully',
        newUpdate,
      }))
      .catch(() => res.status(500).json({
        success: false,
        message: 'Server error, please try again. Thanks',
      }));
    });
  });
}

export function getSingleUpdate(req, res) {
  const id = req.params.updateId;
  Update.findById(id)
    .select('description photo')
    .then(singleUpdate =>
      res.status(200).json({
        success: true,
        message: `This is the available information for ${newUpdate.name}`,
        singleUpdate,
      }))
    .catch(() => res.status(500).json({
      success: false,
      message: 'Server error, please try again. Thanks',
    }));
}

export function getAllUpdate(req, res) {
  Update.find()
    .select('description photo')
    .exec()
    .then((allUpdate) => {
      res.status(200).json({
        success: true,
        message: 'A list of all updates for this event',
        allUpdate,
      });
    })
    .catch(() => res.status(500).json({
      success: false,
      message: 'Server error, please try again. Thanks',
    }));
}

export function deleteUpdate(req, res) {
  const id = req.params.updateId;
  Update.findByIdAndRemove(id)
    .exec()
    .then(() => res.status(204).json({
      success: true,
      message: 'Your event is deleted',
    }))
    .catch(() => res.status(500).json({
      success: false,
      message: 'Server error, please try again. Thanks',
    }));
}

export default Update;
