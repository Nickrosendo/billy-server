import express from 'express';
import * as functions from 'firebase-functions'

import {
  database,
  middlewares
} from './config';
import {
  RestaurantRoutes
} from './modules';

const app = express();

database();
middlewares(app);

app.use('/api', [RestaurantRoutes]);

export const funcApp = functions.https.onRequest(app);
