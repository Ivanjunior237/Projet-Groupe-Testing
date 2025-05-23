const express = require('express');
const app = express();
const port = 3000;

// Middleware pour lire le corps des requêtes JSON
app.use(express.json());

// Données simulées (base de données temporaire en mémoire)
let vehicules = [
  { id: 1, marque: 'Toyota', modele: 'Corolla' },
  { id: 2, marque: 'Honda', modele: 'Civic' }
];

// GET /vehicules - Liste tous les véhicules
app.get('/vehicules', (req, res) => {
  res.json(vehicules);
});

// GET /vehicules/:id - Récupère un véhicule par ID
app.get('/vehicules/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const vehicule = vehicules.find(v => v.id === id);
  vehicule ? res.json(vehicule) : res.status(404).json({ message: "Véhicule non trouvé" });
});

// POST /vehicules - Ajoute un véhicule
app.post('/vehicules', (req, res) => {
  const { marque, modele } = req.body;
  const nouveauVehicule = {
    id: vehicules.length + 1,
    marque,
    modele
  };
  vehicules.push(nouveauVehicule);
  res.status(201).json(nouveauVehicule);
});

// PUT /vehicules/:id - Met à jour un véhicule
app.put('/vehicules/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { marque, modele } = req.body;
  const vehicule = vehicules.find(v => v.id === id);
  if (vehicule) {
    vehicule.marque = marque;
    vehicule.modele = modele;
    res.json(vehicule);
  } else {
    res.status(404).json({ message: "Véhicule non trouvé" });
  }
});

// DELETE /vehicules/:id - Supprime un véhicule
app.delete('/vehicules/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = vehicules.findIndex(v => v.id === id);
  if (index !== -1) {
    vehicules.splice(index, 1);
    res.json({ message: "Véhicule supprimé" });
  } else {
    res.status(404).json({ message: "Véhicule non trouvé" });
  }
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});
