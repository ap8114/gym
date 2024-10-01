import React from 'react';
import './About.css';
import logo from '../assets/logo.jpg';

const About = () => {
  return (
    <section id="about" className="about-section">
     
      <div className="about-container">
        <div className="about-content">
          <h2>About Gym-Fit</h2>
          <p>
            At Gym-Fit, we are more than just a fitness center. We are a community committed to helping you reach your health and fitness goals. Whether you’re just starting your fitness journey or are a seasoned athlete, we offer a variety of classes, expert trainers, and state-of-the-art equipment to support your progress.
          </p>
          <p>
            Our mission is to create a supportive and motivating environment where everyone, regardless of fitness level, feels welcome. 
          </p>
          <p>
            Join us at Gym-Fit and become part of a fitness family that empowers you to push your limits and become the best version of yourself.
          </p>
        </div>
        <div className="about-image">
          <img src={logo}alt="gym-fit-logo" />
        </div>
      </div>
   
    </section>
  );
};

export default About;
