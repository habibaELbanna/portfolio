import React, { useRef, useEffect } from 'react';
import './Graphicdesign.css';
import asap from '../Assets/imgs/graphicdesign/posters/asap.jpg'
import hamed from '../Assets/imgs/graphicdesign/posters/hamed.jpg'
import leg from '../Assets/imgs/graphicdesign/posters/habiba_illustration_year1_003.jpg'
import shadow from '../Assets/imgs/graphicdesign/shadow_edge/header.jpg'
import sonder from '../Assets/imgs/graphicdesign/sonder/header.jpg'
import ogre from '../Assets/imgs/graphicdesign/ogre_blast/header.jpg'

const Graphicdesign = () => {
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
    <div className="scroll-wrapper" ref={wrapperRef}>
      <div className="horizontal-scroll-section">
        <div className="scroll-container" ref={scrollContainerRef}>
          <div className="proof-card text-card">
            <h1>THE<br></br> Graphic<br></br> design</h1>
         
          </div>

          <div className="proof-card image-card">
            <img src={asap} alt="Work 11" />
            <div className="image-overlay">
    
            </div>
          </div>

          <div className="proof-card image-card">
            <img src={hamed} alt="Work 1" />
            <div className="image-overlay">
   
            </div>
          </div>

 <div className="proof-card image-card">
            <img src={leg} alt="Work 1" />
            <div className="image-overlay">
   
            </div>
          </div>


 <div className="proof-card image-card">
            <img src={ogre} alt="Work 1" />
            <div className="image-overlay">
   
            </div>
          </div>




 <div className="proof-card image-card">
            <img src={sonder} alt="Work 1" />
            <div className="image-overlay">
   
            </div>
          </div>







 <div className="proof-card image-card">
            <img src={shadow} alt="Work 1" />
            <div className="image-overlay">
   
            </div>
          </div>









 </div>
      </div>
    </div>
  );
};

export default Graphicdesign;