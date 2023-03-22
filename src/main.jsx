import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './dashboard/styles/global.scss'
import Device from './Components/Device'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Device/>
  </React.StrictMode>,
)
