var express = require('express');
var router = express.Router();

// Routes
var players = require('./players/');
var teams = require('./teams/');

router.get('/', function(req, res) {
    res.send('Hello NBA');
});

router.use('/players', players);
router.use('/teams', teams);

module.exports = router;