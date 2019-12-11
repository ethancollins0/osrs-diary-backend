exports.seed = function(knex) {
  return knex('diaries').insert([
    {
      name: 'Western Provinces',
      requirements: JSON.stringify({
        easy: {
          skills: {
            combat: 40,
            fletching: 20,
            hunter: 9,
            mining: 15,
            ranged: 30
          }
        },
        medium: {
          skills: {
            agility: 37,
            combat: 70,
            cooking: 42,
            firemaking: 35,
            fishing: 46,
            fletching: 5,
            hunter: 31,
            mining: 40,
            ranged: 30,
            woodcutting: 35
          }
        },
        hard: {
          skills: {
            agility: 56,
            combat: 100,
            construction: 65,
            cooking: 62,
            farming: 68,
            firemaking: 50,
            fishing: 62,
            fletching: 5,
            hunter: 69,
            ranged: 70,
            magic: 64,
            mining: 70,
            thieving: 75,
            woodcutting: 50
          }
        },
        elite: {
          skills: { 
            agility: 85,
            attack: 42,
            combat: 40,
            defence: 42,
            farming: 75,
            fletching: 85,
            hitpoints: 42,
            magic: 42,
            prayer: 22,
            ranged: 42,
            slayer: 93,
            strength: 42,
            thieving: 85
          }
        }
      })
  },
  ]).returning('id')
  .then(console.log)
};
