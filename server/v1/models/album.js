import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const albumSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  photo: String,
  video: String,
});

export default mongoose.model('Album', albumSchema);
