import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Nav from './Nav/Nav.jsx'
import Pre from './Pre.jsx'
import Travel from './Travel.jsx'
import Background from './Background.jsx'
import Beautyp from './Beautyp.jsx'
import Cards from './Cards.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Nav />
    <Pre />
    <Background />
    <Travel />
    <Beautyp />
   <Cards />
  
  </React.StrictMode>,
)
