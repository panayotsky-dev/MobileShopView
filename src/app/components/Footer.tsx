'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import {motion} from'framer-motion'
import { FaPhone } from "react-icons/fa";

type Props = {}

function Footer({}: Props) {
    const phoneNumbers = ['0888 xxx xxxx','0898 xxx xxx']
    const [rotate, setRotate] = useState(false);
  return (
    <footer className="sticky  phone:h-[45px] sm:h-[45px] md:h-[55px] zxl:h-[70px]
      grid grid-cols-3 bottom-0  text-black font-bold  bg-white w-full justify-center items-center  overflow-hidden">
      
        
      
      
    
       
       <div className='mx-4 justify-center flex phone:whitespace-nowrap sm:whitespace-nowrap'>
        <Link
          href="/"
          className="text-sm  mx-4  hover:text-red-600"
        >
          <motion.p whileHover={{ scale: 1.1 }}whileTap={{scale:0.95}}
           
           
           >Go to top </motion.p>
        </Link>
        </div>
     
       
      <div className='col-start-2  col-end-3 place-content-center justify-center items-center flex'>
      <Link href="https://github.com/panayotsky-dev" target='_blank'>
          <motion.img
            src="avatar.png"
            alt="logo"
            className="phone:h-[45px] sm:h-[45px] md:h-[55px] zxl:h-[70px] flex-shrink-0 "
            whileInView={{opacity: 1,x:0,rotate:360}}
            initial={{opacity:1,x:-300,}}
            animate={{ opacity: 1,x:0,rotate:360 }}
            transition={{duration:1.5,type:"spring",stiffness:100,}}
            whileTap={{scale:0.95}}
           
          />
        </Link>
        </div>
        <div className='justify-center items-center flex'>
        <Link
          href="tel:0888 XXX XXX" target='_blank'
          className="text-[12px]  phone:-ml-4 whitespace-nowrap  mx-4  hover:text-red-600"
        >
          <motion.p whileHover={{ scale: 1.1 }} whileTap={{scale:0.95}}> 0888 XXX XXX </motion.p>
        </Link>
        </div>
      
    </footer>
  )
}

export default Footer