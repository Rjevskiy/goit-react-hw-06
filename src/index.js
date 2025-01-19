import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Импортируем Provider
import store from './redux/store'; // Импортируем store
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> {/* Оборачиваем App в Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);

