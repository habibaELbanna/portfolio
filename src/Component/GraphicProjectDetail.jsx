import React, { useRef, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import './GraphicProjectDetail.css';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import FloatingButton from '../Component/Floatingbutton';
import { graphicProjects } from '../data/graphicProjectsData';

const GraphicProjectDetail = () => {
  const { projectId } = useParams();
  const project = graphicProjects[projectId];
  console.log("projectId from URL:", projectId);
  console.log("project data:", project);
  console.log("all projects:", graphicProjects)
  const scrollContainerRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (project && project.layoutType === 'horizontal') {
      const scrollContainer = scrollContainerRef.current;
      const scrollWrapper = wrapperRef.current;

      const updateHorizontalScroll = () => {
        if (!scrollContainer || !scrollWrapper) return;

        const cards = scrollContainer.querySelectorAll('.project-proof-card');
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
    }
  }, [project]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  if (project.layoutType === 'horizontal') {
    return (
      <>
        <Navbar />
        <div className="project-scroll-wrapper" ref={wrapperRef}>
          <div className="project-horizontal-scroll-section">
            <div className="project-scroll-container" ref={scrollContainerRef}>
              
              <div className="project-proof-card project-text-card">
                <h1 className="project-detail-title">{project.title}</h1>
                {project.description.map((paragraph, index) => (
                  <p key={index} className="project-detail-description">
                    {paragraph}
                  </p>
                ))}
              </div>

              {project.images.map((image, index) => (
                <div key={index} className="project-proof-card project-image-card">
                  <img src={image} alt={`${project.title} ${index + 1}`} />
                </div>
              ))}

            </div>
          </div>
        </div>
        <FloatingButton />
        <Footer />
      </>
    );
  }

  return (
    <div className="graphic-project-detail">
      <div className="project-container">
        <Navbar />
        
        <div className="project-content">
          <div className="project-info">
            <h1 className="project-title">{project.title}</h1>
            
            {project.description.map((paragraph, index) => (
              <p key={index} className="project-description">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="project-images">
            {project.images.map((image, index) => (
              <div key={index} className="project-image-wrapper">
                <img 
                  src={image} 
                  alt={`${project.title} ${index + 1}`}
                  className="project-image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <FloatingButton />
      <Footer />
    </div>
  );
};

export default GraphicProjectDetail;