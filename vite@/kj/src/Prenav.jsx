import React from 'react'

const Prenav = () => {
  return (
    <div className='flex h-[100px] bg-white w-full'>
     <nav className='flex justify-around h-[90] w-full  items-end text-3xl  '>
          <ul className='flex justify-around h-[90] w-full  items-end text-2xl text-black '>
               <li className='flex  hover:text-red-500 hover:underline '> <a href="#">Our Brands</a></li>
               <li className='flex  hover:text-red-500 hover:underline '><a href="#">Our Brands</a></li>
               <li className='flex  hover:text-red-500 hover:underline '><a href="#">Our Brands</a></li>
               <li className='flex  hover:text-red-500 hover:underline '><a href="#">Our Brands</a></li>
               </ul>
               <img src="https://www.kalyanjewellers.net/images/kalyan_logo.svg" alt="" className='flex h-[130px] w-[200px]' />
<ul className='flex justify-around h-[90] w-full  items-center text-2xl text-black ' >
               <li className='flex  hover:text-red-500 hover:underline '><a href="#">Our Brands</a></li>
               <li className='flex  hover:text-red-500 hover:underline '><a href="#">Our Brands</a></li>
               <li className='flex  hover:text-red-500 hover:underline '><a href="#">Our Brands</a></li>
               <li className='flex  hover:text-red-500 hover:underline '><a href="#">Our Brands</a></li>
          </ul>
     </nav>


    </div>
  )
}

export default Prenav