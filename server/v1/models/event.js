import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const categoryArray = ['fashion', 'pageant', 'religion', 'concert', 'wedding', 'launching', 'campaign', 'awards', 'politics', 'party', 'fundraiser', 'thanksgiving', 'conference'];

const eventSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: [true, 'Please enter the name of event'],
  },
  description: {
    type: String,
    required: [true, 'Please enter the description of event'],
  },
  startDate: Date,
  endDate: Date,
  category: {
    type: String,
    enum: categoryArray,
  },
  type: {
    type: String,
    enum: ['online', 'onsite'],
  },
  location: {
    country: String,
    state: String,
    city: String,
    street: String,
    facilityName: String,
  },
  access: {
    type: String,
    enum: ['open', 'invite'],
  },
  ticket: String,
  ticketurl: String,
  eventurl: String,
  coverImage: String,
  prePhoto: String,
  additionalInfo: String,
});

export default mongoose.model('Event', eventSchema);
