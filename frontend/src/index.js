import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Optional: For styling
import App from './App';

// Rendering the main App component into the root div in index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
