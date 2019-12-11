exports.seed = function(knex) {
  return knex('diaries').insert([
    {
      name: 'Varrock',
      requirements: JSON.stringify({
        easy: {
            skills: {
              agility: 13,
              fishing: 20,
              mining: 15,
              runecrafting: 9,
              thieving: 5
            }
        },
        medium: {
          skills: {
            agility: 30,
            combat: 40,
            crafting: 36,
            farming: 30,
            firemaking: 40,
            herblore: 10,
            magic: 25,
            thieving: 25
          }
        },
        hard: {
          skills: {
            agility: 51,
            construction: 50,
            firemaking: 60,
            hunter: 66,
            magic: 54,
            prayer: 52,
            ranged: 40,
            thieving: 53,
            woodcutting: 60,  
          }
        },
        elite: {
          skills: {
            cooking: 95,
            fletching: 81,
            herblore: 90,
            magic: 86,
            runecrafting: 78,
            smithing: 89
          }
        }
      })
    },
  ])
};