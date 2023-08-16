import React from 'react';

import './AddToCartButton.css';

import cartImg from '../images/icon-cart.svg';

const AddToCartButton = () => {
  return (
    <button className="add-to-cart">
      <img src={cartImg} alt="cart"/>
      Add to Cart
    </button>
  );
};

export default AddToCartButton;