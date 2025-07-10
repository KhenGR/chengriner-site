import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Style/TopBar.css';
import '../Style/App.css';
import '../Pages/About.js'

export default function TopBar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <header className="top-bar">
        <div className="logo-container">
          <Link to="/">
          <h2>Chen Griner</h2>
          <h4>Ph.d Researcher – Communication Engineer</h4>
          </Link>
      </div>
      <nav className="nav-links">
        <ul>
           <li><a href="/About">About</a></li>
           <li><a href="/Publications">Publications</a></li>
           <li><a href="/Teaching">Teaching</a></li>
           <li><a href="/ScienceComm">Science Comm</a></li>
           <li><a href="/PledgetoOpenScience">Pledge to Open Science</a></li>
           <li><a href="/Blog">Blog</a></li>
        </ul>
      </nav>
      <div className='hamburger' onClick={toggleMenu}>
        <div className='menu-line1'></div>
          <div className='menu-line2'></div>
          <div className='menu-line3'></div>
        {
          isOpen ?
          <>
        <div className="dropdown-menu">
        <div class="close-icon"></div>
        <Link className='option' to="/About">About</Link>
        <Link to="/Publications">Publications</Link>
        <Link to="/Teaching">Teaching</Link>
        <Link to="/ScienceComm">Science Comm</Link>
        <Link to="/PledgetoOpenScience">Pledge to Open Science</Link>
        <Link to="/Blog">Blog</Link>
        </div>
          </>
          :
          <>
        
          </>
        }
      </div>
    </header>
  )
}
