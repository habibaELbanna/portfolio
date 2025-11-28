import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ShadowEdgeProject.css';
import Navbar from '../Component/Navbar';
import shadow from '../Assets/imgs/graphicdesign/shadow_edge/header.jpg';
import shadow2 from '../Assets/imgs/graphicdesign/shadow_edge/habiba_screen_year3_002_001.jpg';
import shadow3 from '../Assets/imgs/graphicdesign/shadow_edge/habiba_screen_year3_002_002.jpg';
import shadow4 from '../Assets/imgs/graphicdesign/shadow_edge/habiba_screen_year3_002_003.jpg';
import shadow5 from '../Assets/imgs/graphicdesign/shadow_edge/habiba_screen_year3_002_004.jpg';
import shadow6 from '../Assets/imgs/graphicdesign/shadow_edge/habiba_screen_year3_002_005.jpg';
import shadow7 from '../Assets/imgs/graphicdesign/shadow_edge/habiba_screen_year3_002_006.jpg';
import shadow8 from '../Assets/imgs/graphicdesign/shadow_edge/habiba_screen_year3_002_007.jpg';
import shadow9 from '../Assets/imgs/graphicdesign/shadow_edge/habiba_screen_year3_002_0011.jpg';
import shadow10 from '../Assets/imgs/graphicdesign/shadow_edge/habiba_screen_year3_002_009.jpg';
import shadow11 from '../Assets/imgs/graphicdesign/shadow_edge/habiba_screen_year3_002_0010.jpg';

import Footer from '../Component/Footer';
import FloatingButton from '../Component/Floatingbutton';

const ShadowEdgeProject = () => {
  const scrollContainerRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const scrollWrapper = wrapperRef.current;

    const updateHorizontalScroll = () => {
      if (!scrollContainer || !scrollWrapper) return;

      const cards = scrollContainer.querySelectorAll('.shadow-proof-card');
      const totalCardsWidth = Array.from(cards).reduce((total, card) => {
        return total + card.offsetWidth + 32;
      }, 0);

      const maxScroll = totalCardsWidth - window.innerWidth;
      const wrapperTop = scrollWrapper.offsetTop;
      const wrapperHeight = scrollWrapper.offsetHeight;
      const scrollProgress = window.scrollY - wrapperTop;

      if (scrollProgress >= 0 && scrollProgress <= wrapperHeight - window.innerHeight) {
        const progress = scrollProgress / (wrapperHeight - window.innerHeight);
        const translateX = progress * maxScroll;
        scrollContainer.style.transform = `translateX(-${translateX}px)`;
      } else if (scrollProgress < 0) {
        scrollContainer.style.transform = `translateX(0px)`;
      } else {
        scrollContainer.style.transform = `translateX(-${maxScroll}px)`;
      }
    };

    window.addEventListener('scroll', updateHorizontalScroll);
    window.addEventListener('resize', updateHorizontalScroll);
    updateHorizontalScroll();

    return () => {
      window.removeEventListener('scroll', updateHorizontalScroll);
      window.removeEventListener('resize', updateHorizontalScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="shadow-scroll-wrapper" ref={wrapperRef}>
        <div className="shadow-horizontal-scroll-section">
          <div className="shadow-scroll-container" ref={scrollContainerRef}>
            
            <div className="shadow-proof-card shadow-text-card">
              <h1 className="shadow-project-title">Shadow Edge <br></br> Game UI Design<br></br> (University Project)</h1>

              <p className="shadow-project-description">
               This project is a full UI redesign created for a university assignment, originally inspired by the aesthetic and atmosphere of the game LIMBO, but reimagined and renamed as Shadow Edge for academic purposes. The goal was to develop a user interface that reflects the game’s dark, minimalist world while maintaining clarity, immersion, and emotional depth.
              </p>

              <p className="shadow-project-description">
             The UI system includes menu screens, HUD elements, icon sets, button systems, and in-game overlays. The visual direction relies on high-contrast silhouettes, muted tones, and subtle animation cues to echo the eerie, atmospheric style of the original inspiration. Every element was designed with simplicity and tension in mind to enhance player focus and maintain the game’s moody storytelling.
              </p>
              
              <p className="shadow-project-description">
                This project highlights my skills in UI layout design, style adaptation, visual hierarchy, contrast-based design, and game atmosphere development, transforming a narrative-driven world into a cohesive, functional interface.
              </p>
                <p className="shadow-project-description">
         Copyright / Academic Disclaimer<br></br>
This project is a non-commercial university assignment. “Shadow Edge” is a conceptual redesign inspired by the style of the game LIMBO. All original characters, narrative elements, and intellectual property belong to their respective owners. This work is intended exclusively for educational and portfolio purposes.   </p>
            </div>

            <div className="shadow-proof-card shadow-image-card">
              <img src={shadow} alt="Shadow Edge Design 1" />
            </div>

            <div className="shadow-proof-card shadow-image-card">
              <img src={shadow2} alt="Shadow Edge Design 2" />
            </div>

            <div className="shadow-proof-card shadow-image-card">
              <img src={shadow3} alt="Shadow Edge Design 3" />
            </div>

            <div className="shadow-proof-card shadow-image-card">
              <img src={shadow4} alt="Shadow Edge Design 4" />
            </div>
<div className="shadow-proof-card shadow-image-card">
              <img src={shadow5} alt="Shadow Edge Design 4" />
            </div><div className="shadow-proof-card shadow-image-card">
              <img src={shadow6} alt="Shadow Edge Design 4" />
            </div><div className="shadow-proof-card shadow-image-card">
              <img src={shadow7} alt="Shadow Edge Design 4" />
            </div><div className="shadow-proof-card shadow-image-card">
              <img src={shadow8} alt="Shadow Edge Design 4" />
            </div><div className="shadow-proof-card shadow-image-card">
              <img src={shadow9} alt="Shadow Edge Design 4" />
            </div><div className="shadow-proof-card shadow-image-card">
              <img src={shadow10} alt="Shadow Edge Design 4" />
            </div><div className="shadow-proof-card shadow-image-card">
              <img src={shadow11} alt="Shadow Edge Design 4" />
            </div>
          </div>
        </div>
      </div>
      <FloatingButton />
      <Footer />
    </>
  );
};

export default ShadowEdgeProject;