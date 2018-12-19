const { MongoClient } = require('mongodb')
const url = 'mongodb://localhost:27017'
const dbName = 'meer'
const colName = 'tasks'

exports.create = ({ _id, title, regDate }) => {
  console.log(_id, title, regDate)
  return MongoClient.connect(url, { useNewUrlParser: true })
  .then(client => {
    const col = client.db(dbName).collection(colName)
    try {
      return col.insertOne({userId: _id, title: title, regDate: regDate })
    }
    finally {
      client.close()
    }
  })
}