'use client'

import React, { useState } from 'react'
import {categoryList, colorsByData, productData} from '../utils/productsData'
import {motion} from 'framer-motion'
import { useCartContext } from '../utils/cartContext'

function Category() {
  
  const { setSelectedCategory: setContextSelectedCategory } = useCartContext();
  const { selectedCategory, setSelectedCategory, setSortType,sortType,filterColor, setFilterColor } = useCartContext();
  

  const allColors = colorsByData(productData)

  const categoryClick = (categoryTitle) => {
    setSelectedCategory(categoryTitle);
    setContextSelectedCategory(categoryTitle); 
  };
  const handleSortChange = (event) => {
    const newSortType = event.target.value;
    console.log(newSortType)
    setSortType(newSortType);    
  };


  return (
    
    <div className='zxl:justify-center zxl:items-center zxl:flex zxl:flex-col
    xl:justify-center xl:items-center xl:flex xl:flex-col
    md:justify-center md:items-center md:flex md:flex-col  '>

    
    <div className='grid grid-cols-4 sphone:grid-cols-2 gap-4 mx-2 mt-10 overflow-hidden zxl:w-[400px] xl:w-[400px] md:w-[400px] '>
      {categoryList.map((category) => (
       
        <div key={category.id} onClick={()=> selectedCategory != category.title ? categoryClick(category.name) : "" }
        className={` text-[#641960d0] font-normal flex flex-col justify-center
         items-center rounded-xl  hover:bg-[#641960d0] hover:shadow-2xl hover:text-white hover:font-semibold
         ${category.title===selectedCategory? 'bg-[#641960d0] text-[#FFFF] font-semibold' : "bg-[#ffff]"}
         `}>
          <span className=' my-2 '>{category.title}</span>
          <motion.img src={category.img} alt={category.title}  
          className={`my-2${category.title===selectedCategory? ' scale-110' : ""}
          `}
           
           whileHover={{scale:1.1, rotate : category.title =='Donuts' ? 360 : 0,transition:{duration:category.title =='Donuts' ? 0.4 : 0.2}}}
           />
        </div>
      ))}
    </div>
    <div className='mx-4 phone:mx-1 sm:phone:mx-2 my-6 flex flex-row sphone:flex-col  justify-between items-center '>
        <div className='w-[180px] phone:w-[160px] sphone:w-full sphone:mx-8 zxl:mx-4 xl:mx-4 md:mx-4  '>
          <select className='rounded-xl bg-white px-4 sphone:px-2 py-1 text-black w-full sphone:my-4  '
          value={filterColor}
          onChange={(e) => setFilterColor(e.target.value)}>
          <option value="default">Filter by Color</option>
          {allColors?.map((color) =>(
            <option value={color}>{color}</option>
          ))}       
        
          </select>
        </div>
        <div className='zxl:w-[180px] xl:w-[180px]  phone:w-[160px] sphone:w-full sphone:mx-8 zxl:mx-4 xl:mx-4 md:mx-4'>
           <select className='rounded-xl bg-white px-4 py-1 text-black w-full '  onChange={handleSortChange}
           value={sortType}>
           <option value="default">Sort Products</option>
        <option value="lowToHigh">Price: Low to High</option>
        <option value="highToLow">Price: High to Low</option>
        <option value="aToZ">Name: A to Z</option>
        <option value="zToA">Name: Z to A</option>
        </select>
        </div>
    </div>
    </div>
  )
}

export default Category
