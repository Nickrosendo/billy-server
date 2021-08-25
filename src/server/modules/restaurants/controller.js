import Restaurant from "./schema";

export const createRestaurant = async (req, res) => {
  const { name, logo, menu, location } = req.body;
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
    return res.status(400).json({
      error: true,
      message: "Error on Restaurant creation"
    });
  }
};

export const getAllRestaurants = async (req, res) => {
  try {
    const findedRestaurants = await Restaurant.find({});
    return res.status(200).json(findedRestaurants);
  } catch (error) {
    return res.status(error.status).json({
      error: true,
      message: "Error on get all restaurants"
    });
  }
};

export const getAllNearRestaurants = async (req, res) => {
  try {
    const { coordinates } = req.body;
    if(coordinates) {
      const location = {
        location: {
          $nearSphere: {
             $geometry: {
                type : "Point",
                coordinates
             },
             $minDistance: 0,
             $maxDistance: 50000
          }
       }
      };
      const query = await Restaurant.find(location)
      return res.status(200).json(query);
    } else {
      throw new Error('Error: coordinates are missing!!');
    }
  } catch (error) {
    return res.status(error.status || 400).json({
      error: true,
      message: error.message || "Error on get all near restaurants"
    });
  }
};
