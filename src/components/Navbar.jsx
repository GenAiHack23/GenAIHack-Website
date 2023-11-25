import React from "react";
import './navbar.css';
import { motion } from 'framer-motion';
import { Outlet, Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  const linkVariants = {
    active: {
      backgroundColor: '#f00',
      color: '#fff',
    },
    inactive: {
      backgroundColor: 'transparent',
      color: '#333',
    },
  };

  return (
    <>
      <div className='navbar-wrapper'>
        <div className='navbar'>
          <ul>
            <li className={isActive("/")}>
              <motion.div
                variants={linkVariants}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Link to="/">Home</Link>
              </motion.div>
            </li>

            <li className={isActive("/gen-ai")}>
              <motion.div
                variants={linkVariants}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Link to="/gen-ai">GenAI Hack</Link>
              </motion.div>
            </li>

            <li className={isActive("/timeline")}>
              <motion.div
                variants={linkVariants}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Link to="/timeline">Timeline</Link>
              </motion.div>
            </li>

            <li className={isActive("/sponsor")}>
              <motion.div
                variants={linkVariants}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Link to="/sponsor">Sponsor</Link>
              </motion.div>
            </li>

            <li className={isActive("/leaderboard")}>
              <motion.div
                variants={linkVariants}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Link to="/leaderboard">Leaderboard</Link>
              </motion.div>
            </li>

            <li className={isActive("/about")}>
              <motion.div
                variants={linkVariants}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Link to="/about">About Us</Link>
              </motion.div>
            </li>
          </ul>

          <motion.div whileHover={{ scale:1.1}}  whileTap={{ scale: 0.9 }}><button>Register</button></motion.div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
