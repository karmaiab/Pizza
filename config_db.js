const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('pizza', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize