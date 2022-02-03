import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/styles.sass'
import './i18n'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import { store } from './store/store'

ReactDOM.render(
  <Suspense fallback="loading...">
    <React.StrictMode>
      <Provider store={store}>
        <Router>
            <App />
        </Router>
      </Provider>
    </React.StrictMode>,
  </Suspense>,
  document.getElementById('root')
);
