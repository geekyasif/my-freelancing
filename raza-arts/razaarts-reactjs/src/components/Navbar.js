import React from 'react';
import './Navbar.css'
import YoutubeBtn from './YoutubeBtn';

export default function Navbar() {
    return (
        <div className="navbar">

            <div className="navbar-container">
                
                <div className="brand">
                        <a href=""><img className="brand-logo" src="images/logo.jpg" alt="" /></a>
                        <a href=""><h1 className="brand-title">Raza Arts</h1></a>
                </div>

                <div className="nav-items">
                    <ul class="nav-ul">
                        <li className="nav-li">
                            <a href="" className="nav-link">Home</a>
                        </li>
                        <li className="nav-li">
                            <a href="" className="nav-link">Gallery</a>
                        </li>
                        <li className="nav-li">
                            <a href="" className="nav-link">Videos</a>
                        </li>
                        <li className="nav-li">
                            <a href="" className="nav-link">Contact us</a>
                        </li>
                    </ul>

                    <YoutubeBtn text="Visit Channel Now" />
                </div>

            </div>
            
        </div>
    )
}
