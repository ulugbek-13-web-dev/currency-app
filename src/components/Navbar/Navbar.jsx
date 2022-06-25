import React from "react";
import NavbarDesk from "./NavbarDesk";
import NavSidebar from "./NavSidebar";

function Navbar(){
    return(
        <div className="main-navbar">
            {(window.innerWidth > 480) ? <NavbarDesk /> : <NavSidebar/>  }
        </div>
    )
}
export default Navbar