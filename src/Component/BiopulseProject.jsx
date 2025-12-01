import React from 'react';
import { Link } from 'react-router-dom';
import './BiopulseProject.css';
import logoBiopulse from '../Assets/imgs/biopulse/biopulse.png';
import biopulseVideo from '../Assets/imgs/biopulse/biopulse.mp4';
import ankhIcon from '../Assets/imgs/ankh.svg';

import brandColorBiopulse from '../Assets/imgs/biopulse/brandcolorbiopulse.png';
import biopulseStickers from '../Assets/imgs/biopulse/biopulsestickers.png';
import loginBiopulse from '../Assets/imgs/biopulse/loginbiopulse.png';
import biopulse33 from '../Assets/imgs/biopulse/1.png';
import biopulse22 from '../Assets/imgs/biopulse/13.png';
import biopulsee from '../Assets/imgs/biopulse/10.png';
import logo1 from '../Assets/imgs/biopulse/1.png';
import logo2 from '../Assets/imgs/biopulse/2.png';
import logo3 from '../Assets/imgs/biopulse/3.png';
import logo4 from '../Assets/imgs/biopulse/4.png';
import logo5 from '../Assets/imgs/biopulse/5.png';
import logo6 from '../Assets/imgs/biopulse/6.png';
import logo7 from '../Assets/imgs/biopulse/7.png';
import logo8 from '../Assets/imgs/biopulse/8.png';
import Nav from '../Component/Navbar';
import Footer from '../Component/Footer';
import FloatingButton from '../Component/Floatingbutton';

const BiopulseProject = () => {
    
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

  return (
    <>
    <Nav />
    <div className="biopulse-project-container">
      <p className="biopulse-proj_name">Biopulse</p>
      <p className="biopulse-proj_title">
Biopulse is a healthcare management system designed to streamline patient records, appointments, and communication for clinics and medical teams.      </p>

      <div className="biopulse-banner-container">
        <div className="biopulse-banner-track">
          <div className="biopulse-banner-content">
            <div className="biopulse-banner-item">
              <span className="biopulse-banner-text">GRAPHIC DESIGN</span>
              <span className="biopulse-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
            <div className="biopulse-banner-item">
              <span className="biopulse-banner-text">BRANDING</span>
              <span className="biopulse-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
            <div className="biopulse-banner-item">
              <span className="biopulse-banner-text">UX/UI</span>
              <span className="biopulse-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
            <div className="biopulse-banner-item">
              <span className="biopulse-banner-text">DESIGN</span>
              <span className="biopulse-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
          </div>

          <div className="biopulse-banner-content">
            <div className="biopulse-banner-item">
              <span className="biopulse-banner-text">GRAPHIC DESIGN</span>
              <span className="biopulse-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
            <div className="biopulse-banner-item">
              <span className="biopulse-banner-text">BRANDING</span>
              <span className="biopulse-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
            <div className="biopulse-banner-item">
              <span className="biopulse-banner-text">UX/UI</span>
              <span className="biopulse-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
            <div className="biopulse-banner-item">
              <span className="biopulse-banner-text">DESIGN</span>
              <span className="biopulse-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="biopulse-middleab">
        <div className="biopulse-abitdiv">
          <video className="biopulse-videot" autoPlay muted loop playsInline>
            <source src={biopulseVideo} type="video/mp4" />
          </video>
        </div>
        <div className="biopulse-projjj">
          <img className="biopulse-project_logo1" src={logoBiopulse} alt="Biopulse Logo" />
          <p className="biopulse-proj_info1">
            <span style={{ fontFamily: 'anton', fontSize: '50px' }}>about</span>
            <br />
Biopulse centralizes patient data, scheduling, and reports into one organized platform, helping healthcare providers deliver faster, clearer, and more efficient care.          </p>
        </div>
      </div>

    
      <p className="biopulse-proj_namephaseux">02.The Branding</p>

      <div className="biopulse-branding">
        <img className="biopulse-project_logokemet" src={brandColorBiopulse} alt="Brand Colors" />
        <img className="biopulse-project_logokemet" src={biopulseStickers} alt="Stickers" />
      </div>

      <p className="biopulse-proj_namephasebranding">
Biopulse’s branding uses calm, professional colors and clean medical-inspired visuals to convey trust, reliability, and clarity. Icons and UI elements highlight simplicity and modern healthcare efficiency.</p>

      <h1 className="biopulse-proj_namephaseux">03. Product Design</h1>

      <div className="biopulse-product-design-grid-wrapper">
        <div className="biopulse-product-design-box biopulse-pd-box-1 biopulse-pd-img-contain">
          <img src={loginBiopulse} alt="Login Form Design" />
        </div>

        <div className="biopulse-product-design-box biopulse-pd-box-2 biopulse-pd-img-contain">
          <img src={biopulse33} alt="Mobile App UI" />
        </div>

        <div className="biopulse-product-design-box biopulse-pd-box-3 biopulse-pd-img-contain">
          <img src={biopulse22} alt="Web Programming Progress" />
        </div>

        <div className="biopulse-product-design-box biopulse-pd-box-4 biopulse-pd-img-contain">
          <img src={biopulsee} alt="Tasks Completed" />
        </div>
      </div>

      <div className="biopulse-logos">
        <div className="biopulse-logos_slide">
          {logos.map((logo, index) => (
            <img key={`logo-set1-${index}`} src={logo} alt={`Logo ${index + 1}`} />
          ))}
        </div>

        <div className="biopulse-logos_slide">
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

export default BiopulseProject;