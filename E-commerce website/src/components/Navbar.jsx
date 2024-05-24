import React from 'react';
import logo from "../assets/logo.jpeg";
import { BsCart4 } from "react-icons/bs";
import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <NavLink to="/">
                <img src={logo} alt="Logo" className="navbar-logo" />

            </NavLink>

            <NavLink to="/">
                <p className="navbar-link">Home</p>
            </NavLink>
            <NavLink to="/cart">

                <div className="navbar-cart">
                    <BsCart4 />
                </div>
            </NavLink>


        </div>
    );
}

export default Navbar;
