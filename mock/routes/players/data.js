// Players data
var lodash = require('lodash');
var Chance = require('chance');
var chance = new Chance();

function generatePlayer(i) {
  return {
    id:        i,
    name:      chance.name(),
    birthdate: chance.birthday({ string: true, american: false })
  };
}

module.exports = lodash().range(150).map(generatePlayer).value();