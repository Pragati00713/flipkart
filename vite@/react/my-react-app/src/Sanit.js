import { useState } from "react";
export let Sanit = () => {
      let [value ,setValue] = useState(0)
      return(
          <>
        <h2>my function....</h2>
    {value}
    <br/>
      <button onClick={()=>setValue(value+2)}>button 1</button>
      <button onClick={()=>setValue(value-2)}>button 2</button>
          </>
      )
}