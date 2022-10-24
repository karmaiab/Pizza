const db = require ('../config_db')
const { Sequelize } = require('sequelize')

const Pizza = db.define('pizza', {
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
    description: {
        type: Sequelize.TEXT('long'),
        allowNull: false
    },
    image: {
        type: Sequelize.TEXT('long'),
        allowNull: false
    }
    },{
        timestamps: false
});

module.exports = Pizza