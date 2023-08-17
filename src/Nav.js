import React from 'react';

import './Nav.css';
import logoSvg from '../images/logo.svg';
import cartIcon from '../images/icon-cart.svg';
import avatar from '../images/image-avatar.png';

const Nav = () => {
  return (
    <nav>
      <div className="left">
        <img src={logoSvg} alt="logo"></img>
        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="right">
        <img src={cartIcon} alt="cart"></img>
        <div className="avatar">
          <img className="avatar" src={avatar} alt="it's you!"></img>
        </div>
      </div>
    </nav>
  );
};

export default Nav;