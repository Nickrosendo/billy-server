import mongoose from 'mongoose';

export const MenuSchema = new mongoose.Schema({
	name: String,
	price: mongoose.Decimal128,
	img: String,
	ingredients: [String],
	description: String
});

MenuSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.price = ret.price.toString();
    return ret;
  },
});