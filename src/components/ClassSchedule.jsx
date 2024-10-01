import React from 'react';
import './ClassSchedule.css';
import yoga from '../assets/yoga.jpg';
import cardio from '../assets/cardio.avif';
import weight from '../assets/weightl.avif';

const ClassSchedule = () => {
  return (
    <section id="classSchedule" className="class-schedule-section">
      <h2>Our Classes</h2>
      <p>Explore our variety of fitness classes designed for all levels.</p>
      <div className="classes-container">
        {/* Class 1 */}
        <div className="class-card">
          <img src={yoga}  />
          <h3>Yoga for Beginners</h3>
          <p>Relax, breathe, and improve your flexibility with our beginner yoga class.</p>
        </div>

        {/* Class 2 */}
        <div className="class-card">
          <img src={cardio}/>
          <h3>High-Intensity Cardio</h3>
          <p>Get your heart pumping and burn calories fast with our cardio class.</p>
        </div>

        {/* Class 3 */}
        <div className="class-card">
          <img  src={weight}/>
          <h3>Weight Lifting 101</h3>
          <p>Strengthen and tone your muscles with our beginner's weight lifting class.</p>
        </div>
      </div>
    </section>
  );
};

export default ClassSchedule;
