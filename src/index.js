import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import expect from 'expect'
import deepFreeze from 'deep-freeze'


ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );

const todos = (state = [], action) => {
  switch(action.type){
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        }
      ]    
    default:
      return state;
  }
}

const testAddtodo = () => {
  const stateBefore = [];
  const action = {
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux'
  }
  const stateAfter = [
    {
    id: 0,
    text: "Learn Redux",
    completed: false,
    }
  ]
  deepFreeze(stateBefore);
  deepFreeze(action);
  expect(
    todos(stateBefore,action)
  ).toEqual(stateAfter)
    
}

testAddtodo()
console.log('All tests passed.');