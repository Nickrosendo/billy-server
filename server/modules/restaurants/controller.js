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
    console.log(error);
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
    const { cordinates } = req.body;
    if(cordinates) {
      const location = {
        location: {
          $nearSphere: {
             $geometry: {
                type : "Point",
                coordinates: [cordinates.longitute, cordinates.latitude]
             },
             $minDistance: 0,
             $maxDistance: 1000
          }
       }
      };
      const query = await Restaurant.find(location)
      return res.status(200).json(query);
    } else {
      throw new Error('Error: cordinates are missing!!');
    }
  } catch (error) {
    return res.status(error.status || 400).json({
      error: true,
      message: error.message || "Error on get all near restaurants"
    });
  }
};
