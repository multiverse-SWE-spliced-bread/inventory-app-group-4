const { db } = require("./db");
const express = require('express');
const { getEnvironmentData } = require("worker_threads");
const app = express()

var sqlite3 = require('sqlite3')
const data = new sqlite3.Database('./dataList.sqlite')

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  data.serialize(function() {
    data.all('SELECT * FROM items', function (err, row) {
      res.send(row)
    })
  })

  data.close()
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
