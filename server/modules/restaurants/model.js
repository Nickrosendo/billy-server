import mongoose, {
  Schema
} from 'mongoose';

const RestaurantSchema = new Schema({
  name: {
    type: String,
    required: true
  }
})

export default mongoose.model('Restaurant', RestaurantSchema);