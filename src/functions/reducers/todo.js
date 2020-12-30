const todo = (todoState, action) => {
  switch (action.type){
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false,
      }
    case 'TOGGLE_TODO':
      if( todoState.id !== action.id){
        return todoState;
      }
      return {
        ...todoState,
        completed: true
      }
    default:
      return todoState 
  }
}

export default todo;