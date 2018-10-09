"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _nock = _interopRequireDefault(require("nock"));

(0, _nock.default)("http://localhost:".concat(process.env.PORT || 3000)).get('/api/restaurants').reply(200, {
  restaurants: [{
    "_id": "5baf921c400a3d1768db2921",
    "name": "MockDonalds",
    "location": {
      "coordinates": [-23.5080564, -46.9347135],
      "_id": "5baf921c400a3d1768db2930",
      "type": "Point"
    },
    "__v": 0
  }, {
    "_id": "5baf921c400a3d1768db292f",
    "name": "MockDonalds",
    "location": {
      "coordinates": [-23.5080564, -46.9347135],
      "_id": "5baf921c400a3d1768db2930",
      "type": "Point"
    },
    "__v": 0
  }]
});