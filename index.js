const express = require('express');
const sequelize = require('./config/database');
const Vehicle = require('./models/Vehicle');
const vehicleRoutes = require('./routes/vehicleRoutes'); // Importer les routes
const app = express();
const port = 3000;

app.use(express.json());
sequelize.sync().then(() => console.log('Base de données synchronisée'));

// Utiliser les routes
app.use('/vehicules', vehicleRoutes); // Définir le préfixe pour les routes

// Démarrage du serveur
app.listen(port, () => {
    console.log(`Serveur lancé sur http://localhost:${port}`);
});