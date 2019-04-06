"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllNearRestaurants = exports.getAllRestaurants = exports.createRestaurant = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _schema = _interopRequireDefault(require("./schema"));

var createRestaurant =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(req, res) {
    var _req$body, name, logo, menu, location, newRestaurant;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, logo = _req$body.logo, menu = _req$body.menu, location = _req$body.location;
            newRestaurant = new _schema.default({
              name: name,
              logo: logo,
              menu: menu,
              location: location
            });
            _context.prev = 2;
            _context.t0 = res.status(201);
            _context.next = 6;
            return newRestaurant.save();

          case 6:
            _context.t1 = _context.sent;
            _context.t2 = {
              restaurant: _context.t1
            };
            return _context.abrupt("return", _context.t0.json.call(_context.t0, _context.t2));

          case 11:
            _context.prev = 11;
            _context.t3 = _context["catch"](2);
            console.log(_context.t3);
            return _context.abrupt("return", res.status(400).json({
              error: true,
              message: "Error on Restaurant creation"
            }));

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 11]]);
  }));

  return function createRestaurant(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createRestaurant = createRestaurant;

var getAllRestaurants =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(req, res) {
    var findedRestaurants;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _schema.default.find({});

          case 3:
            findedRestaurants = _context2.sent;
            return _context2.abrupt("return", res.status(200).json(findedRestaurants));

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", res.status(_context2.t0.status).json({
              error: true,
              message: "Error on get all restaurants"
            }));

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function getAllRestaurants(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getAllRestaurants = getAllRestaurants;

var getAllNearRestaurants =
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee3(req, res) {
    var cordinates, location, query;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            cordinates = req.body.cordinates;

            if (!cordinates) {
              _context3.next = 10;
              break;
            }

            location = {
              location: {
                $nearSphere: {
                  $geometry: {
                    type: "Point",
                    coordinates: [cordinates.longitute, cordinates.latitude]
                  },
                  $minDistance: 0,
                  $maxDistance: 1000
                }
              }
            };
            _context3.next = 6;
            return _schema.default.find(location);

          case 6:
            query = _context3.sent;
            return _context3.abrupt("return", res.status(200).json(query));

          case 10:
            throw new Error('Error: cordinates are missing!!');

          case 11:
            _context3.next = 16;
            break;

          case 13:
            _context3.prev = 13;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", res.status(_context3.t0.status || 400).json({
              error: true,
              message: _context3.t0.message || "Error on get all near restaurants"
            }));

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 13]]);
  }));

  return function getAllNearRestaurants(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getAllNearRestaurants = getAllNearRestaurants;