import { render } from 'react-dom';
import React, { Component } from 'react';
import Recipes from './containers/recipes.jsx';

class App extends Component { 
  constructor(props) { 
    super(props); 
  }

  render() { 
    return( 
      <Recipes />
    )
  }
}

export default App;