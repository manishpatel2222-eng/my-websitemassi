
import React from 'react';
import { Leaf, Instagram, Facebook, Phone, Mail, MapPin, User } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/40 backdrop-blur-md text-stone-400 pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-amber-600 p-2 rounded-lg">
                <Leaf className="text-white w-5 h-5" />
              </div>
              <span className="text-4xl font-bold tracking-tight text-white font-stylish leading-none">Massi's Khakhra</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              The most authentic Gujarati Homemade Khakhra in the twin cities. 
              Bringing the warmth of Massi's traditional kitchen to your home in Gandhinagar and Ahmedabad. 
              Pure whole wheat, no preservatives, just health.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-amber-500 transition-colors bg-white/5 p-2 rounded-full"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-amber-500 transition-colors bg-white/5 p-2 rounded-full"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6 font-serif text-lg">Quick Access</h5>
            <ul className="space-y-4 text-sm">
              <li><a href="#home" className="hover:text-amber-500 transition-colors">Home Page</a></li>
              <li><a href="#about" className="hover:text-amber-500 transition-colors">Massi's Story</a></li>
              <li><a href="#products" className="hover:text-amber-500 transition-colors">Methi & Zeera Khakhra</a></li>
              <li><a href="#order" className="hover:text-amber-500 transition-colors">Place Your Order</a></li>
            </ul>
          </div>

          <div className="bg-white/5 p-8 rounded-[32px] border border-white/10 shadow-xl">
            <h5 className="text-white font-bold mb-6 font-serif text-xl border-b border-amber-600/30 pb-2">Get in Touch</h5>
            <ul className="space-y-5 text-sm">
              <li className="flex items-center gap-4">
                <div className="bg-amber-600/20 p-2 rounded-lg"><User className="w-4 h-4 text-amber-500" /></div>
                <div>
                    <p className="text-xs text-stone-500 uppercase font-bold tracking-widest">In-Charge</p>
                    <span className="text-white font-semibold text-base">Manish Patel</span>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-amber-600/20 p-2 rounded-lg"><Phone className="w-4 h-4 text-amber-500" /></div>
                <div>
                    <p className="text-xs text-stone-500 uppercase font-bold tracking-widest">Call / WhatsApp</p>
                    <span className="text-white font-semibold text-base">+91 97270 32299</span>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-amber-600/20 p-2 rounded-lg"><Mail className="w-4 h-4 text-amber-500" /></div>
                <div>
                    <p className="text-xs text-stone-500 uppercase font-bold tracking-widest">Official Email</p>
                    <a href="mailto:manishpatel2222@gmail.com" className="text-amber-400 font-semibold hover:underline text-base">manishpatel2222@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-amber-600/20 p-2 rounded-lg mt-1"><MapPin className="w-4 h-4 text-amber-500" /></div>
                <div>
                    <p className="text-xs text-stone-500 uppercase font-bold tracking-widest">Base Location</p>
                    <span className="text-white font-semibold text-base leading-tight">Gandhinagar, Gujarat, India</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2025 Massi's Khakhra. Handcrafted for Health. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
