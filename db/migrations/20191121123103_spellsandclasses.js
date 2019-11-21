exports.up = function (knex) {
  return Promise.all([
    knex.schema.createTable('spells', (table) => {
      table.increments('id').primary();
      table.string('name');
      table.integer('level').unsigned();
      table.string('description');
      table.timestamps(true, true);
    }),

    knex.schema.createTable('classes', (table) => {
      table.increments('id').primary();
      table.string('name');
      table.integer('spell_id').unsigned()
      table.foreign('spell_id')
        .references('spells.id')
      table.timestamps(true, true);
    })
  ])

};

exports.down = function (knex) {
  return Promise.all([
    knex.schema.dropTable('spells'),
    knex.schema.dropTable('classes')
  ]);
};
