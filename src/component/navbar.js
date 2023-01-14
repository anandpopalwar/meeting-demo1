import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar-container">
            <div className="nav">
                <div className="navbar-left">
                    <Link to='/' >MEET.ing</Link>
                </div>
                <div className="navbar-right">
                    <Link to='/allmeeting' >All Meeting</Link>
                    <Link to='/bookmarks' >Bookmarks</Link>
                    <Link to='/addmeeting' >Add Meeting</Link>
                </div>
            </div>
        </div>
    )
}
export default Navbar;


