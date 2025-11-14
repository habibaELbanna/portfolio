import React, { Component } from 'react';
import './AboutMe.css';
import logo from '../Assets/imgs/logo.svg'
import figma from '../Assets/imgs/figma.svg'
import blender from '../Assets/imgs/blender.svg'
import vs from '../Assets/imgs/vscode.svg'
import illus from '../Assets/imgs/illus.svg'
import photoshop from '../Assets/imgs/photoshop.svg'
import agumented from '../Assets/imgs/reality.svg'
import more from '../Assets/imgs/more.svg'
import af from '../Assets/imgs/effects.svg'
const AboutMe = () => {
  return (
    <section className="aboutme">
      <div style={{ width: '695px' }}>
        <img src={logo} alt="habibaslogo" className="aboutlogo" />

        <h2 className="info2">
          I'm a UX designer and a graduate of Egypt University of Informatics, majoring in Digital Arts. I've always been drawn to creative worlds — movies, music, art, and anything that inspires fresh ideas and new perspectives
          <br /><br />
          For me, UX design is about understanding how people think and what they truly need, while UI design is about bringing those insights to life through clean, engaging, and meaningful visuals. I love expressing myself through my work, and I believe that personal touch is what truly sets me apart.
          <br /><br />
          I enjoy exploring different creative directions and adapting to various scopes — whether it's crafting user journeys, designing interfaces, or shaping brand experiences, I aim to create work that feels thoughtful, intuitive, and a little bit unexpected.
        </h2>

        <h1 className="edu">EDUCATION</h1>
        <h2 className="school">
          <span style={{ color: 'rgb(255, 255, 255)', fontWeight: 600 }}>-School<br /></span>
          Lycée La Liberté Héliopolis
        </h2>
        <h2 className="school">
          <span style={{ color: 'rgb(255, 255, 255)', fontWeight: 600 }}>-Higher ED<br /></span>
          EUI Egypt University of Informatics
        </h2>
      </div>

      <div className="infoaboutme">
        <h1 className="infoh11">Software Skills</h1>

        <div className="expi">
          <img src={figma}alt="" />
          <h3 className="softwaruse">figma</h3>
        </div>
        <div className="expi">
          <img src={photoshop} alt="" />
          <h3 className="softwaruse">photoshop</h3>
        </div>
        <div className="expi">
          <img  src={illus} alt="" />
          <h3 className="softwaruse">illustrator</h3>
        </div>
        <div className="expi">
          <img  src={blender} alt="" />
          <h3 className="softwaruse">blender</h3>
        </div>
        <div className="expi">
          <img  src={vs} alt="" />
          <h3 className="softwaruse">visual studio code</h3>
        </div>
        <div className="expi">
          <img  src={agumented}alt="" />
          <h3 className="softwaruse">XR design</h3>
        </div>
        <div className="expi">
          <img s src={af}alt="" />
          <h3 className="softwaruse">After Effects</h3>
        </div>

        <h1 className="infoh11">Analogue skills</h1>
        <h3 className="softwaruse">
          -UX research<br />
          -Critical Thinking<br />
          -Empathy<br />
          -Analytical Skills<br />
          -Contextual Understanding<br />
          -Problem Solving
        </h3>

        <h1 className="infoh11">Experience</h1>
        <h3 className="softwaruse">
          -Summer internship<br />
          -delta electronic systems July 2023<br />
          -delta electronic systems July 2024<br />
          -Cyshield august 2024<br />
          -Cyshield august 2025
        </h3>

        <div className="image-container">
          <img  src={more} alt="More More More" className="twirling-image" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;