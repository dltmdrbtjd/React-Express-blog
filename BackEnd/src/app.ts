import express from 'express';
import dotenv from 'dotenv';
import connectDB from './Loaders/db';

dotenv.config();

connectDB();

const app = express();

// local 포트번호
const { PORT } = process.env;

// body-parser 
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

// routers
app.use('/api/register', require('./routes/users'));

app.listen(PORT, () => console.log(`Server on port ${PORT}`));