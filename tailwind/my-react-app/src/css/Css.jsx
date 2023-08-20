import React from 'react'

const Css = () => {
  return (
    <div className='flex items-center flex-col justify-center bg-orange-200 h-[600px] w-full justify-center flex-wrap font-bold'>
       <div className='flex flex-col items-center'  >
<h1 className='text-8xl'>CSS</h1>
<h2 className='text-xl'>The language for styling web pages</h2> </div>
<button className='h-[40px] w-[200px] bg-green-500 text-white  m-[20px] rounded-3xl'>learn css</button>
<button className='h-[40px] w-[200px] bg-black-500 text-black  m-[8px] rounded-3xl'>Css Reference</button>
<button className='h-[40px] w-[200px] bg-black text-white  m-[8px] rounded-3xl'>Get Started</button>
       <div className='flex flex-col h-[400px] w-[400px] bg-slate-300'>
       <h1 className='text-2xl text-left m-3'>CSS Example</h1>
      <input type="text" name="" id="" className='h-[250px] w-[350px] ml-5 ' />
      <button className='h-[40px] w-[200px] ml-10 mt-5 rounded-3xl text-cyan-100'> Try it yourself</button>
       </div>

    </div>
  )
}

export default Css