const { db } = require('../roots/db');
const { Sequelize, DataTypes } = require('sequelize');

const Item = db.define('item', {
    title: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.DECIMAL, allowNull: false},
    description: {type: DataTypes.TEXT, allowNull: false},
    category: {type: DataTypes.STRING, allowNull: false},
    image: {type: DataTypes.STRING, allowNull: false}
})

/*
async function main(){
    await Item.sync()

    await Item.create({
        name: 'test',
    })
}
main()
*/


module.exports = {Item}