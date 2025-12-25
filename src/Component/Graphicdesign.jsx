import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Graphicdesign.css';
import { supabase } from '../Supabase';
console.log("🚨 GRAPHICDESIGN COMPONENT LOADED");
const Graphicdesign = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const scrollContainerRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    async function callAPI() {
      const res = await supabase
        .from("Projects")
        .select("id,Title,section_type,Hero_image,slug")
        .eq("section_type", "graphic");
      
      setProjects(res.data);
      setLoading(false);
    }
    
    callAPI();
  }, []);

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
  }, [projects]);

  if (loading) return <p>Loading...</p>;

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
              to={`/graphic-project/${project.slug}`}
              style={{ textDecoration: 'none' }}
            >
              <div className="proof-card image-card">
                <img src={project.Hero_image} alt={project.slug} />
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