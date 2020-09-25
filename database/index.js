const mongoose = require('mongoose');
var dbUrl = 'mongodb://localhost/booking'
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

let tripSchema = mongoose.Schema({
  locationName: String,
  locationId: {type: Number, required: true},
  checkIn: {type: Date, required: true},
  checkOut: {type: Date, required: true},
  adults: Number,
  children: Number,
  rooms: {type: Number, required: true}
});

let Trip = mongoose.model('Trip', tripSchema);

var save = (trip) => {
  return new Promise((resolve, reject) => {
    Trip.create(trip, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

var getReservationsForLocation = (locationId) => {
  return new Promise((resolve, reject) => {
    Trip.find({
      locationId: locationId
    }, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    })
  })
}

module.exports.save = save;