const db = require ('../config_db')
const { Sequelize } = require('sequelize')

const Ingredients = db.define('ingredients', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    }
    },{
        timestamps: false
});

module.exports = Ingredients