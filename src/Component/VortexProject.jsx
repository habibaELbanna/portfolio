import React from 'react';
import { Link } from 'react-router-dom';
import './VortexProject.css';
import logoVortex from '../Assets/imgs/casestudy/vortexlogo.svg';
import vortexVideo from '../Assets/imgs/vortex/vortex.mp4';
import ankhIcon from '../Assets/imgs/ankh.svg';
import uxVortex from '../Assets/imgs/vortex/uxvortex.png';
import brandColorVortex from '../Assets/imgs/vortex/brandcolorvortex.png';
import vortexStickers from '../Assets/imgs/vortex/vortexstickers.png';
import loginVortex from '../Assets/imgs/vortex/loginvortex.png';
import vortex33 from '../Assets/imgs/vortex/1.svg';
import vortex22 from '../Assets/imgs/vortex/3.svg';
import vortexx from '../Assets/imgs/vortex/2.svg';
import logo1 from '../Assets/imgs/vortex/1.svg';
import logo2 from '../Assets/imgs/vortex/2.svg';
import logo3 from '../Assets/imgs/vortex/3.svg';
import logo4 from '../Assets/imgs/vortex/4.svg';
import logo5 from '../Assets/imgs/vortex/5.svg';
import logo6 from '../Assets/imgs/vortex/6.svg';

import Nav from '../Component/Navbar';
import Footer from '../Component/Footer';
import FloatingButton from '../Component/Floatingbutton';

const VortexProject = () => {
    
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

  return (
    <>
    <Nav />
    <div className="vortex-project-container">
      <p className="vortex-proj_name">Vortex</p>
      <p className="vortex-proj_title">
      Vortex is an e-sports website designed for fast, energetic, and competitive experiences.
      </p>

      <div className="vortex-banner-container">
        <div className="vortex-banner-track">
          <div className="vortex-banner-content">
            <div className="vortex-banner-item">
              <span className="vortex-banner-text">GRAPHIC DESIGN</span>
              <span className="vortex-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
            <div className="vortex-banner-item">
              <span className="vortex-banner-text">BRANDING</span>
              <span className="vortex-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
            <div className="vortex-banner-item">
              <span className="vortex-banner-text">UX/UI</span>
              <span className="vortex-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
            <div className="vortex-banner-item">
              <span className="vortex-banner-text">DESIGN</span>
              <span className="vortex-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
          </div>

          <div className="vortex-banner-content">
            <div className="vortex-banner-item">
              <span className="vortex-banner-text">GRAPHIC DESIGN</span>
              <span className="vortex-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
            <div className="vortex-banner-item">
              <span className="vortex-banner-text">BRANDING</span>
              <span className="vortex-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
            <div className="vortex-banner-item">
              <span className="vortex-banner-text">UX/UI</span>
              <span className="vortex-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
            <div className="vortex-banner-item">
              <span className="vortex-banner-text">DESIGN</span>
              <span className="vortex-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="vortex-middleab">
        <div className="vortex-abitdiv">
          <video className="vortex-videot" autoPlay muted loop playsInline>
            <source src={vortexVideo} type="video/mp4" />
          </video>
        </div>
        <div className="vortex-projjj">
          <img className="vortex-project_logo1" src={logoVortex} alt="Vortex Logo" />
          <p className="vortex-proj_info1">
            <span style={{ fontFamily: 'anton', fontSize: '50px' }}>about</span>
            <br />
       Vortex is a dynamic e-sports platform built to bring gamers, teams, and fans together. It highlights tournaments, player stats, live updates, and community engagement—all in one competitive hub. </p>
        </div>
      </div>

    
      <p className="vortex-proj_namephaseux">02.The Branding</p>

      <div className="vortex-branding">
        <img className="vortex-project_logokemet" src={brandColorVortex} alt="Brand Colors" />
        <img className="vortex-project_logokemet" src={vortexStickers} alt="Stickers" />
      </div>

      <p className="vortex-proj_namephasebranding">
Vortex’s branding focuses on bold colors, high-energy visuals, and sharp geometric elements inspired by e-sports culture. Iconography and UI accents reinforce speed, competition, and intensity.</p>

      <h1 className="vortex-proj_namephaseux">03. Product Design</h1>

      <div className="vortex-product-design-grid-wrapper">
        <div className="vortex-product-design-box vortex-pd-box-1 vortex-pd-img-contain">
          <img src={loginVortex} alt="Login Form Design" />
        </div>

        <div className="vortex-product-design-box vortex-pd-box-2 vortex-pd-img-contain">
          <img src={vortex33} alt="Mobile App UI" />
        </div>

        <div className="vortex-product-design-box vortex-pd-box-3 vortex-pd-img-contain">
          <img src={vortex22} alt="Web Programming Progress" />
        </div>

        <div className="vortex-product-design-box vortex-pd-box-4 vortex-pd-img-contain">
          <img src={vortexx} alt="Tasks Completed" />
        </div>
      </div>

      <div className="vortex-logos">
        <div className="vortex-logos_slide">
          {logos.map((logo, index) => (
            <img key={`logo-set1-${index}`} src={logo} alt={`Logo ${index + 1}`} />
          ))}
        </div>

        <div className="vortex-logos_slide">
          {logos.map((logo, index) => (
            <img key={`logo-set2-${index}`} src={logo} alt={`Logo ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
    <FloatingButton />
    <Footer />
    </>
  );
};

export default VortexProject;