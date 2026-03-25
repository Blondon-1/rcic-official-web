import React from 'react';
import './Customers.css';

const Customers = () => {
  const customers = [
    { name: "Local Shops & Supermarkets", desc: "Trusted retailers and corner shops across the country.", img: "/assets/local_shops.png" },
    { name: "Beauty Salons & Spas", desc: "Professional environments where luxury meets care.", img: "/assets/salons_spas.png" },
    { name: "Individual Customers", desc: "Dedicated users who prioritize quality in their daily beauty routines.", img: "/assets/individual_customers.png" },
    { name: "Beauty Entrepreneurs", desc: "Empowering the next generation of Rwandan beauty leaders.", img: "/assets/me.png" }
  ];

  return (
    <section id="community" className="section community-section">
      <div className="container">
        
        <div className="customers-wrapper">
          <h2 className="section-title shimmer-text">Our Community</h2>
          <p className="community-intro">We proudly serve a diverse range of clients across urban and rural areas.</p>
          <div className="customers-grid stagger reveal">
            {customers.map((c, i) => (
              <div className="customer-card glow-border" key={i}>
                <div className="customer-image-wrapper">
                  <img src={c.img} alt={c.name} className="customer-img" />
                  <div className="customer-overlay">
                    <p className="customer-desc">{c.desc}</p>
                  </div>
                </div>
                <div className="customer-info">
                  <h4>{c.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="quality-commitment glass">
          <div className="quality-content">
            <h2>Our Commitment to Quality & Safety</h2>
            <p>
              We aim to work closely with <strong>Rwanda Food and Drugs Authority</strong> as a regulatory body and the <strong>Rwanda Standards Board</strong> to ensure that all imported products are safe, authentic, and compliant.
            </p>
            <p>
              Our cooperative values transparency and trust—what we deliver is exactly what our customers deserve: quality they can rely on.
            </p>
          </div>
          <div className="quality-badge-wrapper">
            <div className="quality-badge">
              <span className="badge-icon">🛡️</span>
              <span className="badge-text">Certified Quality</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Customers;
