const Task = require('../model/Task')

exports.create = (req, res) => {
  const { decoded } = req
  const { _id } = decoded
  const { title, regDate } = req.body
  const respond = () => res.json({code: 1})
  const onError = () => res.status(500).json({msg: 'internal error'})

  Task.create({_id: _id, title: title, regDate: regDate}).then(respond).catch(onError)
}
exports.readAll = (req, res) => {
  const respond = response => res.json(response)
  const onError = () => res.status(500).json({msg: 'read error'})
  Task.readAll().then(respond).catch(onError)
}