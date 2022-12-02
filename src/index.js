/* eslint-disable no-unused-vars */
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import SiteCarousel from './Carousel';
import NavBar from './NavBar';
import Main from './Main';
import FooterSection from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar/>
    <SiteCarousel/>
    <Main/>
    <FooterSection/>
  </React.StrictMode>
);
