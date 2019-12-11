const knex = require("./knex")

getDiaries = () => {
    return knex('diaries')
        .then(diaries => {
            let array = []
            array.push(diaries[diaries.length - 1])
            array.push(diaries[diaries.length - 2])
            return array
        })
}


module.exports = {
    getDiaries,
}