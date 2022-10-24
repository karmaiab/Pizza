const Ingredients = require('./ingredient')
const Pizza = require('./pizza')
const db = require('../config_db')
const { Sequelize } = require('sequelize')

const PizzaIngredients = db.define('PizzaIngredients', {
    PizzaId: {
        type: Sequelize.INTEGER,
        references: {
            model: Pizza,
            key: 'id'
        }
    },
    IngredientsId: {
        type: Sequelize.INTEGER,
        references:{
            model: Ingredients,
            key: 'id'
        }
    },
    amount: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
},{
    timestamps: false,
    indexes: [
        {
            unique: true,
            fields: ["PizzaId", "IngredientsId"]
        }
    ]
});

module.exports = PizzaIngredients