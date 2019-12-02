const environment = process.env.ENVIRONMENT || 'development'
const knex = require('./knexfile')

module.exports = knex[environment]