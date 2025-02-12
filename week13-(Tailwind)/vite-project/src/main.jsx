import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Positions from './Positions.jsx'
import OTPoptimal from './OTPoptimal.jsx'

createRoot(document.getElementById('root')).render(
  <>
    {/* <App /> */}
    {/* <Positions/> */}
    <OTPoptimal/>
  </>,
)
