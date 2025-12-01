import React from 'react';
import { Link } from 'react-router-dom';
import './CosmoNocturneProject.css';
import logoCosmoNocturne from '../Assets/imgs/cosmonocturne/cosmonocturne.png';
import cosmonocturneVideo from '../Assets/imgs/cosmonocturne/cosmonocturne.mp4';
import ankhIcon from '../Assets/imgs/ankh.svg';
import uxCosmoNocturne from '../Assets/imgs/cosmonocturne/uxcosmonocturne.png';
import brandColorCosmoNocturne from '../Assets/imgs/cosmonocturne/brandcolorcosmonocturne.png';
import cosmonocturneStickers from '../Assets/imgs/cosmonocturne/cosmonocturnestickers.png';
import loginCosmoNocturne from '../Assets/imgs/cosmonocturne/logincosmonocturne.png';
import cosmonocturne33 from '../Assets/imgs/cosmonocturne/1.png';
import cosmonocturne22 from '../Assets/imgs/cosmonocturne/13.png';
import cosmonocturnn from '../Assets/imgs/cosmonocturne/10.png';
import logo1 from '../Assets/imgs/cosmonocturne/1.png';
import logo2 from '../Assets/imgs/cosmonocturne/2.png';
import logo3 from '../Assets/imgs/cosmonocturne/3.png';
import logo4 from '../Assets/imgs/cosmonocturne/4.png';
import logo5 from '../Assets/imgs/cosmonocturne/5.png';
import logo6 from '../Assets/imgs/cosmonocturne/6.png';
import logo7 from '../Assets/imgs/cosmonocturne/7.png';
import logo8 from '../Assets/imgs/cosmonocturne/8.png';
import Nav from '../Component/Navbar';
import Footer from '../Component/Footer';
import FloatingButton from '../Component/Floatingbutton';

const CosmoNocturneProject = () => {
    
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

  return (
    <>
    <Nav />
    <div className="cosmonocturne-project-container">
      <p className="cosmonocturne-proj_name">Cosmo Nocturne</p>
      <p className="cosmonocturne-proj_title">
      Cosmo Nocturne blends storytelling, puzzles, and AR interaction to create a thrilling escape-room adventure.
      </p>

      <div className="cosmonocturne-banner-container">
        <div className="cosmonocturne-banner-track">
          <div className="cosmonocturne-banner-content">
            <div className="cosmonocturne-banner-item">
              <span className="cosmonocturne-banner-text">GRAPHIC DESIGN</span>
              <span className="cosmonocturne-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
            <div className="cosmonocturne-banner-item">
              <span className="cosmonocturne-banner-text">BRANDING</span>
              <span className="cosmonocturne-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
            <div className="cosmonocturne-banner-item">
              <span className="cosmonocturne-banner-text">UX/UI</span>
              <span className="cosmonocturne-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
            <div className="cosmonocturne-banner-item">
              <span className="cosmonocturne-banner-text">DESIGN</span>
              <span className="cosmonocturne-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
          </div>

          <div className="cosmonocturne-banner-content">
            <div className="cosmonocturne-banner-item">
              <span className="cosmonocturne-banner-text">GRAPHIC DESIGN</span>
              <span className="cosmonocturne-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
            <div className="cosmonocturne-banner-item">
              <span className="cosmonocturne-banner-text">BRANDING</span>
              <span className="cosmonocturne-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
            <div className="cosmonocturne-banner-item">
              <span className="cosmonocturne-banner-text">UX/UI</span>
              <span className="cosmonocturne-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
            <div className="cosmonocturne-banner-item">
              <span className="cosmonocturne-banner-text">DESIGN</span>
              <span className="cosmonocturne-ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="cosmonocturne-middleab">
        <div className="cosmonocturne-abitdiv">
          <video className="cosmonocturne-videot" autoPlay muted loop playsInline>
            <source src={cosmonocturneVideo} type="video/mp4" />
          </video>
        </div>
        <div className="cosmonocturne-projjj">
          <img className="cosmonocturne-project_logo1" src={logoCosmoNocturne} alt="Cosmo Nocturne Logo" />
          <p className="cosmonocturne-proj_info1">
            <span style={{ fontFamily: 'anton', fontSize: '50px' }}>about</span>
            <br />
      Cosmo Nocturne is an AR escape-room experience where players solve puzzles, uncover clues, and navigate a mysterious sci-fi environment through immersive augmented reality.  </p>
        </div>
      </div>

    <p className="proj_namephaseux">01.The ux</p>
    
          <img className="project_logo1" src={uxCosmoNocturne} alt="UX Design" />
          <p className="proj_namephasebranding">
    This UX section outlines the research and design process behind Cosmo Nocturne, an AR escape-room experience. It highlights user insights, journey mapping, and user flow, showing how the game guides players through puzzles, clues, and interactive AR elements for an immersive, intuitive, and engaging escape adventure.  </p>
    
        
      <p className="cosmonocturne-proj_namephaseux">02.The Branding</p>

      <div className="cosmonocturne-branding">
        <img className="cosmonocturne-project_logokemet" src={brandColorCosmoNocturne} alt="Brand Colors" />
        <img className="cosmonocturne-project_logokemet" src={cosmonocturneStickers} alt="Stickers" />
      </div>

      <p className="cosmonocturne-proj_namephasebranding">
Cosmo Nocturne’s branding uses dark cosmic tones, neon accents, and futuristic iconography to reflect its sci-fi mystery theme. Visual elements emphasize immersion, technology, and exploration.</p>

      <h1 className="cosmonocturne-proj_namephaseux">03. Product Design</h1>

      <div className="cosmonocturne-product-design-grid-wrapper">
        <div className="cosmonocturne-product-design-box cosmonocturne-pd-box-1 cosmonocturne-pd-img-contain">
          <img src={loginCosmoNocturne} alt="Login Form Design" />
        </div>

        <div className="cosmonocturne-product-design-box cosmonocturne-pd-box-2 cosmonocturne-pd-img-contain">
          <img src={cosmonocturne33} alt="Mobile App UI" />
        </div>

        <div className="cosmonocturne-product-design-box cosmonocturne-pd-box-3 cosmonocturne-pd-img-contain">
          <img src={cosmonocturne22} alt="Web Programming Progress" />
        </div>

        <div className="cosmonocturne-product-design-box cosmonocturne-pd-box-4 cosmonocturne-pd-img-contain">
          <img src={cosmonocturnn} alt="Tasks Completed" />
        </div>
      </div>

      <div className="cosmonocturne-logos">
        <div className="cosmonocturne-logos_slide">
          {logos.map((logo, index) => (
            <img key={`logo-set1-${index}`} src={logo} alt={`Logo ${index + 1}`} />
          ))}
        </div>

        <div className="cosmonocturne-logos_slide">
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

export default CosmoNocturneProject;