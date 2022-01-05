import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import './fonts/Lora-Bold.ttf'; 
import './fonts/Lora-Medium.ttf'
import './fonts/Lora-Regular.ttf'
import './fonts/Lora-BoldItalic.ttf'
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // <React.StrictMode>
  <App />,
  // {/* </React.StrictMode>, */}
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
