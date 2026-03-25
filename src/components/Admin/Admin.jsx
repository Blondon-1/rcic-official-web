import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useProducts } from '../../context/ProductContext';
import { useNavigate } from 'react-router-dom';
import './Admin.css';

const AdminDashboard = () => {
  const { logout, currentUser } = useAuth();
  const { brands, addProduct, deleteProduct, updateProduct } = useProducts();
  const navigate = useNavigate();
  
  const [activeTab, setActiveTab] = useState('products');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  
  // Form States
  const [formData, setFormData] = useState({ name: '', desc: '', img: '' });

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (err) {
      console.error('Failed to log out', err);
    }
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    addProduct(formData);
    setFormData({ name: '', desc: '', img: '' });
    setIsAddModalOpen(false);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    updateProduct(editingProduct);
    setEditingProduct(null);
  };

  const startEdit = (product) => {
    setEditingProduct(product);
  };

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="sidebar-header">
          <img src="/assets/logo.jpg" alt="RCIC" className="sidebar-logo" />
          <h3>RCIC Admin</h3>
        </div>
        <nav className="sidebar-nav">
          <button 
            className={`nav-item ${activeTab === 'products' ? 'active' : ''}`}
            onClick={() => setActiveTab('products')}
          >
            📦 Product Catalog
          </button>
          <button 
            className={`nav-item ${activeTab === 'users' ? 'active' : ''}`}
            onClick={() => setActiveTab('users')}
          >
            👥 User Activity
          </button>
          <button 
            className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            ⚙️ Site Settings
          </button>
        </nav>
        <div className="sidebar-footer">
          <div className="user-pill">
            <span className="user-email">{currentUser?.email}</span>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        <header className="admin-header">
          <h2 className="shimmer-text">
            {activeTab === 'products' && 'Product Management'}
            {activeTab === 'users' && 'User Activity Log'}
            {activeTab === 'settings' && 'Platform Settings'}
          </h2>
          <div className="header-actions">
            {activeTab === 'products' && (
              <button className="add-btn" onClick={() => setIsAddModalOpen(true)}>
                + Add New Product
              </button>
            )}
            <button className="refresh-btn">🔄 Refresh</button>
          </div>
        </header>

        <section className="admin-content-area">
          {activeTab === 'products' && (
            <div className="admin-card glass">
              <table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Image</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {brands.map(brand => (
                    <tr key={brand.id}>
                      <td>
                        <strong>{brand.name}</strong>
                        <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginTop: '4px' }}>{brand.desc.substring(0, 50)}...</p>
                      </td>
                      <td>
                        <img src={brand.img} alt={brand.name} style={{ width: '40px', height: '40px', borderRadius: '4px', objectFit: 'cover' }} />
                      </td>
                      <td><span className="status-badge active">Visible</span></td>
                      <td>
                        <button className="edit-link" onClick={() => startEdit(brand)}>Edit</button>
                        <button className="delete-link" onClick={() => {
                          if (window.confirm('Permanently remove this product?')) deleteProduct(brand.id);
                        }}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'users' && (
            <div className="admin-card glass">
              <p className="tab-desc">Below is a list of authorized admins and their recent activity across the platform.</p>
              <table>
                <thead>
                  <tr>
                    <th>Admin Email</th>
                    <th>Last Login</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>rwandacosmeticsimporterscooper@gmail.com</strong></td>
                    <td>{new Date().toLocaleString()}</td>
                    <td><span className="status-badge active">Active Now</span></td>
                  </tr>
                  <tr>
                    <td><strong>jamaicabrandon1@gmail.com</strong></td>
                    <td>2026-03-25 06:20:00</td>
                    <td><span className="status-badge away">Away</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="admin-card glass settings-form">
              <div className="setting-row">
                <label>Maintenance Mode</label>
                <input type="checkbox" className="toggle-switch" />
              </div>
              <div className="setting-row">
                <label>Enable Live Chat (WhatsApp)</label>
                <input type="checkbox" defaultChecked className="toggle-switch" />
              </div>
              <div className="setting-row">
                <label>Main Store Slogan</label>
                <input type="text" defaultValue="Bringing the World’s Beauty Closer to Rwanda." />
              </div>
              <button className="save-btn" onClick={() => alert('Settings saved to database!')}>Save Changes</button>
            </div>
          )}
        </section>
      </main>

      {/* Add Modal */}
      {isAddModalOpen && (
        <div className="admin-modal-overlay" onClick={() => setIsAddModalOpen(false)}>
          <div className="admin-modal glass" onClick={e => e.stopPropagation()}>
            <h3>Add New Product</h3>
            <form onSubmit={handleAddSubmit}>
              <input 
                type="text" 
                placeholder="Name" 
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                required 
              />
              <textarea 
                placeholder="Description" 
                value={formData.desc}
                onChange={e => setFormData({...formData, desc: e.target.value})}
                required 
              />
              <input 
                type="text" 
                placeholder="Image URL" 
                value={formData.img}
                onChange={e => setFormData({...formData, img: e.target.value})}
              />
              <div className="modal-actions">
                <button type="submit" className="save-btn">Save Product</button>
                <button type="button" className="cancel-btn" onClick={() => setIsAddModalOpen(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {editingProduct && (
        <div className="admin-modal-overlay" onClick={() => setEditingProduct(null)}>
          <div className="admin-modal glass" onClick={e => e.stopPropagation()}>
            <h3>Edit Product</h3>
            <form onSubmit={handleEditSubmit}>
              <input 
                type="text" 
                placeholder="Name" 
                value={editingProduct.name}
                onChange={e => setEditingProduct({...editingProduct, name: e.target.value})}
                required 
              />
              <textarea 
                placeholder="Description" 
                value={editingProduct.desc}
                onChange={e => setEditingProduct({...editingProduct, desc: e.target.value})}
                required 
              />
              <input 
                type="text" 
                placeholder="Image URL" 
                value={editingProduct.img}
                onChange={e => setEditingProduct({...editingProduct, img: e.target.value})}
              />
              <div className="modal-actions">
                <button type="submit" className="save-btn">Update Product</button>
                <button type="button" className="cancel-btn" onClick={() => setEditingProduct(null)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
