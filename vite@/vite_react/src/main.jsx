import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Nav from './Nav.jsx'
import Pre from './Pre.jsx'
import Bg from './Bg.jsx'
import Beauty from './Beauty.jsx'
import Product from './Product.jsx'
import Reena from './Reena.jsx'
import Footer from './Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Nav />
    <Pre />
    <Bg />
    <Beauty />
    <Product />
    <Reena />
    <Footer />
  </React.StrictMode>,
)
