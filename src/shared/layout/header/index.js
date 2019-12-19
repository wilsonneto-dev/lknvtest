import React from 'react';

import imgLogo from '../../../assets/logo.png';
import imgKids from '../../../assets/header/menu-kids.png';
import imgSandwich from '../../../assets/header/menu-sandwich.png';
import imgNotification from '../../../assets/header/small-search.png';
import imgSearch from '../../../assets/header/small-notification.png';
import imgUser from '../../../assets/header/small-user.png';

import './style.scss';

export default () => {
  return (
    <div className="layout-header">
      <div className="left">
        <div className="sandwich-wrapper">
          <img src={imgSandwich} alt="mobile menu" />
        </div>

        <div className="kids">
          <img src={imgKids} alt="Looke Kids" />
        </div>
      </div>

      <div className="logo">
        <img src={imgLogo} alt="Looke" />
      </div>

      <div className="right">
        <div className="tools">
          <div className="notification">
            <img src={imgNotification} alt="Notifications" />
          </div>
          <div className="search">
            <img src={imgSearch} alt="Search" />
          </div>
        </div>
        <div className="user">
          <div className="profile">
            <img src={imgUser} alt="User Sections" />
            <span>Usuário</span>
          </div>
        </div>
      </div>
    </div>
  );
};
