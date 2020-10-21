import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import todoApp from './objects/todoApp'
import testAddTodo from './test/addTodo';
import testToggleTodo from './test/toggleTodo';
import consolePlay from './functions/consolePlay'


ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );

const store = createStore(todoApp)

consolePlay(store);

testAddTodo()
testToggleTodo()
console.log('All tests passed.');