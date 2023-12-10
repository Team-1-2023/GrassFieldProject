import React from "react";
import Navbar from "./NavBar.jsx"
import Footer from "./Footer.jsx"
import { Outlet } from "react-router-dom";

const Layout = ({children}) => {
    return (
        <div>
            <Navbar/>
            <div className="h-fit">
           <Outlet/>
           </div>
            <Footer/>
        </div>
    )
}
export default Layout