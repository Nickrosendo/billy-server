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
    var _req$body, name, location, newRestaurant;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, location = _req$body.location;
            newRestaurant = new _schema.default({
              name: name,
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
              message: 'Error on Restaurant creation'
            }));

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[2, 11]]);
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
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.t0 = res.status(200);
            _context2.next = 4;
            return _schema.default.find({});

          case 4:
            _context2.t1 = _context2.sent;
            return _context2.abrupt("return", _context2.t0.json.call(_context2.t0, _context2.t1));

          case 8:
            _context2.prev = 8;
            _context2.t2 = _context2["catch"](0);
            return _context2.abrupt("return", res.status(_context2.t2.status).json({
              error: true,
              message: 'Error on get all restaurants'
            }));

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[0, 8]]);
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
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.t0 = res.status(200);
            _context3.next = 4;
            return _schema.default.find({});

          case 4:
            _context3.t1 = _context3.sent;
            _context3.t2 = {
              restaurants: _context3.t1
            };
            return _context3.abrupt("return", _context3.t0.json.call(_context3.t0, _context3.t2));

          case 9:
            _context3.prev = 9;
            _context3.t3 = _context3["catch"](0);
            return _context3.abrupt("return", res.status(_context3.t3.status).json({
              error: true,
              message: 'Error on get all near restaurants'
            }));

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this, [[0, 9]]);
  }));

  return function getAllNearRestaurants(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getAllNearRestaurants = getAllNearRestaurants;