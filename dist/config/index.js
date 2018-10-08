"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _database = require("./database");

Object.keys(_database).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _database[key];
    }
  });
});

var _middlewares = require("./middlewares.js");

Object.keys(_middlewares).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _middlewares[key];
    }
  });
});