import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Checkbox from './components/checkbox'
import reportWebVitals from './reportWebVitals';
import Like from './components/like';

ReactDOM.render(
  <React.StrictMode>
    <Like/>
    <Checkbox
      labelActive="Active"
      labelInactive="Inactive"
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
