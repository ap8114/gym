import React from 'react';
import './Membership.css';

const Membership = () => {
  return (
    <section id="membership" className="membership-section">
      <h2>Membership Plans</h2>
      <p>Find a membership that fits your goals and lifestyle.</p>

      <div className="plans-container">
        <div className="plan-card">
          <h3>Monthly Plan</h3>
          <p>$50/month</p>
        </div>

        <div className="plan-card">
          <h3>Quarterly Plan</h3>
          <p>$135/3 months</p>
        </div>

        <div className="plan-card">
          <h3>Yearly Plan</h3>
          <p>$500/year</p>
        </div>
        
      </div>
    </section>
  );
};

export default Membership;
