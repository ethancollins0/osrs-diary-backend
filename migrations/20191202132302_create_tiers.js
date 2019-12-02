
exports.up = function(knex) {
    return knex.schema.hasTable('tiers').then((exists) => {
        if (!exists) {
            return knex.schema.createTable('tiers', (t) => {
                t.increments('id')
                t.string('name')
                t.integer('diary_id').unsigned()
                t.foreign('diary_id').references('diaries.id')
                t.json('skills')
            })
        }
    }) 
};



exports.down = function(knex) {
    return knex.schema.dropTableIfExists('tiers')
};
