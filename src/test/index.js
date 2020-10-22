import testAddTodo from './addTodo';
import testToggleTodo from './toggleTodo';

const tests = () => {
  testAddTodo()
  testToggleTodo()
  console.log('All tests passed.');
}

export default tests;