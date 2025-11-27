import React from 'react';
import { Link } from 'react-router-dom';
import './AsapProject.css';
import Navbar from '../Component/Navbar';
import hamed from '../Assets/imgs/graphicdesign/posters/hamed.jpg';
import Footer from '../Component/Footer';
import FloatingButton from '../Component/Floatingbutton';

const HamedProject = () => {
  return (
    <div className="graphic-project-detail">
      <div className="project-container">
       <Navbar />
        
        <div className="project-content">
          <div className="project-info">
            <h1 className="project-title">A$AP Rocky Concert Poster — Concept Design</h1>
            
            <p className="project-description">
            This project is a conceptual poster created for an imagined A$AP Rocky concert announcement, designed entirely in Adobe Illustrator. The aim was to capture the artist’s bold, experimental identity through striking visuals, expressive typography, and a strong urban aesthetic.
            </p>

            <p className="project-description">
              The design features custom vector elements, a dynamic layout, and a modern high-contrast color palette that reflects A$AP Rocky’s fashion-forward and avant-garde style. Focus was placed on visual hierarchy and clarity, ensuring the poster works both as promotional material and as a standalone artistic piece.
            </p>
             <p className="project-description">
        This project highlights my skills in vector illustration, typography, composition, and brand-driven visual storytelling, demonstrating how music culture can be transformed into impactful graphic design.  </p>
          </div>

          <div className="project-images">
            <div className="project-image-wrapper">
              <img 
                src={hamed} 
                alt="ASAP Poster Design"
                className="project-image"
              />
            </div>
            
           
          </div>
        </div>
      </div>
   <FloatingButton />
          <Footer />
    </div>
  );
};

export default HamedProject;