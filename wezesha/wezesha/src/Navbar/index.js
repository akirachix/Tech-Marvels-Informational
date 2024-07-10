import './index.css'
import React, { useState, useEffect } from 'react';
import { Squash as HamburgerIcon } from 'hamburger-react';
import { Cross as CloseIcon } from 'hamburger-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../images/logo.png'
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseClick = () => {
    setIsOpen(false);
  };
  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest('.links') === null && event.target.closest('.hamburger') === null) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('click', handleClickOutside, { capture: true });
    } else {
      document.removeEventListener('click', handleClickOutside, { capture: true });
    }
    return () => {
      document.removeEventListener('click', handleClickOutside, { capture: true });
    };
  }, [isOpen]);
  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="logopicture"/>
      <div className="navBar">
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Our Story</a>
        <a href="#">Products</a>
        <a href="#">Our Team</a>
      </div>
      <div className='hamburger'>
        <HamburgerIcon toggled={isOpen} size={40} toggle={handleHamburgerClick} />
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
            className="links"
          >
            <div className="back-button" onClick={handleCloseClick}>
              <IoMdClose size={40} />
            </div>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Our Team</a></li>
          </motion.div>
        )}
      </div>
    </div>
  );
};
export default Navbar;