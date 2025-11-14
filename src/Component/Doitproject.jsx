import React from 'react';
import { Link } from 'react-router-dom';
import './Doitproject.css';
import logoDoit from '../Assets/imgs/casestudy/logodoit.svg';
import doitVideo from '../Assets/imgs/doit/do it.mp4';
import ankhIcon from '../Assets/imgs/ankh.svg';
import uxDoit from '../Assets/imgs/doit/uxdoit.png';
import brandColorDoit from '../Assets/imgs/doit/brandcolordoit.png';
import doitStickers from '../Assets/imgs/doit/doitstickers.png';
import loginDoit from '../Assets/imgs/doit/logindoit.svg';
import doit33 from '../Assets/imgs/doit/doit33.svg';
import doit22 from '../Assets/imgs/doit/doit22.svg';
import doitt from '../Assets/imgs/doit/doitt.svg';
import logo1 from '../Assets/imgs/doit/1.svg';
import logo2 from '../Assets/imgs/doit/2.svg';
import logo3 from '../Assets/imgs/doit/3.svg';
import logo4 from '../Assets/imgs/doit/4.svg';
import logo5 from '../Assets/imgs/doit/5.svg';
import logo6 from '../Assets/imgs/doit/6.svg';
import logo7 from '../Assets/imgs/doit/7.svg';
import logo8 from '../Assets/imgs/doit/8.svg';
import Nav from './Navbar';

const DoItProject = () => {
    
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

  return (
    <>
    <Nav />
    <div className="doit-project-container">
      <p className="proj_name">2.do it</p>
      <p className="proj_title">
        to-do list app, for helping college students in their academic journey
      </p>

      <div className="banner-container">
        <div className="banner-track">
          <div className="banner-content">
            <div className="banner-item">
              <span className="banner-text">GRAPHIC DESIGN</span>
              <span className="ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
            <div className="banner-item">
              <span className="banner-text">BRANDING</span>
              <span className="ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
            <div className="banner-item">
              <span className="banner-text">UX/UI</span>
              <span className="ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
            <div className="banner-item">
              <span className="banner-text">CODING</span>
              <span className="ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
          </div>

          <div className="banner-content">
            <div className="banner-item">
              <span className="banner-text">GRAPHIC DESIGN</span>
              <span className="ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
            <div className="banner-item">
              <span className="banner-text">BRANDING</span>
              <span className="ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
            <div className="banner-item">
              <span className="banner-text">UX/UI</span>
              <span className="ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
            <div className="banner-item">
              <span className="banner-text">CODING</span>
              <span className="ankh">
                <img src={ankhIcon} alt="ankh icon" />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="middleab">
        <div className="abitdiv">
          <video className="videot" autoPlay muted loop playsInline>
            <source src={doitVideo} type="video/mp4" />
          </video>
        </div>
        <div className="projjj">
          <img className="project_logo1" src={logoDoit} alt="Do It Logo" />
          <p className="proj_info1">
            <span style={{ fontFamily: 'anton', fontSize: '50px' }}>about</span>
            <br />
            Do It is a to-do list app designed specifically to help college students streamline their academic journey.
            <br />
            With features like task prioritization, deadline reminders, and progress tracking, Do It keeps you organized and
            <br />
            focused on what matters most. Whether it's managing assignments, projects, or study sessions, Do It is your go-to tool for staying on top of your workload and achieving your academic goals with ease.
          </p>
        </div>
      </div>

      <p className="proj_namephaseux">01.The ux</p>

      <img className="project_logo1" src={uxDoit} alt="UX Design" />
      <p className="proj_namephasebranding">
        This UX section outlines the research and design process behind the to-do list app for college students. It highlights user insights, journey mapping, and user flow, showing how the app helps students organize tasks, set reminders, and manage their time effectively through a simple, user-friendly experience.
      </p>

      <p className="proj_namephaseux">02.The Branding</p>

      <div className="branding">
        <img className="project_logodoit" src={brandColorDoit} alt="Brand Colors" />
        <img className="project_logodoit" src={doitStickers} alt="Stickers" />
      </div>

      <p className="proj_namephasebranding">
        This branding section highlights the project's playful and energetic visual identity. The bold color palette, led by the vibrant orange #E57E25, sets a cheerful and motivating tone that matches the expressive characters on the right. Each illustrated mascot reinforces the theme of positivity and encouragement—reminding users to study, celebrate progress, and stay organized. Together, the colors and visuals create a cohesive, fun, and engaging brand personality that feels both friendly and dynamic.
      </p>

      <h1 className="proj_namephaseux">03. Product Design</h1>

      <div className="product-design-grid-wrapper">
        <div className="product-design-box pd-box-1 pd-img-contain">
          <img src={loginDoit} alt="Login Form Design" />
        </div>

        <div className="product-design-box pd-box-2 pd-img-contain">
          <img src={doit33} alt="Mobile App UI" />
        </div>

        <div className="product-design-box pd-box-3 pd-img-contain">
          <img src={doit22} alt="Web Programming Progress" />
        </div>

        <div className="product-design-box pd-box-4 pd-img-contain">
          <img src={doitt} alt="Tasks Completed" />
        </div>
      </div>

      <div className="logos">
        <div className="logos_slide">
          {logos.map((logo, index) => (
            <img key={`logo-set1-${index}`} src={logo} alt={`Logo ${index + 1}`} />
          ))}
        </div>

        <div className="logos_slide">
          {logos.map((logo, index) => (
            <img key={`logo-set2-${index}`} src={logo} alt={`Logo ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default DoItProject;