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
    <header className="sticky flex flex-row  bottom-0  text-black font-bold  bg-white w-full  overflow-hidden">
      
        <Link href="https://github.com/panayotsky-dev" target='_blank'>
          <motion.img
            src="avatar.png"
            alt="logo"
            className="h-[60px] flex-shrink-0 mx-4 justify-center items-center"
            whileInView={{opacity: 1,x:0,rotate:360}}
            initial={{opacity:1,x:-300,}}
            animate={{ opacity: 1,x:0,rotate:360 }}
            transition={{duration:1.5,type:"spring",stiffness:100,}}
           
          />
        </Link>
      
      
      <motion.section
        className=" items-center flex-row justify-between w-full  xl:pl-[100px] 2xl:pr-[320px] md:pr-[20px] zxl:pr-[320px] sm:pr-[120px] inline-flex"
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
      >
       
       
        <Link
          href="/"
          className="text-sm  mx-4  hover:text-red-600"
        >
          <motion.p whileHover={{ scale: 1.1 }}>Go back to top </motion.p>
        </Link>
      
     
       
      </motion.section>
    </header>
  )
}

export default Footer