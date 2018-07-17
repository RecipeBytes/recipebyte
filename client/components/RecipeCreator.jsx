import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class RecipeCreator extends Component {
  render() { 
    return ( 
      <div>
        <form id="CreateRecipe">
          <label> Title: <input type="text" name="Title" maxlength="50"/> </label>
          <br/>
          <label> Description: <textarea name="Description" form="CreateRecipe" rows="10" cols="50"></textarea></label>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default RecipeCreator; 