const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Vehicle = sequelize.define('Vehicle', {
    registrationNumber: { type: DataTypes.STRING, allowNull: false },
    make: { type: DataTypes.STRING, allowNull: false },
    model: { type: DataTypes.STRING, allowNull: false },
    year: { type: DataTypes.INTEGER, allowNull: false },
    rentalPrice: { type: DataTypes.FLOAT, allowNull: false }
});

module.exports = Vehicle;