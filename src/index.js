// Первые строки - импорты в продукт First strings all are imports
// 1string import of react from nodemodules (class)
import React from 'react';
// 2string working with dom-structure on the page (class)
import ReactDOM from 'react-dom/client';
// 3string styles import
import './index.css';
// 4string import of app function
import App from './App';
// 5string measuring perfomance in the app измерение производительности
// import reportWebVitals from './reportWebVitals';

// using the API
// reactdom creates root node of the app, receiving selector, 
const root = ReactDOM.createRoot(document.getElementById('root'));
// to render something
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
