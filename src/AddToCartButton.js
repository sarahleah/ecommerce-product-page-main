import React from 'react';

import './AddToCartButton.css';

import cartImg from '../images/icon-cart.svg';
import { useCartContext } from './CartContextProvider';

const AddToCartButton = () => {
  const { cart, setCart } = useCartContext();

  const addToCart = () => {
    if (cart.currentQuantity == 0) return;
    const newCartValues = {
      items: { sneakers: cart.items.sneakers + cart.currentQuantity },
      currentQuantity: 0
    };
    setCart(newCartValues);
  }

  return (
    <button disabled={cart.currentQuantity == 0} onClick={addToCart} className={`add-to-cart ${cart.currentQuantity == 0 ? "disabled" : ""}`}>
      <img src={cartImg} alt="cart"/>
      Add to Cart
    </button>
  );
};

export default AddToCartButton;