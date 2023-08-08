'use client'

import React, { useState } from 'react'
import {categoryList} from '../utils/productsData'
import {motion} from 'framer-motion'

function Category() {

  const [selectedCategory,setSelectedCategory]=useState('')

  return (
    
    <div className='zxl:justify-center zxl:items-center zxl:flex zxl:flex-col '>

    
    <div className='grid grid-cols-4 sphone:grid-cols-2 gap-4 mx-2 mt-10 overflow-hidden zxl:w-[400px] '>
      {categoryList.map((category) => (
        <div key={category.id} onClick={()=> selectedCategory != category.title ? setSelectedCategory(category.title) : setSelectedCategory('') }
        className={` text-[#641960d0] font-normal flex flex-col justify-center
         items-center rounded-xl  hover:bg-[#641960d0] hover:shadow-2xl hover:text-white hover:font-semibold
         ${category.title===selectedCategory? 'bg-[#641960d0] text-[#FFFF] font-semibold' : "bg-[#ffff]"}`}>
          <span className=' my-2 '>{category.title}</span>
          <motion.img src={category.img} alt={category.title}  
          className={`my-2${category.title===selectedCategory? ' scale-110' : ""}`}
           whileHover={{scale:1.1}}
           />
        </div>
      ))}
    </div>
    <div className='mx-4 my-6 flex flex-row sphone:flex-col  justify-between items-center '>
        <div className='w-[140px] sphone:w-full sphone:mx-8 zxl:mx-8 '>
          <button className='rounded-xl bg-white px-4 sphone:px-2 py-1 text-black w-full sphone:my-4  '>Filter by : </button>
        </div>
        <div className='w-[140px] sphone:w-full sphone:mx-8 zxl:mx-8'>
           <button className='rounded-xl bg-white px-4 py-1 text-black w-full '>Sort by : </button>
        </div>
    </div>
    </div>
  )
}

export default Category
