import mongoose, {
  Schema
} from 'mongoose';

import {
  PointSchema
} from '../shared-schemas';

const RestaurantSchema = new Schema({
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