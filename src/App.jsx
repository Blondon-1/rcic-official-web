import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ProductProvider } from './context/ProductContext';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Objectives from './components/Objectives';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Customers from './components/Customers';
import Footer from './components/Footer';
import Stats from './components/Stats';
import Newsletter from './components/Newsletter';
import Logistics from './components/Logistics';
import FAQ from './components/FAQ';
import News from './components/News';
import JoinCoop from './components/JoinCoop';
import ScrollReveal from './components/ScrollReveal';
import Login from './components/Auth/Login';
import AdminDashboard from './components/Admin/Admin';
import ProtectedRoute from './components/Auth/ProtectedRoute';

// Public Landing Page Component
const LandingPage = () => (
  <>
    <video
      autoPlay
      loop
      muted
      playsInline
      poster="/assets/logo.jpg"
      className="bg-video"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        objectFit: 'cover',
        zIndex: 0,
        opacity: 0.85
      }}
    >
      <source src="/assets/c.mp4" type="video/mp4" />
    </video>
    <div style={{ position: 'relative', zIndex: 1, width: '100%', minHeight: '100vh' }}>
      <ScrollReveal />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Intro />
        <News />
        <Logistics />
        <Objectives />
        <Products />
        <Testimonials />
        <Newsletter />
        <Customers />
        <FAQ />
        <JoinCoop />
      </main>
      <Footer />
      <a href="mailto:rwandacosmeticsimporterscooper@gmail.com" className="email-float-btn">
        <span style={{ fontSize: '1.2rem', marginRight: '8px' }}>✉️</span> Email Us
      </a>
      <a href="https://wa.me/250792404334" className="whatsapp-float-btn" target="_blank" rel="noopener noreferrer">
        <span style={{ fontSize: '1.2rem', marginRight: '8px' }}>💬</span> Live Chat
      </a>
    </div>
  </>
);

function App() {
  return (
    <Router>
      <AuthProvider>
        <ProductProvider>
          <LanguageProvider>
            <Routes>
              {/* Public Website */}
              <Route path="/" element={<LandingPage />} />
              
              {/* Admin Authentication */}
              <Route path="/login" element={<Login />} />
              
              {/* Protected Admin Dashboard */}
              <Route 
                path="/admin" 
                element={
                  <ProtectedRoute>
                    <AdminDashboard />
                  </ProtectedRoute>
                } 
              />
              
              {/* Fallback */}
              <Route path="*" element={<LandingPage />} />
            </Routes>
          </LanguageProvider>
        </ProductProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
