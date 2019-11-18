let Recipes = require('../models/recipes.js')

module.exports = (req, res) => {
  Recipes.findByIdAndDelete(req.params.id)
    .then(data => res.send(data))
    .catch(err => res.send(err))
}