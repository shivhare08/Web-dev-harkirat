import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import ContextApi from './ContextAPi.jsx'
import MemoFun from './Memo.jsx'
import RecoilSelector from './Selector.jsx'

createRoot(document.getElementById('root')).render(
  <>
    {/* <App /> */}
    {/* <ContextApi/> */}
    <MemoFun/>
    {/* <RecoilSelector/> */}
  </>
    
  
)
