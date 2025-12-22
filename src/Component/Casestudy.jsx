import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Casestudy.css';
import { webDevProjects } from '../data/webDevProjectsData';

// Keep your existing imports for images/videos
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
import { supabase } from '../Supabase';

const Casestudy = () => {
  const [loading, setLoading] = useState(true);
  const [activeWork, setActiveWork] = useState(0);
  const [projects,setProjects] = useState("");
  // const projects = [
  //   {
  //     id: 0,
  //     title: "Do It",
  //     category: "branding",
  //     image: doit,
  //     link: "/webapp-project/doit" // Updated link
  //   },
  //   {
  //     id: 1,
  //     title: "Kemet",
  //     category: "branding",
  //     image: kemet,
  //     link: "/webapp-project/kemet" // Updated link
  //   },
  //   {
  //     id: 2,
  //     title: "Phone Design",
  //     category: "product design",
  //     image: phone,
  //     link: "/webapp-project/repair" // Updated link
  //   },
  //   {
  //     id: 3,
  //     title: "Cosmo",
  //     category: "branding",
  //     image: cosmo,
  //     link: "/webapp-project/cosmo" // Updated link
  //   },
  //   {
  //     id: 4,
  //     title: "BIO",
  //     category: "branding",
  //     image: bio,
  //     link: "/webapp-project/biopulse" // Updated link
  //   },
  //   {
  //     id: 5,
  //     title: "Perfume",
  //     category: "product design",
  //     image: perfume,
  //     link: "/webapp-project/nefirtium" // Updated link
  //   },
  //   {
  //     id: 6,
  //     title: "Vortex",
  //     category: "branding",
  //     image: vortex,
  //     link: "/webapp-project/vortex" // Updated link
  //   },
  //   {
  //     id: 7,
  //     title: "Real Estate",
  //     category: "web design",
  //     image: real,
  //     link: "/webapp-project/baitak" // Updated link
  //   },
  //   {
  //     id: 8,
  //     title: "Giza Zoo",
  //     category: "web design",
  //     video: giza,
  //     link: "/webapp-project/gizazoo" // Updated link
  //   },
  //   {
  //     id: 9,
  //     title: "Sofra",
  //     category: "branding",
  //     image: sofra,
  //     link: "/webapp-project/sofra" // Updated link
  //   },
  //   {
  //     id: 10,
  //     title: "Pink Project",
  //     category: "design",
  //     image: pink,
  //     link: "/webapp-project/pinktaxi" // Updated link
  //   }
  // ];

  // Keep all your existing useEffect and animation code
  const handleWorkHover = (workId) => {
    setActiveWork(workId);
  };

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

async function callAPI(params) {
  const res = await supabase.from("Projects").select("id,Hero_image,slug").eq("section_type","webapp");
  
  setProjects(res.data);
  setLoading(false);
}

callAPI();



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

  const getCardClassName = (index) => {
    const cardClasses = [
      'card-1',
      'card-2', 
      'card-3',
      'card-4',
      'card-5a',
      'card-5b',
      'card-6',
      'card-7',
      'card-8',
      'card-9',
      'card-10'
    ];
    return cardClasses[index] || `card-${index + 1}`;
  };
if (loading) return <p>Loading...</p>;
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
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`bento-item ${getCardClassName(index)}`}
            variants={itemVariants}
            whileHover={hoverVariants}
            onMouseEnter={() => handleWorkHover(project.id)}
            ref={addToRefs}
          >
            <Link to={project.slug} style={{ textDecoration: 'none', display: 'block', width: '100%', height: '100%' }}>
              <div className="card-image-full">
                {project.video ? (
                  <video
                    className='vid'
                    src={project.video}
                    autoPlay
                    loop
                    playsInline
                    muted
                  />
                ) : (
                  <img 
                    src={project.Hero_image} 
                    alt={project.slug}
                    className="card-img"
                  />
                )}
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Casestudy;