exports.seed = function(knex) {
  return knex('diaries').del()
      .then(function () {
        // Inserts seed entries
        return knex('diaries').insert([
          {name: 'Ardougne'},
        ]).returning('id');
      })
      .then(console.log)
  };
