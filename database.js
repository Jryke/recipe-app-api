const mongoose = require('mongoose')
require('dotenv').config()

module.exports = mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}, (err) => {
  err ? console.log(err) : console.log('Connected to MongoDB')
})