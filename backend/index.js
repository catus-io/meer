const express = require('express')
var cors = require('cors')
const app = express()

app.use(cors())

app.get('/', function (req, res) {
  console.log('hello i"m back')
})
app.post('/', function (req, res) {
  console.log('hello')
})
 
app.listen(3000)