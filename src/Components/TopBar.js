import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Style/TopBar.css';
import '../Style/App.css';

export default function TopBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('');

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { label: 'About', href: '/About' },
    { label: 'Publications', href: '/Publications' },
    { label: 'Teaching', href: '/Teaching' },
    { label: 'Science Comm', href: '/ScienceComm' },
    { label: 'Pledge to Open Science', href: '/PledgetoOpenScience' },
    { label: 'Blog', href: '/Blog' },
  ];

  return (
    <header className="top-bar">
      <div className="logo-container">
        <Link to="/">
          <h2>Chen Griner</h2>
          <h3>Ph.d Researcher – Communication Engineer</h3>
        </Link>
      </div>

      {/* Desktop nav */}
      <nav className="nav-links">
        <ul>
          {navLinks.map((link, i) => (
            <li key={i}>
              <Link to={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile-only menu */}
      <div className="mobile-menu">
        <div
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}

        {isOpen && (
          <div className="dropdown-menu">
            <ul>
              {navLinks.map((link, i) => (
                <li
                  key={i}
                  className={`dropdown-item ${selected === link.label ? 'selected' : ''}`}
                  onClick={() => {
                    setSelected(link.label);
                    setIsOpen(false);
                  }}
                >
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
