'use client'

import React from 'react'
import {categoryList} from '../utils/productsData'
import {motion} from 'framer-motion'

function Category() {
  return (
    <div className='grid grid-cols-4 gap-4 mx-2 mt-10 overflow-hidden'>
      {categoryList.map((category) => (
        <div 
        className='bg-purple-400 flex flex-col justify-center
         items-center rounded-xl  hover:bg-[#631b5fbe] hover:shadow-2xl hover:text-white hover:font-semibold'>
          <span className=' my-2 '>{category.title}</span>
          <motion.img src={category.img} alt={category.title}  
          className='my-2'
           whileHover={{scale:1.1}}/>
        </div>
      ))}
    </div>
  )
}

export default Category