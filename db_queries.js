const knex = require("./knex")

getDiaries = () => {
    return knex('diaries')
        .then(diaries => {
            return diaries[diaries.length - 1]
        })
}


module.exports = {
    getDiaries,
}