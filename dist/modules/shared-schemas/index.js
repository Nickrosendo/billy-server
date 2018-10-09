"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pointSchema = require("./point-schema");

Object.keys(_pointSchema).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _pointSchema[key];
    }
  });
});

var _polygonSchema = require("./polygon-schema");

Object.keys(_polygonSchema).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _polygonSchema[key];
    }
  });
});