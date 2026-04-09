import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Intro.css';

const Intro = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="section intro-section">
      <div className="container intro-grid">
        <div className="intro-text">
          <h2 className="section-title" style={{ textAlign: 'left' }}>RCIC Rwanda: {t('whoWeAre')}</h2>
          <p className="intro-lead">
            {t('introLead')}
          </p>
          <p>
            With a passion for beauty and a heart for service, the cooperative connects Rwanda to trusted international brands while ensuring that every product meets local standards. Whether it's the highest quality hair care, premium skincare, or signature perfumes, we are the #1 authorized distributor and wholesale partner for beauty businesses in Kigali and across the provinces.
          </p>

          <div className="mission-vision-cards">
            <div className="mv-card">
              <h3>Our Mission</h3>
              <p>To import and distribute safe, high-quality cosmetic products that enhance confidence and well-being while creating sustainable opportunities for our members.</p>
            </div>
            <div className="mv-card">
              <h3>Our Vision</h3>
              <p>To become Rwanda’s most trusted cooperative in cosmetic importation and distribution, known for reliability, quality, and customer care.</p>
            </div>
          </div>

          <div className="regulatory-compliance">
            <h4>Regulatory Excellence & Compliance</h4>
            <div className="compliance-grid">
              <div className="comp-item">
                <span className="comp-icon">🇷🇼</span>
                <p><strong>RRA Compliant</strong><br/>100% Tax & Customs Accountability</p>
              </div>
              <div className="comp-item">
                <span className="comp-icon">🛡️</span>
                <p><strong>Rwanda FDA Approved</strong><br/>Certified for Safety & Health Standards</p>
              </div>
              <div className="comp-item">
                <span className="comp-icon">✅</span>
                <p><strong>RSB Certified</strong><br/>Meeting Rwanda Standards Board Quality</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="intro-certificate">
          <div className="certificate-wrapper glass">
            <div className="cert-badge">Official RCA Cooperative</div>
            {/* The user should place the provided certificate image here */}
            <img 
              src="/assets/certificate.png" 
              alt="Rwanda Cooperative Agency Registration Certificate" 
              className="cert-img"
              onError={(e) => {
                e.target.style.display='none';
                e.target.nextSibling.style.display='flex';
              }}
            />
            <div className="cert-placeholder" style={{display: 'none'}}>
              <p>Please place the provided certificate image at:<br/><code>public/assets/certificate.png</code></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
