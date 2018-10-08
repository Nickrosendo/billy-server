"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PointSchema = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PointSchema = new _mongoose.default.Schema({
  type: {
    type: String,
    enum: ['Point'],
    required: true
  },
  coordinates: {
    type: [Number],
    required: true
  }
});
exports.PointSchema = PointSchema;