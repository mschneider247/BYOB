const spells = require('../../../spellsData');

const createSpell = (knex, spell) => {
  return knex('spells').insert({
    name: spell.name,
    level: spell.level,
    description: spell.description,
  })
}

exports.seed = function(knex) {
  return knex('classes').del()
    .then(() => knex('spells').del())
    .then(() => {
      let spellPromises = [];

      spells.forEach(spell => {
        spellPromises.push(createSpell(knex, spell));
      });

      return Promise.all(spellPromises)
    })
    .catch(error => console.log(`Error seeding data!! :: ${error}`));
};
