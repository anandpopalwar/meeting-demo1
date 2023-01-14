import React from "react";
import { Link } from "react-router-dom";
// import Svg from "./logo"
function Navbar() {
    return (
        
        <div className="navbar-container">
      <div className="nav">

                <div className="navbar-left">
                    <Link to='/' >MEET.ing</Link>
                    
                </div>
                <div className="navbar-right">
                    <Link to='/addmeeting' >Add Meeting</Link>
                    <Link to='/allmeeting' >All Meeting</Link>
                    <Link to='/bookmarks' >Bookmarks</Link>
                                  
                </div>
                
      </div>
           

        </div>
    )
}
export default Navbar;


