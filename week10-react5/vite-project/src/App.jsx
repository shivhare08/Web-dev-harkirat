import { useState } from "react"
import UseRef from "./UseRef";
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom"

function App() {
  const [currentTab, settab] = useState("home");

  function changePage() {
    const value = document.getElementById("input-box").value
    settab(value);
  }

  return (
    <>
    <UseRef/>
      {/* <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div><h1>Home</h1></div>
        <div><h1>About</h1></div>
        <div><h1>Signin</h1></div>
      </div>
      <div>
        <h1>{currentTab}</h1>
        <input id="input-box" type="text" placeholder="write" />
        <button onClick={changePage}>done</button>
      </div> */}


      <BrowserRouter>
        {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link> */}
        {/* <Usenavigate/> */}
        {/* <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes> */}
      </BrowserRouter>
    </>
  )
}

function Layout() {
  return <div style={{height:"100vh"}}>
    <Header/>
    <div style={{height:"75vh"}}>
      <Outlet />  
    </div>    
    <Footer/>
  </div>
}

function Header(){
  return (
    <div style={{display :"flex" , justifyContent:"space-evenly" , backgroundColor:"black" , color:"white"}}>
      <div>
        <h2>Header =</h2>
      </div>
      <div>
        <h2>Home</h2>
      </div>
      <div>
        <h2>Contact</h2>
      </div>
      <div>
        <h2>Login</h2>
      </div>
    </div>
  )
}


function Footer(){
  return (
    <div style={{display :"flex" , justifyContent:"space-evenly" , backgroundColor:"black" , color:"white"}}>
      <div>
        <h2>Footer =</h2>
      </div>
      <div>
        <h2>Experience</h2>
      </div>
      <div>
        <h2>Logout</h2>
      </div>
      <div>
        <h2>Email</h2>
      </div>
    </div>
  )
}

function ErrorPage() {
  return (
    <>
      <h2>Sorry this page is not found</h2>
    </>
  )
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}

function About() {
  return (
    <div>
      <h2>about</h2>
    </div>
  )
}


//isko use krne se ye waps redirect lekr aayega jha aap chaaho
function Usenavigate() {
  const navigate = useNavigate();
  function redirectUser() {
    navigate("/")
  }
  return (
    <>
      <h2>Hey this is navigate component</h2>
      <button onClick={redirectUser}>go back</button>
    </>
  )
}

export default App
