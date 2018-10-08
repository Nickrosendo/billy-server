"use strict";

var _axios = _interopRequireDefault(require("axios"));

require("./__mocks__/allRestaurants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @jest-environment node
 */
describe('Get All Restaurants', function () {
  it('checks if all restaurants request is array', function () {
    return _axios.default.get("http://localhost:3000/api/restaurants").then(function (response) {
      expect(response.data.restaurants instanceof Array).toEqual(true);
    });
  });
});