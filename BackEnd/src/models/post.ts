import mongoose from 'mongoose';

type IPost = {
  _id: string;
  title: string;
  content: string;
};

export const postSchema = new mongoose.Schema({
  title: { type: String },
  content: { type: String },
});

export default mongoose.model<IPost & mongoose.Document>('Post', postSchema);
