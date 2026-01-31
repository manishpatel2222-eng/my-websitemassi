
import React from 'react';
import { ShoppingCart, Leaf, Wind, IndianRupee, Sparkles, ShieldCheck, Flame, Info } from 'lucide-react';

const ProductShowcase: React.FC = () => {
  const products = [
    {
      id: 'methi',
      gujarati: 'મેથી ખાખરા',
      english: 'Methi (Fenugreek)',
      price: 220,
      description: "Our signature health-specialty. These wafer-thin Khakhras are generously infused with hand-crushed dried methi leaves and traditional spices. Each piece is slow-roasted on a tawa (griddle) until it reaches the perfect golden crispiness. Ideal for weight watchers and those seeking a fiber-rich snack.",
      icon: <Leaf className="w-12 h-12" />,
      tags: ['Best Seller', 'High Fiber', 'Iron Rich'],
      healthBenefit: 'Supports Digestion & Blood Sugar'
    },
    {
      id: 'zeera',
      gujarati: 'જીરું ખાખરા',
      english: 'Zeera (Cumin)',
      price: 220,
      description: "The aromatic classic that defines Gujarati hospitality. Hand-rolled with premium whole wheat and the finest roasted cumin seeds. The toasted zeera releases an incredible aroma and offers a cooling effect on the stomach, making it the perfect post-meal snack or morning breakfast.",
      icon: <Wind className="w-12 h-12" />,
      tags: ['Aromatic', 'Light', 'Digestive'],
      healthBenefit: 'Natural Digestive Aid'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-10 text-center md:text-left">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-widest mb-6 shadow-sm border border-amber-500/30">
            <Sparkles className="w-4 h-4 text-amber-500" />
            Freshly Roasted Batches
          </div>
          <h2 className="text-5xl md:text-7xl font-bold font-serif text-white mb-6 leading-tight">
            Our Traditional <span className="text-amber-500 italic">Varieties</span>
          </h2>
          <p className="text-xl text-stone-300 leading-relaxed font-light">
            We focus on two timeless flavors, perfected over decades. Pure whole wheat, slow-roasted to a wafer-thin crunch.
          </p>
        </div>
        
        {/* Order Badge */}
        <div className="bg-amber-600 text-white p-10 rounded-[50px] shadow-2xl relative overflow-hidden group border-4 border-amber-400/20">
          <div className="relative z-10 text-center">
            <p className="text-amber-200 font-bold text-xs uppercase tracking-[0.3em] mb-3">Batch Rate</p>
            <div className="flex items-center justify-center gap-1 mb-4">
              <span className="text-5xl font-bold font-serif text-white">₹220</span>
              <span className="text-amber-100 text-xl">/ kg</span>
            </div>
            <div className="bg-white/20 backdrop-blur px-4 py-2 rounded-2xl border border-white/20">
              <p className="text-white text-xs font-black uppercase tracking-tighter">
                Min. Order: 5 kg Required
              </p>
            </div>
          </div>
          <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-3xl group-hover:bg-white/30 transition-colors"></div>
        </div>
      </div>

      {/* Product Grid - Text Centric */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {products.map((p) => (
          <div key={p.id} className="group relative bg-white/10 backdrop-blur-xl rounded-[60px] p-10 md:p-16 shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 border border-white/10 overflow-hidden">
            {/* Background Texture Detail */}
            <div className="absolute top-0 right-0 p-12 text-amber-500/10 pointer-events-none group-hover:opacity-100 group-hover:text-amber-500/20 transition-all duration-700">
              {p.icon}
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex flex-wrap gap-2 mb-8">
                {p.tags.map(tag => (
                  <span key={tag} className="bg-amber-600 text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mb-10">
                <h3 className="text-6xl font-bold text-white font-serif leading-none mb-4">
                  {p.gujarati}
                </h3>
                <p className="text-3xl font-light text-amber-500 font-sans tracking-tight">
                  {p.english}
                </p>
              </div>

              <div className="flex items-center gap-3 mb-8 bg-white/5 self-start px-4 py-2 rounded-2xl border border-white/10">
                <ShieldCheck className="w-5 h-5 text-amber-500" />
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400">{p.healthBenefit}</span>
              </div>

              <p className="text-stone-300 text-xl leading-relaxed mb-12 flex-1 font-light italic">
                "{p.description}"
              </p>

              <div className="mt-auto pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center gap-8">
                <button 
                  onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:flex-1 flex items-center justify-center gap-4 py-6 bg-white text-stone-900 rounded-[40px] font-bold text-xl hover:bg-amber-600 hover:text-white transition-all shadow-xl active:scale-95 group-hover:translate-y-[-4px]"
                >
                  <ShoppingCart className="w-6 h-6" />
                  Order {p.english.split(' ')[0]}
                </button>
                <div className="text-center sm:text-right">
                  <p className="text-stone-500 text-[10px] font-bold uppercase tracking-widest mb-1">Price / Kg</p>
                  <div className="text-3xl font-black text-white">₹220</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Trust Details */}
      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
        {[
          { icon: <Flame />, title: "Tawa Roasted", text: "Slowly roasted on a flat griddle for maximum crispness." },
          { icon: <ShieldCheck />, title: "Hygiene First", text: "Prepared in a sanitized home kitchen by experts." },
          { icon: <Info />, title: "No Stock Policy", text: "We roast only after you place your order for guaranteed freshness." }
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center text-amber-500 shadow-lg mb-6 group-hover:bg-amber-600 group-hover:text-white transition-all border border-white/10">
              {item.icon}
            </div>
            <h4 className="font-bold text-white mb-2 uppercase tracking-widest text-sm">{item.title}</h4>
            <p className="text-stone-400 text-xs leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductShowcase;
