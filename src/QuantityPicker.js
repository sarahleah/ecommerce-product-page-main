import React from 'react';
import './QuantityPicker.css';

const QuantityPicker = ({
  quantity,
  setQuantity
}) => {

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity < 0) return;
    setQuantity(newQuantity)
  }

  console.log(quantity, setQuantity)
  return (
    <div className="quantity-picker">
      <button onClick={() => handleQuantityChange(--quantity)}>-</button>
      <input type="number" onChange={(event) => handleQuantityChange(event.target.value)} value={quantity}/>
      <button onClick={() => handleQuantityChange(++quantity)}>+</button>
    </div>
  );
};

export default QuantityPicker;