
import React from 'react';
import { ArrowRight, Star, Heart, Clock, Leaf } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-20 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-40">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 text-amber-400 px-6 py-2 rounded-full mb-10 shadow-lg backdrop-blur-sm animate-bounce">
            <Star className="w-4 h-4 fill-amber-400" />
            <span className="text-sm font-bold uppercase tracking-widest italic">Gandhinagar's Authentic Heritage</span>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-bold font-serif leading-none text-white mb-8 drop-shadow-2xl">
            <span className="font-stylish text-amber-500 block mb-4 leading-tight">Massi's Khakhra</span>
            Healthy, Thin <br />
            <span className="text-amber-500 italic">& Crispy</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-stone-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Bringing the authentic <span className="font-bold text-amber-400 italic">"Ghar no Swad"</span> to your doorstep. <span className="text-white font-medium">Handmade in home</span>, hand-rolled, slow-roasted, and zero preservatives.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })}
              className="group w-full sm:w-auto inline-flex items-center justify-center bg-amber-600 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-amber-500 transition-all shadow-2xl hover:shadow-amber-500/40 active:scale-95"
            >
              Order Fresh Batch
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-xl px-6 py-3 rounded-full border border-white/20 shadow-xl">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-stone-800 bg-amber-500 flex items-center justify-center text-[10px] font-bold text-stone-900">
                    M
                  </div>
                ))}
              </div>
              <div className="text-left">
                <span className="text-sm font-bold text-white block">500+ Batches</span>
                <p className="text-stone-400 text-[10px] uppercase tracking-tighter font-bold">Delivered this month</p>
              </div>
            </div>
          </div>

          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
            {[
              { icon: <Heart className="text-red-400" />, label: "Healthy Snack" },
              { icon: <Clock className="text-blue-400" />, label: "Always Fresh" },
              { icon: <Leaf className="text-green-400" />, label: "Pure Wheat" },
              { icon: <Star className="text-amber-400" />, label: "Traditional" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-3 group">
                <div className="p-4 bg-white/5 backdrop-blur-md rounded-2xl shadow-inner group-hover:scale-110 transition-transform border border-white/10">
                  {item.icon}
                </div>
                <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
