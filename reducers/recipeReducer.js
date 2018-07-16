import * as types from '../constants/actionTypes';

const initialState = { 
  totalRecipes: 0,
  recipeList: [],
  name: ''
};

const recipeReducer = (state=initialState, action) => {
  switch(action.type) {
    case types.ADD_RECIPE:
      console.log('Adding recipe!'); 
      const recipe = {
        ...state, 
        name: action.name
      }
    default: 
      return state; 
  }
}

export default recipeReducer;