import React from 'react';
import { Link } from 'react-router-dom';
import './GizaZooProject.css';
import logoGizaZoo from '../Assets/imgs/gizazoo/gizazoo.png';
import gizazooVideo from '../Assets/imgs/gizazoo/gizazoo.mp4';
import ankhIcon from '../Assets/imgs/ankh.svg';

import brandColorGizaZoo from '../Assets/imgs/gizazoo/brandcolorgizazoo.png';
import gizazooStickers from '../Assets/imgs/gizazoo/gizazoostickers.png';
import loginGizaZoo from '../Assets/imgs/gizazoo/logingizazoo.png';
import gizazoo33 from '../Assets/imgs/gizazoo/33.png';
import gizazoo22 from '../Assets/imgs/gizazoo/13.png';
import gizazooe from '../Assets/imgs/gizazoo/10.png';
import logo1 from '../Assets/imgs/gizazoo/1.png';
import logo2 from '../Assets/imgs/gizazoo/2.png';
import logo3 from '../Assets/imgs/gizazoo/3.png';
import logo4 from '../Assets/imgs/gizazoo/4.png';
import logo5 from '../Assets/imgs/gizazoo/5.png';
import logo6 from '../Assets/imgs/gizazoo/6.png';
import logo7 from '../Assets/imgs/gizazoo/7.png';
import logo8 from '../Assets/imgs/gizazoo/8.png';
import Nav from '../Component/Navbar';
import Footer from '../Component/Footer';
import FloatingButton from '../Component/Floatingbutton';

const GizaZooProject = () => {
    
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

  return (
    <>
    <Nav />
    <div className="gizazoo-project-container">
      <p className="gizazoo-proj_name">Giza Zoo</p>
      <p className="gizazoo-proj_title">
       The Giza Zoo website is a modern digital platform designed to showcase the zoo’s animals, attractions, and conservation efforts while making visits easier to plan.
      </p>

      <div className="gizazoo-banner-container">
        <div className="gizazoo-banner-track">
          <div className="gizazoo-banner-content">
            <div className="gizazoo-banner-item">
              <span className="gizazoo-banner-text">GRAPHIC DESIGN</span>
              <span className="gizazoo-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
            <div className="gizazoo-banner-item">
              <span className="gizazoo-banner-text">BRANDING</span>
              <span className="gizazoo-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
            <div className="gizazoo-banner-item">
              <span className="gizazoo-banner-text">UX/UI</span>
              <span className="gizazoo-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
            <div className="gizazoo-banner-item">
              <span className="gizazoo-banner-text">DESIGN</span>
              <span className="gizazoo-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
          </div>

          <div className="gizazoo-banner-content">
            <div className="gizazoo-banner-item">
              <span className="gizazoo-banner-text">GRAPHIC DESIGN</span>
              <span className="gizazoo-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
            <div className="gizazoo-banner-item">
              <span className="gizazoo-banner-text">BRANDING</span>
              <span className="gizazoo-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
            <div className="gizazoo-banner-item">
              <span className="gizazoo-banner-text">UX/UI</span>
              <span className="gizazoo-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
            <div className="gizazoo-banner-item">
              <span className="gizazoo-banner-text">DESIGN</span>
              <span className="gizazoo-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="gizazoo-middleab">
        <div className="gizazoo-abitdiv">
          <video className="gizazoo-videot" autoPlay muted loop playsInline>
            <source src={gizazooVideo} type="video/mp4" />
          </video>
        </div>
        <div className="gizazoo-projjj">
          <img className="gizazoo-project_logo1" src={logoGizaZoo} alt="Giza Zoo Logo" />
          <p className="gizazoo-proj_info1">
            <span style={{ fontFamily: 'anton', fontSize: '50px' }}>about</span>
            <br />
     The website provides clear information on animal habitats, ticketing, events, and maps, helping visitors explore the zoo and learn about wildlife in an engaging, family-friendly way. </p>
        </div>
      </div>

    
      <p className="gizazoo-proj_namephaseux">02.The Branding</p>

      <div className="gizazoo-branding">
        <img className="gizazoo-project_logokemet" src={brandColorGizaZoo} alt="Brand Colors" />
        <img className="gizazoo-project_logokemet" src={gizazooStickers} alt="Stickers" />
      </div>

      <p className="gizazoo-proj_namephasebranding">
The branding uses warm, natural colors and playful animal-inspired icons to create a friendly, educational atmosphere that appeals to both children and adults.</p>

      <h1 className="gizazoo-proj_namephaseux">03. Product Design</h1>

      <div className="gizazoo-product-design-grid-wrapper">
        <div className="gizazoo-product-design-box gizazoo-pd-box-1 gizazoo-pd-img-contain">
          <img src={loginGizaZoo} alt="Login Form Design" />
        </div>

        <div className="gizazoo-product-design-box gizazoo-pd-box-2 gizazoo-pd-img-contain">
          <img src={gizazoo33} alt="Mobile App UI" />
        </div>

        <div className="gizazoo-product-design-box gizazoo-pd-box-3 gizazoo-pd-img-contain">
          <img src={gizazoo22} alt="Web Programming Progress" />
        </div>

        <div className="gizazoo-product-design-box gizazoo-pd-box-4 gizazoo-pd-img-contain">
          <img src={gizazooe} alt="Tasks Completed" />
        </div>
      </div>

      <div className="gizazoo-logos">
        <div className="gizazoo-logos_slide">
          {logos.map((logo, index) => (
            <img key={`logo-set1-${index}`} src={logo} alt={`Logo ${index + 1}`} />
          ))}
        </div>

        <div className="gizazoo-logos_slide">
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

export default GizaZooProject;