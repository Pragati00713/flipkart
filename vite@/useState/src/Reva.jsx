import { useState } from "react"

const Str = () => {
     const [box, setBox] = useState("")
     const [arr, setArr] = useState([])
     
     const Samiksha = (e)=>{
       setArr([...arr,box])
       setBox()
         console.log(arr);
       
     } 
   return (
     <>
       <div className='h-screen w-full justify-center items-center'>
         <input type="text" onChange={(e)  => setBox(e.target.value)} value={box} />
         <button type='button' onClick={(e) =>Samiksha(e)} className='bg-black text-white p-[10px]'>submit</button>
         <h1>{box}</h1>
       </div>
     </>
   )
 }
 
 export default Str