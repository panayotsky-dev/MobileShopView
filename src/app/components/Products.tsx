"use client";

import React, { useContext, useEffect, useState } from "react";
import { productData } from "../utils/productsData";
import { useCartContext } from "../utils/cartContext";
import { motion } from "framer-motion";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Products() {
  const { addToCart, allProducts,selectedCategory,filteredProducts } = useCartContext();
  const [showedProducts, setShowedProducts] = useState(6);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const notify = (product) => {
    toast(`${product.title} added to the cart`)
    addToCart(product.id)
  }
  useEffect(() => {
    // Update window width when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      console.log(windowWidth)
    };

    
    window.addEventListener("resize", handleResize);

    // Clean up event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  

  useEffect(() => {}, [showedProducts,selectedCategory,]);

  return (
    <div className=" justify-center flex flex-col items-center mb-2 zxl:mx-[320px] md:mx-[120px]">
<ToastContainer
position="bottom-right"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover={false}
theme="colored"
/>
      <div className=" grid phone:grid-cols-2 md:grid-cols-2 zxl:grid-cols-3 xl:grid-cols-3 sm:grid-cols-2 sphone:grid-cols-1 gap-2 mx-2 items-center justify-center      ">
        {filteredProducts.length > 0 ? filteredProducts.slice(0, showedProducts).map((product,index) => (
          <div
            key={product.id}
            className={` flex flex-col justify-center items-center rounded-xl  h-full
         ${product.Instock === 0 ? "bg-gray-400 py-5" : ""}
         ${index % 2 == 0 ? "bg-white" : ""}
         ${index % 2 != 0 ? "bg-slate-600 text-white" : ""}`}
          >
            <div className=" justify-center items-center flex flex-col  text-center ">
              <h1 className="mt-4  text-xl">{product.title}</h1>
              <h2 className="mt-2 text-sm">{product.description}</h2>
            </div>

            <motion.img
              src={product.image}
              alt={product.title}
              className="my-2 max-h-[600px] "
              whileHover={{ scale: 1.15 }}
            />
            <div className="flex flex-col zxl:flex-col zxl:justify-between xl:flex-row-2 xl:justify-between   zxl:mx-4 items-center justify-center   rounded-xl ">
              <h1 className=" flex justify-center items-center">Category : {product.category}</h1>
              <span className=" flex justify-center items-center mx-2">
                {" "}
                Color:
                <span
                  className={`bg-${product.Filtering.Color}-400 px-2 rounded-md
               ${product.Filtering.Color == "green" ? "bg-green-400" : ""}
               ${product.Filtering.Color == "blue" ? "bg-blue-400" : ""}
               ${product.Filtering.Color == "purple" ? "bg-purple-400" : ""}
               ${product.Filtering.Color == "red" ? "bg-red-400" : ""} `}
                >
                  {product.Filtering.Color}
                </span>
              </span>
              <span
                className={`${
                  product.id % 2 == 0 ? " text-white" : "text-black"
                }`}
              >
                InStock :{" "}
                <span
                  className={` ${product.Instock === 0 ? "text-red-400" : ""} `}
                >
                  {product.Instock}
                </span>
                
              </span>
              <span>Price: ${product.price}</span>
            </div>
            {product.Instock > 0 && (
              <motion.button
                whileHover={{ scale: 1.1 }} whileTap={{scale:0.95}}
                className={`bg-slate-500 rounded-xl font-light px-4 my-8  ${
                  product.id % 2 === 0
                    ? "bg-white text-slate-800 font-semibold "
                    : "text-white "
                }`}
                onClick={() => notify(product)}
              >
                Add to Cart
              </motion.button>
            )}
          </div>
        ))
        : (
          <div>We are sorry but we don't have anything with that criteria!</div>
        )}
      </div>
      {showedProducts < filteredProducts.length && (
        <button
          className="rounded-xl  mt-4 mb-2 px-8 py-2 bg-white  font-semibold "
          onClick={() => setShowedProducts(showedProducts + 6)}
        >
          Load More
        </button>
      )}
    </div>
  );
}

export default Products;
