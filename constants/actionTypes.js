//Add actions types here.
const ADD_RECIPE = 'ADD_RECIPE';

const addRecipe = name => ({ type: ADD_RECIPE, name});

module.exports = { 
  ADD_RECIPE,
  addRecipe
}