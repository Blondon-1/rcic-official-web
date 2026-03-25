import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const reviews = [
    {
      name: "Solange Uwase",
      role: "Salon Owner, Kigali",
      texto: "Since partnering with RCIC, my salon has never run out of the premium Aunt Jackie's and CeraVe products my clients demand. Their wholesale service is unmatched in Rwanda.",
      stars: 5
    },
    {
      name: "Diana Mutoni",
      role: "Skincare Enthusiast",
      texto: "I finally found authentic Eucerin and Dr. Rashel serums here! Knowing they are an official cooperative gives me peace of mind that the cosmetics I'm putting on my skin are 100% genuine.",
      stars: 5
    },
    {
      name: "Jean-Paul Habimana",
      role: "Cosmetics Retailer",
      texto: "The RCIC has completely transformed my supply chain. The quality is strictly vetted by the FDA and the prices allow my business to thrive. A highly reliable partner.",
      stars: 5
    }
  ];

  return (
    <section id="reviews" className="section testimonials-section">
      <div className="container">
        <h2 className="section-title">What Our Partners Say</h2>
        <div className="testimonials-grid">
          {reviews.map((review, i) => (
            <div className="testimonial-card" key={i}>
              <div className="stars">
                {'★'.repeat(review.stars)}
              </div>
              <p className="testimonial-text">"{review.texto}"</p>
              <div className="testimonial-author">
                <h4>{review.name}</h4>
                <span>{review.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
