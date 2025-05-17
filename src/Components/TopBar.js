import React from 'react'
import { Link } from 'react-router-dom';
import '../Style/TopBar.css';
import '../Style/App.css';
import '../Pages/About.js'

export default function TopBar() {
  return (
    <header className="top-bar">
        <div className="logo-container">
        <img src="/src/Assets/company-logo.jpg" alt="Logo" className="logo" />
      </div>
      <nav className="nav-links">
        <Link to="/About">About</Link>
        <Link to="/Publications">Publications</Link>
        <Link to="/Teaching">Teaching</Link>
        <Link to="/ScienceComm">Science Comm</Link>
        <Link to="/PledgetoOpenScience">Pledge to Open Science</Link>
        <Link to="/Blog">Blog</Link>
      </nav>
    </header>
  )
}
