import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useProducts } from '../context/ProductContext';
import './Products.css';

const Products = () => {
  const { isAdmin } = useAuth();
  const { brands, addProduct, deleteProduct, updateProduct } = useProducts();

  // Modals & Navigation
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // Form States
  const [newProduct, setNewProduct] = useState({ name: '', desc: '', img: '' });
  const [editProduct, setEditProduct] = useState({ name: '', desc: '', img: '', id: '' });

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.desc) return;
    addProduct(newProduct);
    setNewProduct({ name: '', desc: '', img: '' });
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
    // Find the updated product to refresh the modal view
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
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'space-between', alignItems: 'center', margin: '0 0 3rem 0' }}>
          <div style={{ width: '100%', position: 'relative' }}>
            <h2 className="section-title" style={{ marginBottom: 0 }}>Our Complete Catalog</h2>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <p className="products-intro" style={{ margin: 0, textAlign: 'left' }}>
            We are proud to supply the world's most trusted cosmetic, skincare, and requested hair brands directly to Rwanda. Explore our vibrant interactive showcase below.
          </p>
          {isAdmin && (
            <button className="btn btn-outline" style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)', whiteSpace: 'nowrap' }} onClick={() => setIsAddModalOpen(true)}>
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
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://placehold.co/600x600/0a192f/d4af37?text=${encodeURIComponent(brand.name)}`;
                }}
              />
              <div className="brand-ad-overlay"></div>

              <div className="brand-ad-content">
                <h3 className="brand-name">{brand.name}</h3>
                <p className="brand-desc" style={{ WebkitLineClamp: 2, display: '-webkit-box', WebkitBoxOrient: 'vertical' }}>{brand.desc}</p>
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
                <form onSubmit={handleEditSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5em', marginTop: '1rem' }}>
                  <input
                    type="text"
                    placeholder="Product / Brand Name"
                    value={editProduct.name}
                    onChange={e => setEditProduct({ ...editProduct, name: e.target.value })}
                    required
                    style={{ padding: '1rem', borderRadius: '4px', border: '1px solid var(--color-border)', background: 'transparent', color: 'var(--color-text)', fontSize: '1rem' }}
                  />
                  <textarea
                    placeholder="Marketing Description"
                    value={editProduct.desc}
                    onChange={e => setEditProduct({ ...editProduct, desc: e.target.value })}
                    required
                    rows={4}
                    style={{ padding: '1rem', borderRadius: '4px', border: '1px solid var(--color-border)', background: 'transparent', color: 'var(--color-text)', fontSize: '1rem' }}
                  />
                  <input
                    type="text"
                    placeholder="Image URL Link"
                    value={editProduct.img}
                    onChange={e => setEditProduct({ ...editProduct, img: e.target.value })}
                    style={{ padding: '1rem', borderRadius: '4px', border: '1px solid var(--color-border)', background: 'transparent', color: 'var(--color-text)', fontSize: '1rem' }}
                  />
                  <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                    <button type="submit" className="btn btn-primary" style={{ flex: 2, padding: '1rem', fontSize: '1.1rem' }}>💾 Save Changes</button>
                    <button type="button" onClick={() => setIsEditing(false)} className="btn btn-outline" style={{ flex: 1, borderColor: 'gray', color: 'gray' }}>Cancel</button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {isAddModalOpen && (
        <div className="product-modal-overlay" onClick={() => setIsAddModalOpen(false)}>
          <div className="product-modal-content" style={{ maxWidth: '600px', padding: '3rem', height: 'auto', display: 'flex', flexDirection: 'column' }} onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsAddModalOpen(false)}>&times;</button>
            <h2 style={{ color: 'var(--color-primary)', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>Add Record to Database</h2>
            <form onSubmit={handleAddSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5em' }}>
              <input
                type="text"
                placeholder="Product / Brand Name"
                value={newProduct.name}
                onChange={e => setNewProduct({ ...newProduct, name: e.target.value })}
                required
                style={{ padding: '1rem', borderRadius: '4px', border: '1px solid var(--color-border)', background: 'transparent', color: 'var(--color-text)', fontSize: '1rem' }}
              />
              <textarea
                placeholder="Marketing Description"
                value={newProduct.desc}
                onChange={e => setNewProduct({ ...newProduct, desc: e.target.value })}
                required
                rows={4}
                style={{ padding: '1rem', borderRadius: '4px', border: '1px solid var(--color-border)', background: 'transparent', color: 'var(--color-text)', fontSize: '1rem' }}
              />
              <input
                type="text"
                placeholder="Image URL Link (Optional)"
                value={newProduct.img}
                onChange={e => setNewProduct({ ...newProduct, img: e.target.value })}
                style={{ padding: '1rem', borderRadius: '4px', border: '1px solid var(--color-border)', background: 'transparent', color: 'var(--color-text)', fontSize: '1rem' }}
              />
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem', marginTop: '-0.5rem' }}>
                *Leave URL blank to auto-generate a golden placeholder tile from the database.
              </p>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }}>➕ Save to Catalog</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
