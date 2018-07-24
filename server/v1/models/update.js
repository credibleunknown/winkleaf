import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const updateSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  description: {
    type: String,
    required: [true, 'Please enter an update'],
  },
  coverImage: String,
  photo: String,
});

export default mongoose.model('Update', updateSchema);
