var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');


// Get /movie.all
router.get('/', flightsCtrl.index);
// GET /movies/new
router.get('/new', flightsCtrl.new);
// POST /movies
router.get('/:id', flightsCtrl.show);
router.post('/', flightsCtrl.create);
router.delete('/:id', flightsCtrl.delete);

module.exports = router;
