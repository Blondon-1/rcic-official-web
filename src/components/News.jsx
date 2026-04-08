import React from 'react';
import './News.css';

const News = () => {
  const announcements = [
    {
      date: "April 15, 2026",
      tag: "FDA Update",
      title: "New Regulatory Guidelines for Skincare Imports",
      desc: "Rwanda FDA has released updated compliance standards for hyaluronic acid and retinol-based products. RCIC members receive prioritized support for these new certifications."
    },
    {
      date: "April 10, 2026",
      tag: "Cooperative",
      title: "Monthly Importers General Assembly at Kigali City Market",
      desc: "Join us for our next steering committee meeting to discuss collective shipping logistics and tax optimization strategies for B2B retailers."
    },
    {
      date: "April 5, 2026",
      tag: "Logistics",
      title: "Reduced Air Freight Rates for High-Volume Members",
      desc: "Through our new partnership with national carriers, RCIC members now qualify for an additional 15% discount on bulk cosmetic air shipments."
    }
  ];

  return (
    <section id="news" className="section news-section">
      <div className="container">
        <div className="news-header">
          <h2 className="section-title">Cooperative Updates & News</h2>
          <p className="section-subtitle">Stay informed about Rwandan cosmetics regulations and RCIC activities.</p>
        </div>

        <div className="news-grid">
          {announcements.map((news, i) => (
            <div className="news-card" key={i}>
              <div className="news-badge">{news.tag}</div>
              <div className="news-content">
                <span className="news-date">{news.date}</span>
                <h3>{news.title}</h3>
                <p>{news.desc}</p>
                <div className="news-footer">
                  <span className="read-more">Read Full Bulletin →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
