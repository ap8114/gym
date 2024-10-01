import React from 'react';
import Home from './components/Home';
import ClassSchedule from './components/ClassSchedule';
import Membership from './components/Membership';
import About from './components/About';
import JoinNow from './components/JoinNow';
import './App.css';

const App = () => {
  return (
    <>
      <header className="header">
        <nav>
          <ul>
            <li><a href="#home" onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}>Home</a></li>
            <li><a href="#classSchedule" onClick={() => document.getElementById('classSchedule').scrollIntoView({ behavior: 'smooth' })}>Classes</a></li>
            <li><a href="#membership" onClick={() => document.getElementById('membership').scrollIntoView({ behavior: 'smooth' })}>Membership</a></li>
            <li><a href="#about" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>About</a></li>
            <li><a href="#joinNow" onClick={() => document.getElementById('joinNow').scrollIntoView({ behavior: 'smooth' })}>Join Now</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <Home />
        <ClassSchedule />
        <Membership />
        <About />
        <JoinNow />
      </main>

      <footer className="footer">
        <p>&copy; 2024 Gym-Fit. All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default App;
