import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useProducts } from '../context/ProductContext';
import { useLanguage } from '../context/LanguageContext';
import './Products.css';

const Products = () => {
  const { isAdmin } = useAuth();
  const { brands, addProduct, deleteProduct, updateProduct } = useProducts();
  const { language, setLanguage, t } = useLanguage();

  // Modals & Navigation
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // Form States
  const [newProduct, setNewProduct] = useState({ name: '', desc: '', img: '', category: 'General' });
  const [editProduct, setEditProduct] = useState({ name: '', desc: '', img: '', id: '', category: 'General' });

  const categories = ['All', 'Skincare', 'Haircare', 'Perfumes', 'Hygiene', 'General'];
  
  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.desc) return;
    addProduct(newProduct);
    setNewProduct({ name: '', desc: '', img: '', category: 'General' });
    setIsAddModalOpen(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to permanently delete this product from the catalog?")) {
      deleteProduct(id);
      setSelectedBrand(null);
      setIsEditing(false);
    }
  };

  const startEditing = () => {
    setEditProduct(selectedBrand);
    setIsEditing(true);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    updateProduct(editProduct);
    const updated = { ...editProduct };
    if (updated.img.trim() === '') {
        updated.img = `https://placehold.co/600x600/0a192f/d4af37?text=${encodeURIComponent(updated.name)}`;
    }
    setSelectedBrand(updated); 
    setIsEditing(false);
  };

  return (
    <section id="products" className="section products-section">
      <div className="container" style={{ maxWidth: '1400px' }}>
        <div className="products-header">
           <h2 className="section-title">{t('productsTitle')}</h2>
           <div className="products-intro-line">
             <p className="products-lead-text">{t('productsLead')}</p>
             <div className="catalog-lang-switcher">
               <select value={language} onChange={(e) => setLanguage(e.target.value)} className="lang-select-catalog">
                 <option value="en">English</option>
                 <option value="rw">Kinyarwanda</option>
                 <option value="fr">Français</option>
               </select>
             </div>
           </div>
           {isAdmin && (
             <button className="btn btn-outline admin-add-btn" onClick={() => setIsAddModalOpen(true)} style={{ marginTop: '1rem' }}>
               + Admin: Add Product
             </button>
           )}
         </div>

        <div className="brand-massive-grid">
           {brands.map((brand) => (
             <div
               className="brand-ad-card"
               key={brand.id}
               onClick={() => setSelectedBrand(brand)}
             >
               <img
                 src={brand.img}
                 alt={brand.name}
                 className="brand-image-bg"
                 loading="lazy"
                 onError={(e) => {
                   e.target.onerror = null;
                   e.target.src = `https://placehold.co/600x600/0a192f/d4af37?text=${encodeURIComponent(brand.name)}`;
                 }}
               />
               <div className="brand-ad-overlay"></div>
 
               <div className="brand-ad-content">
                 <h3 className="brand-name">{brand.name}</h3>
                 <p className="brand-desc">{brand.desc}</p>
                 <div className="ad-action">
                   <span className="ad-action-line"></span>
                   <span className="ad-action-text">{isAdmin ? 'Manage' : 'View Details'}</span>
                 </div>
               </div>
             </div>
           ))}
         </div>
      </div>

      {selectedBrand && (
        <div className="product-modal-overlay" onClick={() => { setSelectedBrand(null); setIsEditing(false); }}>
          <div className="product-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => { setSelectedBrand(null); setIsEditing(false); }}>&times;</button>

            {!isEditing && (
              <>
                <div className="modal-image-wrapper">
                  <img
                    src={selectedBrand.img}
                    alt={selectedBrand.name}
                    className="modal-img"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://placehold.co/800x800/0a192f/d4af37?text=${encodeURIComponent(selectedBrand.name)}`;
                    }}
                  />
                </div>
                <div className="modal-info">
                  <div className="modal-category">{selectedBrand.category}</div>
                  <h2 className="modal-title">{selectedBrand.name}</h2>
                  <p className="modal-desc" style={{ marginBottom: '2rem' }}>{selectedBrand.desc}</p>

                  {isAdmin && (
                    <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto', paddingTop: '2rem', borderTop: '1px solid var(--color-border)' }}>
                      <button onClick={startEditing} className="btn btn-outline" style={{ flex: 1, borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}>
                        ✏️ Edit Product
                      </button>
                      <button onClick={() => handleDelete(selectedBrand.id)} className="btn btn-outline" style={{ flex: 1, borderColor: '#e74c3c', color: '#e74c3c' }}>
                        🗑️ Delete Product
                      </button>
                    </div>
                  )}
                </div>
              </>
            )}

            {isEditing && (
              <div style={{ padding: '3rem', width: '100%', display: 'flex', flexDirection: 'column' }}>
                <h2 className="modal-title">Edit '{selectedBrand.name}'</h2>
                <form onSubmit={handleEditSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginTop: '1rem' }}>
                  <div className="form-group">
                    <label>Product Name</label>
                    <input
                      type="text"
                      value={editProduct.name}
                      onChange={e => setEditProduct({ ...editProduct, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Category</label>
                    <select 
                      value={editProduct.category} 
                      onChange={e => setEditProduct({ ...editProduct, category: e.target.value })}
                      className="admin-select"
                    >
                      {categories.filter(c => c !== 'All').map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <textarea
                      value={editProduct.desc}
                      onChange={e => setEditProduct({ ...editProduct, desc: e.target.value })}
                      required
                      rows={4}
                    />
                  </div>
                  <div className="form-group">
                    <label>Image URL</label>
                    <input
                      type="text"
                      value={editProduct.img}
                      onChange={e => setEditProduct({ ...editProduct, img: e.target.value })}
                    />
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                    <button type="submit" className="btn btn-primary" style={{ flex: 2 }}>💾 Save Changes</button>
                    <button type="button" onClick={() => setIsEditing(false)} className="btn btn-outline" style={{ flex: 1 }}>Cancel</button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {isAddModalOpen && (
        <div className="product-modal-overlay" onClick={() => setIsAddModalOpen(false)}>
          <div className="product-modal-content" style={{ maxWidth: '600px', padding: '3rem', height: 'auto' }} onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsAddModalOpen(false)}>&times;</button>
            <h2 className="modal-title" style={{ color: 'var(--color-primary)' }}>Add Record to Database</h2>
            <form onSubmit={handleAddSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginTop: '1.5rem' }}>
              <div className="form-group">
                <label>Product Name</label>
                <input
                  type="text"
                  value={newProduct.name}
                  onChange={e => setNewProduct({ ...newProduct, name: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Category</label>
                <select 
                  value={newProduct.category} 
                  onChange={e => setNewProduct({ ...newProduct, category: e.target.value })}
                  className="admin-select"
                >
                  {categories.filter(c => c !== 'All').map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  value={newProduct.desc}
                  onChange={e => setNewProduct({ ...newProduct, desc: e.target.value })}
                  required
                  rows={4}
                />
              </div>
              <div className="form-group">
                <label>Image URL (Optional)</label>
                <input
                  type="text"
                  value={newProduct.img}
                  onChange={e => setNewProduct({ ...newProduct, img: e.target.value })}
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem' }}>➕ Save to Catalog</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
