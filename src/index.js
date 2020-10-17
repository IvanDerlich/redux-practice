import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import expect from 'expect'
import deepFreeze from 'deep-freeze'
import {testIncrementCounter, testAddcounter, testRemoveCounter} from './arrayfunctions'



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

const toggleTodo = (todo) => {
  return {
    ...todo
    ,completed: !todo.com
  }
}

const testToggleTodo = () => {
  const todoBefore = {
    id: 0,
    text: 'Learn Redux',
    completed: false,
  };

  const todoAfter = {
    id: 0,
    text: 'Learn Redux',
    completed: true,
  }
  deepFreeze(todoBefore);


  expect(
    toggleTodo(todoBefore)
  ).toEqual(todoAfter);
}


testAddcounter();
testRemoveCounter();
testIncrementCounter();
testToggleTodo()

console.log('All tests passed.');