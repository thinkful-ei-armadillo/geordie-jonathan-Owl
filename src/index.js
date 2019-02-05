import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import participants from './participants';


ReactDOM.render(<App participants={participants}/>, document.getElementById('root'));

