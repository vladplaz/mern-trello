const mongoose = require('mongoose')

const boardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  stared: {
    type: Boolean,
    default: false
  },
  lastModified: {
    type: Date,
    default: Date.now
  },
  userId:{
    type:mongoose.Schema.ObjectId,
    ref:'User'
  }
})

module.exports = mongoose.model('Board', boardSchema)
