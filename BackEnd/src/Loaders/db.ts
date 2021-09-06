import mongoose, { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const { MONGO_URI } = process.env;

const connectDB = async() => {
  try {
    await mongoose.connect(String(MONGO_URI), { useNewUrlParser: true, useUnifiedTopology: true} as ConnectOptions)
    console.log('mongodb connect on')
  } catch (err) {
    console.error(err);
  }
}

export default connectDB;
