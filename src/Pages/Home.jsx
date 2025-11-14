import React from 'react';
import './Home.css';
import Navbar from '../Component/Navbar';
import Hero from '../Component/Hero';
import Graphicdesign from '../Component/Graphicdesign';
import Casestudy from '../Component/Casestudy';
import Discription from '../Component/Discription';
import CodingSection from '../Component/CodingSection';



const Home = () => {
  return (
    <div className="portfolio-home-container">
      <Navbar />
     <Hero />
     <Graphicdesign />
      <Discription />
     <Casestudy />
<CodingSection />
    </div>
  );
};

export default Home;