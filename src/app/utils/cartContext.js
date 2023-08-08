'use client'
import React, { createContext, useState, useContext } from 'react';
import { productData } from './productsData';

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);


export function CartProvider({ children }) {
  const [cartCount, setCartCount] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const [allProducts, setAllProducts] = useState(productData)
  const [sortType,setSortType]= useState('default')
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filterColor, setFilterColor] = useState('default');
  
  const filteredProducts = allProducts
  .filter((product) => selectedCategory === '' || product.category === selectedCategory)
  .filter((product) => filterColor === 'default' || product.Filtering.Color === filterColor)
  .sort((a, b) => {
    switch (sortType) {
      case 'lowToHigh':
        return a.price - b.price;
      case 'highToLow':
        return b.price - a.price;
      case 'aToZ':
        return a.title.localeCompare(b.title);
      case 'zToA':
        return b.title.localeCompare(a.title);
      default:
        return 0;
    }
  });


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
    <CartContext.Provider value={{ cartCount, cartProducts, allProducts, addToCart,selectedCategory,filteredProducts,setSelectedCategory,setSortType,filterColor,setFilterColor }}>
      {children}
    </CartContext.Provider>
  );
}