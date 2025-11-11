import React from 'react';

import './Home.css';
import Navbar from '../Component/Navbar';
import Hero from '../Component/Hero';


const Home = () => {
  return (
    <div className="portfolio-home-container">
      <Navbar />
     <Hero />
    </div>
  );
};

export default Home;