import React from 'react';

import './style.scss';

import imgWhatsapp from '../../../assets/footer/whatsapp.png';
import imgFacebook from '../../../assets/footer/facebook.png';
import imgTwitter from '../../../assets/footer/twitter.png';
import imgInstagram from '../../../assets/footer/instagram.png';

export default () => {
  return (
    <div className="layout-footer">
      <div className="links">
        <div>
          <a href="/">Blog</a>
        </div>
        <div></div>
        <div>
          <a href="/">Contato</a>
        </div>
        <div></div>
        <div>
          <a href="/">Institucional</a>
        </div>
        <div></div>
        <div>
          <a href="/">FAQ</a>
        </div>
        <div></div>
        <div>
          <a href="/">Onde Assistir</a>
        </div>
      </div>
      <div className="social-links">
        <a href="/">
          <img src={imgWhatsapp} alt="Whatsapp" />
        </a>
        <a href="/">
          <img src={imgFacebook} alt="Facebook" />
        </a>
        <a href="/">
          <img src={imgTwitter} alt="Twitter" />
        </a>
        <a href="/">
          <img src={imgInstagram} alt="Instagram" />
        </a>
      </div>
    </div>
  );
};
