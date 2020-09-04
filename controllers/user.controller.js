const User = require('../models/User')

module.exports.get = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId)
    res.status(200).json({
      message: 'User information',
      user
    })
  } catch (e) {
    res.status(500).json(e)
  }
}
