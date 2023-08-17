import React from 'react';
import './QuantityPicker.css';
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
      <button onClick={() => handleQuantityChange(--cart.currentQuantity)}>-</button>
      <input type="number" onChange={(event) => handleQuantityChange(event.target.value)} value={cart.currentQuantity}/>
      <button onClick={() => handleQuantityChange(++cart.currentQuantity)}>+</button>
    </div>
  );
};

export default QuantityPicker;