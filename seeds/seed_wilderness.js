exports.seed = function(knex) {
  return knex('diaries').insert([
    {
      name: 'Wilderness',
      requirements: JSON.stringify({
        easy: {
            skills: {
              agility: 15,
              magic: 21,
              mining: 15
            }
        },
        medium: {
          skills: {
            agility: 60,
            magic: 60,
            mining: 55,
            slayer: 50,
            smithing: 50,
            woodcutting: 61,
          }
        },
        hard: {
          skills: {
            agility: 64,
            fishing: 53,
            hunter: 67,
            magic: 66,
            slayer: 68,
            smithing: 75
          }
        },
        elite: {
          skills: {
            agility: 60,
            cooking: 90,
            firemaking: 75,
            fishing: 85,
            magic: 96,
            mining: 85,
            slayer: 83,
            smithing: 90,
            strength: 60,
            thieving: 84,
            woodcutting: 75
          }
        }
      })
    },
  ])
};