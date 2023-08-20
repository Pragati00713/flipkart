import React from 'react'

const Img2 = () => {
  return (
     <div className='flex flex-col bg-sky-200 h-screen w-full   p-[50px] text-center justify-center  text-2xl text-black'>
          <h1 className='flex text-center justify-center text-5xl  m-6'>My Learning</h1>
          <h3 className='flex text-center justify-center '>Track your progress with our free "My Learning" program.

</h3>
<h3 className='flex text-center justify-center'>Log in to your account, and start earning points!
</h3>
<img src="https://www.w3schools.com/myl-green-off.png" alt=""  className='flex h-[300px] w-[1000px] justify-center mt-10 ml-20'/>
<button className='flex h-[50px] w-[440px] bg-green-600 ml-96 rounded-xl p-1 mt-6 text-center justify-center'> Sign up for free</button>
     </div>
  )
}

export default Img2