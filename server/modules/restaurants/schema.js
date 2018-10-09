import mongoose from 'mongoose';

import {
  PointSchema
} from '../shared-schemas/index.mjs';

const RestaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: PointSchema,
    required: true
  }
})

export default mongoose.model('Restaurant', RestaurantSchema);