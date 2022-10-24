const db = require ('../config_db')
const { Sequelize } = require('sequelize')
const Pizza = require('./pizza')

const Cooking = db.define('cooking', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    PizzaId: {
        type: Sequelize.INTEGER,
        references: {
            model: Pizza,
            key: 'id'
        }
    },
    n_step: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    step: {
        type: Sequelize.TEXT,
        allowNull: false
    }
},{
    timestamps: false,
    indexes: [
        {
            unique: true,
            fields: ["PizzaId"]
        }
    ]
});

module.exports = Cooking