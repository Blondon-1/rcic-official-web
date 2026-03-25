import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-card">
          <div className="newsletter-content">
            <h2 className="newsletter-title">Join Our VIP Wholesale Network</h2>
            <p className="newsletter-desc">
              Subscribe to receive exclusive early access to new brand arrivals, special import discounts, and premium beauty trends tailored perfectly for the Rwandan market.
            </p>

            <div className="vip-perks-grid">
              <div className="vip-perk">
                <div className="perk-icon">💰</div>
                <div className="perk-text">
                  <h4>Exclusive Pricing</h4>
                  <p>Unlock deep wholesale discounts on premium brands like CeraVe before the public.</p>
                </div>
              </div>
              <div className="vip-perk">
                <div className="perk-icon">🚀</div>
                <div className="perk-text">
                  <h4>Priority Import Reserve</h4>
                  <p>Reserve hot products while they are still in transit to Kigali so you never run out of stock.</p>
                </div>
              </div>
              <div className="vip-perk">
                <div className="perk-icon">📚</div>
                <div className="perk-text">
                  <h4>Free Retail Training</h4>
                  <p>Receive monthly expert sales strategies and product knowledge to boom your salon's sales.</p>
                </div>
              </div>
            </div>

            <h3 className="newsletter-subtitle">How to Subscribe (100% Free)</h3>
            <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your business email address..." 
                className="newsletter-input"
                required 
              />
              <button type="submit" className="btn btn-primary newsletter-btn">
                Unlock VIP Access
              </button>
            </form>
            <p className="newsletter-promises">💯 No spam. Instant access. Unsubscribe at any time.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
