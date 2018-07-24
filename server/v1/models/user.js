import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  firstName: {
    type: String,
    required: false,
    trim: [true, 'first name must have no spaces in between'],
  },
  lastName: {
    type: String,
    required: false,
    trim: [true, 'last name must have no spaces in between'],
  },
  username: {
    type: String,
    required: [true, 'Please enter your username'],
    trim: [true, 'username must have no space between'],
    unique: true,
    lowercase: [true, 'All username are lowercased'],
  },
  phone: {
    type: Number,
    required: [true, 'Please enter your phone number'],
    trim: true,
    unique: true,
    validate: [/^\d{10}$/, 'This is not a valid phone number'],
  },
  email: {
    type: String,
    required: [true, 'Please enter your email'],
    lowerCase: true,
    trim: true,
    unique: true,
    match: [/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/, 'This email is invalid'],
  },
  password: {
    type: String,
    required: true,
  },
  userImage: {
    type: String,
    required: false,
  },
});

export default mongoose.model('User', userSchema);
