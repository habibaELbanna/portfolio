import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SonderProject.css';
import Navbar from '../Component/Navbar';
import sonder from '../Assets/imgs/graphicdesign/sonder/header.jpg';
import  sonder1 from '../Assets/imgs/graphicdesign/sonder/habiba_screen_year3_003_001.png';
import  sonder2 from'../Assets/imgs/graphicdesign/sonder/habiba_screen_year3_003_002.png';
import sonder3 from '../Assets/imgs/graphicdesign/sonder/habiba_screen_year3_003_003.png';
import sonder4 from '../Assets/imgs/graphicdesign/sonder/habiba_screen_year3_003_004.png';
import sonder5 from '../Assets/imgs/graphicdesign/sonder/habiba_screen_year3_003_005.png';
import sonder6 from '../Assets/imgs/graphicdesign/sonder/habiba_screen_year3_003_006.png';
import sonder7 from '../Assets/imgs/graphicdesign/sonder/habiba_screen_year3_003_007.png';
import sonder8 from '../Assets/imgs/graphicdesign/sonder/habiba_screen_year3_003_008.png';
import sonder10 from '../Assets/imgs/graphicdesign/sonder/habiba_screen_year3_003_0010.png';
import Footer from '../Component/Footer';
import FloatingButton from '../Component/Floatingbutton';

const SonderProject = () => {
  const scrollContainerRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const scrollWrapper = wrapperRef.current;

    const updateHorizontalScroll = () => {
      if (!scrollContainer || !scrollWrapper) return;

      const cards = scrollContainer.querySelectorAll('.sonder-proof-card');
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
      <div className="sonder-scroll-wrapper" ref={wrapperRef}>
        <div className="sonder-horizontal-scroll-section">
          <div className="sonder-scroll-container" ref={scrollContainerRef}>
            
            <div className="sonder-proof-card sonder-text-card">
              <h1 className="sonder-project-title">Sonder <br></br> Game UI Design <br></br>(University Project)</h1>

              <p className="sonder-project-description">
              This project is a full UI redesign created for a university assignment, originally inspired by the visual style of the game GRIS, but reimagined and renamed as SONDER for academic purposes. The goal was to develop a cohesive user interface that reflects the game’s emotional tone, soft aesthetic, and narrative themes.
              </p>

              <p className="sonder-project-description">
              The UI design includes menus, HUD elements, button systems, iconography, and in-game screens. I focused on creating a calm and atmospheric experience through minimal layouts, soft color palettes, and smooth visual hierarchy. Each screen was designed to enhance player immersion while maintaining clarity and usability.
              </p>
              
              <p className="sonder-project-description">
               This project demonstrates my skills in UI layout design, visual hierarchy, color theory, typography, and stylistic adaptation, showing how artistic emotion can be translated into interactive visual systems.
              </p>
                <p className="sonder-project-description">
           Copyright / Academic Disclaimer<br></br>
This project is a non-commercial university assignment. “Sonder” is a conceptual redesign inspired by the style of the game GRIS. All original characters, story elements, and intellectual property belong to their respective owners. This work is intended for educational and portfolio purposes only.  </p>
            </div>

            <div className="sonder-proof-card sonder-image-card">
              <img src={sonder} alt="Sonder Design 1" />
            </div>
<div className="sonder-proof-card sonder-image-card">
              <img src={sonder10} alt="Sonder Design 4" />
            </div>

            <div className="sonder-proof-card sonder-image-card">
              <img src={sonder1} alt="Sonder Design 2" />
            </div>

      
            <div className="sonder-proof-card sonder-image-card">
              <img src={sonder3} alt="Sonder Design 4" />
            </div>

 <div className="sonder-proof-card sonder-image-card">
              <img src={sonder4} alt="Sonder Design 4" />
            </div>
 <div className="sonder-proof-card sonder-image-card">
              <img src={sonder5} alt="Sonder Design 4" />
            </div>
 <div className="sonder-proof-card sonder-image-card">
              <img src={sonder6} alt="Sonder Design 4" />
            </div>
<div className="sonder-proof-card sonder-image-card">
              <img src={sonder7} alt="Sonder Design 4" />
            </div>
               <div className="sonder-proof-card sonder-image-card">
              <img src={sonder2} alt="Sonder Design 3" />
            </div>

<div className="sonder-proof-card sonder-image-card">
              <img src={sonder8} alt="Sonder Design 4" />
            </div>


          </div>
        </div>
      </div>
      <FloatingButton />
      <Footer />
    </>
  );
};

export default SonderProject;