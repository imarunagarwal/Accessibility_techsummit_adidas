import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import createServer from './createServer';
import 'normalize.css';
import './index.css';

createServer();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
