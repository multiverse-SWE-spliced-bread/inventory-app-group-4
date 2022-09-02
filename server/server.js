const { db } = require("./db");
const { getEnvironmentData } = require("worker_threads");
const express = require('express');
const app = express()
const seed = require('./seedData')
const cors = require('cors');
const {dataRouter} = require("./routes/items")

var sqlite3 = require('sqlite3')
const data = new sqlite3.Database('./dataList.sqlite')

const PORT = process.env.PORT || 5000;

app.use(cors());

app.get("/:id", (req, res) => {
  
  data.serialize(function() {
    data.all(`SELECT * FROM items WHERE id=${req.params.id}`, function (err, row) {
      res.send(row)
    })
  })
})

app.get("/", (req, res) => {
  
  data.serialize(function() {
    data.all('SELECT * FROM items', function (err, row) {
      res.send(row)
    })
  })
  
  
  //const allItems = await Item.findAll()
  //  res.send(allItems)

  //data.close()
})

const init = async () => {
  try {
    await db.sync();

    app.listen(PORT, () => {
      console.log(`Server listening at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error starting server:', error)
  }
};

init();
