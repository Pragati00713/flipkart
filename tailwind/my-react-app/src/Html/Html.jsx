import React from 'react'
import "./Html.css";
const Html = () => {
     return (
          <div id='html'>
            <div className='html'>
               <h1>HTML</h1>
               <h3>The language for building web pages</h3>
               <button className='b1'>Learn Html</button>
               <button className='b2'>Video Tutorial</button>
               <button className='b3'>Html Reference</button>
               <button className='b4'>Get Certified</button>
            </div>
            <div className='input'>
               <div className='box'>
                    <h2> Html Example</h2>
               <input type="text" />
               <button>Try it yourself</button>
               </div>
            </div>
          </div>
     )
}

export default Html