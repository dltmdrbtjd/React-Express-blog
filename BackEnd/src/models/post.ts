import mongoose from 'mongoose';

type IPost = {
  _id: string;
  title: string;
  content: string;
  category: string;
  tags: string[];
  time: Date;
};

const postSchema = new mongoose.Schema({
  title: { type: String },
  content: { type: String },
  category: { type: String },
  tags: { type: Array },
  time: { type: Date },
});

export default mongoose.model<IPost & mongoose.Document>('Post', postSchema);
