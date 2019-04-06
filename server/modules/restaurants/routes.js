import express from 'express';
import * as RestaurantController from './controller.js';

const routes = new express.Router();

routes.get('/restaurants', RestaurantController.getAllRestaurants);
routes.post('/restaurants', RestaurantController.getAllNearRestaurants);
routes.post('/restaurants/create', RestaurantController.createRestaurant);

export default routes;