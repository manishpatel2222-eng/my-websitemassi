
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import OrderForm from './components/OrderForm';
import Features from './components/Features';
import GeminiSmartTips from './components/GeminiSmartTips';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'products', 'order', 'about'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative bg-stone-900">
      {/* Immersive Background Image */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-1000"
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(28, 25, 23, 0.85), rgba(28, 25, 23, 0.95)), url("https://images.unsplash.com/photo-1626139868288-467773f1190a?auto=format&fit=crop&q=80&w=2000")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      <div className="relative z-10">
        <Header activeSection={activeSection} />
        <main>
          <section id="home">
            <Hero />
          </section>
          
          <section id="about" className="py-24 bg-white/5 backdrop-blur-md border-y border-white/10">
            <Features />
          </section>

          <section id="products" className="py-24">
            <ProductShowcase />
          </section>

          <section className="bg-amber-900/20 backdrop-blur-md border-y border-amber-900/10">
            <GeminiSmartTips />
          </section>

          <section id="order" className="py-24">
            <OrderForm />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
