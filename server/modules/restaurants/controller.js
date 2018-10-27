import Restaurant from './schema';

export const createRestaurant = async (req, res) => {

  const {
    name,
    logo,
    menu,
    location
  } = req.body;
  const newRestaurant = new Restaurant({
    name,
    logo,
    menu,
    location
  });

  try {
    return res.status(201).json({
      restaurant: await newRestaurant.save()
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: true,
      message: 'Error on Restaurant creation'
    });
  }
}

export const getAllRestaurants = async (req, res) => {
  try {
    return res.status(200).json(await Restaurant.find({}))
  } catch (error) {
    return res.status(error.status).json({
      error: true,
      message: 'Error on get all restaurants'
    });
  }
}

export const getAllNearRestaurants = async (req, res) => {
  try {
    return res.status(200).json({
      restaurants: await Restaurant.find({})
    })
  } catch (error) {
    return res.status(error.status).json({
      error: true,
      message: 'Error on get all near restaurants'
    });
  }
}