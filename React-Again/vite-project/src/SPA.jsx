import { useEffect } from "react";
import {BrowserRouter , Routes , Route, Link, useNavigate} from "react-router-dom"

export default function SPA(){
    return(
        <>
            <h1>There are various pages</h1>
            {/* <div style={{display:"flex" , justifyContent:"space-evenly"}}>
                <a href="/">Home by 'a' tag</a>
                <a href="/about">About by 'a' tag</a>
                <a href="/contact">Contact by 'a' tag</a>
            </div> */}
            <BrowserRouter>
                <div style={{display:"flex" , justifyContent:"space-evenly"}}>
                    <Link to="/">Home by Link</Link>
                    <Link to="/about">About by Link</Link>
                    <Link to="/contact">Contact by Link</Link>
                </div>
                <Routes>
                    <Route path="*" element={<ErrorPage/>}></Route>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/about" element={<About/>}></Route>
                    <Route path="/contact" element={<Contact/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

function ErrorPage(){
    return(
        <>
            <h2>You entered Wrong Route</h2>
        </>
    )
}

function Home(){
    const navigate = useNavigate();
    useEffect(function(){
        setInterval(function(){
            navigate("/")
        },5000)
    },[])
    
    return(
        <>
            <h3>Hey this is home</h3>
        </>
    )
}

function About(){
    return(
        <>
            <h3>Hey this is About</h3>
        </>
    )
}

function Contact(){
    return(
        <>
            <h3>Hey this is Contact</h3>
        </>
    )
}