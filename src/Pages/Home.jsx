import React from 'react';
import './Home.css';
import Navbar from '../Component/Navbar';
import Hero from '../Component/Hero';
import Graphicdesign from '../Component/Graphicdesign';
import Casestudy from '../Component/Casestudy';
import Discription from '../Component/Discription';
import Threed from '../Component/Threed';

const Home = () => {
  return (
    <div className="portfolio-home-container">
      <Navbar />
     <Hero />
     <Graphicdesign />
      <Discription />
     <Casestudy />
     <Threed />
    </div>
  );
};

export default Home;