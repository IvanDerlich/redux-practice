import { combineReducers } from 'redux';
import todos from '../functions/reducers/todos'
import visibilityFilter from '../functions/reducers/visibilityFilter'

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
//     ,{}
//     );
//   }
// }

// const todoApp = (state = {}, action) => {
//   return {
//     todos: todos(state.todos, action),
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action)
//   }
// }

const todoApp = combineReducers({todos, visibilityFilter});

export default todoApp;
