import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Objectives.css';

const Objectives = () => {
  const { t, language } = useLanguage();
  
  const objectivesData = {
    en: [
      { title: "Empower Members", desc: "Unity and collaboration to achieve shared economic growth and equal opportunities.", icon: "🤝" },
      { title: "Regulatory Compliance", desc: "Ensuring all cosmetics meet Rwanda FDA safety standards and quality benchmarks.", icon: "✅" },
      { title: "Expand Membership", desc: "Increasing members to strengthen collective voice and market presence.", icon: "📈" },
      { title: "Improve Professionalism", desc: "Training on import regulations, safety standards, and business management.", icon: "🎓" },
      { title: "Promote Innovation", desc: "Embracing new ideas and upholding high standards of efficiency.", icon: "💡" },
      { title: "Financial Sustainability", desc: "Building a reserve fund to support operations and reinvestments.", icon: "💰" }
    ],
    rw: [
      { title: "Gufasha Abanyamuryango", desc: "Ubumwe n'ubufatanye mu kugera ku bukungu busangiwe n'amahirwe angana.", icon: "🤝" },
      { title: "Kuzuzanya n'Amageka", desc: "Kwizera ko ibirungo byose bujuje ubuziranenge bwa Rwanda FDA.", icon: "✅" },
      { title: "Kwagura Umuryango", desc: "Kwongera abanyamuryango kugira ngo ijwi ryacu ryumvikane mu isoko.", icon: "📈" },
      { title: "Kuzamura Ubunyamwuga", desc: "Amahugurwa ku mabwiriza yo gutumiza biturutse hanze n'imicungire y'ubucuruzi.", icon: "🎓" },
      { title: "Gushyigikira Udushya", desc: "Gufata amayeri mashya no gukora mu buryo bunoze kandi bwihuse.", icon: "💡" },
      { title: "Ubukungu Burambye", desc: "Kubaka ikigega cyunganira ibikorwa no gushora imari mu bindi.", icon: "💰" }
    ],
    fr: [
      { title: "Autonomiser les Membres", desc: "Unité et collaboration pour parvenir à une croissance économique partagée.", icon: "🤝" },
      { title: "Conformité Réglementaire", desc: "S'assurer que tous les cosmétiques répondent aux normes de sécurité de la Rwanda FDA.", icon: "✅" },
      { title: "Élargir l'Adhésion", desc: "Augmenter le nombre de membres pour renforcer notre voix collective.", icon: "📈" },
      { title: "Améliorer le Professionnalisme", desc: "Formation sur les réglementations d'importation et la gestion d'entreprise.", icon: "🎓" },
      { title: "Promouvoir l'Innovation", desc: "Adopter de nouvelles idées et maintenir des normes d'efficacité élevées.", icon: "💡" },
      { title: "Durabilité Financière", desc: "Construire un fonds de réserve pour soutenir les opérations.", icon: "💰" }
    ]
  };

  const objectives = objectivesData[language] || objectivesData.en;

  const specialtiesData = {
    en: ["Carefully selecting trusted international suppliers", "Ensuring products meet Rwanda FDA standards", "Providing affordable options for consumers", "Supporting small retailers and entrepreneurs"],
    rw: ["Guhitamo neza abatanga ibicuruzwa mpuzamahanga bizerwa", "Kwizera ko ibicuruzwa bujuje amabwiriza ya Rwanda FDA", "Gutanga ibiciro byiza ku bakugura basanzwe", "Gushyigikira abacuruzi bato n'abihangira imirimo"],
    fr: ["Sélection rigoureuse de fournisseurs internationaux de confiance", "Garantir que les produits répondent aux normes de la Rwanda FDA", "Offrir des options abordables aux consommateurs", "Soutenir les petits détaillants et les entrepreneurs"],
  };

  const specialties = specialtiesData[language] || specialtiesData.en;

  return (
    <section id="objectives" className="section objectives-section">
      <div className="container">
        <h2 className="section-title">{t('objectivesTitle')}</h2>
        <div className="objectives-grid">
          {objectives.map((obj, i) => (
            <div className="objective-card animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }} key={i}>
              <div className="objective-icon">{obj.icon}</div>
              <h3 className="objective-title">{obj.title}</h3>
              <p className="objective-desc">{obj.desc}</p>
            </div>
          ))}
        </div>

        <div className="specialty-banner">
          <div className="specialty-content">
            <h2>{t('specialtyTitle')}</h2>
            <ul className="specialty-list">
              {specialties.map((item, i) => (
                <li key={i}><span>✓</span> {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objectives;
