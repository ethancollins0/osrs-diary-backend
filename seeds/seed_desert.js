exports.seed = function(knex) {
  return knex('diaries').insert([
    {name: 'Desert'},
  ]).returning('id')
  .then(console.log)
};