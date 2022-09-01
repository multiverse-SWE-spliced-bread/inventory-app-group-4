const express = require('express')

const { item } = require('../models/item')

const { itemsData } = require('../seedData')

const dataRouter = express.Router()

dataRouter.get('/', async (req, res) => {
    const allItems = await itemsData.findAll()
    res.send(allItems)
})

module.exports = {dataRouter}