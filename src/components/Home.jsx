import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h1>Welcome to Gym-Fit</h1>
        <p>Your fitness journey starts here!</p>
        <button className="join-now-btn" onClick={() => document.getElementById('joinNow').scrollIntoView({ behavior: 'smooth' })}>
          Join Now
        </button>
      </div>
    </section>
  );
};

export default Home;
