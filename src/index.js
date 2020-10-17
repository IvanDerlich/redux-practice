import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'

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

function onIncrement() {
  store.dispatch({
    type:'INCREMENT'
  })
}
function onDecrement() {
  store.dispatch({
    type:'DECREMENT'
  })
}


const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App 
        value={store.getState()}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
store.subscribe(render)
render()
