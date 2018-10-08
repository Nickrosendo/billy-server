"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllRestaurants = exports.createRestaurant = void 0;

var _schema = _interopRequireDefault(require("./schema.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createRestaurant = function createRestaurant(req, res) {
  var _req$body = req.body,
      name = _req$body.name,
      location = _req$body.location;
  var newRestaurant = new _schema.default({
    name: name,
    location: location
  });
  newRestaurant.save().then(function (restaurant) {
    return res.status(201).json({
      restaurant: restaurant
    });
  }).catch(function (error) {
    console.log(error);
    return res.status(400).json({
      error: true,
      message: 'Error on Restaurant creation'
    });
  });
};

exports.createRestaurant = createRestaurant;

var getAllRestaurants = function getAllRestaurants(req, res) {
  _schema.default.find({}).then(function (restaurants) {
    console.log(restaurants);
    return res.status(200).json({
      restaurants: restaurants
    });
  }).catch(function (error) {
    console.log(error);
    return res.status(400).json({
      error: true,
      message: 'Error on get all restaurants'
    });
  });
};

exports.getAllRestaurants = getAllRestaurants;