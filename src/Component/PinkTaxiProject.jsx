import React from 'react';
import { Link } from 'react-router-dom';
import './PinkTaxiProject.css';
import logoPinkTaxi from '../Assets/imgs/casestudy/pinktaxi.png';
import pinktaxiVideo from '../Assets/imgs/pinktaxi/pinktaxi.mp4';
import ankhIcon from '../Assets/imgs/ankh.svg';
import uxPinkTaxi from '../Assets/imgs/pinktaxi/uxpinktaxi.png';
import brandColorPinkTaxi from '../Assets/imgs/pinktaxi/brandcolorpinktaxi.png';
import pinktaxiStickers from '../Assets/imgs/pinktaxi/pinktaxistickers.png';
import loginPinkTaxi from '../Assets/imgs/pinktaxi/loginpinktaxi.png';
import pinktaxi33 from '../Assets/imgs/pinktaxi/1.png';
import pinktaxi22 from '../Assets/imgs/pinktaxi/13.png';
import pinktaxii from '../Assets/imgs/pinktaxi/10.png';
import logo1 from '../Assets/imgs/pinktaxi/1.png';
import logo2 from '../Assets/imgs/pinktaxi/2.png';
import logo3 from '../Assets/imgs/pinktaxi/3.png';
import logo4 from '../Assets/imgs/pinktaxi/4.png';
import logo5 from '../Assets/imgs/pinktaxi/5.png';
import logo6 from '../Assets/imgs/pinktaxi/6.png';
import logo7 from '../Assets/imgs/pinktaxi/7.png';
import logo8 from '../Assets/imgs/pinktaxi/8.png';
import Nav from '../Component/Navbar';
import Footer from '../Component/Footer';
import FloatingButton from '../Component/Floatingbutton';

const PinkTaxiProject = () => {
    
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

  return (
    <>
    <Nav />
    <div className="pinktaxi-project-container">
      <p className="pinktaxi-proj_name">Pink Taxi</p>
      <p className="pinktaxi-proj_title">
        An Immersive Journey Through Ancient Egypt
      </p>

      <div className="pinktaxi-banner-container">
        <div className="pinktaxi-banner-track">
          <div className="pinktaxi-banner-content">
            <div className="pinktaxi-banner-item">
              <span className="pinktaxi-banner-text">GRAPHIC DESIGN</span>
              <span className="pinktaxi-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
            <div className="pinktaxi-banner-item">
              <span className="pinktaxi-banner-text">BRANDING</span>
              <span className="pinktaxi-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
            <div className="pinktaxi-banner-item">
              <span className="pinktaxi-banner-text">UX/UI</span>
              <span className="pinktaxi-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
            <div className="pinktaxi-banner-item">
              <span className="pinktaxi-banner-text">DESIGN</span>
              <span className="pinktaxi-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
          </div>

          <div className="pinktaxi-banner-content">
            <div className="pinktaxi-banner-item">
              <span className="pinktaxi-banner-text">GRAPHIC DESIGN</span>
              <span className="pinktaxi-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
            <div className="pinktaxi-banner-item">
              <span className="pinktaxi-banner-text">BRANDING</span>
              <span className="pinktaxi-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
            <div className="pinktaxi-banner-item">
              <span className="pinktaxi-banner-text">UX/UI</span>
              <span className="pinktaxi-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
            <div className="pinktaxi-banner-item">
              <span className="pinktaxi-banner-text">DESIGN</span>
              <span className="pinktaxi-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="pinktaxi-middleab">
        <div className="pinktaxi-abitdiv">
          <video className="pinktaxi-videot" autoPlay muted loop playsInline>
            <source src={pinktaxiVideo} type="video/mp4" />
          </video>
        </div>
        <div className="pinktaxi-projjj">
          <img className="pinktaxi-project_logo1" src={logoPinkTaxi} alt="Pink Taxi Logo" />
          <p className="pinktaxi-proj_info1">
            <span style={{ fontFamily: 'anton', fontSize: '50px' }}>about</span>
            <br />
          Kemet is a narrative-driven website exploring over 3,000 years of Ancient Egyptian history. It combines accessible research with high-fidelity 3D models and interactive reconstructions, letting users virtually explore temples, tombs, and ancient cities.
          </p>
        </div>
      </div>

    
      <p className="pinktaxi-proj_namephaseux">02.The Branding</p>

      <div className="pinktaxi-branding">
        <img className="pinktaxi-project_logokemet" src={brandColorPinkTaxi} alt="Brand Colors" />
        <img className="pinktaxi-project_logokemet" src={pinktaxiStickers} alt="Stickers" />
      </div>

      <p className="pinktaxi-proj_namephasebranding">
This branding section outlines the visual identity, using a blue and gold palette and a clear, historically inspired style. Custom dynasty icons serve as key visual elements, reinforcing both navigation and theme.
</p>

      <h1 className="pinktaxi-proj_namephaseux">03. Product Design</h1>

      <div className="pinktaxi-product-design-grid-wrapper">
        <div className="pinktaxi-product-design-box pinktaxi-pd-box-1 pinktaxi-pd-img-contain">
          <img src={loginPinkTaxi} alt="Login Form Design" />
        </div>

        <div className="pinktaxi-product-design-box pinktaxi-pd-box-2 pinktaxi-pd-img-contain">
          <img src={pinktaxi33} alt="Mobile App UI" />
        </div>

        <div className="pinktaxi-product-design-box pinktaxi-pd-box-3 pinktaxi-pd-img-contain">
          <img src={pinktaxi22} alt="Web Programming Progress" />
        </div>

        <div className="pinktaxi-product-design-box pinktaxi-pd-box-4 pinktaxi-pd-img-contain">
          <img src={pinktaxii} alt="Tasks Completed" />
        </div>
      </div>

      <div className="pinktaxi-logos">
        <div className="pinktaxi-logos_slide">
          {logos.map((logo, index) => (
            <img key={`logo-set1-${index}`} src={logo} alt={`Logo ${index + 1}`} />
          ))}
        </div>

        <div className="pinktaxi-logos_slide">
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

export default PinkTaxiProject;