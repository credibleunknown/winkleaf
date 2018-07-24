import cloudinary from 'cloudinary';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Album from '../models/album';

dotenv.config();

cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});

export function createAlbum(req, res) {
  cloudinary.uploader.upload(req.files.photo.path, (photoResult) => {
    const photo = photoResult.url;
  cloudinary.uploader.upload(req.files.video.path, (videoResult) => {
    const video = videoResult.url;
    const album = new Album({
      _id: mongoose.Types.ObjectId(),
      name: req.body.name,
      description: req.body.description,
      photo,
      video,
    });
    // ensure that photo, video, name and description are filled out
    if (!album.name || !album.description || !album.photo || !album.video) {
      return res.status(400).json({ 
        success: false,
        message: 'Please check that all required fields are filled',
      });
    }
    return album
      .save()
      .then((newAlbum) => {
        res.status(201).json({
          success: true,
          message: 'New album created successfully',
          newAlbum,
        });
      })
      .catch(() => {
        return res.status(500).json({
          success: false,
          message: 'Server eror, please do try again',
        });
      });
  });
  });
}

export function getAllAlbum(req, res) {
  Album.find()
    .select('_id name description photo')
    .sort({ date: 'desc' })
    .then((allAbums) => {
      return res.status(200).json({
        success: true,
        message: 'A list of all albums',
        allAbums,
      });
    })
    .catch(() => {
      return res.status(500).json({
        success: false,
        message: 'Server error, please do try again',
      });
    });
}

export function getSingleAlbum(req, res) {
  const id = req.params.albumId;
  Album.findById(id)
    .then((singleAlbum) => {
      return res.status(200).json({
        success: true,
        message: 'More about an album',
        singleAlbum,
      });
    })
    .catch(() => {
      return res.status(500).json({
        success: false,
        message: 'Server failed',
      });
    });
}

export function deleteAlbum(req, res){
  const id = req.params.albumId;
  Album.findByIdAndRemove(id)
    .then(() => res.status(204).json({ success: true }))
    .catch(() => res.status(500).json({ success: false }));
}

export default Album;
