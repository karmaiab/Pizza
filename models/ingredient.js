const db = require ('../config_db')
const { Sequelize } = require('sequelize')

const Ingredient = db.define('ingredient', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    amount: {
        type: Sequelize.STRING,
        allowNull: false
    }
    },{
        timestamps: false
});

module.exports = Ingredient