"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PolygonSchema = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var PolygonSchema = new _mongoose.default.Schema({
  type: {
    type: String,
    enum: ['Polygon'],
    required: true
  },
  coordinates: {
    type: [[[Number]]],
    required: true
  }
});
exports.PolygonSchema = PolygonSchema;