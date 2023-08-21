import { useState } from "react";

export let Odd = ()=>{
let [value, setValue]= useState(0)

return(
     <>
      <h1>hello</h1>


      {value }
      <button onClick={()=> setValue(value+11)} className='bg-gray-200 h-[100px] w-full'>btn1</button><br />
       <button onClick={()=> setValue(value-1)} className='bg-gray-300 h-[100px] w-full'>btn</button>
     </>
)
}