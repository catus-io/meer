const router = require('express').Router()
const authHelper = require('./middleware/auth.helper')
const userController = require('./controllers/user.controller')
const taskController = require('./controllers/task.controller')

router
  .post('/signin', userController.login)
  .post('/signup', userController.create)
  .post('/task', authHelper.validateToken, taskController.create)

module.exports = router