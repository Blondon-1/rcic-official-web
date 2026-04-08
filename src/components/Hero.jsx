import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Hero.css';

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1 className="hero-brand-name animate-fade-in-up">
          <p className="hero-description shimmer-text">RCIC</p>
          <h1 className="hero-title">{t('heroTitle')}</h1>
          <p className="hero-subtitle">{t('heroSubtitle')}</p>
        </h1>
        <div className="hero-cta animate-fade-in-up delay-200">
          <a href="#about" className="btn btn-outline" style={{ color: '#fff', borderColor: '#fff' }}>Our Story</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
