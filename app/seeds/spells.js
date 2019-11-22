const spellsData = require('../../../spellsData');

const createSpell = (knex, spell) => {
  return knex('spells').insert({
    name: spell.name,
    level: spell.level,
    description: spell.description
  }, 'id')
  .then(spellId => {
    let classPromises = [];
    
    spell.classes.forEach(individual => {
      classPromises.push(
        createClasses(knex, {
          name: individual,
          spell_id: spellId[0]
        })
      )
    });

    return Promise.all(classPromises)
  })
};

const createClasses = (knex, individual) => {
  return knex('classes').insert(individual);
}

exports.seed = function(knex) {
  return knex('classes').del()
    .then(() => knex('spells').del())
    .then(() => {
      let spellPromises = [];

      spellsData.forEach(spell => {
        spellPromises.push(createSpell(knex, spell));
      });

      return Promise.all(spellPromises)
    })
    .catch(error => console.log(`Error seeding data!! :: ${error}`));
};
