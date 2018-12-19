const { MongoClient } = require('mongodb')
const jwt = require('jsonwebtoken')
const url = 'mongodb://localhost:27017'
const dbName = 'meer'
const colName = 'users'

exports.findUserById = id => {
  return MongoClient.connect(url, { useNewUrlParser: true })
  .then(client => {
    const col = client.db(dbName).collection(colName);
    try {
      return col.findOne({id: id})
    }
    finally {
      client.close()
    }
  })
}
exports.insertUser = (id, password) => {
  return MongoClient.connect(url, { useNewUrlParser: true })
  .then(client => {
    const col = client.db(dbName).collection(colName);
    try {
      return col.insertOne({id: id, password: password})
    }
    finally {
      client.close()
    }
  })
}

/***********************************/
/************* token ***************/
/***********************************/
const scr = 'should_be_moved_this_secret_code_to_a_differnt_folder_like_a_config_folder'

exports.createToken = (user) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      {
        _id: user._id
      },
      scr,
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
exports.validateToken = token => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, scr, (err, decoded) => {
      if(err) reject({msg: 'invalid'})
      resolve(decoded)
    })
  })
}