exports.seed = function(knex) {
  return knex('diaries').insert([
    {name: 'Kandarin'},
  ]).returning('id')
  .then(console.log)
};