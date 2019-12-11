exports.seed = function(knex) {
  return knex('diaries').insert([
    {name: 'Varrock'},
  ]).returning('id')
  .then(console.log)
};