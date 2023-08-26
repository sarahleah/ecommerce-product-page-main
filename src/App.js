import React, { useState } from 'react';
import './App.css';

// components
import Nav from './Nav';
import ProductDetails from './ProductDetails';
import ProductImageSection from './ProductImageSection';
import Tooltip from './Tooltip/Tooltip';

const App = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="container">
      <Nav showTooltip={showTooltip} setShowTooltip={setShowTooltip} />
      <Tooltip showTooltip={showTooltip} />
      <main>
        <ProductImageSection />
        <ProductDetails />
      </main>
    </div>
  );
};

export default App;
