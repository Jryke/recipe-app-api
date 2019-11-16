const Recipes = require('../models/recipes.js')

module.exports = (req, res) => {
  Recipes.find({})
    .then(data => {res.send(data)})
    .catch(err => {res.send(err)})
}