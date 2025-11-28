import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './OgreBlast.css';
import Navbar from '../Component/Navbar';
import ogre11 from '../Assets/imgs/graphicdesign/ogre_blast/habiba_screen_year3_001_002.jpg';
import ogre2 from '../Assets/imgs/graphicdesign/ogre_blast/habiba_screen_year3_001_003.jpg';
import ogre3 from'../Assets/imgs/graphicdesign/ogre_blast/habiba_screen_year3_001_004.jpg';
import ogre4 from '../Assets/imgs/graphicdesign/ogre_blast/habiba_screen_year3_001_005.jpg';
import ogre5 from '../Assets/imgs/graphicdesign/ogre_blast/habiba_screen_year3_001_006.jpg';
import ogre6 from '../Assets/imgs/graphicdesign/ogre_blast/habiba_screen_year3_001_007.jpg';
import ogre1 from '../Assets/imgs/graphicdesign/ogre_blast/habiba_screen_year3_001.jpg';
import Footer from '../Component/Footer';
import FloatingButton from '../Component/Floatingbutton';

const Ogreblast = () => {
  const scrollContainerRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const scrollWrapper = wrapperRef.current;

    const updateHorizontalScroll = () => {
      if (!scrollContainer || !scrollWrapper) return;

      const cards = scrollContainer.querySelectorAll('.ogre-proof-card');
      const totalCardsWidth = Array.from(cards).reduce((total, card) => {
        return total + card.offsetWidth + 32;
      }, 0);

      const maxScroll = totalCardsWidth - window.innerWidth;
      const wrapperTop = scrollWrapper.offsetTop;
      const wrapperHeight = scrollWrapper.offsetHeight;
      const scrollProgress = window.scrollY - wrapperTop;

      console.log('Scroll Progress:', scrollProgress, 'Max Scroll:', maxScroll);

      if (scrollProgress >= 0 && scrollProgress <= wrapperHeight - window.innerHeight) {
        const progress = scrollProgress / (wrapperHeight - window.innerHeight);
        const translateX = progress * maxScroll; // Changed this line - removed the minus sign
        scrollContainer.style.transform = `translateX(-${translateX}px)`; // Keep minus here
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
      <div className="ogre-scroll-wrapper" ref={wrapperRef}>
        <div className="ogre-horizontal-scroll-section">
          <div className="ogre-scroll-container" ref={scrollContainerRef}>
            
            <div className="ogre-proof-card ogre-text-card">
              <h1 className="ogre-project-title">Ogre Blast<br></br>AR Mobile Game Concept<br></br> (University Project)</h1>

              <p className="ogre-project-description">
               This project is an original AR mobile game concept created as part of a university assignment, inspired by the world and characters of the movie Shrek. The game, titled Ogre Blast, reimagines the Shrek universe through playful mechanics and interactive augmented-reality features designed to engage players in a fun, immersive experience.     </p>

              <p className="ogre-project-description">
        The concept includes UI design, gameplay flow, character interactions, and AR elements that appear in real-world environments. The game encourages players to complete mini-quests, collect magical items, and interact with ogre-themed effects through their device’s camera. Visual direction was kept vibrant, humorous, and family-friendly to match the iconic charm of the Shrek franchise. </p>
              
              <p className="ogre-project-description">
         This project showcases my skills in game UI design, AR concept development, mobile layout systems, interactive design, and visual storytelling, blending recognizable themes with original mechanics suitable for mobile platforms.   </p>
            
                       <p className="ogre-project-description">
                        Copyright / Academic Disclaimer<br></br>
This project is a non-commercial university assignment. Ogre Blast is a conceptual AR game inspired by the Shrek franchise. All original characters, story elements, and intellectual property belong to their respective owners. This work is created solely for educational and portfolio purposes.
  </p>
           
            
            </div>

            <div className="ogre-proof-card ogre-image-card">
              <img src={ogre1} alt="Environment Design 1" />
            </div>

            <div className="ogre-proof-card ogre-image-card">
              <img src={ogre11} alt="Environment Design 2" />
            </div>

            <div className="ogre-proof-card ogre-image-card">
              <img src={ogre2} alt="Environment Design 3" />
            </div>

            <div className="ogre-proof-card ogre-image-card">
              <img src={ogre3} alt="Environment Design 4" />
            </div>

  <div className="ogre-proof-card ogre-image-card">
              <img src={ogre4} alt="Environment Design 4" />
            </div>

  <div className="ogre-proof-card ogre-image-card">
              <img src={ogre5} alt="Environment Design 4" />
            </div>

  <div className="ogre-proof-card ogre-image-card">
              <img src={ogre6} alt="Environment Design 4" />
            </div>

 
          </div>
        </div>
      </div>
      <FloatingButton />
      <Footer />
    </>
  );
};

export default Ogreblast;