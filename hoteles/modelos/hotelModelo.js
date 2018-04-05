var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var hotel = new Schema({
  _id: { type: String, Required: 'Required.' },
  name: { type: String, Required: 'Required.' },
  stars: { type: String, Required: 'Required.' },
  price: { type: String, Required: 'Required.' },
  images: { type: String, Required: 'Required.' },
  amenities: { type: String, enum: ['Drama', 'Fantasy', 'Sci-Fi', 'Thriller', 'Comedy'], Required: 'Required.' }
  
});

module.exports = mongoose.model('Hotel', hotel);