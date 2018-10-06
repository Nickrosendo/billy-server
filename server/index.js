import express from 'express';

import {
  database,
  middlewares
} from './config';
import {
  RestaurantRoutes,
  AddressesRoutes
} from './modules';

const app = express();
const PORT = process.env.PORT || 3000;

database();
middlewares(app);

app.use('/api', [RestaurantRoutes, AddressesRoutes]);

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Node running on port ${PORT}`);
  }
})