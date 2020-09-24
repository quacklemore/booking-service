const mongoose = require('mongoose');
var db = require('./index.js');
var faker = require('faker');

var reservations = require('../../bookingSampleData/sampleReservations.js');

for (var i = 0; i < reservations.length; i++) {
  db.save(reservations[i])
    .then((result) => {
      mongoose.connection.close();
    });
}


