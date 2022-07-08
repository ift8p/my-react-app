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
import {Header} from './App';
// using the API

// reactdom creates root node of the app, receiving selector, (where to be rendered) 
const root = ReactDOM.createRoot(document.getElementById('root'));

//creating reactelements (variables) in jsx
//const elem = <h2>Receipts to be ready</h2>; //or without ;, webpack solves if the ; needed
//multistring - use () brackets
//using variable
//const text = 'ReceiptBook';
/* const elem = (
  //elem has a rootparent
  //в фигурные скобки можно вставить все и массив - все преобразуется в строку сконкатенируется, нельзя объекты - ошибка
  <div>
    <h2 className='main-text'>This is {text}</h2>
    <h2>More than {10 * 10} to be cooked</h2>
    <h2>Receipts to be ready</h2>
    <label htmlFor=""></label>
    <input type="text" />
    <button tabIndex={0}>Random Receipt</button>
  </div>
); */
//creating elements variables without jsx (arguments - what element, class of element object classname, content of element) метод класса
//const elem = React.createElement('h2', {className: 'tagline'}, 'Receipts to be ready');
// to render something
root.render(
//(what is rendered)
  <React.StrictMode>
    <App />
  </React.StrictMode>
  //elem,
);
