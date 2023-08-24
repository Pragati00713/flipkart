import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Nav } from './Nav.jsx'
import Prenav from './Prenav.jsx'
import Bg from './Bg.jsx'
import Card from './Card.jsx'
import New from './New.jsx'
import More from './More.jsx'
import Button from './Button.jsx'
import Images from './Images.jsx'
import Footer from './Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Nav />
    <Prenav />
    <Bg />
    <Card />
    <New />
    <More />
    <Button />
    <Images />
    <Footer />
  </React.StrictMode>,
)
