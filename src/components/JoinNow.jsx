import React from 'react';
import './JoinNow.css';

const JoinNow = () => {
  return (
    <section id="joinNow" className="join-now-section">
      <div className="joinnow">
      <h2>Sign Up for Membership</h2>
      <form>
        <label>Name:</label>
        <input type="text" required />
        <label>Email:</label>
        <input type="email" required />
        <button type="submit">Submit</button>
      </form>
      </div>
    </section>
  );
};

// join now buttongit add -f current-pp/


export default JoinNow;
