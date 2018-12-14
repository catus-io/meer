const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function (req, res) {
  console.log('hello i"m back')
})
app.post('/', function (req, res) {
  const { id, password } = req.body
})
 
app.listen(3000)