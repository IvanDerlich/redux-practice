import React from 'react';
import './App.css';


function App({value,onIncrement,onDecrement}) {
  return (
    <div className="App">     
      <h1>{value}</h1>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>      
    </div>
  );
}

export default App;
