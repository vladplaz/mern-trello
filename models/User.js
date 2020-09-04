const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    default: 'user'
  },
  imageUrl: {
    type: String,
    default: 'https://masonshall1785.org/wp-content/uploads/2016/03/no-profile-img-240x300.gif'
  }
})

module.exports = mongoose.model('User', userSchema)
