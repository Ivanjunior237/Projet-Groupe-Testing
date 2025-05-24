const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('vehicle_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306 // Port par défaut de MySQL dans XAMPP
});

module.exports = sequelize;