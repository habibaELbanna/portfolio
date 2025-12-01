import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import './Home.css';
import Navbar from '../Component/Navbar';
import Hero from '../Component/Hero';
import Graphicdesign from '../Component/Graphicdesign';
import Casestudy from '../Component/Casestudy';
import Discription from '../Component/Discription';
import CodingSection from '../Component/CodingSection';
import AboutMe from '../Component/AboutMe';
import Footer from '../Component/Footer';
import FloatingButton from '../Component/Floatingbutton';
import Contact from '../Component/Contact';
import { Helmet } from "react-helmet";
import { Element } from 'react-scroll';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if there's a hash in the URL (e.g., /#graphicdesign)
    if (location.hash) {
      const sectionId = location.hash.replace('#', '');
      // Small delay to ensure page is fully loaded
      setTimeout(() => {
        scroller.scrollTo(sectionId, {
          smooth: true,
          duration: 600,
          offset: -80, // Adjust this if you have a fixed navbar
        });
      }, 100);
    } else {
      // If no hash, scroll to top
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
      <>
    <Helmet>
        <title>Home</title>
        <meta name="description" content="This is the home" />
        <meta property="og:title" content="home" />
      
      </Helmet>

    <div className="portfolio-home-container">
      <Navbar />

      <Element name="home">
        <Hero />
      </Element>

      <Element name="graphicdesign">
        <Graphicdesign />
      </Element>

      <Element name="webapp">
        <Casestudy />
      </Element>

      <Element name="coding">
        <CodingSection />
      </Element>

      <Element name="aboutme">
        <AboutMe />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>

      <FloatingButton />
      <Footer />
    </div>
    </>
  );
};

export default Home;