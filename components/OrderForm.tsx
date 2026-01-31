
import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, MapPin, Loader2, IndianRupee } from 'lucide-react';
import { Flavor } from '../types';

const OrderForm: React.FC = () => {
  const PRICE_PER_KG = 220;
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    flavor: Flavor.METHI,
    quantity: 5,
    address: '',
    notes: ''
  });

  const totalPrice = formData.quantity * PRICE_PER_KG;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/mqezjdne", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          totalPrice: `₹${totalPrice}`,
          _subject: `New Khakhra Order: ${formData.quantity}kg ${formData.flavor} from ${formData.name}`,
        })
      });

      if (response.ok) {
        setSubmitted(true);
        window.scrollTo({ top: document.getElementById('order')?.offsetTop! - 100, behavior: 'smooth' });
      } else {
        alert("Oops! There was a problem submitting your order. Please try again or contact Manish Patel at +91 97270 32299.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please check your internet connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto px-4 text-center py-20 bg-white rounded-[40px] shadow-xl border border-stone-100">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 text-green-600 rounded-full mb-8">
          <CheckCircle2 className="w-12 h-12" />
        </div>
        <h2 className="text-4xl font-bold font-serif text-stone-900 mb-4">Aabhar! (Thank You)</h2>
        <p className="text-lg text-stone-600 mb-8 max-w-md mx-auto">
          Your order for {formData.quantity}kg of {formData.flavor} (Total: ₹{totalPrice}) has been received. 
          Manish Patel will contact you shortly to confirm delivery in Gandhinagar/Ahmedabad.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-amber-600 font-bold hover:underline"
        >
          Place another order
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 bg-white rounded-[40px] shadow-2xl overflow-hidden border border-amber-50">
        {/* Left Side: Info */}
        <div className="lg:col-span-2 bg-stone-900 p-10 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold font-serif mb-6">Order Massi's Khakhra</h3>
            <p className="text-stone-400 mb-10 leading-relaxed">
              Experience the wafer-thin, homemade goodness. Fill out your details below and Massi will start roasting your fresh batch immediately.
            </p>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-amber-500/20 p-2 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <p className="font-bold text-sm">Batch Requirement</p>
                  <p className="text-stone-400 text-xs italic">Min. 5 kg order ensures traditional roasting quality.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-blue-500/20 p-2 rounded-lg">
                  <MapPin className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <p className="font-bold text-sm">Local Delivery Area</p>
                  <p className="text-stone-400 text-xs">Free delivery in Gandhinagar & Ahmedabad.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-green-500/20 p-2 rounded-lg">
                  <IndianRupee className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <p className="font-bold text-sm">Pure Quality Pricing</p>
                  <p className="text-stone-400 text-xs">Standard rate: ₹220 per kg.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="mt-12 relative z-10 p-6 bg-white/5 rounded-3xl backdrop-blur-sm border border-white/10">
            <div className="flex justify-between items-center mb-2">
              <p className="text-stone-400 text-xs italic">Selected Batch Total:</p>
              <p className="text-amber-400 font-bold text-xl">₹{totalPrice}</p>
            </div>
            <p className="text-stone-500 text-[10px]">Preparation time: 2-3 working days.</p>
          </div>

          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        </div>

        {/* Right Side: Form */}
        <form onSubmit={handleSubmit} className="lg:col-span-3 p-10 md:p-14">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-stone-700 uppercase tracking-wide">Full Name</label>
                <input 
                  required
                  name="name"
                  type="text" 
                  placeholder="Your Name"
                  className="w-full px-5 py-3.5 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-stone-700 uppercase tracking-wide">Phone Number</label>
                <input 
                  required
                  name="phone"
                  type="tel" 
                  placeholder="+91 XXXX-XXXXXX"
                  className="w-full px-5 py-3.5 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none transition-all"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-stone-700 uppercase tracking-wide">Choose Your Variety</label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setFormData({...formData, flavor: Flavor.METHI})}
                  className={`py-4 px-4 rounded-xl font-bold border-2 transition-all ${
                    formData.flavor === Flavor.METHI 
                    ? 'border-amber-600 bg-amber-50 text-amber-700 shadow-md ring-2 ring-amber-200 ring-offset-2' 
                    : 'border-stone-100 bg-white text-stone-400 hover:border-amber-200'
                  }`}
                >
                  {Flavor.METHI}
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({...formData, flavor: Flavor.ZEERA})}
                  className={`py-4 px-4 rounded-xl font-bold border-2 transition-all ${
                    formData.flavor === Flavor.ZEERA 
                    ? 'border-amber-600 bg-amber-50 text-amber-700 shadow-md ring-2 ring-amber-200 ring-offset-2' 
                    : 'border-stone-100 bg-white text-stone-400 hover:border-amber-200'
                  }`}
                >
                  {Flavor.ZEERA}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center mb-1">
                <label className="text-sm font-bold text-stone-700 uppercase tracking-wide">Order Quantity</label>
                <span className="text-xs text-amber-600 font-bold bg-amber-50 px-2 py-1 rounded">₹220 / kg</span>
              </div>
              <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100">
                <div className="flex items-center gap-6 mb-4">
                  <input 
                    type="range" 
                    min="5" 
                    max="50" 
                    step="1"
                    className="flex-1 h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
                    value={formData.quantity}
                    onChange={(e) => setFormData({...formData, quantity: parseInt(e.target.value)})}
                  />
                  <div className="flex flex-col items-end">
                    <span className="text-3xl font-black text-amber-900 leading-none">{formData.quantity}</span>
                    <span className="text-[10px] font-bold text-stone-500 uppercase tracking-tighter">Kilograms</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-stone-200 flex justify-between items-center">
                  <span className="text-sm font-medium text-stone-500">Order Estimate:</span>
                  <span className="text-xl font-bold text-stone-900">₹{totalPrice}</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-stone-700 uppercase tracking-wide">Delivery Address</label>
              <textarea 
                required
                name="address"
                rows={3}
                placeholder="Full address in Gandhinagar or Ahmedabad"
                className="w-full px-5 py-3.5 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none transition-all resize-none"
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
              ></textarea>
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-amber-600 text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-amber-900/10 transition-all flex items-center justify-center gap-3 active:scale-[0.98] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-amber-700 hover:shadow-2xl hover:-translate-y-1'}`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending to Manish Patel...
                </>
              ) : (
                <>
                  Place Order (Total: ₹{totalPrice})
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>
            <p className="text-center text-[10px] text-stone-400 font-medium italic">
              * Payment details will be shared upon order confirmation.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;
