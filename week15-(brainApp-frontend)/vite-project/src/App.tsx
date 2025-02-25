import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./Pages/Pages"
import Signup from "./Pages/Signup"
import Signin from "./Pages/Signin"
import Youtube from "./Pages/youtube"
import Twitter from "./Pages/twitter"
import { Home } from "./Pages/Home"




function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<Signup></Signup>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/section/youtube" element={<Youtube/>} />
          <Route path="/section/twitter" element={<Twitter/>} />
          
        </Routes>
      </BrowserRouter>
  
  )
}

export default App











