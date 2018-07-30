import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import logger from 'morgan';
import routes from './v1/routes/main';

const app = express();
require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(cors());

mongoose.connect(process.env.MONGO)
  .then(() => {
  })
  .catch(() => {
  });
mongoose.Promise = global.Promise;

const port = process.env.PORT || 9900;

app.use(routes);
app.use(express.static(path.join(__dirname, '../client/build/')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.get('*', (req, res) => {
  res.status(400).json({
    message: 'You\'re welcome to Winkleaf API. Please use the documentation for proper routing.',
  });
});

app.listen(port)

export default app;

