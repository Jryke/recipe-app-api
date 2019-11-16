const Recipes = require('../models/recipes.js')

module.exports = (req, res) => {
  Recipes.create(req.body)
    .then(data => res.send(data))
    .catch(err => res.send(err))
}