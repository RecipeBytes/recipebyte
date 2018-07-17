import ReactDOM from 'react-dom';
import React, { Component } from 'react'; 

class recipes extends Component {
  constructor(props) { 
    super(props);
    this.handleChange = this.handleChange.bind(this);  
  }

  handleChange(){
    let node = document.createElement('div'); 
    node.innerText = 'Recipe books';
    document.getElementById('container').appendChild(node);
  } 

  render() { 
    return( 
      <div id="container">
        <h1 id="header">Recipe Books</h1>
        { /* Recipe book components should be dynamically created. */ }
        <button id="addRecipeBook" onClick={this.handleChange}>Add Recipe Book</button>
      </div>
    )
  }
}

export default recipes;