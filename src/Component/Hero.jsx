import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import me from '../Assets/imgs/me.png';
import ankh from  '../Assets/imgs/ankh.svg'
const Hero = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const title = "HABIBA ELBANNA";
  
  return (
    <main className="portfolio-hero-section">
      <h1 className="portfolio-main-title">
        {title.split('').map((letter, index) => (
          <motion.span
            key={index}
            className={`portfolio-letter ${hoveredIndex === index ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            animate={{
              filter: hoveredIndex === index 
                ? 'blur(15px) contrast(1.3)' 
                : 'blur(0px) contrast(1)',
            }}
            transition={{
              duration: 0.1,
              ease: "easeInOut"
            }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </h1>
      
      <div className="portfolio-hero-content">
        <div className="portfolio-text-content">
          <p className="portfolio-description-text">
            I Design Cool Stuff That Looks Good And Actually Works. From UX/UI To Branding, Web Design, And A Sprinkle Of Code, I Love Turning Ideas Into Fun, Scroll-Worthy Experiences.
          </p>
          
          <a href="#about" className="portfolio-cta-button">MORE ABOUT ME</a>
        </div>

        <div className="portfolio-image-wrapper">
          <img src={me} alt="Habiba Elbanna" className="portfolio-hero-image" />
        </div>
      </div>
      


      
<div class="banner-container">
        <div class="banner-track">
          
            <div className="banner-content">
                <div className="banner-item">
                    <span className="banner-text">GRAPHIC DESIGN</span>
                    <span className="ankh">
                <img src={ankh} alt="" />
                    </span>
                </div>
                <div className="banner-item">
                    <span className="banner-text">BRANDING</span>
                    <span className="ankh">
                          <img src={ankh} alt="" />
                    </span>
                </div>
                <div className="banner-item">
                    <span className="banner-text">UX/UI</span>
                    <span className="ankh">
                        <img src={ankh} alt="" />
                    </span>
                </div>
                <div className="banner-item">
                    <span className="banner-text">CODING</span>
                    <span className="ankh">
                       <img src={ankh} alt="" />
                    </span>
                </div>
            </div>
            
        
            <div className="banner-content">
                <div className="banner-item">
                    <span className="banner-text">GRAPHIC DESIGN</span>
                    <span className="ankh">
                      <img src={ankh} alt="" />
                    </span>
                </div>
                <div className="banner-item">
                    <span className="banner-text">BRANDING</span>
                    <span className="ankh">
                       <img src={ankh} alt="" />
                    </span>
                </div>
                <div className="banner-item">
                    <span className="banner-text">UX/UI</span>
                    <span className="ankh">
                      <img src={ankh} alt="" />
                    </span>
                </div>
                <div className="banner-item">
                    <span className="banner-text">CODING</span>
                    <span className="ankh">
                      <img src={ankh} alt="" />
                    </span>
                </div>
            </div>
        </div>
    </div>









      
    </main>







  );
};

export default Hero;