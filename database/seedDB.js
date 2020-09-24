const mongoose = require('mongoose');
var db = require('./index.js');
var faker = require('faker');

var reservations = require('../../bookingSampleData/sampleReservations.js');

var trips = []
for (var i = 0; i <= 100; i++ ) {
  var numberOfResevervations = Math.floor(Math.random() * 25);
  for (var j = 0; j < numberOfResevervations; j++) {
    var trip = {};
    trip.locationId = i;
    trip.locationName = faker.lorem.words();
    trip.checkIn = faker.date.soon(90);
    trip.checkOut = faker.date.future(0.12, trip.checkIn);
    trip.adults = Math.ceil(Math.random() * 20);
    trip.children = Math.floor(Math.random() * 10);
    trip.rooms = Math.ceil(Math.random() * trip.adults)
    trips.push(db.save(trip))
  }
}

Promise.all(trips)
.then(result => {
  mongoose.connection.close()
})
