import React from 'react';
import './App.css';

// components
import Nav from './Nav';
import ProductDetails from './ProductDetails';
import ProductImageSection from './ProductImageSection';

const App = () => {
  return (
    <div>
      <Nav />
      <main>
        <ProductImageSection />
        <ProductDetails />
      </main>
    </div>
  );
};

export default App;
