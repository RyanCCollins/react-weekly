import mongoose from 'mongoose';

const TagSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
});

const RecommendationSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  name: {
    type: String,
  },
  username: {
    type: String,
  },
});

const PostSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
  },
  image: {
    type: String,
  },
  snippet: {
    type: String,
  },
  uniqueSlug: {
    type: String,
  },
  tags: [TagSchema],
  recommendations: [RecommendationSchema],
});

export default mongoose.model('Post', PostSchema);
