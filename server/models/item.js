const { db } = require('../roots/db');
const { Sequelize, DataTypes } = require('sequelize');

const Item = db.define('item', {
    title: {type: DataTypes.STRING},
    price: {type: DataTypes.DECIMAL},
    description: {type: DataTypes.TEXT},
    category: {type: DataTypes.STRING},
    image: {type: DataTypes.STRING}
})

async function main(){
    await Item.sync()

    await Item.create({
        name: 'test',
    })
}
main()

module.exports = {Item}