import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="logo-link">
          <img src="/assets/logo.jpg" alt="Rwanda Cosmetics Importers Cooperative" className="logo-img" />
        </a>
        
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About Us</a></li>
          <li><a href="#products" onClick={() => setIsOpen(false)}>Products</a></li>
          <li><a href="#reviews" onClick={() => setIsOpen(false)}>Reviews</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          <li>
            <Link to="/admin" className="btn btn-outline nav-login-btn" onClick={() => setIsOpen(false)} style={{ padding: '0.4rem 1.2rem', marginLeft: '1rem', border: '2px solid var(--color-primary)' }}>
              Admin Portal
            </Link>
          </li>
        </ul>

        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
