import React from 'react';
import './Footer.css';
import behanceIcon from '../Assets/imgs/behance.svg';
import linkedinIcon from '../Assets/imgs/linkedin.svg';

const Footer = () => {
  return (
    <>
      <hr className="linefoot" />
      <footer>
        <h3 className="edu">habibaelbanna@gmail.com</h3>
        <div>
          <img src={behanceIcon} alt="Behance" />
          <img src={linkedinIcon} alt="LinkedIn" />
        </div>
      </footer>
    </>
  );
};

export default Footer;