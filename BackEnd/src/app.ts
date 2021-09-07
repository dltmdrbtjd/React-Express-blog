import express from 'express';
import dotenv from 'dotenv';
import http from 'http';
import cors from 'cors';
import connectDB from './Loaders/db';
import router from './routes';

dotenv.config();

connectDB();

const app = express();
const server = http.createServer(app);

// local 포트번호
const { PORT } = process.env;

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

// routers
app.use('/api', router);

server.listen(PORT, () => console.log(`Server on port ${PORT}`));