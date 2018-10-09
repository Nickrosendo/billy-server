"use strict";

var _express = _interopRequireDefault(require("express"));

var _config = require("./config");

var _modules = require("./modules");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
(0, _config.database)();
(0, _config.middlewares)(app);
app.use('/api', [_modules.RestaurantRoutes]);
var port = process.env.PORT || 4000;
app.listen(port, function (err) {
  if (err) {
    console.log(err);
  }

  console.log('App listening on port ' + port);
});