import React, {useState} from 'react';
import './ProductDetails.css';

import QuantityPicker from './QuantityPicker';
import AddToCartButton from './AddToCartButton';
import PriceDetails from './PriceDetails';

const ProductDetails = () => {

  const [quantity, setQuantity] = useState(0);
  console.log(quantity)

  return (
    <div className="product-details">
      <h2>Sneaker Company</h2>
      <h1>Fall Limited Edition Sneakers</h1>
      <p className="item-description">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
      <PriceDetails />
      <QuantityPicker quantity={quantity} setQuantity={setQuantity}/>
      <AddToCartButton />
    </div>
  );
};

export default ProductDetails;