const Sequelize = require('sequelize')

const sqlDB = new Sequelize("qa", "postgres", 'falcon546A', {
    host: 'localhost',
    dialect: 'postgres'
})

module.exports = {sqlDB}
