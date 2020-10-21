import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers } from 'redux'
import todos from './reducers/todos';
import testAddTodo from './test/addTodo';
import testToggleTodo from './test/toggleTodo';
import visibilityFilter from './reducers/visibilityFilter'
import consolePlay from './functions/consolePlay'


ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );


// const combineReducers = (reducers) => {
//   return ( state = {}, action) => {
//     console.log('Object.keys(reducers)');
//     console.log(Object.keys(reducers));
//     console.log('-----------')
//     return Object.keys(reducers).reduce(
//       (nextState, key) => {
//         nextState[key] = reducers[key](
//           state[key],
//           action
//         )
//         return nextState;
//       }
//     ,{}//1:32
//     );
//   }
// }

const todoApp = combineReducers({todos, visibilityFilter})


// const todoApp = (state = {}, action) => {
//   return {
//     todos: todos(state.todos, action),
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action)
//   }
// }

const store = createStore(todoApp)

consolePlay(store);

testAddTodo()
testToggleTodo()
console.log('All tests passed.');