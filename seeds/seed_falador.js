exports.seed = function(knex) {
  return knex('diaries').insert([
    {name: 'Falador'},
  ]).returning('id')
  .then(console.log)
};