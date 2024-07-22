import React, { useState } from 'react';
import './Navbar.css';
import nav_gif from '../assets/pc-logo.gif';
import nav_logo from '../assets/core.png';

function Navbar() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <div className='navbar'>
      <div className="nav-left">
        <div className="navbar-logo">
          <div className="navbar-gif">
            <img src={nav_gif} alt="" />
          </div>
          <div className="navbar-image">
            <img src={nav_logo} alt="" />
          </div>
        </div>
        <div className="nav-burger" onClick={toggleNav}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul className={`nav-list ${isNavVisible ? 'show' : ''}`}>
          <li>Dashboard</li>
          <li>Stakes</li>
          <li>Utilities</li>
          <li>Collector</li>
          <li>Docs</li>
        </ul>
      </div>
      <div className="nav-right">
        <button>Connect Wallet</button>
      </div>
    </div>
  );
}

export default Navbar;
