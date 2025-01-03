import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Link , Outlet, useNavigate } from "react-router-dom"

function Layout() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LayoutComp />}>
                        <Route path="*" element={<ErrorPage />}></Route>
                        <Route path="/home" element={<Home />}></Route>
                        <Route path="/about" element={<About />}></Route>
                        <Route path="/contact" element={<Contact />}></Route>
                        <Route path="/Blog" element={<Blog />}></Route>
                        <Route path="/Services" element={<Services />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}


function LayoutComp() {
    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <Link to="/home">Home by Link</Link>
                <Link to="/about">About by Link</Link>
                <Link to="/contact">Contact by Link</Link>
                <Link to="/Blog">Blog by Link</Link>
                <Link to="/Services">Services by Link</Link>
            </div>
            <center>
                <Outlet />
            </center>
            <center>
                <h1>Footer</h1>
            </center>
            
        </>
    )
}

function ErrorPage() {
    return (
        <>
            <h2>You entered Wrong Route</h2>
        </>
    )
}

function Home() {
    const navigate = useNavigate();
    useEffect(function(){
        setInterval(function(){
            navigate("/")
        },5000)
    },[])
    return (
        <>
            <h3>Hey this is home</h3>
        </>
    )
}

function About() {
    return (
        <>
            <h3>Hey this is About</h3>
        </>
    )
}

function Contact() {
    return (
        <>
            <h3>Hey this is Contact</h3>
        </>
    )
}

function Blog() {
    return (
        <>
            <h3>Hey this is Blog</h3>
        </>
    )
}

function Services() {
    return (
        <>
            <h3>Hey this is Services</h3>
        </>
    )
}
export default Layout