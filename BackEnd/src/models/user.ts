import mongoose from 'mongoose';

type IUser = {
  _id: string;
  name: string;
  userid: string;
  password: string;
  __v?: number;
}

export const userSchema = new mongoose.Schema({
  name: { type: String },
  userid: { type: String, maxlength: 20 },
  password: { type: String }
})

export default mongoose.model<IUser & mongoose.Document>('User', userSchema);