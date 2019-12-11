exports.seed = function(knex) {
  return knex('diaries').insert([
    {name: 'Fremennik'},
  ]).returning('id')
  .then(console.log)
};