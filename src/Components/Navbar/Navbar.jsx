import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
            <img src={nav_gif} alt="PC Logo" />
          </div>
          <div className="navbar-image">
            <img src={nav_logo} alt="Core Logo" />
          </div>
        </div>
        <div className="nav-burger" onClick={toggleNav}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul className={`nav-list ${isNavVisible ? 'show' : ''}`}>
          <li><Link to="/"  className="nav-link"  onClick={toggleNav}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" 
          class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round"
           d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path></svg>
          Dashboard</Link></li>
          <li><Link to="/stakes" className="nav-link"  onClick={toggleNav}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
           stroke="currentColor" aria-hidden="true" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" 
          d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"></path></svg>
          Stakes</Link></li>
          <li><Link to="/utilities" className="nav-link"  onClick={toggleNav}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" 
          class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" 
          d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"></path></svg>
          Utilities</Link></li>
          <li><Link to="/collector" className="nav-link"  onClick={toggleNav}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"></path></svg>
          
          Collector</Link></li>
          <li><Link to="/docs"  className="nav-link" onClick={toggleNav}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" 
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 
          .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"></path></svg>
          Docs</Link></li>
        </ul>
      </div>
      <div className="nav-right">
        <button>Connect Wallet</button>
      </div>
    </div>
  );
}

export default Navbar;
