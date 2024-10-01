import React from 'react';
import './Header.css';
import logo from '../assets/logo.jpg';

const Header = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="navbar">
      <nav>
        <img src={logo} alt="gym-logo" />
        <ul>
          <li onClick={() => scrollToSection('home')}>Home</li>
          <li onClick={() => scrollToSection('classSchedule')}>Class Schedule</li>
          <li onClick={() => scrollToSection('membership')}>Membership</li>
          <li onClick={() => scrollToSection('about')}>About</li>
          <li onClick={() => scrollToSection('joinNow')}>Join Now</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
