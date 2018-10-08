import Restaurant from './schema.js';

export const createRestaurant = (req, res) => {

  const {
    name,
    location
  } = req.body;
  const newRestaurant = new Restaurant({
    name,
    location
  });

  newRestaurant.save()
    .then((restaurant) => {
      return res.status(201).json({
        restaurant: restaurant
      });
    })
    .catch(error => {
      console.log(error);
      return res.status(400).json({
        error: true,
        message: 'Error on Restaurant creation'
      });

    });
}

export const getAllRestaurants = (req, res) => {
  Restaurant.find({})
  .then((restaurants) => {
    console.log(restaurants);
    return res.status(200).json({
      restaurants: restaurants
    });
  })
  .catch(error => {
    console.log(error);
    return res.status(400).json({
      error: true,
      message: 'Error on get all restaurants'
    });
  });
}