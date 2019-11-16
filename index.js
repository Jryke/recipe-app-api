const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const database = require('./database')
require('dotenv').config()

// Express
const app = express()

// Middleware
app.use(bodyParser.urlencoded({extend: false}))
app.use(bodyParser.json())
app.use(cors({credentials: true}))

// Database
database

// Routes
app.get('/', (req, res) => res.send('Welcome to Recipe App'))
app.get('/recipes', require('./controllers/getRecipes.js'))
app.post('/recipes', require('./controllers/postRecipes.js'))

// Listen
app.listen(process.env.PORT, () => {
  console.log(`Ready on port ${process.env.PORT}`)
})