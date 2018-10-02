/**
 * @jest-environment node
 */

import axios from 'axios';

import './mocks/allRestaurants';

describe('Get All Restaurants', () => {

  it('checks if all restaurants request is array', () => {
    return axios.get(`http://localhost:3000/api/restaurants`)
      .then(response => {
        expect(response.data.restaurants instanceof Array).toEqual(true);
      })
  })
});