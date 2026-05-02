import React, { useState } from 'react';
import Navigation from './Navigation';
import '../styles/navigationStyles.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="brand headerName">Avery Jacobson</div>

    </header>
  );
}

export default Header;