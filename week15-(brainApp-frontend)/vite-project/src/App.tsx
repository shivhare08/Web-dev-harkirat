import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./Pages/Pages"
import Signup from "./Pages/Signup"
import Signin from "./Pages/Signin"




function App() {
  return (
    
      <BrowserRouter>
        <Routes>
    
          <Route path="/signup" element={<Signup></Signup>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          
        </Routes>
      </BrowserRouter>
  
  )
}

export default App











