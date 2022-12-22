import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';

// routes
import { router as authRouter } from './apps/auth/auth.controller';
import { router as channelingRouter } from './apps/channeling/channeling.controller';
import { router as bookingRouter } from './apps/booking/booking.controller';
import { router as employeeRouter } from './apps/employee/employee.controller';

import { ConnectRedis } from './apps/auth/helpers/tokens';

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/auth', authRouter);
app.use('/channeling', channelingRouter);
app.use('/employee', employeeRouter);
app.use('/booking', bookingRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = 5000;
const main = async () => {
  await mongoose.connect('mongodb://localhost:27017/', {
    auth: {
      username: 'root',
      password: 'example',
    },
    authSource: 'admin',
    dbName: 'hospe',
  });
  console.log('Connected to MongoDB');

  await ConnectRedis();
  console.log('Connected to Redis');

  await app.listen(PORT);
  console.log(`App listening on port ${PORT}!!`);
};

main().catch((err) => {
  console.log('Failed to start app: ', err);
});
