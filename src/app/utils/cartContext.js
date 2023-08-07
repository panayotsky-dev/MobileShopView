import React, { createContext, useState, useContext } from 'react';
import { productData } from './productsData';

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cartCount, setCartCount] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const [allProducts, setAllProducts] = useState(productData)
    
  

  const addToCart = (productId) => {
    setCartCount((prevCount) => prevCount + 1);
    setCartProducts((prevCart) => [...prevCart, productId]);
    decreaseProductStock(productId);
  };
  const decreaseProductStock = (productId) => {
    setAllProducts((prevProducts) => {
      return prevProducts.map((product) => {
        if (product.id === productId) {
          return { ...product, Instock: product.Instock - 1 };
        }
        return product;
      });
    });
  };
 
  return (
    <CartContext.Provider value={{ cartCount, cartProducts, allProducts, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}