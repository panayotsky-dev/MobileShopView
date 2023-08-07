'use client'


import React from 'react'
import { productData } from '../utils/productsData'

function Products() {
  return (
    <div className=' justify-center flex flex-col items-center'>
    <div className='grid grid-cols-2 gap-2 mx-2  '>
      {productData.map((product) => (
        <div className=' bg-yellow-300 flex flex-col justify-center items-center rounded-xl'>
          <div className=' justify-center items-center flex flex-col text-center'>
          <h1 className='mt-4 text-xl'>{product.title}</h1>
          <h2 className='mt-2 text-sm'>{product.description}</h2>
          </div>
          
          <img src={product.image} alt={product.title}  className='my-2'/>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='hover:rounded-xl hover:bg-white hover:px-2'>Category : {product.category}</h1>
          <span className=''>InStock : {product.Instock}</span>
          </div>
          
          <button className='bg-white rounded-xl px-4 my-4'>Add to Cart</button>
        </div>
      ))}
      
    </div>
    <button className='rounded-xl bg-red-400 mt-4 px-4 py-1'>Load More</button>
    </div>
  )
}

export default Products