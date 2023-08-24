import React from 'react'

export const Nav = () => {
  return (
    <>
   
    <div className='flex h-[50px] w-full  ' >
   <nav className='flex h-[50px] w-full bg-white text-slate-400 justify-evenly items-center flex-wrap'>
     <ul className='flex  space-x-3  '>
          <li className='flex text-red'><a href="#">MYKALYAN</a></li>
          <li><a href="#">MEDIA</a></li>
          <li><a href="#">KALYAN NEWS</a></li>
          <li><a href="#">GOLD RATES</a></li>
          <li><a href="#">DIGITAL GOLD</a></li>
          
     </ul>
<ul className='flex space-x-3 '>
     <li><a href="#">STORE LOCOTER</a></li>
     <li><a href="#">FEEDBACK</a></li>
     <li><a href="#">CONTACT</a></li>
     <li><a href="#">ABOUT</a></li>
    
</ul>

    </nav>
    </div>
    </>
  )
}
export default Nav
