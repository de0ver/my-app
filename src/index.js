import React from 'react';
import ReactDOM from 'react-dom/client';
import ShowDate from './jsx/ShowDate';
import ShowInfo from './jsx/ShowInfo';
import './css/style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ShowDate />
    <ShowInfo />
  </React.StrictMode>
);
