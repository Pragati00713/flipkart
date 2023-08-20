import React from 'react'

const Img = () => {
  return (
     <div className='flex flex-col bg-zinc-900 h-screen w-full   p-[50px] text-center justify-center  text-2xl text-white'>
          <h1 className='flex text-center justify-center text-5xl  m-6'>W3Schools Spaces</h1>
          <h3 className='flex text-center justify-center '>If you want to create your own website, check out W3Schools Spaces.</h3>
          <h3 className='flex text-center justify-center'>It is free to use, and does not require any setup:</h3>
          <img src="https://www.w3schools.com/how-spaces-works3.png" alt="" className='flex h-[450px] mt-10 '  />
          <button className='flex h-[50px] w-[440px] bg-green-600 ml-96 rounded-xl p-1 mt-6 text-center justify-center'> Learn More</button>
     </div>
  )
}

export default Img