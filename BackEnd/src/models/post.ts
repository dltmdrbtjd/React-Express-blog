import mongoose from 'mongoose';

type IPost = {
  _id: string;
  title: string;
  content: string;
  category: string;
  tags: string[];
};

export const postSchema = new mongoose.Schema({
  title: { type: String },
  content: { type: String },
  category: { type: String },
  tags: { type: Array },
});

export default mongoose.model<IPost & mongoose.Document>('Post', postSchema);
