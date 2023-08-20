import React from 'react'

const Container = () => {
  return (
     <div className='flex flex-col bg-black h-screen w-full  gap-8 p-[50px] text-center justify-center  text-2xl text-white'>
          <h1 className='text-5xl'>Code Editor</h1>
          <h3>With our online code editor, you can edit code and view the result in your browser
</h3>
<img src="https://www.w3schools.com/codeeditor.gif" alt="" className='h-[400px] w-[1000px] pl-48'/>
<button className='flex h-[50px] w-[380px] bg-green-600 ml-48  rounded-xl p-1'> Try Frontend Editor (HTML,CSS,JS)</button>
<button className='flex h-[50px] w-[420px] bg-orange-400 ml-48  rounded-xl p-1'>  Try Backend editor(Python,Java,PHp)</button>


     </div>
  )
}

export default Container