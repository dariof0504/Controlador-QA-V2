const Sequelize = require('sequelize')

const sqlDB = new Sequelize("postgres", "admin", 'admin', {
    host: 'localhost',
    dialect: 'postgres'
})

module.exports = {sqlDB}
