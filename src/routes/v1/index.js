const express = require('express');
const cityController = require('../../controllers/cityController');
const airportController = require('../../controllers/airportController');
const flightController = require('../../controllers/flightController');

const router = express.Router();

router.post('/city' , cityController.create);
router.get('/city/:id' , cityController.get);
router.patch('/city/:id' , cityController.update);
router.delete('/city/:id' , cityController.destroy);
router.get('/city' , cityController.getAll);
router.get('/city-airport/:id' , cityController.getAirports);
router.post('/cities' , cityController.createCities);

router.post('/airport' , airportController.create);
router.get('/airport/:id' , airportController.get);
router.patch('/airport/:id' , airportController.update);
router.delete('/airport/:id' , airportController.destroy);
router.get('/airport' , airportController.getAll);

router.post('/flight' , flightController.create);
router.get('/flight' , flightController.get);
router.get('/flights' , flightController.getAll);

module.exports = router;