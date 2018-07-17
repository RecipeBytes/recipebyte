import React from "react";
import App from './App.jsx';
import { render } from 'react-dom';
import { createStore } from 'redux'; 
import { Provider } from 'react-redux'; 
import rootReducer from './reducers/reducers.js'; 

const store = createStore(rootReducer); 

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('contents')
) 