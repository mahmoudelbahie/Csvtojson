const path = require('path')
const  csvtojson = require('csvtojson')
const fs = require('fs')

csvtojson()
.fromFile('/C/Users/hp/Desktop/csvtojson/customer-data.csv')
.then( (jsonObj) => {
  fs.writeFile('/C/Users/hp/Desktop/csvtojson/customer-data.json', JSON.stringify(jsonObj), (err) => {
    if (err) throw err;
  })
})