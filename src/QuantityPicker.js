import React from 'react';

import './QuantityPicker.css';
import plusIcon from '../images/icon-plus.svg';
import minusIcon from '../images/icon-minus.svg';

import { useCartContext } from './CartContextProvider';

const QuantityPicker = () => {
  const { cart, setCart } = useCartContext();

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity < 0) return;
    if (typeof newQuantity !== 'number') {
      newQuantity = Number(newQuantity);
    }

    setCart({
      ...cart,
      currentQuantity: newQuantity
    })
  }

  return (
    <div className="quantity-picker">
      <button onClick={() => handleQuantityChange(--cart.currentQuantity)}><img src={minusIcon} alt="minus"/></button>
      <input type="number" onChange={(event) => handleQuantityChange(event.target.value)} value={cart.currentQuantity}/>
      <button onClick={() => handleQuantityChange(++cart.currentQuantity)}><img src={plusIcon} alt="plus"/></button>
    </div>
  );
};

export default QuantityPicker;