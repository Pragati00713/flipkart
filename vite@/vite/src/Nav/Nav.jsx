import React from 'react'

const Nav = () => {
  return (
   <div className='flex  '>
     <div className='flex h-[70px] w-full bg-black text-sm m-0 p-0 justify-start items-center gap-6'>
     <img src="
     data:image/png;base64,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" alt="" className='flex m-0 p-0 h-[50px] w-[140px] justify-start '/>
     <h2 className='flex h-[90px] items-center  text-white'>Select your address</h2>
     <div className='flex '>
     <input type="text"  placeholder='Search Amozon.in' className='flex h-[50px] w-[600px] justify-center items-center '/>
    <img src="data:image/png;base64,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" alt="" className='flex h-[50px] w-[70px] justify-end items-center' />

     </div>
     <h2 className='flex h-[90px] items-center  text-white'>Accounts & Lists</h2>
     <h2 className='flex h-[90px] items-center  text-white'>Return and order</h2>
   <img src="data:image/png;base64,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" alt="" className='flex h-[40px] w-[90px] justify-end' />
    
     </div>
   </div>
  )
}

export default Nav