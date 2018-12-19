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
  const onError = () => res.status(409).json({success: 0})
  
  User.findUserById(id)
  .then(addUser)
  .then(respond)
  .catch(onError)
})
app.post('/signin', function (req, res) {
  const { id, password } = req.body
  const createToken = user => {
    if(!user) throw new Error('아이디를 다시 확인해주세요.')
    if(password != user.password) throw new Error('비밀번호를 확인해주세요.')
    return User.createToken(user)
  }
  const respond = response => res.json({token: response})
  const onError = err => res.status(401).json({msg: err.message}) 

  User.findUserById(id)
  .then(createToken)
  .then(respond)
  .catch(onError)
})
app.post('/task', function (req, res) {
  const { title, regDate } = req.body
  console.log(req.body)
})
 
app.listen(3000)