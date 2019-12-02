
exports.up = function(knex) {
    return knex.schema.hasTable('diaries').then((exists) => {
        if (!exists) {
          return knex.schema.createTable('diaries', (t) => {
            t.increments('id').primary();
            t.string('name');
          });
        }
      });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('diaries')
};
