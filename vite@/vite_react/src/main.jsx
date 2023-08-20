import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Nav from './Nav.jsx'
import Pre from './Pre.jsx'
import Bg from './Bg.jsx'
import Beauty from './Beauty.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Nav />
    <Pre />
    <Bg />
    <Beauty />
  </React.StrictMode>,
)
