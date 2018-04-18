import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/css/index.css';
import './stylesheets/css/global.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
