import React from 'react';
import { useCartContext } from './CartContextProvider';

import './Nav.css';

import logoSvg from '../images/logo.svg';
import cartIcon from '../images/icon-cart.svg';
import avatar from '../images/image-avatar.png';

const Nav = ({ showTooltip, setShowTooltip }) => {
  const { cart } = useCartContext();
  const cartIsEmpty = cart.items.sneakers == 0;

  const handleSetShowTooltip = (show) => {
    console.log(show);
    setShowTooltip(show);
  };

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
        <div
          className={`cart ${cartIsEmpty ? 'empty' : 'full'}`}
          onMouseEnter={() => handleSetShowTooltip(true)}
          onMouseLeave={() => handleSetShowTooltip(false)}
        >
          {!cartIsEmpty && (
            <div className="quantity">{cart.items.sneakers}</div>
          )}
          <img src={cartIcon} alt="cart"></img>
        </div>
        <div className="avatar">
          <img className="avatar" src={avatar} alt="it's you!"></img>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
