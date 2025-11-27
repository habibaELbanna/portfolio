import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

  const projects = [
    {
      id: 0,
      title: "ASAP",
      category: "poster design",
      image: asap,
      link: "/asap-project"
    },
    {
      id: 1,
      title: "Hamed",
      category: "poster design",
      image: hamed,
      link: "/hamed-project"
    },
    {
      id: 2,
      title: "Leg Illustration",
      category: "illustration",
      image: leg,
      link: "/leg-project"
    },
    {
      id: 3,
      title: "Ogre Blast",
      category: "graphic design",
      image: ogre,
      link: "/ogre-project"
    },
    {
      id: 4,
      title: "Sonder",
      category: "graphic design",
      image: sonder,
      link: "/sonder-project"
    },
    {
      id: 5,
      title: "Shadow Edge",
      category: "graphic design",
      image: shadow,
      link: "/shadow-project"
    }
  ];

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

          {projects.map((project) => (
            <Link 
              key={project.id} 
              to={project.link}
              style={{ textDecoration: 'none' }}
            >
              <div className="proof-card image-card">
                <img src={project.image} alt={project.title} />
                <div className="image-overlay">
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Graphicdesign;