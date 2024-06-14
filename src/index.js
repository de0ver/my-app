import React from 'react';
import ReactDOM from 'react-dom/client';
import ShowDate from './ShowDate';
import ShowInfo from './ShowInfo';
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ShowDate />
    <ShowInfo />
  </React.StrictMode>
);
