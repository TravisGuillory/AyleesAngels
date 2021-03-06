import React from "react";
import {Link} from "react-router-dom";


export const Nav = () => {

    return (
       
        <nav className="navbar navbar-expand-lg   " id="mainNav">
            <div className="container">
                <Link className="navbar-brand" to="/">Aylee's Angels</Link>
                <button className="navbar-toggler " 
                        type="button" data-toggle="collapse" data-target="#navbarResponsive" 
                        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        
    );
};