"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.funcApp = void 0;

var _express = _interopRequireDefault(require("express"));

var functions = _interopRequireWildcard(require("firebase-functions"));

var _config = require("./config");

var _modules = require("./modules");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
(0, _config.database)();
(0, _config.middlewares)(app);
app.use('/api', [_modules.RestaurantRoutes]);
var funcApp = functions.https.onRequest(app);
exports.funcApp = funcApp;