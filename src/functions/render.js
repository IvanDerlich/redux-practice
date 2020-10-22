import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

const render = (store) => {
  return ReactDOM.render(
    <React.StrictMode>
      <App 
        store={store}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

export default render;
