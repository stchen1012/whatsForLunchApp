  
import React from 'react';
import './Navbar.css'

const NavBar = (props) => {
    return(
        <div>
            <nav className = "teal lighten-4">
                <div className="nav-wrapper  teal lighten-4 mynav">
                    <a href="#" className="brand-logo">Whats for lunch?</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="/">Login</a></li>
                        <li><a href="/">Signup</a></li>
                    </ul>
                </div>
            </nav>  
        </div>

    )
}

export default NavBar