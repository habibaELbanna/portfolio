import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="portfolio-navigation-header">
      <div className="portfolio-logo-wrapper">
        <Link to="/">
          <img src="/logo.png" alt="Habiba Elbanna Logo" className="portfolio-brand-logo" />
        </Link>
      </div>
      
      <nav className="portfolio-main-navigation">
        <Link to="/" className="portfolio-nav-link">HOME</Link>
        <Link to="/blog" className="portfolio-nav-link">BLOG</Link>
        <Link to="/contact" className="portfolio-nav-link">CONTACT</Link>
        <Link to="/about" className="portfolio-nav-link">ABOUT ME</Link>
        <Link to="/webapp" className="portfolio-nav-link">WEB/APP</Link>
        <Link to="/graphic-design" className="portfolio-nav-link">GRAPHIC DESIGN</Link>
        <Link to="/3d-design" className="portfolio-nav-link">3D DESIGN</Link>
        <Link to="/coding" className="portfolio-nav-link">CODING</Link>
      </nav>
    </header>
  );
};

export default Navbar;