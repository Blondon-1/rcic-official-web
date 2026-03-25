import React from 'react';
import './Objectives.css';

const Objectives = () => {
  const objectives = [
    { title: "Empower Members", desc: "Unity and collaboration to achieve shared economic growth and equal opportunities.", icon: "🤝" },
    { title: "Regulatory Compliance", desc: "Ensuring all cosmetics meet Rwanda FDA safety standards and quality benchmarks.", icon: "✅" },
    { title: "Expand Membership", desc: "Increasing members to strengthen collective voice and market presence.", icon: "📈" },
    { title: "Improve Professionalism", desc: "Training on import regulations, safety standards, and business management.", icon: "🎓" },
    { title: "Promote Innovation", desc: "Embracing new ideas and upholding high standards of efficiency.", icon: "💡" },
    { title: "Financial Sustainability", desc: "Building a reserve fund to support operations and reinvestments.", icon: "💰" }
  ];

  return (
    <section id="objectives" className="section objectives-section">
      <div className="container">
        <h2 className="section-title">Our Objectives</h2>
        <div className="objectives-grid">
          {objectives.map((obj, i) => (
            <div className="objective-card animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }} key={i}>
              <div className="objective-icon">{obj.icon}</div>
              <h3 className="objective-title">{obj.title}</h3>
              <p className="objective-desc">{obj.desc}</p>
            </div>
          ))}
        </div>

        <div className="specialty-banner">
          <div className="specialty-content">
            <h2>What Makes Us Special</h2>
            <ul className="specialty-list">
              <li><span>✓</span> Carefully selecting trusted international suppliers</li>
              <li><span>✓</span> Ensuring all products meet standards set by Rwanda Food and Drugs Authority</li>
              <li><span>✓</span> Providing affordable options for everyday consumers</li>
              <li><span>✓</span> Supporting small retailers and beauty entrepreneurs</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objectives;
