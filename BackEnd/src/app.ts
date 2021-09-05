import mongoose from 'mongoose';
import 'dotenv/config';

const { PORT, MONGO_URI } = process.env;

mongoose.connect(`${MONGO_URI}`, { useNewUrlParser: true });