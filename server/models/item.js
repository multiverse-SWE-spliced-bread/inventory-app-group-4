const { db } = require('../db');
const { Sequelize, DataTypes } = require('sequelize');

const Item = db.define('item', {
    title: {type: DataTypes.STRING, allowNull: false, unique: true},
    price: {type: DataTypes.DECIMAL, allowNull: false},
    description: {type: DataTypes.TEXT, allowNull: false,
        validate: {checkLength (desc) {if (desc.length > 255) throw new Error('Description too long.')}}},
    category: {type: DataTypes.STRING, allowNull: false},
    image: {type: DataTypes.STRING, allowNull: false}
})

module.exports = {Item}