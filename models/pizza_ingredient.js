const Ingredient = require('./ingredient')
const Pizza = require('./pizza')
const db = require('../config_db')
const { Sequelize } = require('sequelize')

const PizzaIngredient = db.define('PizzaIngredient', {
    PizzaId: {
        type: Sequelize.INTEGER,
        references: {
            model: Pizza,
            key: 'id'
        }
    },
    IngredientId: {
        type: Sequelize.INTEGER,
        references:{
            model: Ingredient,
            key: 'id'
        }
    }
},{
    timestamps: false,
    indexes: [
        {
            unique: true,
            fields: ["PizzaId", "IngredientId"]
        }
    ]
});

module.exports = PizzaIngredient