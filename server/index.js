import express from 'express';
import * as functions from 'firebase-functions';


import { database, middlewares } from './config';
import { RestaurantRoutes } from './modules';

const app = express();

database();
middlewares(app);

app.use('/api', [RestaurantRoutes]);

// const port = process.env.PORT || 4000;

// app.listen(port, err => {
//   if (err) {
//     console.log(err);
//   }
//   console.log('Node running on port ' + port);
// });

export const funcApp = functions.https.onRequest(app);