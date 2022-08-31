const { response } = require('express')
const { db } = require('../server/routes/db')
//import React, { useState, useEffect } from 'react';

//Returns all data in the database
async function allData(){
    const data = await db.query('SELECT * FROM items')
    console.log(data)
    return data
} //allData()

//Use 'id' to state the id of the row of data you want returned
async function oneRowData(id){
    const data = await db.query('SELECT * FROM items WHERE id =' + '"' + id + '"')
    console.log(data)
    return data
} //oneRowData(2)

//Use 'column' to state the column name (e.g. 'title') and 'id' for the row to be returned
async function oneSpecificData(column, id){
    const data = await db.query('SELECT ' + '"' + column + '"' + ' FROM items WHERE id =' + '"' + id + '"')
    console.log(data)
    return data
} //oneSpecificData("title", 5)