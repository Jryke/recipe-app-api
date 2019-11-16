const mongoose = require('mongoose')

module.exports = mongoose.model('recipes', {
  name: {
    type: String,
    required: true
  },
  ingredients: [String],
  instructions: String
})

