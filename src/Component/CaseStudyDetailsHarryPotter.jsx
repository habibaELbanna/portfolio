import React from 'react';
import './CasestudydetailsHarryPotter.css'; 
import zoo1 from "../Assets/vid/harry.mp4";
import zoo2 from "../Assets/imgs/coding/harrylast.png";
import screenshot from '../Assets/imgs/coding/harry1.png';
import screenshot2 from '../Assets/imgs/coding/code.png';
import coding from '../Assets/imgs/coding/harry2.png';
import coding2 from '../Assets/imgs/coding/harry3.png';
import Footer from './Footer';
import FloatingButton from './Floatingbutton';
import Navbar from './Navbar';

const CaseStudyDetailsHarryPotter = ({ title, description, images }) => {
  const defaultImages = [
    { type: 'video', src: zoo1 },
    { type: 'image', src: screenshot },
    { type: 'image', src: coding },
    { type: 'image', src: coding2 },
    { type: 'image', src: screenshot2 },
    { type: 'image', src: zoo2 }
  ];

  const galleryImages = images || defaultImages;

  return (
    <>
      <Navbar />

      <div className="harrypotter-split-layout-container">
       
        <div className="harrypotter-scrolling-gallery-section">
          <div className="harrypotter-image-grid-gallery">
            {galleryImages.map((item, index) => (
              <div 
                key={index}
                className="harrypotter-gallery-box-item"
              >
                {item.type === 'video' ? (
                  <video
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <div style={{ 
                    backgroundImage: `url(${item.src})`,
                    width: '100%',
                    height: '100%',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }} />
                )}
              </div>
            ))}
          </div>
        </div>

     
        <div className="harrypotter-fixed-content-section">
          <div className="harrypotter-text-content-wrapper">
            <h1 className="harrypotter-proj_namephaseux">
              {title || "Harry Potter Story"}
            </h1>

            <p>
              {description || (
                <>
                  A magical digital experience inspired by the world of Harry Potter.<br /><br />
                  This project blends storytelling, UI/UX, and immersive visuals to create a cinematic web journey.  
                  Built using HTML, CSS, JavaScript—and enhanced through creative direction and interactive elements—  
                  the goal was to craft a narrative-driven design that feels alive and enchanting.<br /><br />
                  It showcases clean code, responsive structure, and strong attention to detail,  
                  all while bringing the fantasy theme to life through thoughtful design and development.
                </>
              )}
            </p>
          </div>
        </div>

      </div>

      <Footer />
      <FloatingButton />
    </>
  );
};

export default CaseStudyDetailsHarryPotter;
