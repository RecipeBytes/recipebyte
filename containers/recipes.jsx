import ReactDOM from 'react-dom';
import React, { Component } from 'react'; 
import RecipeCreator from './../client/components/RecipeCreator.jsx';

class recipes extends Component {
  constructor(props) { 
    super(props);
    this.handleChange = this.handleChange.bind(this);  
    this.state = {
      viewForm: false
    }
  }

  handleChange() {
    let node = document.createElement('div'); 
    node.innerText = 'Recipe books';
    node.setAttribute("style", "display: inline; margin-right: 15px; color:#ff0000;");
    document.getElementById('books').appendChild(node);
  }

  render() { 
    return( 
      <div id="container">
        <h1 id="header">Recipe Books</h1>
        <div id="books"></div>
        <button id="addRecipeBook" onClick={this.handleChange}>Add Recipe</button>
        { /* Recipe book components will be dynamically created in this component. */ }
      </div>
    )
  }
}

export default recipes;