"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.funcApp = void 0;

var _express = _interopRequireDefault(require("express"));

var _config = require("./config");

var _modules = require("./modules");

// import * as functions from 'firebase-functions';
var app = (0, _express.default)();
(0, _config.database)();
(0, _config.middlewares)(app);
app.use('/api', [_modules.RestaurantRoutes]);
var port = process.env.PORT || 4000; // app.listen(port, err => {
//   if (err) {
//     console.log(err);
//   }
//   console.log('Node running on port ' + port);
// });

var funcApp = functions.https.onRequest(app);
exports.funcApp = funcApp;