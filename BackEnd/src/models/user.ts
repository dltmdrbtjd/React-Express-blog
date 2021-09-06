import mongoose from 'mongoose';

type IUser = {
  name: string;
  userid: string;
  password: string;
}

export const userSchema = new mongoose.Schema({
  name: { type: String },
  userid: { type: String, maxlength: 20 },
  password: { type: String }
})

module.exports = mongoose.model<IUser & mongoose.Document>('User', userSchema);