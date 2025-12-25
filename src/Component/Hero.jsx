import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import ankh from '../Assets/imgs/ankh.svg';
import { supabase } from '../Supabase';

const Hero = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const title = "HABIBA ELBANNA";

  useEffect(() => {
    async function fetchAboutData() {
      try {
        console.log('🔍 Fetching About data...');
        
        const { data, error } = await supabase
          .from('About')
          .select('*')
          .eq('id', 1)
          .single();

        console.log('📦 Supabase response:', { data, error });

        if (error) throw error;
        
        if (data) {
          console.log('✅ About data:', data);
          setAboutData(data);
        } else {
          console.log('⚠️ No data found in About table');
        }
      } catch (error) {
        console.error('❌ Error fetching about data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchAboutData();
  }, []);

  if (loading) {
    return <div className="portfolio-hero-section">Loading...</div>;
  }
  
  return (
    <main className="portfolio-hero-section">
      <h1 className="portfolio-main-title">
        {title.split('').map((letter, index) => (
          <motion.span
            key={index}
            className={`portfolio-letter ${hoveredIndex === index ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            animate={{
              filter: hoveredIndex === index 
                ? 'blur(15px) contrast(1.3)' 
                : 'blur(0px) contrast(1)',
            }}
            transition={{
              duration: 0.1,
              ease: "easeInOut"
            }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </h1>
      
      <div className="portfolio-hero-content">
        <div className="portfolio-text-content">
          <p className="portfolio-description-text">
            {aboutData?.discribtion1 || 'I Design Cool Stuff That Looks Good And Actually Works. From UX/UI To Branding, Web Design, And A Sprinkle Of Code, I Love Turning Ideas Into Fun, Scroll-Worthy Experiences.'}
          </p>
          
          <a href="#about" className="portfolio-cta-button">MORE ABOUT ME</a>
        </div>

        <div className="portfolio-image-wrapper">
          {aboutData?.myimage && (
            <img 
              src={aboutData.myimage} 
              alt="Habiba Elbanna" 
              className="portfolio-hero-image" 
            />
          )}
        </div>
      </div>
      
      <div className="banner-container">
        <div className="banner-track">
          <div className="banner-content">
            <div className="banner-item">
              <span className="banner-text">GRAPHIC DESIGN</span>
              <span className="ankh">
                <img src={ankh} alt="" />
              </span>
            </div>
            <div className="banner-item">
              <span className="banner-text">BRANDING</span>
              <span className="ankh">
                <img src={ankh} alt="" />
              </span>
            </div>
            <div className="banner-item">
              <span className="banner-text">UX/UI</span>
              <span className="ankh">
                <img src={ankh} alt="" />
              </span>
            </div>
            <div className="banner-item">
              <span className="banner-text">CODING</span>
              <span className="ankh">
                <img src={ankh} alt="" />
              </span>
            </div>
          </div>
          
          <div className="banner-content">
            <div className="banner-item">
              <span className="banner-text">GRAPHIC DESIGN</span>
              <span className="ankh">
                <img src={ankh} alt="" />
              </span>
            </div>
            <div className="banner-item">
              <span className="banner-text">BRANDING</span>
              <span className="ankh">
                <img src={ankh} alt="" />
              </span>
            </div>
            <div className="banner-item">
              <span className="banner-text">UX/UI</span>
              <span className="ankh">
                <img src={ankh} alt="" />
              </span>
            </div>
            <div className="banner-item">
              <span className="banner-text">CODING</span>
              <span className="ankh">
                <img src={ankh} alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;