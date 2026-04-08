import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './FloatingActions.css';

const FloatingActions = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="floating-sidebar">
      {/* Language Switcher */}
      <div className="floating-group">
        <div className="floating-label">Language</div>
        <select 
          value={language} 
          onChange={(e) => setLanguage(e.target.value)} 
          className="floating-select"
        >
          <option value="en">EN</option>
          <option value="rw">RW</option>
          <option value="fr">FR</option>
        </select>
      </div>

      {/* Email Link */}
      <a 
        href="mailto:rwandacosmeticsimporterscooper@gmail.com" 
        className="floating-btn email-btn"
        title="Email Us"
      >
        <span className="btn-icon">✉️</span>
        <span className="btn-text">Email</span>
      </a>

      {/* WhatsApp Link */}
      <a 
        href="https://wa.me/250792404334" 
        className="floating-btn whatsapp-btn" 
        target="_blank" 
        rel="noopener noreferrer"
        title="Live Chat"
      >
        <span className="btn-icon">💬</span>
        <span className="btn-text">Chat</span>
      </a>
    </div>
  );
};

export default FloatingActions;
