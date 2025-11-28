import React from 'react';
import { Link } from 'react-router-dom';
import './RepairProject.css';

import repairoVideo from '../Assets/imgs/repairo/repairo.mov';
import ankhIcon from '../Assets/imgs/ankh.svg';

import brandColorRepairo from '../Assets/imgs/repairo/brandcolorrepairo.png';
import repairoStickers from '../Assets/imgs/repairo/repairostickers.svg';
import loginRepairo from '../Assets/imgs/repairo/loginrepairo.png';
import repairo33 from '../Assets/imgs/repairo/repairo33.png';
import repairo22 from '../Assets/imgs/repairo/repairo22.png';
import repairot from '../Assets/imgs/repairo/repairot.png';
import logo1 from '../Assets/imgs/repairo/1.png';
import logo2 from '../Assets/imgs/repairo/2.png';
import logo3 from '../Assets/imgs/repairo/3.png';
import logo4 from '../Assets/imgs/repairo/4.png';
import logo5 from '../Assets/imgs/repairo/5.png';
import logo6 from '../Assets/imgs/repairo/6.png';

import Nav from '../Component/Navbar';
import Footer from '../Component/Footer';
import FloatingButton from '../Component/Floatingbutton';

const RepairProject = () => {
    
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

  return (
    <>
    <Nav />
    <div className="repairo-project-container">
      <p className="repairo-proj_name">Repairo</p>
      <p className="repairo-proj_title">
        Repairo is a modern phone repair service offering quick, reliable fixes for all major devices.
      </p>

      <div className="repairo-banner-container">
        <div className="repairo-banner-track">
          <div className="repairo-banner-content">
            <div className="repairo-banner-item">
              <span className="repairo-banner-text">GRAPHIC DESIGN</span>
              <span className="repairo-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
            <div className="repairo-banner-item">
              <span className="repairo-banner-text">BRANDING</span>
              <span className="repairo-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
            <div className="repairo-banner-item">
              <span className="repairo-banner-text">UX/UI</span>
              <span className="repairo-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
            <div className="repairo-banner-item">
              <span className="repairo-banner-text">DESIGN</span>
              <span className="repairo-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
          </div>

          <div className="repairo-banner-content">
            <div className="repairo-banner-item">
              <span className="repairo-banner-text">GRAPHIC DESIGN</span>
              <span className="repairo-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
            <div className="repairo-banner-item">
              <span className="repairo-banner-text">BRANDING</span>
              <span className="repairo-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
            <div className="repairo-banner-item">
              <span className="repairo-banner-text">UX/UI</span>
              <span className="repairo-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
            <div className="repairo-banner-item">
              <span className="repairo-banner-text">DESIGN</span>
              <span className="repairo-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="repairo-middleab">
        <div className="repairo-abitdiv">
          <video className="repairo-videot" autoPlay muted loop playsInline>
            <source src={repairoVideo} type="video/mp4" />
          </video>
        </div>
        <div className="repairo-projjj">
    
          <p className="repairo-proj_info1">
            <span style={{ fontFamily: 'anton', fontSize: '50px' }}>about</span>
            <br />
         Repairo is a fast, reliable phone repair service focused on convenience and quality. The project highlights quick diagnostics, expert repairs, and a user-friendly experience designed to make fixing your device simple and stress-free.
          </p>
        </div>
      </div>

     

      <p className="repairo-proj_namephaseux">02.The Branding</p>

      <div className="repairo-branding">
        <img className="repairo-project_logorepairo" src={brandColorRepairo} alt="Brand Colors" />
        <img className="repairo-project_logorepairo" src={repairoStickers} alt="Stickers" />
      </div>

      <p className="repairo-proj_namephasebranding">
   This branding section defines Repairo’s visual identity, using clean, modern colors and a straightforward, trustworthy tone. Simple tech-inspired icons highlight repair services and help guide users through the experience. </p>

      <h1 className="repairo-proj_namephaseux">03. Product Design</h1>

      <div className="repairo-product-design-grid-wrapper">
        <div className="repairo-product-design-box repairo-pd-box-1 repairo-pd-img-contain">
          <img src={loginRepairo} alt="Login Form Design" />
        </div>

        <div className="repairo-product-design-box repairo-pd-box-2 repairo-pd-img-contain">
          <img src={repairo33} alt="Mobile App UI" />
        </div>

        <div className="repairo-product-design-box repairo-pd-box-3 repairo-pd-img-contain">
          <img src={repairo22} alt="Web Programming Progress" />
        </div>

        <div className="repairo-product-design-box repairo-pd-box-4 repairo-pd-img-contain">
          <img src={repairot} alt="Tasks Completed" />
        </div>
      </div>

      <div className="repairo-logos">
        <div className="repairo-logos_slide">
          {logos.map((logo, index) => (
            <img key={`logo-set1-${index}`} src={logo} alt={`Logo ${index + 1}`} />
          ))}
        </div>

        <div className="repairo-logos_slide">
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

export default RepairProject;