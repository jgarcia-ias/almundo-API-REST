'use strict';

module.exports = function (app) {
    var hotel = require('../controladores/hotelControlador');
    app.route('/hoteles')
        .get(hotel.findAllTHotels)
        .post(hotel.addHotel);
    app.route('/hoteles/:id')
        .get(hotel.findById)
        .put(hotel.updateHotel)
        .delete(hotel.deleteHotel);
};