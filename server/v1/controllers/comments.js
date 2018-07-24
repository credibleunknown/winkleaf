import mongoose from 'mongoose';
import Comment from '../models/comments';

export function getAllComment(req, res) {
  Comment.find()
    .sort({ date: 'desc' })
    .then((allComments) => {
      res.status(200).json({
        success: true,
        message: 'A list of all comments',
        allComments,
      });
    })
    .catch(() => res.status(500).json({ success: false, message: 'Server error' }));
}

export function createComment(req, res) {
  const comment = new Comment({
    _id: new mongoose.Types.ObjectId(),
    comment: req.body.comment,
  });
  return comment
    .save()
    .then((newComment) => {
      res.status(201).json({
        success: true,
        message: 'comment created',
        newComment,
      });
    })
    .catch(() => res.status(500).json({ success: false,
        message: 'Server error, please try again. Thanks',
      }));
}

export default Comment;
