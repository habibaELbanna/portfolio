import React from 'react';
import './BaitakProject.css';

import Nav from '../Component/Navbar';
import Footer from '../Component/Footer';
import FloatingButton from '../Component/Floatingbutton';

// Main assets
import logoBaitak from '../Assets/imgs/baitak/baitak.png';
import baitakVideo from '../Assets/imgs/baitak/baitak.mp4';
import iconBaitak from '../Assets/imgs/ankh.svg';

// Branding
import brandColorBaitak from '../Assets/imgs/baitak/brandcolor.png';
import baitakStickers from '../Assets/imgs/baitak/stickers.svg';

// UI Screens
import screen1 from '../Assets/imgs/baitak/1.png';
import screen2 from '../Assets/imgs/baitak/2.png';
import screen3 from '../Assets/imgs/baitak/3.png';
import screen4 from '../Assets/imgs/baitak/4.png';
import screen5 from '../Assets/imgs/baitak/5.png';
import screen6 from '../Assets/imgs/baitak/6.png';

// Logo animations scroll
const logos = [screen1, screen2, screen3, screen4, screen5, screen6];

const BaitakProject = () => {
  return (
    <>
      <Nav />
      <div className="baitak-project-container">

        {/* Main title */}
        <p className="baitak-proj_name">Baitak</p>
        <p className="baitak-proj_title">
          A Modern Home Listing & Real-Estate Experience
        </p>

        {/* Moving banner */}
        <div className="baitak-banner-container">
          <div className="baitak-banner-track">
            <div className="baitak-banner-content">
              <div className="baitak-banner-item">
                <span className="baitak-banner-text">UI/UX</span>
                <span className="baitak-icon">
                  <img src={iconBaitak} alt="icon" />
                </span>
              </div>
              <div className="baitak-banner-item">
                <span className="baitak-banner-text">BRANDING</span>
                <span className="baitak-icon">
                  <img src={iconBaitak} alt="icon" />
                </span>
              </div>
              <div className="baitak-banner-item">
                <span className="baitak-banner-text">PRODUCT DESIGN</span>
                <span className="baitak-icon">
                  <img src={iconBaitak} alt="icon" />
                </span>
              </div>
              <div className="baitak-banner-item">
                <span className="baitak-banner-text">WEB DESIGN</span>
                <span className="baitak-icon">
                  <img src={iconBaitak} alt="icon" />
                </span>
              </div>
            </div>

            {/* Duplicate for infinite scroll */}
            <div className="baitak-banner-content">
              <div className="baitak-banner-item">
                <span className="baitak-banner-text">UI/UX</span>
                <span className="baitak-icon">
                  <img src={iconBaitak} alt="icon" />
                </span>
              </div>
              <div className="baitak-banner-item">
                <span className="baitak-banner-text">BRANDING</span>
                <span className="baitak-icon">
                  <img src={iconBaitak} alt="icon" />
                </span>
              </div>
              <div className="baitak-banner-item">
                <span className="baitak-banner-text">PRODUCT DESIGN</span>
                <span className="baitak-icon">
                  <img src={iconBaitak} alt="icon" />
                </span>
              </div>
              <div className="baitak-banner-item">
                <span className="baitak-banner-text">WEB DESIGN</span>
                <span className="baitak-icon">
                  <img src={iconBaitak} alt="icon" />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Intro section */}
        <div className="baitak-middleab">
          <div className="baitak-video-box">
            <video className="baitak-video" autoPlay muted loop playsInline>
              <source src={baitakVideo} type="video/mp4" />
            </video>
          </div>

          <div className="baitak-about">
            <img className="baitak-logo" src={logoBaitak} alt="Baitak Logo" />
            <p className="baitak-about_text">
              <span style={{ fontFamily: 'anton', fontSize: '50px' }}>about</span>
              <br />
              Baitak is a modern real-estate platform offering users an intuitive
              and immersive way to browse, filter, and explore homes.  
              Designed for clarity and trust, Baitak blends clean UI with
              functional product thinking to create a smooth home-search process.
            </p>
          </div>
        </div>

        {/* Branding */}
        <p className="baitak-section-title">02. Branding</p>

        <div className="baitak-branding">
          <img className="baitak-brand-img" src={brandColorBaitak} alt="Brand Colors" />
          <img className="baitak-brand-img" src={baitakStickers} alt="Stickers" />
        </div>

        <p className="baitak-brand-desc">
          The branding focuses on a warm, trustworthy palette combined with clean,
          geometric icons that reflect modern architecture.  
          Clear typography and balanced spacing guide users effortlessly through the platform.
        </p>

        {/* Product Design */}
        <h1 className="baitak-section-title">03. Product Design</h1>

        <div className="baitak-product-grid">
          <div className="baitak-pd-box baitak-pd-img">
            <img src={screen1} alt="UI Screen" />
          </div>
          <div className="baitak-pd-box baitak-pd-img">
            <img src={screen2} alt="UI Screen" />
          </div>
          <div className="baitak-pd-box baitak-pd-img">
            <img src={screen3} alt="UI Screen" />
          </div>
          <div className="baitak-pd-box baitak-pd-img">
            <img src={screen4} alt="UI Screen" />
          </div>
        </div>

        {/* Logos Scroll */}
        <div className="baitak-logos">
          <div className="baitak-logos_slide">
            {logos.map((logo, index) => (
              <img key={`logo-set1-${index}`} src={logo} alt={`Logo ${index + 1}`} />
            ))}
          </div>

          <div className="baitak-logos_slide">
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

export default BaitakProject;
