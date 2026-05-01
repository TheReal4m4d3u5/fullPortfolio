import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../styles/footerStyles.css';

const Footer = () => {
  return (

      <section className="footer-links">
        <div className="linkedin">
          <a href="https://www.linkedin.com/in/avery-jacobson-aa36225a/" target="_blank" rel="noopener noreferrer" className="footer-link-button">
            LinkedIn
          </a>
        </div>
        <div className="github">
          <a href="https://github.com/TheReal4m4d3u5" target="_blank" rel="noopener noreferrer" className="footer-link-button">
            GitHub
          </a>
        </div>
      </section>

  );
};

export default Footer;