exports.seed = function(knex) {
  return knex('diaries').insert([
    {name: 'Morytania'},
  ]).returning('id')
  .then(console.log)
};