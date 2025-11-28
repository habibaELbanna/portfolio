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
            <h1 className="project-title">Hamed Gohar Geometric Portrait — Illustrator Vector Art</h1>
            
            <p className="project-description">
         This project is a geometric vector portrait created in Adobe Illustrator, honoring the Egyptian marine science pioneer Dr. Hamed Gohar. The artwork was constructed entirely using triangular shapes, forming a low-poly style that blends modern digital illustration techniques with a tribute to a national scientific icon.  </p>

            <p className="project-description">
         The portrait focuses on simplifying complex facial features into sharp geometric planes, creating depth, dimension, and visual rhythm through carefully selected colors and gradients. Each triangle was manually placed to build a cohesive structure that reflects both precision and creativity. </p>
             <p className="project-description">
   This project demonstrates my skills in vector construction, low-poly design, color mapping, and stylized portrait illustration, transforming a scientific figure into a contemporary piece of digital art suitable for print and display.</p></div>

          <div className="project-images">
            <div className="project-image-wrapper">
              <img 
                src={hamed} 
                alt="hamed Poster Design"
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