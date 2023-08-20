import React from 'react'
import "./Home.css"
const Home = () => {
  return (
    <div id='home'>
      <div className='navbar'>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>C</li>
          <li>C++</li>
          <li>JAVASCRIPT</li>
          <li>JAVA</li>
          <li>RUBY</li>
          <li>REACT</li>
          <li>BOOTSTRAP</li>
          <li>PHP</li>
          <li>HOW TO</li>
          <li>W3 CSS</li>
          <li>DJANGO</li>
          <li>JQUERY</li>
          <li>R</li>
          <li>SQL</li>
          <ul>
            <li>©</li>
            <li>©</li>
            <li button>click</li>
          </ul>
        </ul>

      </div>
      <div id='back'>
        <h1>Learn to Code </h1>
        <h3>With the world's largest web developer site.</h3>
        <input type="text" placeholder='Search for tutorial html e.g'  />
         <h2>Not Sure Where To Begin?</h2>
      </div>
     
    </div>
  )
}

export default Home