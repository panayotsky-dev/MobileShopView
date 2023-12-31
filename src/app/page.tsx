'use client'
import Image from 'next/image'
import Header from './components/Header'
import Category from './components/Category'
import Products from './components/Products'
import { CartProvider } from './utils/cartContext'
import { productData } from './utils/productsData'
import { useState } from 'react'
import Footer from './components/Footer'

export default function Home() {
  const [cartProducts,setCartProducts] = useState(0)
  return (
    <main className=" sexygradient h-full flex overflow-hidden w-full">
      <CartProvider>
    <Header cartProducts={cartProducts}/>
    
    <Category />
    
    <Products />
    <Footer  />
    </CartProvider>
    </main>
  )
}


