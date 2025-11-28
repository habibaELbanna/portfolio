import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ShadowEdgeProject.css';
import Navbar from '../Component/Navbar';
import shadow from '../Assets/imgs/graphicdesign/shadow_edge/header.jpg';
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
              <h1 className="shadow-project-title">Shadow Edge<br />Graphic Design Project</h1>

              <p className="shadow-project-description">
                Description of your Shadow Edge project goes here. Replace this with your actual project description.
              </p>

              <p className="shadow-project-description">
                Add more details about the design process, inspirations, and creative decisions.
              </p>
              
              <p className="shadow-project-description">
                Highlight your skills and what this project showcases about your design abilities.
              </p>
            </div>

            <div className="shadow-proof-card shadow-image-card">
              <img src={shadow} alt="Shadow Edge Design 1" />
            </div>

            <div className="shadow-proof-card shadow-image-card">
              <img src={shadow} alt="Shadow Edge Design 2" />
            </div>

            <div className="shadow-proof-card shadow-image-card">
              <img src={shadow} alt="Shadow Edge Design 3" />
            </div>

            <div className="shadow-proof-card shadow-image-card">
              <img src={shadow} alt="Shadow Edge Design 4" />
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