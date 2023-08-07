'use client'


import React, { useContext, useEffect, useState } from 'react'
import { productData } from '../utils/productsData'
import { useCartContext } from '../utils/cartContext'

function Products() {
  const { addToCart,allProducts } = useCartContext()
  const [showedProducts,setShowedProducts] = useState(6)
  const [selectedColor, setSelectedColor] = useState('');
  useEffect(() => {
    
  }, [showedProducts])
  
  return (
    <div className=' justify-center flex flex-col items-center'>
    <div className='grid grid-cols-2 gap-2 mx-2 items-center justify-center  '>
      {allProducts.slice(0,showedProducts).map((product) => (
        <div key={product.id} className=' bg-yellow-300 flex flex-col justify-center items-center rounded-xl'>
          <div className=' justify-center items-center flex flex-col text-center'>
          <h1 className='mt-4 text-xl'>{product.title}</h1>
          <h2 className='mt-2 text-sm'>{product.description}</h2>
          </div>
          
          <img src={product.image} alt={product.title}  className='my-2'/>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='hover:rounded-xl hover:bg-white hover:px-2'>Category : {product.category}</h1>
          <span className=''>InStock : {product.Instock}</span>
          </div>
          {product.Instock >0&&(
          <button className='bg-white rounded-xl px-4 my-4' onClick={()=>addToCart(product.id)}>Add to Cart</button>
          )}  
        </div>
      ))}
      
    </div>
    {showedProducts < allProducts.length&&(
    <button className='rounded-xl bg-red-400 mt-4 px-4 py-1' onClick={()=>setShowedProducts(showedProducts+6)}>Load More</button>
    )}
    </div>
  )
}

export default Products
