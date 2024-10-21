import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Todo  from './todo.jsx'
import Clock from './Clock.jsx'
import Again from './again.jsx'
createRoot(document.getElementById('root')).render(
  
    // {/* <App /> */}
    // {/* <Todo/> */}
    // <Clock/>
    <Again/>
)
