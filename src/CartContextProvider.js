import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState({
    items: { sneakers: 0 },
    currentQuantity: 0
  });

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
