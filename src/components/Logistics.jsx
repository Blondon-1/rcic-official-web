import React from 'react';
import './Logistics.css';

const Logistics = () => {
  return (
    <section id="logistics" className="section logistics-section">
      <div className="container">
        <h2 className="section-title">Seamless Global Operations</h2>
        <p className="logistics-intro">
          From international departure to Rwandan customs clearance, our rigorous supply chain ensures that your premium bulk cosmetics arrive safely, fully certified, and strictly on time.
        </p>

        <div className="logistics-grid">
          {/* Card 1: Flights / Air Freight */}
          <div className="logistics-card animate-fade-in-up">
            <video autoPlay loop muted playsInline className="logistics-video">
              <source src="/plane.mp4" type="video/mp4" />
            </video>
            <div className="logistics-overlay"></div>
            <div className="logistics-content">
              <img src="/plane.jpg" alt="Air Importation" style={{ width: '90px', height: 'auto', marginBottom: '1rem', filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.5))' }} />
              <h3>Air &amp; Ocean Importations</h3>
              <p>Direct, priority commercial shipments from global cosmetic powerhouses seamlessly delivered directly to Kigali.</p>
            </div>
          </div>

          {/* Card 2: Cargo & Shipment */}
          <div className="logistics-card animate-fade-in-up delay-100">
            <video autoPlay loop muted playsInline className="logistics-video">
              <source src="/ship.mp4" type="video/mp4" />
            </video>
            <div className="logistics-overlay"></div>
            <div className="logistics-content">
              <img src="/ship.jpg" alt="Cargo Shipment" style={{ width: '90px', height: 'auto', marginBottom: '1rem', filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.5))' }} />
              <h3>Massive Cargo Supply</h3>
              <p>High-volume, climate-controlled container networking strictly guaranteeing authentic product chemical integrity.</p>
            </div>
          </div>

          {/* Card 3: Tax Assurance */}
          <div className="logistics-card animate-fade-in-up delay-200">
            <video autoPlay loop muted playsInline className="logistics-video">
              <source src="/rra.mp4" type="video/mp4" />
            </video>
            <div className="logistics-overlay"></div>
            <div className="logistics-content">
              <img src="/rra.png" alt="RRA Assurance" style={{ width: '90px', height: 'auto', marginBottom: '1rem', filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.5))' }} />
              <h3>100% Tax & Customs Assurance</h3>
              <p>We securely handle all RRA taxes, FDA certifications, and heavy border logistics so retail owners don't have to.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logistics;
