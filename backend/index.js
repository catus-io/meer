const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const User = require('./model/User')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function (req, res) {
  console.log('hello i"m back')
})
app.post('/signup', function (req, res) {
  const { id, password } = req.body

  const addUser = user => {
    if(user) throw new Error('user already exists')
    return User.insertUser(id, password)
  }
  const respond = response => res.json({success: response.result.n})
  const onError = err => res.status(409).json({success: 0})
  
  User.findUserById(id)
  .then(addUser)
  .then(respond)
  .catch(onError)
})
app.post('/signin', function (req, res) {
  const { id, password } = req.body
  console.log(id, password)
})
 
app.listen(3000)