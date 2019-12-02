exports.seed = function(knex) {
  return knex('diaries').insert([
    {name: 'Karamja'},
  ]).returning('id')
  .then(console.log)
};