import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h2 className="hero-brand-name animate-fade-in-up">
          Rwanda Cosmetics Importers Cooperative (RCIC)
        </h2>
        <h1 className="hero-title animate-fade-in-up delay-100">
          Bringing the World’s Beauty Closer to Rwanda.
        </h1>
        <p className="hero-subtitle animate-fade-in-up delay-200">
          Your trusted cooperative for the highest quality hair products, skin care, and perfumes of all kinds. Our premium products speak for themselves.
        </p>
        <div className="hero-cta animate-fade-in-up delay-200">
          <a href="#products" className="btn btn-primary">Explore Products</a>
          <a href="#about" className="btn btn-outline" style={{ color: '#fff', borderColor: '#fff' }}>Our Story</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
