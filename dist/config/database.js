"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.database = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dbUser = {
  name: 'admin',
  password: 'admin0112358'
};
var dbUrl = "mongodb://".concat(dbUser.name, ":").concat(dbUser.password, "@ds239009.mlab.com:39009/billy-app");

var database = function database() {
  _mongoose.default.Promise = global.Promise;

  _mongoose.default.connect(dbUrl, {
    useNewUrlParser: true
  });

  _mongoose.default.connection.once('open', function () {
    return console.log("mongoDb running on ".concat(dbUrl));
  }).on('error', function (err) {
    return console.error(err);
  });
};

exports.database = database;