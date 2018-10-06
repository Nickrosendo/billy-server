import Addresses from './schema';

export const createAddresses = async (req, res) => {
  const {
    name,
    geometry
  } = req.body;
  const newAddresses = new Addresses({
    name,
    geometry
  });

  try {
    return res.status(201).json({
      addresses: await newAddresses.save()
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: true,
      message: 'Error on Addresses creation'
    });
  }
}

export const getAddresses = async (req, res) => {
  try {
    return res.status(200).json({
      addresses: await Addresses.findOne({})
    })
  } catch (error) {
    return res.status(error.status).json({
      error: true,
      message: 'Error on get addresses'
    });
  }
}

// export const pushAddress = async (req, res) => {
//   const { address } = req.body;

//   try{ 
//     return res.status(200).json({
//       restaurant: await newRestaurant.save()
//     });
//   }
// }