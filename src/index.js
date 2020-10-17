import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import expect from 'expect'
import deepFreeze from 'deep-freeze'

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


const addCounter = (list) => [...list,0]

const removeCounter = (list, index) => [
    ...list.slice(0,index)
    ,...list.slice(index+1)
  ];

const incrementCounter = (list, index) => [
  ...list.slice(0,index)
  ,list[index]+1
  ,...list.slice(index+1)
];

const testAddcounter = () => {
  const listBefore = [];
  const listAfter = [0];
  deepFreeze(listBefore);

  expect(
    addCounter(listBefore)
  ).toEqual(listAfter);
}

const testRemoveCounter = () => {
  const listBefore = [0,10, 20]
  const listAfter = [0, 20]
  deepFreeze(listBefore)

  expect(
    removeCounter(listBefore,1)
  ).toEqual(listAfter);
}

const testIncrementCounter = () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 11, 20];
  deepFreeze(listBefore);

  expect(
    incrementCounter(listBefore,1)
  ).toEqual(listAfter);
}

testAddcounter();
testRemoveCounter();
testIncrementCounter();
console.log('All tests passed.');