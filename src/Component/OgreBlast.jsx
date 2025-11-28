import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './OgreBlast.css';
import Navbar from '../Component/Navbar';
import leg from '../Assets/imgs/graphicdesign/posters/habiba_illustration_year1_003.jpg';
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

      const cards = scrollContainer.querySelectorAll('.proof-card');
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
        const translateX = -progress * maxScroll;
        scrollContainer.style.transform = `translateX(${translateX}px)`;
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
        <h1 className="ogre-project-title">Environmental Concept Art</h1>

        <p className="ogre-project-description">
          This project is a hand-drawn digital illustration created in Adobe Photoshop...
        </p>

      </div>

      <div className="ogre-proof-card ogre-image-card">
        <img src={leg} alt="Environment Design 1" />
      </div>

      <div className="ogre-proof-card ogre-image-card">
        <img src={leg} alt="Environment Design 2" />
      </div>

      <div className="ogre-proof-card ogre-image-card">
        <img src={leg} alt="Environment Design 3" />
      </div>

      <div className="ogre-proof-card ogre-image-card">
        <img src={leg} alt="Environment Design 4" />
      </div>

    </div>
  </div>
</div>
<Footer />
</>
  );
};

export default Ogreblast;