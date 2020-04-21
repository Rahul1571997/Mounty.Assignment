'use strict';

import handler from '../handlers/hotelapp';

module.exports = (router, preffix) => {

  router.get(preffix, (req, res) => {
    handler.getHotels(req, res)
  });

  router.get(`${preffix}/:id`, (req, res) => {
    handler.getHotelById(req, res);
  });

};
