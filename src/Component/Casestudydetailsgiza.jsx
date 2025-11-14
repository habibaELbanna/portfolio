import React from 'react';
import './Casestudydetailsgiza.css';
import zoo1 from '../Assets/vid/gizazoo.mp4';
import screenshot from '../Assets/imgs/coding/code.png';
import coding from '../Assets/imgs/coding/coding.png';
import Footer from './Footer';
import FloatingButton from './Floatingbutton';
import Navbar from './Navbar';

const CaseStudyDetailsGiza = ({ title, description, images }) => {
  // Default images if not provided
  const defaultImages = [
    { type: 'video', src: zoo1 },
    { type: 'image', src: screenshot },
    { type: 'image', src: coding },
    { type: 'image', src: coding },
    { type: 'image', src: screenshot },
    { type: 'video', src: zoo1 }
  ];

  const galleryImages = images || defaultImages;

  return (
    <>
      <Navbar />
      <div className="split-layout-container">
      {/* Left Side - Scrolling Gallery */}
      <div className="scrolling-gallery-section">
        <div className="image-grid-gallery">
          {galleryImages.map((item, index) => (
            <div 
              key={index}
              className="gallery-box-item"
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

      {/* Right Side - Fixed Content */}
      <div className="fixed-content-section">
        <div className="text-content-wrapper">
          <h1 className="proj_namephaseux">
            {title || "Giza Zoo"}
          </h1>
          <p>
            {description || (
              <>
                Project Title: Coding & Web Development Project<br /><br />
                Tools Used: HTML, CSS, JavaScript (and others as needed)<br /><br />
                Description:
                This project showcases my skills in front-end development and creative problem-solving. I built a responsive, user-friendly interface that focuses on clean structure, smooth interactions, and strong visual balance. Through this project, I explored both design and functionality—writing efficient code, optimizing performance, and ensuring a seamless experience across devices. It reflects my passion for combining logic and creativity to craft meaningful digital experiences.
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

export default CaseStudyDetailsGiza;