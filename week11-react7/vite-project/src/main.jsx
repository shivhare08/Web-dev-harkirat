import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import UseFetchData from './UseFetchData.jsx'
import UsePrev from './UsePrev.jsx'
import UseDebounces from './UseDebounced.jsx'

createRoot(document.getElementById('root')).render(
  <>
    {/* <App /> */}
    {/* <UseFetchData/> */}
    {/* <UsePrev/> */}
    <UseDebounces/>
  </>
    
  
)
