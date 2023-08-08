'use client'


import React, { useContext, useEffect, useState } from 'react'
import { productData } from '../utils/productsData'
import { useCartContext } from '../utils/cartContext'
import {motion} from 'framer-motion'

function Products({allproducts,cartProducts}) {
  const { addToCart,allProducts } = useCartContext()
  const [showedProducts,setShowedProducts] = useState(6)
  const [selectedColor, setSelectedColor] = useState('');
  useEffect(() => {
    
  }, [showedProducts])
  
  return (
    <div className=' justify-center flex flex-col items-center mb-2'>
    <div className='grid grid-cols-2 gap-2 mx-2 items-center justify-center  '>
      {allProducts.slice(0,showedProducts).map((product) => (
        <div key={product.id} className={` flex flex-col justify-center items-center rounded-xl
         ${product.Instock === 0 ? 'bg-gray-300 py-5' : ''}
         ${product.id % 2 != 0 ? 'bg-white': ""}
         ${product.id % 2 == 0 ? 'bg-slate-600': ""}`}>
          <div className=' justify-center items-center flex flex-col text-center'>
          <h1 className='mt-4 text-xl'>{product.title}</h1>
          <h2 className='mt-2 text-sm'>{product.description}</h2>
          </div>
          
          <motion.img src={product.image} alt={product.title}  className='my-2' whileHover={{scale:1.15}}/>
          <div className='flex flex-col items-center justify-center  w-full rounded-xl '>
            <h1 className=' '>Category : {product.category}</h1>
            <span className=''> Color:
               <span className={`bg-${product.Filtering.Color}-400 px-2 rounded-md
               ${product.Filtering.Color == "green" ? "bg-green-300" : ""} `}>
                {product.Filtering.Color}
                </span>
                </span>
          <span className="text-black">InStock : <span className={`text-black ${product.Instock === 0 ? 'text-red-400' : ''}`}>{product.Instock}</span></span>
          
          </div>
          {product.Instock >0&&(
          <motion.button whileHover={{scale:1.1}} className={`bg-white rounded-xl px-4 my-8 font-semibold ${product.id % 2 != 0 ? 'bg-slate-600 text-white font-light ': ""}`} onClick={()=>addToCart(product.id)}>Add to Cart</motion.button>
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
