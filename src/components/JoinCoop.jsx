import { useLanguage } from '../context/LanguageContext';
import './JoinCoop.css';

const JoinCoop = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    phone: '',
    email: '',
    businessType: 'Wholesale',
    experience: '0-2 years',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(t('submitting') || 'Submitting...');
    // Simulated submission to Secretary
    setTimeout(() => {
      setStatus(t('formSuccess'));
      setFormData({
        businessName: '',
        contactName: '',
        phone: '',
        email: '',
        businessType: 'Wholesale',
        experience: '0-2 years',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="join" className="section join-section">
      <div className="container">
        <div className="join-container glass">
          <div className="join-info">
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>{t('joinCoop')}</h2>
            <p className="join-lead">
              {t('joinLead')}
            </p>
            <ul className="benefits-list">
              <li>🛡️ {t('benefit1')}</li>
              <li>🚢 {t('benefit2')}</li>
              <li>🎫 {t('benefit3')}</li>
              <li>🤝 {t('benefit4')}</li>
            </ul>
          </div>

          <div className="join-form-wrapper">
            <form onSubmit={handleSubmit} className="join-form">
              <div className="form-row">
                <div className="input-group">
                  <label>{t('formBusiness')}</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.businessName}
                    onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                  />
                </div>
                <div className="input-group">
                  <label>{t('formContact')}</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.contactName}
                    onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="input-group">
                  <label>{t('formPhone')}</label>
                  <input 
                    type="tel" 
                    required 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="input-group">
                  <label>{t('formEmail')}</label>
                  <input 
                    type="email" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="input-group">
                  <label>{t('formType')}</label>
                  <select 
                    value={formData.businessType}
                    onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                  >
                    <option>Wholesale</option>
                    <option>Retail / Shop</option>
                    <option>Salon / Spa Owner</option>
                    <option>Online Vendor</option>
                  </select>
                </div>
                <div className="input-group">
                  <label>{t('formExp')}</label>
                  <select 
                    value={formData.experience}
                    onChange={(e) => setFormData({...formData, experience: e.target.value})}
                  >
                    <option>0-2 years</option>
                    <option>3-5 years</option>
                    <option>5+ years</option>
                  </select>
                </div>
              </div>

              <div className="input-group">
                <label>{t('formGoals')}</label>
                <textarea 
                  rows="4" 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary join-submit-btn">
                {t('formSubmit')}
              </button>

              {status && <div className={`form-status ${status.includes('Success') || status.includes('Byagenze') || status.includes('Succès') ? 'success' : ''}`}>{status}</div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCoop;
