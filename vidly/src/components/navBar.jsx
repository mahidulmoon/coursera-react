import React from 'react';
import { Link,NavLink } from 'react-router-dom';
const Navbar = () =>{
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" to="#">Navbar</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link className="nav-link" to="/movies">Movies <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/coustomers">Customers</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/rentals">Rentals</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link disabled" to="/" tabindex="-1" aria-disabled="true">Disabled</Link>
                </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;