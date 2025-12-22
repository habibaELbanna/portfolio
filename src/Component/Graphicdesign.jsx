import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Graphicdesign.css';


const Graphicdesign = () => {
  const scrollContainerRef = useRef(null);
  const wrapperRef = useRef(null);


  const projectsList = Object.keys(graphicProjects).map(key => ({
    id: key,
    title: graphicProjects[key].title.split('—')[0].trim(),
    category: graphicProjects[key].category,
    image: graphicProjects[key].headerImage,
    link: `/graphic-project/${key}` 
  }));

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
            <h1>THE<br /> Graphic<br /> design</h1>
          </div>

       
          {projectsList.map((project) => (
            <Link 
              key={project.id} 
              to={project.link}
              style={{ textDecoration: 'none' }}
            >
              <div className="proof-card image-card">
                <img src={project.image} alt={project.title} />
                <div className="image-overlay"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Graphicdesign;