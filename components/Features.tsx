
import React from 'react';
import { ShieldCheck, Utensils, Zap, Users } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Utensils className="w-8 h-8 text-amber-500" />,
      title: "Ghar Jeve Swad (Home Taste)",
      description: "Every Khakhra is hand-made by experienced homemakers using traditional recipes passed down through generations."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-amber-500" />,
      title: "Aarogya-prad (Healthy)",
      description: "Roasted to perfection with minimal oil. High in fiber and zero preservatives. Perfect for diabetics and weight watchers."
    },
    {
      icon: <Zap className="w-8 h-8 text-amber-500" />,
      title: "Freshly Made",
      description: "We don't stock! Your order is prepared only after you place it, ensuring maximum crispness and aroma."
    },
    {
      icon: <Users className="w-8 h-8 text-amber-500" />,
      title: "Gandhinagar's Own",
      description: "Supporting local women artisans and using locally sourced, premium quality whole wheat and spices."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-3">The Massi's Khakhra Way</h2>
        <h3 className="text-3xl md:text-5xl font-bold font-serif text-white">Health Meets Heritage</h3>
        <p className="mt-4 text-stone-400 max-w-2xl mx-auto">
          We believe that snacking shouldn't be a compromise between taste and wellness. 
          Our Khakhras are a testament to traditional Gujarati craftsmanship from the heart of Gandhinagar.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, idx) => (
          <div key={idx} className="group p-8 rounded-3xl bg-white/5 border border-white/10 transition-all hover:bg-white/10 hover:shadow-2xl hover:shadow-amber-900/20">
            <div className="mb-6 inline-block p-4 bg-white/10 rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
              {feature.icon}
            </div>
            <h4 className="text-xl font-bold text-white mb-3 font-serif">{feature.title}</h4>
            <p className="text-stone-400 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
