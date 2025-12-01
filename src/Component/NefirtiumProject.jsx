import React from 'react';
import { Link } from 'react-router-dom';
import './NefirtiumProject.css';
import logoNefirtium from '../Assets/imgs/nefirtium/nefirtium.png';
import nefirtiumVideo from '../Assets/imgs/nefirtium/nefirtium.mp4';
import ankhIcon from '../Assets/imgs/ankh.svg';

import brandColorNefirtium from '../Assets/imgs/nefirtium/brandcolornefirtium.png';
import nefirtiumStickers from '../Assets/imgs/nefirtium/nefirtiumstickers.png';
import loginNefirtium from '../Assets/imgs/nefirtium/loginnefirtium.png';
import nefirtium33 from '../Assets/imgs/nefirtium/1.png';
import nefirtium22 from '../Assets/imgs/nefirtium/3.png';
import nefirtiume from '../Assets/imgs/nefirtium/1.png';
import logo1 from '../Assets/imgs/nefirtium/1.png';
import logo2 from '../Assets/imgs/nefirtium/2.png';
import logo3 from '../Assets/imgs/nefirtium/3.png';
import logo4 from '../Assets/imgs/nefirtium/4.png';
import logo5 from '../Assets/imgs/nefirtium/5.png';
import logo6 from '../Assets/imgs/nefirtium/6.png';

import Nav from '../Component/Navbar';
import Footer from '../Component/Footer';
import FloatingButton from '../Component/Floatingbutton';

const NefirtiumProject = () => {
    
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

  return (
    <>
    <Nav />
    <div className="nefirtium-project-container">
      <p className="nefirtium-proj_name">Nefirtium</p>
      <p className="nefirtium-proj_title">
        An Immersive Journey Through Ancient Egypt
      </p>

      <div className="nefirtium-banner-container">
        <div className="nefirtium-banner-track">
          <div className="nefirtium-banner-content">
            <div className="nefirtium-banner-item">
              <span className="nefirtium-banner-text">GRAPHIC DESIGN</span>
              <span className="nefirtium-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
            <div className="nefirtium-banner-item">
              <span className="nefirtium-banner-text">BRANDING</span>
              <span className="nefirtium-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
            <div className="nefirtium-banner-item">
              <span className="nefirtium-banner-text">UX/UI</span>
              <span className="nefirtium-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
            <div className="nefirtium-banner-item">
              <span className="nefirtium-banner-text">DESIGN</span>
              <span className="nefirtium-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
          </div>

          <div className="nefirtium-banner-content">
            <div className="nefirtium-banner-item">
              <span className="nefirtium-banner-text">GRAPHIC DESIGN</span>
              <span className="nefirtium-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
            <div className="nefirtium-banner-item">
              <span className="nefirtium-banner-text">BRANDING</span>
              <span className="nefirtium-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
            <div className="nefirtium-banner-item">
              <span className="nefirtium-banner-text">UX/UI</span>
              <span className="nefirtium-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
            <div className="nefirtium-banner-item">
              <span className="nefirtium-banner-text">DESIGN</span>
              <span className="nefirtium-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="nefirtium-middleab">
        <div className="nefirtium-abitdiv">
          <video className="nefirtium-videot" autoPlay muted loop playsInline>
            <source src={nefirtiumVideo} type="video/mp4" />
          </video>
        </div>
        <div className="nefirtium-projjj">
          <img className="nefirtium-project_logo1" src={logoNefirtium} alt="Nefirtium Logo" />
          <p className="nefirtium-proj_info1">
            <span style={{ fontFamily: 'anton', fontSize: '50px' }}>about</span>
            <br />
          Kemet is a narrative-driven website exploring over 3,000 years of Ancient Egyptian history. It combines accessible research with high-fidelity 3D models and interactive reconstructions, letting users virtually explore temples, tombs, and ancient cities.
          </p>
        </div>
      </div>

    
      <p className="nefirtium-proj_namephaseux">02.The Branding</p>

      <div className="nefirtium-branding">
        <img className="nefirtium-project_logokemet" src={brandColorNefirtium} alt="Brand Colors" />
        <img className="nefirtium-project_logokemet" src={nefirtiumStickers} alt="Stickers" />
      </div>

      <p className="nefirtium-proj_namephasebranding">
This branding section outlines the visual identity, using a blue and gold palette and a clear, historically inspired style. Custom dynasty icons serve as key visual elements, reinforcing both navigation and theme.
</p>

      <h1 className="nefirtium-proj_namephaseux">03. Product Design</h1>

      <div className="nefirtium-product-design-grid-wrapper">
        <div className="nefirtium-product-design-box nefirtium-pd-box-1 nefirtium-pd-img-contain">
          <img src={loginNefirtium} alt="Login Form Design" />
        </div>

        <div className="nefirtium-product-design-box nefirtium-pd-box-2 nefirtium-pd-img-contain">
          <img src={nefirtium33} alt="Mobile App UI" />
        </div>

        <div className="nefirtium-product-design-box nefirtium-pd-box-3 nefirtium-pd-img-contain">
          <img src={nefirtium22} alt="Web Programming Progress" />
        </div>

        <div className="nefirtium-product-design-box nefirtium-pd-box-4 nefirtium-pd-img-contain">
          <img src={nefirtiume} alt="Tasks Completed" />
        </div>
      </div>

      <div className="nefirtium-logos">
        <div className="nefirtium-logos_slide">
          {logos.map((logo, index) => (
            <img key={`logo-set1-${index}`} src={logo} alt={`Logo ${index + 1}`} />
          ))}
        </div>

        <div className="nefirtium-logos_slide">
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

export default NefirtiumProject;