import React from 'react';
import { Link } from 'react-router-dom';
import './SofraProject.css';
import logoSofra from '../Assets/imgs/casestudy/sofra.png';
import uxSofra from '../Assets/imgs/sofra/uxsofra.png';
import sofraVideo from '../Assets/imgs/sofra/sofra.mp4';
import ankhIcon from '../Assets/imgs/ankh.svg';
import brandColorSofra from '../Assets/imgs/sofra/brandcolorsofra.png';
import sofraStickers from '../Assets/imgs/sofra/sofrastickers.png';
import loginSofra from '../Assets/imgs/sofra/loginsofra.png';
import sofra33 from '../Assets/imgs/sofra/1.png';
import sofra22 from '../Assets/imgs/sofra/3.png';
import sofraa from '../Assets/imgs/sofra/2.png';
import logo1 from '../Assets/imgs/sofra/1.png';
import logo2 from '../Assets/imgs/sofra/2.png';
import logo3 from '../Assets/imgs/sofra/3.png';
import logo4 from '../Assets/imgs/sofra/4.png';
import logo5 from '../Assets/imgs/sofra/5.png';
import logo6 from '../Assets/imgs/sofra/6.png';
import logo7 from '../Assets/imgs/sofra/7.png';

import Nav from '../Component/Navbar';
import Footer from '../Component/Footer';
import FloatingButton from '../Component/Floatingbutton';

const SofraProject = () => {
    
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

  return (
    <>
    <Nav />
    <div className="sofra-project-container">
      <p className="sofra-proj_name">Sofra savior</p>
      <p className="sofra-proj_title">
   Sofra suggests dishes based on your preferences and ingredients, giving you quick, simple recipes that make daily cooking easier.
      </p>

      <div className="sofra-banner-container">
        <div className="sofra-banner-track">
          <div className="sofra-banner-content">
            <div className="sofra-banner-item">
              <span className="sofra-banner-text">GRAPHIC DESIGN</span>
              <span className="sofra-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
            <div className="sofra-banner-item">
              <span className="sofra-banner-text">BRANDING</span>
              <span className="sofra-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
            <div className="sofra-banner-item">
              <span className="sofra-banner-text">UX/UI</span>
              <span className="sofra-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
            <div className="sofra-banner-item">
              <span className="sofra-banner-text">DESIGN</span>
              <span className="sofra-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
          </div>

          <div className="sofra-banner-content">
            <div className="sofra-banner-item">
              <span className="sofra-banner-text">GRAPHIC DESIGN</span>
              <span className="sofra-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
            <div className="sofra-banner-item">
              <span className="sofra-banner-text">BRANDING</span>
              <span className="sofra-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
            <div className="sofra-banner-item">
              <span className="sofra-banner-text">UX/UI</span>
              <span className="sofra-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
            <div className="sofra-banner-item">
              <span className="sofra-banner-text">DESIGN</span>
              <span className="sofra-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="sofra-middleab">
        <div className="sofra-abitdiv">
          <video className="sofra-videot" autoPlay muted loop playsInline>
            <source src={sofraVideo} type="video/mp4" />
          </video>
        </div>
        <div className="sofra-projjj">
          <img className="sofra-project_logo1" src={logoSofra} alt="Sofra Logo" />
          <p className="sofra-proj_info1">
            <span style={{ fontFamily: 'anton', fontSize: '50px' }}>about</span>
            <br />
      Sofra helps you decide what to cook every day by offering personalized meal ideas and easy-to-follow recipes. </p>
        </div>
      </div>
 <p className="proj_namephaseux">01.The ux</p>

      <img className="project_logo1" src={uxSofra} alt="UX Design" />
      <p className="proj_namephasebranding">
  This UX section outlines the research and design process behind Sofra, the daily meal-decision and recipe app. It highlights user insights, journey mapping, and user flow, showing how the app helps users decide what to cook, explore recipes, and plan meals through a simple, intuitive, and comforting experience.  </p>

    
      <p className="sofra-proj_namephaseux">02.The Branding</p>

      <div className="sofra-branding">
        <img className="sofra-project_logokemet" src={brandColorSofra} alt="Brand Colors" />
        <img className="sofra-project_logokemet" src={sofraStickers} alt="Stickers" />
      </div>

      <p className="sofra-proj_namephasebranding">
Sofra’s branding uses warm, inviting colors and friendly food-inspired icons to create a cozy, helpful cooking experience.</p>

      <h1 className="sofra-proj_namephaseux">03. Product Design</h1>

      <div className="sofra-product-design-grid-wrapper">
        <div className="sofra-product-design-box sofra-pd-box-1 sofra-pd-img-contain">
          <img src={loginSofra} alt="Login Form Design" />
        </div>

        <div className="sofra-product-design-box sofra-pd-box-2 sofra-pd-img-contain">
          <img src={sofra33} alt="Mobile App UI" />
        </div>

        <div className="sofra-product-design-box sofra-pd-box-3 sofra-pd-img-contain">
          <img src={sofra22} alt="Web Programming Progress" />
        </div>

        <div className="sofra-product-design-box sofra-pd-box-4 sofra-pd-img-contain">
          <img src={sofraa} alt="Tasks Completed" />
        </div>
      </div>

      <div className="sofra-logos">
        <div className="sofra-logos_slide">
          {logos.map((logo, index) => (
            <img key={`logo-set1-${index}`} src={logo} alt={`Logo ${index + 1}`} />
          ))}
        </div>

        <div className="sofra-logos_slide">
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

export default SofraProject;