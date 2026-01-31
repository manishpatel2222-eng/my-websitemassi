
import React, { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Our Story' },
    { id: 'products', label: 'Varieties' },
    { id: 'order', label: 'Order Now' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <div className="bg-amber-600 p-2 rounded-lg">
              <Leaf className="text-white w-6 h-6" />
            </div>
            <div>
              <span className="text-3xl font-bold tracking-tight text-amber-900 font-stylish leading-none">Massi's Khakhra</span>
              <span className="block text-[10px] uppercase tracking-widest text-amber-700 font-bold mt-1">Authentic & Handmade in Home</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-amber-600 ${
                  activeSection === item.id ? 'text-amber-600' : 'text-stone-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('order')}
              className="bg-amber-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-amber-700 transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              Order Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-amber-900 hover:bg-amber-50"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-amber-100 py-4 px-4 space-y-2 animate-in slide-in-from-top duration-300">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left px-4 py-3 rounded-lg text-stone-600 hover:bg-amber-50 hover:text-amber-600 font-medium"
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection('order')}
            className="w-full mt-4 bg-amber-600 text-white px-6 py-3 rounded-xl font-bold"
          >
            Place Order
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
