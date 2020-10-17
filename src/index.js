import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import expect from 'expect'
import { createStore } from 'redux'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

expect(1).toEqual(1)

const counter = (state = 0, action) => {
  switch (action.type){
    case 'INCREMENT':
      return state + 1 
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const store = createStore(counter);

const appDiv = document.querySelector('.App')

const render = () => {
  appDiv.innerText = store.getState();
};

store.subscribe(render)
render()

appDiv.addEventListener('click',() => {
  store.dispatch({type:'INCREMENT'})
})


