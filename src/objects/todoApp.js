import { combineReducers } from 'redux';
import todos from '../functions/reducers/todos'
import visibilityFilter from '../functions/reducers/visibilityFilter'

<<<<<<< HEAD

//This is how redux works from behind (1/3 options)

// const myCombineReducers = (reducers) => {
=======
const todoApp = combineReducers({todos, visibilityFilter});

export default todoApp;

// This is how redux works from behind
// const combineReducers = (reducers) => {
>>>>>>> refs/remotes/origin/master
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
//     ,{}
//     );
//   }
// }

<<<<<<< HEAD
//const todoApp = myCombineReducers({todos, visibilityFilter});

// This is how it's done manually (2/3 options)

=======
>>>>>>> refs/remotes/origin/master
// const todoApp = (state = {}, action) => {
//   return {
//     todos: todos(state.todos, action),
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action)
//   }
// }


<<<<<<< HEAD
// This is done automatically (3/3 options)

const todoApp = combineReducers({todos, visibilityFilter})

export default todoApp;
=======
>>>>>>> refs/remotes/origin/master
