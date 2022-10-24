let Ingredients = require('./models/ingredient')
let Pizza = require('./models/pizza')
let PizzaIngredient = require('./models/pizza_ingredient')
let Cooking = require('./models/cooking')

Ingredients.sync({force: true})
Pizza.sync({force: true})
PizzaIngredient.sync({force: true})
Cooking.sync({force: true})