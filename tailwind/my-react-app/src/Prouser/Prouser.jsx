import React from 'react'

const Prouser = () => {
     return (
          <div className='flex flex-col bg-slate-700 h-[500px] w-full   p-[50px] text-center justify-center  text-xl text-white font-bold '>
               <h1 className='flex text-center justify-center text-5xl  m-6'>Become a PRO User</h1>
               <h3 className='flex text-center justify-center text-red-300  m-6'>And unlock powerful features:</h3>
               <h3 className='flex text-center justify-center m-2 '>Browse W3Schools without ads</h3>
               <h3 className='flex text-center justify-center  m-2'>Website hosting (Includes Spaces PRO)
               </h3>
               <h3 className='flex text-center justify-center  m-2'>Access to our HTML Video Tutorial
               </h3>
               <button className='flex h-[45px] w-[400px] bg-green-600 ml-96 rounded-xl p-1 mt-6 text-center justify-center'> Learn More</button>

          </div>
     )
}

export default Prouser