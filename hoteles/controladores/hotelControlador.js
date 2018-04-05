//File: controlador/hotelControlador.js
var mongoose = require('mongoose');
var Hotel = mongoose.model('Hotel');

//GET - Return all hoteles in the DB
exports.findAllTHotels = function (req, res) {
	console.log('GET /hoteles/findAllTHotels')
	Hotel.find(function (err, hoteles) {
		if (err) res.send(err);
		res.json(hoteles);
	});
};

//GET - Return a Hotel with specified ID
exports.findById = function (req, res) {
	console.log('GET /hoteles/' + JSON.stringify(req.params.id));
	Hotel.findById(req.params.id, function (err, hotel) {
		if (err) res.send(err);
		res.json(hotel);
	});
};

//POST - Insert a new Hotel in the DB
exports.addHotel = function (req, res) {
	console.log('POST /addHotel');
	//console.log(req.body);

	var hotel = new Hotel({
		name: req.body.name,
		stars: req.body.stars,
		price: req.body.price,
		images: req.body.images,
		//amenities: req.body.amenities
	});
	hotel.save(function (err, hotel) {
		if (err) res.send(err);
		res.json(hotel);
	});
};

//PUT - Update a register already exists
exports.updateHotel = function (req, res) {
	console.log('PUT /updateHotel');
	var id = req.params.id;
	Hotel.findOneAndUpdate({ _id: id }, req.body, { new: true }, function (err, hotel) {
		if (err) res.send(err);
		res.json(hotel);
	});
};

//DELETE - Delete a Hotel with specified ID
exports.deleteHotel = function (req, res) {
	console.log('DELETE /deleteHotel');
	var id = req.params.id;
	Hotel.remove({
		_id: id
	}, function (err, hotel) {
		if (err) res.send(err);
		res.json({ message: 'OK' });
	});
};