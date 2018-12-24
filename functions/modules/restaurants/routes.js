"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var RestaurantController = _interopRequireWildcard(require("./controller.js"));

var routes = new _express.default.Router();
routes.get('/restaurants', RestaurantController.getAllRestaurants);
routes.post('/restaurants/create', RestaurantController.createRestaurant);
var _default = routes;
exports.default = _default;