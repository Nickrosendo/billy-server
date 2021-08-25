import mongoose from 'mongoose';

import { MenuSchema } from './menu-schema';
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
  payToConfirmOrder: {
    type: Boolean,
    required: false
  },
  menu: [MenuSchema],
  location: {
    type: PointSchema,
    required: true
  }
})

export default mongoose.model('Restaurant', RestaurantSchema);