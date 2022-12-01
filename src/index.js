/* eslint-disable no-unused-vars */
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import SiteCarousel from './Carousel';
import NavBar from './NavBar';
import Main from './Main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar/>
    <SiteCarousel/>
    <Main/>
    <App />
  </React.StrictMode>
);
