import Restaurant from './model';

export const createRestaurant = async (req, res) => {
  console.log(req.body);
  const {
    name,
    location
  } = req.body;
  const newRestaurant = new Restaurant({
    name,
    location
  });

  try {
    return res.status(201).json({
      restaurant: await newRestaurant.save()
    });
  } catch (error) {
    return res.status(400).json({
      error: true,
      message: 'Error on Restaurant creation'
    });
  }
}

export const getAllRestaurants = async (req, res) => {
  try {
    return res.status(200).json({
      restaurants: await Restaurant.find({})
    })
  } catch (error) {
    return res.status(error.status).json({
      error: true,
      message: 'Error on get all restaurants'
    });
  }
}