import React from 'react';
import { Link } from 'react-router-dom';
import './KemetProject.css';
import logoKemet from '../Assets/imgs/casestudy/kemet.png';
import kemetVideo from '../Assets/imgs/kemet/kemet.mp4';
import ankhIcon from '../Assets/imgs/ankh.svg';
import uxKemet from '../Assets/imgs/kemet/uxkemet.png';
import brandColorKemet from '../Assets/imgs/kemet/brandcolorkemet.png';
import kemetStickers from '../Assets/imgs/kemet/kemetstickers.png';
import loginKemet from '../Assets/imgs/kemet/loginkemet.png';
import kemet33 from '../Assets/imgs/kemet/1.png';
import kemet22 from '../Assets/imgs/kemet/13.png';
import kemett from '../Assets/imgs/kemet/10.png';
import logo1 from '../Assets/imgs/kemet/1.png';
import logo2 from '../Assets/imgs/kemet/2.png';
import logo3 from '../Assets/imgs/kemet/3.png';
import logo4 from '../Assets/imgs/kemet/4.png';
import logo5 from '../Assets/imgs/kemet/5.png';
import logo6 from '../Assets/imgs/kemet/6.png';
import logo7 from '../Assets/imgs/kemet/7.png';
import logo8 from '../Assets/imgs/kemet/8.png';
import Nav from '../Component/Navbar';
import Footer from '../Component/Footer';
import FloatingButton from '../Component/Floatingbutton';

const KemetProject = () => {
    
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

  return (
    <>
    <Nav />
    <div className="kemet-project-container">
      <p className="kemet-proj_name">Kemet</p>
      <p className="kemet-proj_title">
        Description for Kemet project - add your project tagline here
      </p>

      <div className="kemet-banner-container">
        <div className="kemet-banner-track">
          <div className="kemet-banner-content">
            <div className="kemet-banner-item">
              <span className="kemet-banner-text">GRAPHIC DESIGN</span>
              <span className="kemet-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
            <div className="kemet-banner-item">
              <span className="kemet-banner-text">BRANDING</span>
              <span className="kemet-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
            <div className="kemet-banner-item">
              <span className="kemet-banner-text">UX/UI</span>
              <span className="kemet-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
            <div className="kemet-banner-item">
              <span className="kemet-banner-text">DESIGN</span>
              <span className="kemet-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
          </div>

          <div className="kemet-banner-content">
            <div className="kemet-banner-item">
              <span className="kemet-banner-text">GRAPHIC DESIGN</span>
              <span className="kemet-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
            <div className="kemet-banner-item">
              <span className="kemet-banner-text">BRANDING</span>
              <span className="kemet-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
            <div className="kemet-banner-item">
              <span className="kemet-banner-text">UX/UI</span>
              <span className="kemet-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
            <div className="kemet-banner-item">
              <span className="kemet-banner-text">DESIGN</span>
              <span className="kemet-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="kemet-middleab">
        <div className="kemet-abitdiv">
          <video className="kemet-videot" autoPlay muted loop playsInline>
            <source src={kemetVideo} type="video/mp4" />
          </video>
        </div>
        <div className="kemet-projjj">
          <img className="kemet-project_logo1" src={logoKemet} alt="Kemet Logo" />
          <p className="kemet-proj_info1">
            <span style={{ fontFamily: 'anton', fontSize: '50px' }}>about</span>
            <br />
            Add your Kemet project description here. Describe what the project is about, its goals, features, and what makes it unique.
            <br />
            Add more details about the project, the problem it solves, and the design process.
          </p>
        </div>
      </div>

      <p className="kemet-proj_namephaseux">01.The ux</p>

      <img className="kemet-project_logo1" src={uxKemet} alt="UX Design" />
      <p className="kemet-proj_namephasebranding">
        This UX section outlines the research and design process behind the Kemet project. Add your UX research insights, user journey, and design decisions here.
      </p>

      <p className="kemet-proj_namephaseux">02.The Branding</p>

      <div className="kemet-branding">
        <img className="kemet-project_logokemet" src={brandColorKemet} alt="Brand Colors" />
        <img className="kemet-project_logokemet" src={kemetStickers} alt="Stickers" />
      </div>

      <p className="kemet-proj_namephasebranding">
        This branding section highlights the project's visual identity. Describe your color palette, brand personality, and visual elements here.
      </p>

      <h1 className="kemet-proj_namephaseux">03. Product Design</h1>

      <div className="kemet-product-design-grid-wrapper">
        <div className="kemet-product-design-box kemet-pd-box-1 kemet-pd-img-contain">
          <img src={loginKemet} alt="Login Form Design" />
        </div>

        <div className="kemet-product-design-box kemet-pd-box-2 kemet-pd-img-contain">
          <img src={kemet33} alt="Mobile App UI" />
        </div>

        <div className="kemet-product-design-box kemet-pd-box-3 kemet-pd-img-contain">
          <img src={kemet22} alt="Web Programming Progress" />
        </div>

        <div className="kemet-product-design-box kemet-pd-box-4 kemet-pd-img-contain">
          <img src={kemett} alt="Tasks Completed" />
        </div>
      </div>

      <div className="kemet-logos">
        <div className="kemet-logos_slide">
          {logos.map((logo, index) => (
            <img key={`logo-set1-${index}`} src={logo} alt={`Logo ${index + 1}`} />
          ))}
        </div>

        <div className="kemet-logos_slide">
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

export default KemetProject;