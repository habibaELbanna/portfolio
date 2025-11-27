import React from 'react';
import { Link } from 'react-router-dom';
import './AsapProject.css';
import Navbar from '../Component/Navbar';
import leg from '../Assets/imgs/graphicdesign/posters/habiba_illustration_year1_003.jpg';
import Footer from '../Component/Footer';
import FloatingButton from '../Component/Floatingbutton';

const Enviroment = () => {
  return (
    <div className="graphic-project-detail">
      <div className="project-container">
       <Navbar />
        
        <div className="project-content">
          <div className="project-info">
            <h1 className="project-title">Environmental Concept Art — “Human Impact”</h1>
            
            <p className="project-description">
    This project is a hand-drawn digital illustration created in Adobe Photoshop, exploring the theme of human impact on the environment. The artwork depicts a person walking through a lush, green landscape that gradually deteriorates as a direct consequence of their actions. The transition from vibrant nature to damaged terrain visually represents how small, everyday choices can collectively harm the planet.  </p>

            <p className="project-description">
     The piece combines expressive brushwork with atmospheric lighting to enhance the emotional tone. Subtle textures, layered shading, and controlled color shifts were used to show the contrast between life and decay. The concept emphasizes environmental awareness, urging viewers to consider their footprint and responsibility toward Earth. </p>
             <p className="project-description">
  This project highlights my skills in digital painting, environmental storytelling, composition, and visual symbolism, blending artistic expression with a meaningful message. </p></div>

          <div className="project-images">
            <div className="project-image-wrapper">
              <img 
                src={leg} 
                alt="enviroment Poster Design"
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

export default Enviroment;