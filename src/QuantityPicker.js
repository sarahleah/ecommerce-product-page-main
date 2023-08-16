import React from 'react';
import './QuantityPicker.css';

const QuantityPicker = (
  quantity,
  setQuantity
) => {
  return (
    <div class="quantity-picker">
      <button>-</button>
      <input type="number" />
      <button>+</button>
    </div>
  );
};

export default QuantityPicker;