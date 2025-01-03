import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import UseEff from './UseEff.jsx'
import Children from './Children.jsx'
import SPA from './SPA.jsx'
import Layout from './Layout.jsx'
import UseReference from './UseReference.jsx'
import Parent from './RollingUp.jsx'
import ContextApi from './ContextApi.jsx'
import RecoilLib from './RecoilLib.jsx'

createRoot(document.getElementById('root')).render(
  <>
    {/* <App /> */}
    {/* <UseEff/> */}
    {/* <Children/> */}
    {/* <SPA/> */}
    {/* <Layout/> */}
    {/* <UseReference/> */}
    {/* <Parent/> */}
    {/* <ContextApi/> */}
    <RecoilLib/>
  </>
)
