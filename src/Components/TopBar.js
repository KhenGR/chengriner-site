import React from 'react'
import { Link } from 'react-router-dom';
import '../Style/TopBar.css';
import '../Style/App.css';

export default function TopBar() {
  return (
    <header className="top-bar">
        <div className="logo-container">
        <img src="/src/Assets/company-logo.jpg" alt="Logo" className="logo" />
      </div>
      <nav className="nav-links">
        <Link to="/link5">Link 5</Link>
        <Link to="/link4">Link 4</Link>
        <Link to="/link3">Link 3</Link>
        <Link to="/link2">Link 2</Link>
        <Link to="/link1">Link 1</Link>
      </nav>
    </header>
  )
}
