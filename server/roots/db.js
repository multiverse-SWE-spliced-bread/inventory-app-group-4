const path = require('path');
const { Sequelize } = require('sequelize');

const db = new Sequelize({
    dialect: 'sqlite',
    storage: './test.sqlite',
})

module.exports = {db}
