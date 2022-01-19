import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/styles.sass'
import './i18n'

ReactDOM.render(
  <Suspense fallback="loading...">
    <React.StrictMode>
      <Router>
          <App />
      </Router>
    </React.StrictMode>,
  </Suspense>,
  document.getElementById('root')
);
