import expect from 'expect'
import deepFreeze from 'deep-freeze'
import todos from '../reducers/todos'

const testAddTodo = () => {
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

export default testAddTodo;