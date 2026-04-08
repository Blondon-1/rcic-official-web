import React, { useState } from 'react';
import './JoinCoop.css';

const JoinCoop = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    phone: '',
    email: '',
    businessType: 'Wholesale',
    experience: '0-2 years',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    // Simulated submission to Secretary
    setTimeout(() => {
      setStatus('Success! Your application has been sent to the Secretary.');
      setFormData({
        businessName: '',
        contactName: '',
        phone: '',
        email: '',
        businessType: 'Wholesale',
        experience: '0-2 years',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="join" className="section join-section">
      <div className="container">
        <div className="join-container glass">
          <div className="join-info">
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Join the Cooperative</h2>
            <p className="join-lead">
              Empower your beauty business with official RCIC membership. Gain access to collective logistics, 
              regulatory support, and exclusive wholesale rates from world-class brands.
            </p>
            <ul className="benefits-list">
              <li>🛡️ Official FDA & RSB Compliance Support</li>
              <li>🚢 Collective Shipping & Tax Optimization</li>
              <li>🎫 Exclusive Invites to Importers Summits</li>
              <li>🤝 Networking with Rwanda's Beauty Leaders</li>
            </ul>
          </div>

          <div className="join-form-wrapper">
            <form onSubmit={handleSubmit} className="join-form">
              <div className="form-row">
                <div className="input-group">
                  <label>Business / Shop Name</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.businessName}
                    onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                  />
                </div>
                <div className="input-group">
                  <label>Contact Person Name</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.contactName}
                    onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="input-group">
                  <label>Phone Number (+250...)</label>
                  <input 
                    type="tel" 
                    required 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="input-group">
                  <label>Email Address</label>
                  <input 
                    type="email" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="input-group">
                  <label>Business Type</label>
                  <select 
                    value={formData.businessType}
                    onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                  >
                    <option>Wholesale</option>
                    <option>Retail / Shop</option>
                    <option>Salon / Spa Owner</option>
                    <option>Online Vendor</option>
                  </select>
                </div>
                <div className="input-group">
                  <label>Years of Operation</label>
                  <select 
                    value={formData.experience}
                    onChange={(e) => setFormData({...formData, experience: e.target.value})}
                  >
                    <option>0-2 years</option>
                    <option>3-5 years</option>
                    <option>5+ years</option>
                  </select>
                </div>
              </div>

              <div className="input-group">
                <label>Tell us about your business goals</label>
                <textarea 
                  rows="4" 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary join-submit-btn">
                Submit Membership Application
              </button>

              {status && <div className={`form-status ${status.includes('Success') ? 'success' : ''}`}>{status}</div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCoop;
