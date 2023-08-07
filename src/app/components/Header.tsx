"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {FiShoppingCart} from 'react-icons/fi'
import {FaShoppingCart} from 'react-icons/fa'
import { useCartContext } from "../utils/cartContext";


function Header({cartProducts}) {
    const { cartCount } = useCartContext()
    const [isEmpty,setIsEmpty] = useState(true)

  return (
    <nav 
        className="px-2 h-[45px] sticky top-0 flex flex-row bg-slate-500 w-full
         justify-between items-center hover:bg-[#ffffff83] hover:shadow-xl overflow-hidden">
      <motion.img 
        src="logo.png" 
        alt="logo" 
        className="h-[45px]"
        animate={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        exit={{opacity:1,x:0}}
        transition={{type:"spring",stiffness:200,delay:0.2}}
       />
       <motion.img
        src="avatar.png" 
        alt="avatar" 
        className="h-[45px] "
        animate={{opacity:1,x:0}}
        initial={{opacity:0,x:-200}}
        exit={{opacity:1,x:0}}
        transition={{type:"spring",stiffness:100,}}
        />

        {cartCount === 0 ? (
            <motion.div className=" items-center justify-center flex w-[45px] "
            animate={{opacity:1,x:0}}
        initial={{opacity:0,x:200}}
        exit={{opacity:1,x:0}}
        transition={{type:"spring",stiffness:100,delay:0.2}}
        >
                    
                <FiShoppingCart />
            </motion.div>
        ) :
        (
            <motion.div className=" items-center justify-center flex w-[45px]">
                <motion.div className="rounded-full bg-red-400 w-6 -ml-8 flex mr-2 justify-center items-center text-center"
                animate={{opacity:1,x:0,y:0}}
                initial={{opacity:0,y:1000,x:100}}
                
                exit={{opacity:0,y:100,x:100}}>
                        <p className='text-sm text-white font-semibold mx-1 '
                        >{cartCount}</p>
                        </motion.div>
                <FaShoppingCart />
            </motion.div>
        )}
    </nav>
  );
}

export default Header;
