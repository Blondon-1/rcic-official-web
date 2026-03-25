import React from 'react';
import './Stats.css';

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid stagger reveal">
          <div className="stat-card float-anim">
            <div className="stat-icon">🌍</div>
            <h3>50+</h3>
            <p>Global Brands Imported</p>
          </div>
          <div className="stat-card float-anim delay-100">
            <div className="stat-icon">🤝</div>
            <h3>250+</h3>
            <p>Salons &amp; Retailers Supplied</p>
          </div>
          <div className="stat-card float-anim delay-200">
            <div className="stat-icon">✅</div>
            <h3>100%</h3>
            <p>Quality Guaranteed &amp; Approved</p>
          </div>
          <div className="stat-card float-anim delay-300">
            <div className="stat-icon">⚡</div>
            <h3>24/7</h3>
            <p>Dedicated Local Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
