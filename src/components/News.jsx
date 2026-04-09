import { useLanguage } from '../context/LanguageContext';
import './News.css';

const News = () => {
  const { t, language } = useLanguage();

  const newsData = {
    en: [
      { date: "April 15, 2026", tag: "FDA Update", title: "New Regulatory Guidelines for Skincare Imports", desc: "Rwanda FDA has released updated compliance standards for hyaluronic acid and retinol-based products." },
      { date: "April 10, 2026", tag: "Cooperative", title: "Monthly Importers General Assembly at Kigali City Market", desc: "Join us for our next steering committee meeting to discuss collective shipping logistics." },
      { date: "April 5, 2026", tag: "Logistics", title: "Reduced Air Freight Rates for High-Volume Members", desc: "RCIC members now qualify for an additional 15% discount on bulk cosmetic air shipments." }
    ],
    rw: [
      { date: "Mata 15, 2026", tag: "FDA Update", title: "Amabwiriza Mashya ya FDA ku Ibirungo by'Uruhu", desc: "Rwanda FDA yasohoye amabwiriza mashya agenga ibirungo birimo 'hyaluronic acid' na 'retinol'." },
      { date: "Mata 10, 2026", tag: "Cooperative", title: "Inama Rusange y'Abatumiza Ibirungo mu Isoko rya Nyarugenge", desc: "Twifatanyije mu nama y'ubuyobozi kugira ngo tuganire ku miterere y'ubwikorezi buhuriweho." },
      { date: "Mata 5, 2026", tag: "Logistics", title: "Ibigabanyirizwa ku Bwikorezi bwo mu Ndege", desc: "Abanyamuryango ba RCIC ubu bemerewe kugabanyirizwa 15% ku bwikorezi bw'ibirungo mu ndege." }
    ],
    fr: [
      { date: "15 Avril 2026", tag: "Update FDA", title: "Nouvelles Directives Réglementaires pour les Importations", desc: "La FDA du Rwanda a publié des normes de conformité mises à jour pour les produits de soin de la peau." },
      { date: "10 Avril 2026", tag: "Coopérative", title: "Assemblée Générale Mensuelle au Marché de Kigali", desc: "Rejoignez-nous pour notre prochaine réunion du comité de direction sur la logistique d'expédition." },
      { date: "5 Avril 2026", tag: "Logistique", title: "Réduction des Tarifs de Frêt Aérien pour les Membres", desc: "Les membres de la RCIC bénéficient désormais d'une réduction supplémentaire de 15% sur le frêt aérien." }
    ]
  };

  const announcements = newsData[language] || newsData.en;

  return (
    <section id="news" className="section news-section">
      <div className="container">
        <div className="news-header">
          <h2 className="section-title">{t('newsUpdates')}</h2>
          <p className="section-subtitle">{t('newsSubtitle')}</p>
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
