const User = require('../model/User')
const authHelper = require('../middleware/auth.helper')

exports.create = (req, res) => {
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
}
exports.login = (req, res) => {
  const { id, password } = req.body
  const createToken = user => {
    if(!user) throw new Error('아이디를 다시 확인해주세요.')
    if(password != user.password) throw new Error('비밀번호를 확인해주세요.')
    return authHelper.createToken(user)
  }
  const respond = response => res.json({token: response})
  const onError = err => res.status(401).json({msg: err.message}) 

  User.findUserById(id)
  .then(createToken)
  .then(respond)
  .catch(onError)
}