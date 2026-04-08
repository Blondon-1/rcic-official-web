import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const faqs = [
    {
      question: "What is Rwanda Cosmetics Importers Cooperative (RCIC)?",
      answer: "RCIC is the official, government-authorized cooperative for professional cosmetic importers in Rwanda. We specialize in bringing high-quality, safe, and international beauty brands to the Rwandan market."
    },
    {
      question: "Where is the RCIC office located in Kigali?",
      answer: "Our main office is located in Nyarugenge, specifically at the Kigali City Market. We are easily accessible for all beauty entrepreneurs and wholesalers in the city."
    },
    {
      question: "Are the cosmetics imported by RCIC government approved?",
      answer: "Yes, 100%. All products imported through our cooperative are fully compliant with Rwanda FDA (Food and Drug Authority), RSB (Rwanda Standards Board), and RRA (Rwanda Revenue Authority) regulations."
    },
    {
      question: "What brands can I find at RCIC?",
      answer: "We import a wide range of global professional brands including L'Oréal, CeraVe, Garnier, Nivea, Mielle, Dove, and many more high-end skincare, haircare, and perfumes."
    },
    {
      question: "How can I join the cooperative as a beauty entrepreneur?",
      answer: "We welcome professional beauty importers and retailers. Please visit our office at Kigali City Market or contact our Secretary at +250 786 058 641 for membership requirements."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section faq-section">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">Learn more about the #1 Cosmetics Cooperative in Rwanda</p>
        
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
