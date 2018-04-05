var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  methodOverride = require("method-override"),
  hotelModels = require('./modelos/hotelModelo')(app, mongoose),
  hotelCtrl = require('./controladores/hotelControlador'),
  mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

/*var hotelModels = require('./modelos/hotelModelo')(app, mongoose);
var hotelCtrl = require('./controladores/hotelControlador');*/


// API routes
var routes = require('./routes/hotelRoutes');
routes(app);


// Connection to DB
mongoose.connect('mongodb://localhost/dbsHotel2', function (err, res) {
  if (err) {
    console.log('ERROR: connecting to Database. ' + err);
  }
  app.listen(3000, function () {
    console.log("Node server running on http://localhost:3000");
    console.log('Connected to Database');
  });
});

