import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App 
  githubURL="https://github.com/completejavascript/pomodoro-clock" 
  defaultBreakLength='5' 
  defaultSessionLength='20' />, 
  document.getElementById('root')
);

registerServiceWorker();
