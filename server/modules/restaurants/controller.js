import Restaurant from './model';

export const createRestaurant = async (req, res) => {
  const {name} = req.body;
  const newRestaurant = new Restaurant({
    name
  });

  try {
    return res.status(201).json({
      restaurant: await newRestaurant.save()
    });
  } catch (error) {
    console.error(error)
    return res.status(error).json({
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