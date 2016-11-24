var lodash = require('lodash');
var express = require('express');
var router = express.Router();

var playersData = require('./data');

router.get('/', function(req, res) {
  res.json(playersData);
});

router.get('/:id', function(req, res) {
  var id = Number(req.params.id);
  var player = lodash.find(playersData, {
      id: id
  });
  res.json(player);
});

module.exports = router;