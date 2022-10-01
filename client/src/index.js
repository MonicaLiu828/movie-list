import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import parse from './Parse.js';

ReactDOM.render(<App movies={() => parse.getAll()}/>, document.getElementById('app'));