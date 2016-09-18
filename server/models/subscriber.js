import mongoose from 'mongoose';

const SubscriberSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
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
