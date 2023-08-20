import React from 'react'

const Sql = () => {
  return (
     <div className='flex items-center flex-col justify-center bg-yellow-100 h-[600px] w-full justify-center flex-wrap font-bold text-black'>
     <div className='flex flex-col items-center'  >
     <h1 className='text-7xl text-black'>SQL</h1>
<h2 className='text-xl'>A language for accessing databases</h2>
<button className='h-[40px] w-[200px] bg-green-500 text-white  m-[20px] rounded-3xl'>learn css</button>
<button className='h-[40px] w-[200px] bg-black-500 text-black  m-[8px] rounded-3xl'>Css Reference</button>
<button className='h-[40px] w-[200px] bg-pink-500 text-black  m-[8px] rounded-3xl'>Get Started</button>
 </div>

 <div className='flex flex-col h-[400px] w-[400px] bg-slate-300'>
       <h1 className='text-2xl text-left text-black m-3 '>SQL Example</h1>
      <input type="text" name="" id="" className='h-[250px] w-[350px] ml-5 ' />
      <button className='h-[40px] w-[200px] ml-10 mt-5 rounded-3xl text-cyan-100'> Try it yourself</button>
       </div>
     </div>
  )
}

export default Sql