import './index.css';
import { createStore } from 'redux'
import todoApp from './objects/todoApp'
// import tests from './test/index';
import consolePlay from './functions/consolePlay'
import render from './functions/render'

// tests();

const store = createStore(todoApp)
store.subscribe(() => render(store));
render(store);


consolePlay(store);
