const express = require('express')
require('dotenv').config()

// Express
const app = express()

// Middleware

// Database

// Routes
app.get('/', (req, res) => res.send('Welcome to Recipe App'))

// Listen
app.listen(process.env.PORT, () => {
  console.log(`Ready on port ${process.env.PORT}`)
})