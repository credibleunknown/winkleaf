import cloudinary from 'cloudinary';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Event from '../models/event';

dotenv.config();

cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});

export function createEvent(req, res) {
  cloudinary.uploader.upload(req.files.coverImage.path, (result) => {
    const coverImage = result.url; 
  cloudinary.uploader.upload(req.files.prePhoto.path, (photoResult) => {
    const prePhoto = photoResult.url;
    const event = new Event({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      description: req.body.description,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      category: req.body.category,
      type: req.body.type,
      location: req.body.location,
      access: req.body.access,
      eventurl: req.body.eventurl,
      additionalInfo: req.body.additionalInfo,
      coverImage,
      prePhoto,
    });

    // test to ensure name is filled
    if (!event.name || !event.description || !event.coverImage || !event.prePhoto) {
      return res.status(400).json({
        message: 'You can\'t create an event without an event name, description, and coverImage',
      });
    }
    return event
      .save()
      .then(newEvent => {
        res.status(201).json({
        success: true,
        message: 'Event created successfully',
        createdEvent: {
          _id: newEvent.id,
          name: newEvent.name,
          description: newEvent.description,
          category: newEvent.category,
          type: newEvent.type,
          location: newEvent.location,
          access: newEvent.access,
          ticket: newEvent.ticket,
          eventurl: newEvent.eventurl,
          coverImage: newEvent.coverImage,
          prePhoto: newEvent.prePhoto,
          additionalInfo: newEvent.additionalInfo,
        },
        });
      })
      .catch(() => res.status(500).json({
        success: false,
        message: 'Server error, please try again. Thanks',
      }));
  });
  });
}

export function getSingleEvent(req, res) {
  const id = req.params.eventId;
  Event.findById(id)
    .select('name description category type location access ticket eventurl coverImage prePhoto additionalInfo')
    .then(singleEvent =>
      res.status(200).json({
        success: true,
        message: `This is the available information for ${singleEvent.name}`,
        singleEvent,
      }))
    .catch(() => res.status(500).json({
      success: false,
      message: 'This event does not exist.',
    }));
}

export function getAllEvent(req, res) {
  Event.find()
    .select('name description category location coverImage')
    .sort({ date: 'asc' })
    .exec()
    .then((allEvents) => {
      res.status(200).json({
        success: true,
        message: 'A list of all events',
        allEvents,
      });
    })
    .catch(() => res.status(500).json({
      success: false,
      message: 'Server error, please try again. Thanks',
    }));
}

export function deleteEvent(req, res) {
  const id = req.params.eventId;
  Event.findByIdAndRemove(id)
    .select('_id')
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

export default Event;
 