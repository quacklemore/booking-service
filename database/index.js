const mongoose = require('mongoose');
var dbUrl = 'mongodb://localhost/booking'
mongoose.connect(dbUrl);

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
    Trip.create(trip, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve('success');
      }
    });
  });
}

var trip = {
  id: 2,
  locationName: 'Fiesta Americana Condesa Cancun All Inclusive',
  locationId: 1,
  checkIn: '2020-10-15',
  checkOut: '2020-10-22',
  adults: 2,
  children: 3,
  rooms: 2
}

//module.exports.save = save;
save(trip);