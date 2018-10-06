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
  // menu: {
  //   type: Array,
  //   required: true,
  //   menuItem: {
  //     type: Object,
  //     required: true,
  //     name: {
  //       type: String,
  //       required: true
  //     },
  //     price: {
  //       type: Number,
  //       required: true
  //     },
  //     ingredients: {
  //       type: Array,
  //     }
  //   }
  // }
})

export default mongoose.model('Restaurant', RestaurantSchema);