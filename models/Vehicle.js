const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    registrationNumber: { type: String, required: true },
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    rentalPrice: { type: Number, required: true }
});

module.exports = mongoose.model('Vehicle', vehicleSchema);