"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Footer({}: Props) {
  return (
    <nav
      className="px-2 phone:h-[45px] zxl:h-[70px] sticky bottom-0  grid grid-cols-2 bg-slate-500 
        items-center  hover:shadow-xl overflow-hidden"
    >
      <div className=" flex flex-row items-center ">
        
        <motion.img
          src="avatar.png"
          alt="avatar"
          className="phone:h-[45px] zxl:h-[60px]"
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -200 }}
          exit={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        />
        <motion.div className="  justify-center flex flex-col w-full ">
            <div className="grid grid-cols-2  justify-center items-center w-full mx-4">
                <div>
                <a href="https://github.com/panayotsky-dev" target="_blank">
            <h1>Created by: <motion.span whileHover={{scale:1.1}} whileTap={{scale:0.9}}>clickable</motion.span></h1></a>
            <h1>Some quote by Paulo Coelho</h1>
            <h1>to look smarter</h1>
                </div>
                <div>
                <a href="https://github.com/panayotsky-dev" target="_blank">
            <h1>Created by: <motion.span whileHover={{scale:1.1}} whileTap={{scale:0.9}}>clickable</motion.span></h1></a>
            <h1>Some quote by Paulo Coelho</h1>
            <h1>to look smarter</h1>
                </div>

            </div>

        </motion.div>
      </div>
      <div>
        <motion.img
          src="logo.png"
          alt="logo"
          className="phone:h-[45px] zxl:h-[60px]"
          whileInView={{}}
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          exit={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
        />
      </div>
    </nav>
  );
}

export default Footer;
