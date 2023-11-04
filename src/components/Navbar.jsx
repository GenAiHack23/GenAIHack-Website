// import React from "react";
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';
import "./navbar.css";
const icon = {
  hidden: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)"
  },
  visible: {
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)"
  }
}

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav">
                <div className="div2">
                    <Link to='/Home'>
                        <motion.div className="text-wrapper" whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.1 }}>Home</motion.div>
                    </Link>
                    <Link to='/about_us'>
                        <motion.div className="text-wrapper-2" whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.1 }}>About Us</motion.div>
                    </Link>
                    <Link to='/experts'>
                        <motion.div className="text-wrapper-3" whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.1 }}>Experts</motion.div>
                    </Link>
                    <Link to='/timeline'>
                        <motion.div className="text-wrapper-4" whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.1 }}>Time Line</motion.div>
                    </Link>
                    <Link to='/sponsor'>
                        <motion.div className="text-wrapper-5" whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.1 }}>Sponsor</motion.div>
                    </Link>
                </div>
                <Link to='/Register'>
                <motion.div className="group" 
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 1.1 }}
                    
                >
                        <div className="overlap-group-wrapper">
                            <div className="overlap-group">
                                
                                    <div className="text-wrapper-6">Register</div>
                                
                                
                            </div>
                        </div>
                    </motion.div>
                </Link>
            </div>
        </div>
    );
};


export default Navbar;
