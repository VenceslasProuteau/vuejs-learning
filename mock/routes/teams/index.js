var lodash = require('lodash');
var express = require('express');
var router = express.Router();
var nba = require('nba');

router.get('/', function(req, res) {
  res.json(nba.teams);
});

router.get('/:id', function(req, res) {
  var id = Number(req.params.id);
  var team = lodash.find(nba.teams, {
      id: id
  });
  team.roster = nba.players.filter(function (player) {
  	return player.teamId === team.teamId;
  })[0];
  res.json(team);
});

module.exports = router;