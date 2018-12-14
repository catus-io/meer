const { MongoClient } = require('mongodb')
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