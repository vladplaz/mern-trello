const mongoose = require('mongoose')

const tableSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  position: {
    type: Number
  },
  boardId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Board'
  },
  items: [{
    type: mongoose.Schema.ObjectId,
    ref: 'TableItem'
  }]
})

module.exports = mongoose.model('Table', tableSchema)
