import React, { useState, useEffect } from 'react';
import './AboutMe.css';
import { Helmet } from "react-helmet";
import logo from '../Assets/imgs/logo.svg';
import more from '../Assets/imgs/more.svg';
import { supabase } from '../Supabase';

const AboutMe = () => {
  const [aboutData, setAboutData] = useState(null);
  const [skillsData, setSkillsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        console.log('🔍 Fetching About and Skills data...');
        
        // Fetch About data
        const { data: aboutResult, error: aboutError } = await supabase
          .from('About')
          .select('discribtion2, skills')
          .eq('id', 1)
          .single();

        if (aboutError) throw aboutError;
        console.log('✅ About data:', aboutResult);
        setAboutData(aboutResult);

        // Fetch Skills data
        const { data: skillsResult, error: skillsError } = await supabase
          .from('Skills')
          .select('skillimg, skill_disc');

        if (skillsError) throw skillsError;
        console.log('✅ Skills data:', skillsResult);
        setSkillsData(skillsResult);

      } catch (error) {
        console.error('❌ Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div className="aboutme">Loading...</div>;
  }

  // Split the skills string into array (assuming it's newline-separated)
  const analogueSkills = aboutData?.skills 
    ? aboutData.skills.split('\n').filter(skill => skill.trim())
    : [];

  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="This is the about page" />
        <meta property="og:title" content="About Us" />
        <meta property="og:image" content="/images/about.png" />
      </Helmet>

      <section className="aboutme">
        <div style={{ width: '695px' }}>
          <img src={logo} alt="habibaslogo" className="aboutlogo" />

          <h2 className="info2">
            {aboutData?.discribtion2 || 
              `I'm a UX designer and a graduate of Egypt University of Informatics, majoring in Digital Arts. I've always been drawn to creative worlds — movies, music, art, and anything that inspires fresh ideas and new perspectives...`
            }
          </h2>

          <h1 className="eduu">EDUCATION</h1>
          <h2 className="school">
            <span style={{ color: 'rgb(255, 255, 255)', fontWeight: 600 }}>-School<br /></span>
            Lycée La Liberté Héliopolis
          </h2>
          <h2 className="school">
            <span style={{ color: 'rgb(255, 255, 255)', fontWeight: 600 }}>-Higher ED<br /></span>
            EUI Egypt University of Informatics
          </h2>
          
          <h1 className="eduu">Experience</h1>
          <h3 className="school">
            -Summer internship<br />
            -delta electronic systems July 2023<br />
            -delta electronic systems July 2024<br />
            -Cyshield august 2024<br />
            -Cyshield august 2025
          </h3>
        </div>

        <div className="infoaboutme">
          <h1 className="infoh11">Software Skills</h1>

          {skillsData.map((skill, index) => (
            <div key={index} className="expi">
              <img src={skill.skillimg} alt={skill.skill_disc} />
              <h3 className="softwaruse">{skill.skill_disc}</h3>
            </div>
          ))}

          <h1 className="infoh11">Analogue skills</h1>
          <h3 className="softwaruse">
            {analogueSkills.map((skill, index) => (
              <React.Fragment key={index}>
                {skill}
                {index < analogueSkills.length - 1 && <br />}
              </React.Fragment>
            ))}
          </h3>

          <div className="image-container">
            <img src={more} alt="More More More" className="twirling-image" />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;