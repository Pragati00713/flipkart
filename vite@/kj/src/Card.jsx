import React from 'react'

const Card = () => {
  return (
    <>
    <div className='flex h-[90px]  w-full bg-red-100 justify-center items-center flex-wrap gap-8 flex-col'>
<div className='flex h-[80px] w-full bg-red-100 justify-center items-center'>
<h1 className='flex text-5xl underline  justify-center items-center' >M O S T   L O V E D</h1>
</div>
</div>

<div className='flex h-[700px] w-full bg-red-100 justify-center items-center flex-wrap gap-6 '>

<div className='flex h-[600px] w-[30%] flex-wrap justify-center items-center flex-col  '>
     <img src="https://www.kalyanjewellers.net/brands/images/most-love/miracleCollection.jpg" alt=""  className='flex h-[400px] w-[500px] justify-center items-center  border-solid border-8 border-white ..." hover:opacity-5 cursor-pointer   '/>
      <h1 className='flex h-[50px] w-[500px] text-3xl text-blue-900 underline justify-center '>MIRACLE PLATE COLLECTION</h1>
      <h1 className='flex h-[50px] w-[500px] text-xl text-blue-900  justify-center' >Seeing Is Believing</h1>
</div>
<div className='flex h-[600px] w-[30%] flex-wrap justify-center items-center flex-col  '>
     <img src="https://www.kalyanjewellers.net/brands/images/most-love/kidsCollection.jpg" alt=""  className='flex h-[400px] w-[500px] justify-center items-center border-solid border-8 border-white ..." hover:opacity-5 cursor-pointer '/>
     <h1 className='flex h-[50px] w-[500px] text-3xl text-blue-900 underline justify-center '>MIRACLE PLATE COLLECTION</h1>
      <h1 className='flex h-[50px] w-[500px] text-xl text-blue-900  justify-center' >Seeing Is Believing</h1>
</div>
<div className='flex h-[600px] w-[30%] flex-wrap justify-center items-center flex-col  '>
     <img src="https://www.kalyanjewellers.net/brands/images/most-love/foreoverLoveCollection.jpg" alt=""  className='flex h-[400px] w-[500px] justify-center items-center  border-solid border-8 border-white ..." hover:opacity-5 cursor-pointer'/>
     <h1 className='flex h-[50px] w-[500px] text-3xl text-blue-900 underline justify-center '>MIRACLE PLATE COLLECTION</h1>
      <h1 className='flex h-[50px] w-[500px] text-xl text-blue-900  justify-center' >Seeing Is Believing</h1>
</div>
</div>

    
    </>
  ) 
}

export default Card