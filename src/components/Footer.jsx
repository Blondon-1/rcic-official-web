import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">

      {/* Dual side-by-side background videos */}
      <div className="footer-videos">
        <video autoPlay loop muted playsInline className="footer-video">
          <source src="/saloon.mp4" type="video/mp4" />
        </video>
        <video autoPlay loop muted playsInline className="footer-video">
          <source src="/spa.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Darkening overlay so text stays readable */}
      <div className="footer-overlay"></div>

      {/* All content sits above the videos */}
      <div className="footer-content container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/assets/logo.jpg" alt="Rwanda Cosmetics Importers Cooperative Official Footer Logo" className="footer-logo-img" aria-label="RCIC Rwanda Footer Logo" />
            <p className="footer-slogan">RCIC Rwanda: Bringing the World's Beauty Closer to Rwanda.</p>
          </div>


          <div className="footer-closing">
            <blockquote>
              "More than a business—it is a family dedicated to beauty, trust, and opportunity. As we grow, we remain committed to bringing the best of global beauty to Rwanda while uplifting the people we serve."
            </blockquote>
          </div>

          <div className="footer-contact">
            <h3>Contact Directory</h3>
            <div className="contact-detail">
              <strong>Office:</strong> Kigali City Market, Nyarugenge<br/>
              <strong>President:</strong> Eric Twagirayezu<br/>
              📞 +250 788 863 957 <a href="https://wa.me/250788863957" target="_blank" rel="noopener noreferrer" className="wa-link">💬 WhatsApp</a>
            </div>
            <div className="contact-detail">
              <strong>V/President:</strong> Ingabire Mary<br/>
              📞 +250 788 525 397 <a href="https://wa.me/250788525397" target="_blank" rel="noopener noreferrer" className="wa-link">💬 WhatsApp</a>
            </div>
            <div className="contact-detail">
              <strong>Secretary:</strong> Aida Mukase<br/>
              📞 +250 786 058 641 <a href="https://wa.me/250786058641" target="_blank" rel="noopener noreferrer" className="wa-link">💬 WhatsApp</a><br/>
              ✉️ <a href="mailto:rwandacosmeticsimporterscooper@gmail.com">rwandacosmeticsimporterscooper@gmail.com</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Rwanda Cosmetics Importers Cooperative. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
