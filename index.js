const express = require('express')
require('dotenv').config()

// Express
const app = express()

// Middleware

// Database

// Routes

// Listen
app.listen(process.env.PORT, () => {
  console.log(`Ready on port ${process.env.PORT}`)
})