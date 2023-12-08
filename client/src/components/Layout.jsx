import React from "react";
import Navbar from "./NavBar.jsx"
import Footer from "./Footer.jsx"

const Layout = ({children}) => {
    return (
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    )
}
export default Layout