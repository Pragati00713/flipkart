import React, { useState } from 'react'

const Pragati = () => {
    
    const [arr, setArr] = useState([]);

    function eventHendler(e){
        e.preventDefault()
        setArr([...arr,e.target[0].value]);
        console.log(arr);
        e.target[0].value="";

    }

  return (
    <>
    <form onSubmit={(e)=>eventHendler(e)} >
        <input type="text"/>
        <button>click me!!</button>
    </form>
    <h1>{...arr} </h1>
    </>
  )
}

export default Pragati