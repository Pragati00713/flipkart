// hook is a special    function that lets you "hook into " react CSSFontFeatureValuesRule

import { useState } from "react";

// example  useState


import React from 'react'
 
const Even = () => {
     const [name,setName]=useState(0)
     console.log(name);
  return (
    <>
    <h1>{name}</h1>
       <button onClick={()=> setName(name+2)} className='bg-gray-200 h-[100px] w-full'>btn1</button><br />
       <button onClick={()=> setName(name-2)} className='bg-gray-300 h-[100px] w-full'>btn</button>
    </>
    
  )
}

export default Even

