import React, { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';
import logo from '../Assets/imgs/logo.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Component to handle both routing and scrolling
  const NavItem = ({ to, children }) => {
    if (isHomePage) {
      // If on home page, use scroll
      return (
        <ScrollLink 
          to={to} 
          smooth={true} 
          duration={600}
          className="portfolio-nav-link"
          onClick={closeMenu}
        >
          {children}
        </ScrollLink>
      );
    } else {
      // If on another page, route to home with hash
      return (
        <RouterLink 
          to={`/#${to}`}
          className="portfolio-nav-link"
          onClick={closeMenu}
        >
          {children}
        </RouterLink>
      );
    }
  };

  return (
    <header className="portfolio-navigation-header">
      
      <div className="portfolio-logo-wrapper">
        {isHomePage ? (
          <ScrollLink to="home" smooth={true} duration={600} onClick={closeMenu}>
            <img src={logo} alt="logo" style={{ cursor: "pointer" }} />
          </ScrollLink>
        ) : (
          <RouterLink to="/" onClick={closeMenu}>
            <img src={logo} alt="logo" style={{ cursor: "pointer" }} />
          </RouterLink>
        )}
      </div>

      <button 
        className={`burger-menu ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className="burger-line"></span>
        <span className="burger-line"></span>
        <span className="burger-line"></span>
      </button>

      <nav className={`portfolio-main-navigation ${isMenuOpen ? 'menu-open' : ''}`}>
        
        <NavItem to="home">HOME</NavItem>
        <NavItem to="graphicdesign">GRAPHIC DESIGN</NavItem>
        <NavItem to="webapp">WEB / APP</NavItem>
        <NavItem to="coding">CODING</NavItem>
        <NavItem to="aboutme">ABOUT ME</NavItem>
        <NavItem to="contact">CONTACT</NavItem>

      </nav>

      <div 
        className={`menu-overlay ${isMenuOpen ? 'active' : ''}`}
        onClick={closeMenu}
      ></div>

    </header>
  );
};

export default Navbar;