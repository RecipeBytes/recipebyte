// Import actionTypes from constants. 
import * as types from '../constants/actionTypes'; 

export const addRecipe = (name) => { 
  type: types.ADD_RECIPE;
  payload: name;
};