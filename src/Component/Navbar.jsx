import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';
import logo from '../Assets/imgs/logo.svg';

const Navbar = () => {
  return (
    <header className="portfolio-navigation-header">
      
      <div className="portfolio-logo-wrapper">
        <ScrollLink to="home" smooth={true} duration={600}>
          <img src={logo} alt="logo" style={{ cursor: "pointer" }} />
        </ScrollLink>
      </div>

      <nav className="portfolio-main-navigation">
        
        <ScrollLink 
          to="home" 
          smooth={true} 
          duration={600}
          className="portfolio-nav-link"
        >
          HOME
        </ScrollLink>

        <ScrollLink 
          to="graphicdesign" 
          smooth={true} 
          duration={600}
          className="portfolio-nav-link"
        >
          GRAPHIC DESIGN
        </ScrollLink>

       

     
        <ScrollLink 
          to="webapp" 
          smooth={true} 
          duration={600}
          className="portfolio-nav-link"
        >
          WEB / APP
        </ScrollLink>

        <ScrollLink 
          to="coding" 
          smooth={true} 
          duration={600}
          className="portfolio-nav-link"
        >
          CODING
        </ScrollLink>

        <ScrollLink 
          to="aboutme" 
          smooth={true} 
          duration={600}
          className="portfolio-nav-link"
        >
          ABOUT ME
        </ScrollLink>

        <ScrollLink 
          to="contact" 
          smooth={true} 
          duration={600}
          className="portfolio-nav-link"
        >
          CONTACT
        </ScrollLink>

      </nav>

    </header>
  );
};

export default Navbar;
