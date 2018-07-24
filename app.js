import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import logger from 'morgan';
import mainRoutes from './server/v1/routes/main';
import routes from './server/v1/routes/index';

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

const port = process.env.PORT || 9876;

routes(app);
app.use('/api/v1/', mainRoutes);

app.get('*', (req, res) => {
  res.status(400).json({
    message: 'This is Winkleaf API. Please see proper routes in the documentation.',
  });
});

app.listen(port)

export default app;

