const Recipes = require('../models/recipes')

module.exports = (req, res) => {
  Recipes.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(data => res.send(data))
    .catch(err => res.send(err))
}