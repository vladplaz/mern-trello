const mongoose = require('mongoose')
const keys = require('./keys')
const authMiddleware = require('./middlewares/auth.moddleware')

const app = require('express')()

mongoose.set('useFindAndModify', false)

app.use(require('cors')())
app.use(require('body-parser').json())

app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/user', authMiddleware, require('./routes/user.routes'))
app.use('/api/boards', authMiddleware, require('./routes/boards.routes'))
app.use('/api/tables', authMiddleware, require('./routes/tables.routes'))
app.use('/api/table-items', authMiddleware, require('./routes/tableItems.routes'))

const PORT = keys.PORT || 5000

const start = async () => {
  try {
    await app.listen(PORT)
    console.log(`Server has been started at ${PORT}`)
    await mongoose.connect(keys.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log(`Mongo connected`)
  } catch (e) {
    throw e
  }
}

start()
