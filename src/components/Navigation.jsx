import React from 'react'; 
import { Link, useLocation } from 'react-router-dom';
import '../styles/navigationStyles.css';

const Navigation = ({ isOpen }) => {
  const location = useLocation();
  const currentPage = location.pathname;
 

  const isDefaultPage = currentPage === '/about' || currentPage === '/';

  return (
    <nav className={`navigation ${isOpen ? 'open' : ''}`}>
      <Link to="/about" className={isDefaultPage? 'active' : ''}>About</Link>
      <Link to="/portfolio" className={currentPage === '/portfolio' ? 'active' : ''}>Portfolio</Link>
      <Link to="/resume" className={currentPage === '/resume' ? 'active' : ''}>Resume</Link>
      <Link to="/contact" className={currentPage === '/contact' ? 'active' : ''}>Contact</Link>
    </nav>
  );
};

export default Navigation;