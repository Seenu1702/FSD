import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import AppRouter from './src/routes/index.js';
dotenv.config();
const PORT = process.env.PORT;
const app = express();
app.use(express.json())

app.use(cors());

app.use('/', AppRouter);

app.listen(PORT, () => console.log(`Server Running at ${PORT}`))