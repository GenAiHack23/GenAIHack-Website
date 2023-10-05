// import React from "react";
import {Link} from 'react-router-dom';
import "./navbar.css";

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav">
                <div className="div">
                    <Link to='/Home'>
                        <div className="text-wrapper">Home</div>
                    </Link>
                    <Link to='/about_us'>
                        <div className="text-wrapper-2">About Us</div>
                    </Link>
                    <Link to='/experts'>
                        <div className="text-wrapper-3">Experts</div>
                    </Link>
                    <Link to='/timeline'>
                        <div className="text-wrapper-4">Time Line</div>
                    </Link>
                    <Link to='/sponsor'>
                        <div className="text-wrapper-5">Sponsor</div>
                    </Link>
                </div>
                <div className="group">
                    <div className="overlap-group-wrapper">
                        <div className="overlap-group">
                            <Link to='/Register'>
                                <div className="text-wrapper-6">Register</div>
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Navbar;
