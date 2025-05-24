const express = require('express');
const Vehicle = require('../models/Vehicle'); // Importer le modèle Vehicle
const router = express.Router();

// GET /vehicules - Liste tous les véhicules
router.get('/', async (req, res) => {
    try {
        const vehicules = await Vehicle.findAll();
        res.json(vehicules);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des véhicules" });
    }
});

// GET /vehicules/:id - Récupère un véhicule par ID
router.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const vehicule = await Vehicle.findByPk(id);
        vehicule ? res.json(vehicule) : res.status(404).json({ message: "Véhicule non trouvé" });
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération du véhicule" });
    }
});

// POST /vehicules - Ajoute un véhicule
router.post('/', async (req, res) => {
    const { registrationNumber, make, model, year, rentalPrice } = req.body;
    try {
        const nouveauVehicule = await Vehicle.create({ registrationNumber, make, model, year, rentalPrice });
        res.status(201).json(nouveauVehicule);
    } catch (error) {
        res.status(400).json({ message: "Erreur lors de l'ajout du véhicule" });
    }
});

// PUT /vehicules/:id - Met à jour un véhicule
router.put('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const { make, model, year, rentalPrice } = req.body;
    try {
        const vehicule = await Vehicle.findByPk(id);
        if (vehicule) {
            vehicule.make = make;
            vehicule.model = model;
            vehicule.year = year;
            vehicule.rentalPrice = rentalPrice;
            await vehicule.save();
            res.json(vehicule);
        } else {
            res.status(404).json({ message: "Véhicule non trouvé" });
        }
    } catch (error) {
        res.status(400).json({ message: "Erreur lors de la mise à jour du véhicule" });
    }
});

// DELETE /vehicules/:id - Supprime un véhicule
router.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const vehicule = await Vehicle.findByPk(id);
        if (vehicule) {
            await vehicule.destroy();
            res.json({ message: "Véhicule supprimé" });
        } else {
            res.status(404).json({ message: "Véhicule non trouvé" });
        }
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la suppression du véhicule" });
    }
});

module.exports = router; // Exporter le routeur