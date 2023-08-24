import React, { useState } from 'react'
 
const Pragati = () => {
  const [inp,setInp] = useState("")
  const [inps,setInps] = useState("")
  const [inpst,setInpst] = useState("")
  const [inpstt,setInpstt] = useState("")
  const [inpsttt,setInpsttt] = useState("")
  const [arr,setArr] = useState([])

function Data(){
  setArr([...arr,inp,inps,inpst,inpstt,inpsttt])
  setInp("")
  setInps("")
  setInpst("")
  setInpstt("")
  setInpsttt("")
  

}

  return (
  <>
  <center>
  <form action="" className='h-[500px] bg-green-200 w-[500px] justify-center items-center border-solid border-2 border-sky-800 ..." mt-10 rounded-md' >
   
  <input type="text" placeholder='Enter your name' onChange={(e)=>setInp(e.target.value)} value={inp} className='flex h-[50px] w-[490px] justify-center  border-solid border-2 border-black-500 ..." rounded-md' />
  <input type="text"  placeholder="Enter your Email" onChange={(e)=>setInps(e.target.value)} value={inps} className='flex h-[50px] w-[490px] justify-center  border-solid border-2 border-black-500 ..."' />
  <input type="text" placeholder='Enter your Phone Number'  onChange={(e)=>setInpst(e.target.value)} value={inpst} className='flex h-[50px] w-[490px] justify-center  border-solid border-2 border-black-500 ..."' />
  <input type="text" placeholder='Enter your city'  onChange={(e)=>setInpstt(e.target.value)} value={inpstt} className='flex h-[50px] w-[490px] justify-center  border-solid border-2 border-black-500 ..."' />
  <input type="text" placeholder='Enter your address'  onChange={(e)=>setInpsttt(e.target.value)} value={inpsttt} className='flex h-[50px] w-[490px] justify-center  border-solid border-2 border-black-500 ..."' />
  <button type='button' onClick={()=>Data()} className='flex h-[50px] w-300px text-2xl bg-black text-white mt-5' >Submit your information</button>
  <h1>{...arr}</h1>
  </form>
  </center>
  </>
  )
}

export default Pragati