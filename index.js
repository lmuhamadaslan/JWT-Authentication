import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import sequelize from './config/Database.js';
import router from './routes/index.js';

dotenv.config();
const app = express();

app.use(cors({ credentials: true, origin: 'http://localhost:300' }));
app.use(cookieParser());
app.use(express.json());
app.use('/api', router);

app.listen('5000', () => {
  console.log('Server is running');
});
