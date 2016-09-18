import mongoose from 'mongoose';
import shortid from 'shortid';

const SubscriberSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: () => shortid.generate(),
  },
  email: {
    type: String,
    required: true,
    index: { unique: true },
  },
  name: String,
  subscribed: {
    type: Boolean,
    default: true,
  },
});

export default mongoose.model('Subscriber', SubscriberSchema);
