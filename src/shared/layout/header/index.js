import React from 'react';

import imgLogo from '../../../assets/logo.png';
import imgKids from '../../../assets/header/menu-kids.png';
import imgSandwich from '../../../assets/header/menu-sandwich.png';
import './style.scss';

export default props => {
  return (
    <div className="layout-header">
      <div className="menu">
        <div className="sandwich-wrapper">
          <img src={imgSandwich} />
        </div>

        <div className="kids">
          <img src={imgKids} />
        </div>
      </div>

      <div className="logo">
        <img src={imgLogo} alt="Looke" />
      </div>

      <div className="user">
        <div></div>
      </div>
    </div>
  );
};
