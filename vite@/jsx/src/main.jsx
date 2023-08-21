import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Even from './Even.jsx'
import { Odd } from './Odd.jsx'
import Arpan from './Arpan.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Even />
    <Odd/>
    <Arpan />
  </React.StrictMode>,
)
