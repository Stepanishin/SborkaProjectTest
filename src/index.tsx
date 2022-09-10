import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/reset.css'
import './assets/normalize.css'
import './index.css'
import { setupStore } from './store/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const store = setupStore()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
);

