import React from 'react'

const Ese = () => {
  return (
     <div className='flex flex-col bg-zinc-900 h-min w-full   p-[50px] text-center justify-center  text-2xl text-white font-bold'>
          <h1 className='flex text-center justify-center text-5xl  m-6'>Exercises and Quizzes</h1>
        <h3 className='flex text-center justify-center text-xl  text-white m-6'>Test your skills!
</h3>
<div className='flex flex-wrap gap-8 justify-center text-center'>
<div className='h-[200px] w-[550px] bg-green-500  rounded-2xl  flex flex-col font-semibold   text-center justify-center'> EXERCISE</div>
      <div className='h-[200px] w-[550px] bg-slate-500 rounded-2xl  flex flex-col font-semibold   text-center justify-center'> QUIZZIES </div>
</div>
     </div>
  )
}

export default Ese