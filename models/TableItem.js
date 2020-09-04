const mongoose = require('mongoose')

const tableItemSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  position: {
    type: Number
  },
  tableId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Table'
  }
})

module.exports = mongoose.model('TableItem', tableItemSchema)
