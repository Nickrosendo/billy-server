"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuSchema = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var MenuSchema = new _mongoose.default.Schema({
  name: String,
  price: _mongoose.default.Decimal128,
  img: String,
  ingredients: [String],
  description: String
});
exports.MenuSchema = MenuSchema;
MenuSchema.set('toJSON', {
  transform: function transform(doc, ret) {
    ret.price = ret.price.toString();
    return ret;
  }
});