const jwt = require('jsonwebtoken')
const { getSecret } = require('../config/auth.config')

exports.createToken = (user) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      {
        _id: user._id
      },
      getSecret(),
      {
        expiresIn: '7d',
        issuer: 'CATUS',
        subject: 'auth'
      },
      (err, token) => {
        if(err) reject(err);
        resolve(token);
      }
    )
  })
}

exports.validateToken = (req, res, next) => {
  const token = req.headers['authorization']
  jwt.verify(token, getSecret(), (err, decoded) => {
    if(err) res.status(403).json({code: 403})
    req.decoded = decoded
    next()
  })
}