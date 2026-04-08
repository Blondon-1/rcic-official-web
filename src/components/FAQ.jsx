import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './FAQ.css';

const FAQ = () => {
  const { t, language } = useLanguage();
  
  const faqData = {
    en: [
      { question: "What is Rwanda Cosmetics Importers Cooperative (RCIC)?", answer: "RCIC is the official, government-authorized cooperative for professional cosmetic importers in Rwanda." },
      { question: "Where is the RCIC office located in Kigali?", answer: "Our main office is located in Nyarugenge, specifically at the Kigali City Market." },
      { question: "Are the cosmetics imported by RCIC government approved?", answer: "Yes, 100%. All products are fully compliant with Rwanda FDA, RSB, and RRA regulations." },
      { question: "What brands can I find at RCIC?", answer: "We import a wide range of global brands including L'Oréal, CeraVe, Garnier, Nivea, Mielle, Dove, and many more." },
      { question: "How can I join the cooperative?", answer: "We welcome professional importers. Please visit our office at Kigali City Market or contact our Secretary." }
    ],
    rw: [
      { question: "RCIC (Rwanda Cosmetics Importers Cooperative) ni iki?", answer: "RCIC ni koperative yemewe na leta ihuza abatumiza ibirungo by'ubwiza mu buryo bw'umwuga mu Rwanda." },
      { question: "Ibiro bya RCIC biherereye he i Kigali?", answer: "Ibiro byacu bikuru biherereye mu Karere ka Nyarugenge, mu Isoko rya Nyarugenge (Kigali City Market)." },
      { question: "Ese ibirungo bitumizwa na RCIC byemewe na Leta?", answer: "Yego, 100%. Ibikoresho byose bitumizwa n'iyi koperative byujuje amabwiriza ya Rwanda FDA, RSB, na RRA." },
      { question: "Ni ayahe moko y'ibirungo bishobora kuboneka muri RCIC?", answer: "Tutumiza amoko menshi mpuzamahanga nka L'Oréal, CeraVe, Garnier, Nivea, Mielle, Dove, n'ayandi menshi." },
      { question: "Nabona nte ubunyamuryango muri iyi koperative?", answer: "Duha ikaze abatumiza ibirungo b'abanyamwuga. Wagana ibiro byacu mu Isoko rya Nyarugenge cyangwa ukavugana n'Umunyamabanga wacu." }
    ],
    fr: [
      { question: "Qu'est-ce que la RCIC?", answer: "La RCIC est la coopérative officielle autorisée par le gouvernement pour les importateurs professionnels de cosmétiques au Rwanda." },
      { question: "Où se trouve le bureau de la RCIC à Kigali?", answer: "Notre bureau principal est situé à Nyarugenge, plus précisément au Marché de la Ville de Kigali." },
      { question: "Les cosmétiques sont-ils approuvés par le gouvernement?", answer: "Oui, à 100%. Tous les produits sont entièrement conformes aux réglementations de la FDA Rwanda, du RSB et de la RRA." },
      { question: "Quelles marques puis-je trouver à la RCIC?", answer: "Nous importons une large gamme de marques mondiales, notamment L'Oréal, CeraVe, Garnier, Nivea, Mielle, Dove, et bien d'autres." },
      { question: "Comment puis-je rejoindre la coopérative?", answer: "Nous accueillons les importateurs professionnels. Veuillez visiter notre bureau ou contacter notre secrétaire." }
    ]
  };

  const faqs = faqData[language] || faqData.en;
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section faq-section">
      <div className="container">
        <h2 className="section-title">{t('faqTitle')}</h2>
        <p className="section-subtitle">{t('faqSubtitle')}</p>
        
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
