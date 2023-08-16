import React from 'react';

import './PriceDetails.css';

const PriceDetails = () => {
  return (
    <div className="price-details">
      <div className="left">
        <h3 className="final-price">$125.00</h3>
        <h4 className="original-price">$250.00</h4>
      </div>
      <p className="discount">50%</p>
    </div>
  );
};

export default PriceDetails;