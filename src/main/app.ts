import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import { errors } from 'celebrate';
import { connection } from './config/typeorm';
import setupRoutes from './config/routes'

const app = express();

app.use(cors());
app.use(express.json());

connection();
setupRoutes(app);

app.use(errors());

export {
  app,
}