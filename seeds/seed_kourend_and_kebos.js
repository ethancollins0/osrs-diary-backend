exports.seed = function(knex) {
  return knex('diaries').insert([
    {name: 'Kourend & Kebos'},
  ]).returning('id')
  .then(console.log)
};