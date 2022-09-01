const {db} = require('../db')
const {itemsData} = require('../seedData');
const {Item} = require('../models/item')

let populateDataBase = async () => {
      await db.sync({ force: true });
      await Promise.all(itemsData.map((c) => {Item.create(c)}))
  };
  
  let buildDB = async () => {
        await populateDataBase()
  }
  buildDB()

  module.exports = {buildDB}