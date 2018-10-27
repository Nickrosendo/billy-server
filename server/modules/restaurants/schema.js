import mongoose from 'mongoose';

import {
  PointSchema
} from '../shared-schemas/index.js';

const RestaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  logo: {
    type: String, 
    required: true
  },
  menu: [{
    name: String,
    price: Number,
    img: String,
    ingredients: [ String ],
    description: String
  }],
  location: {
    type: PointSchema,
    required: true
  }
})

export default mongoose.model('Restaurant', RestaurantSchema);