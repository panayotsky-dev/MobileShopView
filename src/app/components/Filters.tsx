import React from 'react'

function Filters() {
  return (
    <div className='mx-4 my-6 flex flex-row justify-between items-center '>
        <div className='w-[140px]'>
          <button className='rounded-xl bg-white px-4 py-1 text-black w-full '>Filter by : </button>
        </div>
        <div className='w-[140px]'>
           <button className='rounded-xl bg-white px-4 py-1 text-black w-full '>Sort by : </button>
        </div>
    </div>
  )
}

export default Filters