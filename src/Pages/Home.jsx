import React from 'react';
import './Home.css';
import Navbar from '../Component/Navbar';
import Hero from '../Component/Hero';
import Graphicdesign from '../Component/Graphicdesign';


const Home = () => {
  return (
    <div className="portfolio-home-container">
      <Navbar />
     <Hero />
     <Graphicdesign />
    </div>
  );
};

export default Home;