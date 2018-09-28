import { Router } from 'express';
import * as RestaurantController from './controller';

const routes = new Router();

routes.get('/restaurants', RestaurantController.getAllRestaurants);
routes.post('/restaurants/create', RestaurantController.createRestaurant);

export default routes;