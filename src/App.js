import React from 'react';
import './App.css';

class App extends React.Component {  
  constructor(props){
    super(props);
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo() {
    const store = this.props.store
    //const id = store.getState()
    const idsArray = store.getState().todos.map( todo => todo.id)
    const max = Math.max(...idsArray)
    const nextId = max + 1
    store.dispatch({
      type: 'ADD_TODO',
      text: this.input.value,
      id: nextId
    })
    console.log('Current state:')
    console.log(store.getState())
    console.log('-------------')
  }

  render(){
    const todos = this.props.store.getState().todos;
    return (
      <div className="App">  
        <input
          ref={ node => {
            this.input = node;
          }}
        />
        <button
          onClick={ () => { this.addTodo() } }
        >
          Add Todo
        </button>  
        <ul>
          {todos.map((todo) => {
            return (
            <li>{todo.text}</li>
            )
          })
          }
        </ul>
      </div>
    )
  }
}

export default App;
