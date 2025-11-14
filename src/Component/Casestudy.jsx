import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Casestudy.css';
import doit from '../Assets/imgs/casestudy/logodoit.svg'
import vortex from '../Assets/imgs/casestudy/vortexlogo.svg'
import cosmo from '../Assets/imgs/casestudy/cosmo.png'
import giza from '../Assets/vid/gizazoo.mp4'
import real from '../Assets/imgs/casestudy/realestate.png'
import phone from '../Assets/imgs/casestudy/phone.png'
import perfume from '../Assets/imgs/casestudy/perfume.png'
import bio from '../Assets/imgs/casestudy/BIO.png'
import sofra from '../Assets/imgs/casestudy/sofra.png'
import kemet from '../Assets/imgs/casestudy/kemet.png'
import pink from '../Assets/imgs/casestudy/pinnk.png'
const Casestudy = () => {
  const containerRef = useRef(null);
  const gridRef = useRef(null);
  const cardsRef = useRef([]);
  const overlayRef = useRef(null);
  const fadeRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    }
  };

  const hoverVariants = {
    scale: 1.02,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 300
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    const overlay = overlayRef.current;
    const fade = fadeRef.current;
    const cards = cardsRef.current;

    if (!container) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      container.style.setProperty('--x', `${x}%`);
      container.style.setProperty('--y', `${y}%`);

      if (overlay) {
        overlay.style.setProperty('--x', `${x}%`);
        overlay.style.setProperty('--y', `${y}%`);
      }

      if (fade) {
        fade.style.setProperty('--x', `${x}%`);
        fade.style.setProperty('--y', `${y}%`);
      }
    };

    const handleCardMouseMove = (card) => (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      card.style.setProperty('--mouse-x', `${x}%`);
      card.style.setProperty('--mouse-y', `${y}%`);
    };

    container.addEventListener('mousemove', handleMouseMove);

    cards.forEach(card => {
      if (card) {
        card.addEventListener('mousemove', handleCardMouseMove(card));
      }
    });

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      cards.forEach(card => {
        if (card) {
          card.removeEventListener('mousemove', handleCardMouseMove(card));
        }
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <div ref={containerRef} className="bento-container">
      <div ref={overlayRef} className="bento-overlay"></div>
      <div ref={fadeRef} className="bento-fade"></div>
      
      <motion.div 
        ref={gridRef}
        className="bento-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          ref={addToRefs}
          className="bento-item card-1"
          variants={itemVariants}
          whileHover={hoverVariants}
        >
          <div className="card-image-full">
            <img 
              src={doit} 
              alt="Image 1"
              className="card-img"
            />
          </div>
        </motion.div>

        <motion.div 
          ref={addToRefs}
          className="bento-item card-2"
          variants={itemVariants}
          whileHover={hoverVariants}
        >
          <div className="card-image-full">
            <img 
              src={kemet} 
              alt="Image 2"
              className="card-img"
            />
          </div>
        </motion.div>

        <motion.div 
          ref={addToRefs}
          className="bento-item card-3"
          variants={itemVariants}
          whileHover={hoverVariants}
        >
          <div className="card-image-full">
            <img 
             src={phone} 
              alt="Image 3"
              className="card-img"
            />
          </div>
        </motion.div>

        <motion.div 
          ref={addToRefs}
          className="bento-item card-4"
          variants={itemVariants}
          whileHover={hoverVariants}
        >
          <div className="card-image-full">
            <img 
             src={cosmo} 
              alt="Image 4"
              className="card-img"
            />
          </div>
        </motion.div>

        <motion.div 
          ref={addToRefs}
          className="bento-item card-5a"
          variants={itemVariants}
          whileHover={hoverVariants}
        >
          <div className="card-image-full">
            <img 
          src={bio} 
              alt="Image 5a"
              className="card-img"
            />
          </div>
        </motion.div>

        <motion.div 
          ref={addToRefs}
          className="bento-item card-5b"
          variants={itemVariants}
          whileHover={hoverVariants}
        >
          <div className="card-image-full">
            <img 
                src={perfume} 
              alt="Image 5b"
              className="card-img"
            />
          </div>
        </motion.div>

        <motion.div 
          ref={addToRefs}
          className="bento-item card-6"
          variants={itemVariants}
          whileHover={hoverVariants}
        >
          <div className="card-image-full">
            <img 
            src={vortex} 
              alt="Image 6"
              className="card-img"
            />
          </div>
        </motion.div>

        <motion.div 
          ref={addToRefs}
          className="bento-item card-7"
          variants={itemVariants}
          whileHover={hoverVariants}
        >
          <div className="card-image-full">
            <img 
              src={real} 
              alt="Image 7"
              className="card-img"
            />
          </div>
        </motion.div>

        <motion.div 
          ref={addToRefs}
          className="bento-item card-8"
          variants={itemVariants}
          whileHover={hoverVariants}
        >
          <div className="card-image-full">
           <video  className='vid'
      src={giza}
   autoPlay
  loop
    playsInline
  muted
    />
          </div>
        </motion.div>

        <motion.div 
          ref={addToRefs}
          className="bento-item card-9"
          variants={itemVariants}
          whileHover={hoverVariants}
        >
          <div className="card-image-full">
            <img 
              src={sofra}
              alt="Image 9"
              className="card-img"
            />
          </div>
        </motion.div>

        <motion.div 
          ref={addToRefs}
          className="bento-item card-10"
          variants={itemVariants}
          whileHover={hoverVariants}
        >
          <div className="card-image-full">
            <img 
             src={pink}
              alt="Image 10"
              className="card-img"
            />
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Casestudy;