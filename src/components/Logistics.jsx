import { useLanguage } from '../context/LanguageContext';
import './Logistics.css';

const Logistics = () => {
  const { t } = useLanguage();
  return (
    <section id="logistics" className="section logistics-section">
      <div className="container">
        <h2 className="section-title">{t('logisticsTitle')}</h2>
        <p className="logistics-intro">
          {t('logisticsIntro')}
        </p>

        <div className="logistics-grid">
          {/* Card 1: Flights / Air Freight */}
          <div className="logistics-card animate-fade-in-up">
            <video autoPlay loop muted playsInline className="logistics-video">
              <source src="/plane.mp4" type="video/mp4" />
            </video>
            <div className="logistics-overlay"></div>
            <div className="logistics-content">
              <img src="/plane.jpg" alt="Air Importation" style={{ width: '90px', height: 'auto', marginBottom: '1rem', filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.5))' }} />
              <h3>{t('airFreight')}</h3>
              <p>{t('airFreightDesc')}</p>
            </div>
          </div>

          {/* Card 2: Cargo & Shipment */}
          <div className="logistics-card animate-fade-in-up delay-100">
            <video autoPlay loop muted playsInline className="logistics-video">
              <source src="/ship.mp4" type="video/mp4" />
            </video>
            <div className="logistics-overlay"></div>
            <div className="logistics-content">
              <img src="/ship.jpg" alt="Cargo Shipment" style={{ width: '90px', height: 'auto', marginBottom: '1rem', filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.5))' }} />
              <h3>{t('cargoSupply')}</h3>
              <p>{t('cargoDesc')}</p>
            </div>
          </div>

          {/* Card 3: Tax Assurance */}
          <div className="logistics-card animate-fade-in-up delay-200">
            <video autoPlay loop muted playsInline className="logistics-video">
              <source src="/rra.mp4" type="video/mp4" />
            </video>
            <div className="logistics-overlay"></div>
            <div className="logistics-content">
              <img src="/rra.png" alt="RRA Assurance" style={{ width: '90px', height: 'auto', marginBottom: '1rem', filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.5))' }} />
              <h3>{t('taxAssurance')}</h3>
              <p>{t('taxDesc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logistics;
