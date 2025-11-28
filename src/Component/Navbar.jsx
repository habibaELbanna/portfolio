import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';
import logo from '../Assets/imgs/logo.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="portfolio-navigation-header">
      
      <div className="portfolio-logo-wrapper">
        <ScrollLink to="home" smooth={true} duration={600} onClick={closeMenu}>
          <img src={logo} alt="logo" style={{ cursor: "pointer" }} />
        </ScrollLink>
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
        
        <ScrollLink 
          to="home" 
          smooth={true} 
          duration={600}
          className="portfolio-nav-link"
          onClick={closeMenu}
        >
          HOME
        </ScrollLink>

        <ScrollLink 
          to="graphicdesign" 
          smooth={true} 
          duration={600}
          className="portfolio-nav-link"
          onClick={closeMenu}
        >
          GRAPHIC DESIGN
        </ScrollLink>

        <ScrollLink 
          to="webapp" 
          smooth={true} 
          duration={600}
          className="portfolio-nav-link"
          onClick={closeMenu}
        >
          WEB / APP
        </ScrollLink>

        <ScrollLink 
          to="coding" 
          smooth={true} 
          duration={600}
          className="portfolio-nav-link"
          onClick={closeMenu}
        >
          CODING
        </ScrollLink>

        <ScrollLink 
          to="aboutme" 
          smooth={true} 
          duration={600}
          className="portfolio-nav-link"
          onClick={closeMenu}
        >
          ABOUT ME
        </ScrollLink>

        <ScrollLink 
          to="contact" 
          smooth={true} 
          duration={600}
          className="portfolio-nav-link"
          onClick={closeMenu}
        >
          CONTACT
        </ScrollLink>

      </nav>

      {/* Overlay for mobile menu */}
      <div 
        className={`menu-overlay ${isMenuOpen ? 'active' : ''}`}
        onClick={closeMenu}
      ></div>

    </header>
  );
};

export default Navbar;