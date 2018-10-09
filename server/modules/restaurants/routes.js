import express from 'express';
import * as RestaurantController from './controller.mjs';

const routes = new express.Router();

routes.get('/restaurants', RestaurantController.getAllRestaurants);
routes.post('/restaurants/create', RestaurantController.createRestaurant);

export default routes;