
exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('spells', function(table) {
      table.increments('id').primary();
      table.string('name');
      table.integer('level').unsigned();
      table.string('description');
      table.timestamps(true, true);
    }),

    knex.schema.createTable('classes', function(table) {
      table.increments('id').primary();
      table.string('name');
      table.timestamps(true, true);
    })
  ])
  
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTable('spells'),
    knex.schema.dropTable('classes')
  ]);
};
