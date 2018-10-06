import mongoose, {
  Schema
} from 'mongoose';

import {
  PolygonSchema
} from '../shared-schemas';

const AddressesSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  geometry: {
    type: PolygonSchema,
    required: true
  }
})

export default mongoose.model('Addresses', AddressesSchema);