import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import Header from './shared/layout/header';
import Footer from './shared/layout/footer';

import './styles/global.scss';

export default () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes />
        <Footer />
      </BrowserRouter>
    </>
  );
};
