var lodash = require('lodash');
var express = require('express');
var router = express.Router();
var nba = require('nba');

router.get('/', function(req, res) {
  res.json(nba.players);
});

router.get('/:id', function(req, res) {
  var id = Number(req.params.id);
  var player = lodash.find(nba.players, {
      id: id
  });
  res.json(player);
});

module.exports = router;