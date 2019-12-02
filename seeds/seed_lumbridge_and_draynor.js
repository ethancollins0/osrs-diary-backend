exports.seed = function(knex) {
  return knex('diaries').insert([
    {name: 'Lumbridge & Draynor'},
  ]).returning('id')
  .then(console.log)
};