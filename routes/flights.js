var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');


// GET /movies/new
router.get('/new', flightsCtrl.new);
// POST /movies
router.post('/', flightsCtrl.create);

module.exports = router;
