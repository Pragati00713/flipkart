import React from 'react'

const Pre = () => {
  return (
   <div>
     <div className=' flex'>
          <nav className='flex bg-slate-800 w-full h-[40px] text-white gap-3  '>
               <ul className='flex justify-center gap-8 items-center'>
                    <li><a href="#">All</a></li>
                    <li><a href="#">Amozon mini tv</a></li>
                    <li><a href="#">Sell</a></li>
                    <li><a href="#">Best Seller</a></li>
                    <li><a href="#">Today's Deals</a></li>
                    <li><a href="#">Mobiles</a></li>
                    <li><a href="#">Custumer Service</a></li>
                    <li><a href="#">Prime</a></li>
                    <li><a href="#">Eletronic</a></li>
                        </ul> <br />
                      <ul className='flex justify-center gap-16 items-center'>
                         <li><a href="#">New Launch Mobiles</a></li>
                         <li><a href="#">Eletronic And More</a></li>
                         <li><a href="#">Shop Now</a></li>
                       </ul>
          </nav>
     </div>
   </div>
  )
}

export default Pre