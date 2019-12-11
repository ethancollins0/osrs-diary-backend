exports.seed = function(knex) {
  return knex('diaries').insert([
    {
      name: '',
      requirements: JSON.stringify({
        easy: {
            skills: {
              
            }
        },
        medium: {
          skills: {
            
          
          }
        },
        hard: {
          skills: {
            
          }
        },
        elite: {
          skills: {
            
          }
        }
      })
    },
  ])
};