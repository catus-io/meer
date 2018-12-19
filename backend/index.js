const app = require('./config/app.config')
app.use('/', require('./router'))
app.listen(3000)