const Vehicle = require('../models/vehicle.model');

class VehicleService {
  async getAllVehicles() {
    return await Vehicle.find();
  }

  async getVehicleById(id) {
    return await Vehicle.findById(id);
  }

  async createVehicle(data) {
    const vehicle = new Vehicle(data);
    return await vehicle.save();
  }

  async updateVehicle(id, data) {
    return await Vehicle.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteVehicle(id) {
    return await Vehicle.findByIdAndDelete(id);
  }
}

module.exports = new VehicleService();