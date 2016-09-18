import mongoose, { Schema, Types } from 'mongoose';
const {
  ObjectId,
} = Types;
const ObjectIdSchema = Schema.ObjectId;

const SubscriberSchema = new mongoose.Schema({
  _id: {
    type: ObjectIdSchema,
    default: new ObjectId(),
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
