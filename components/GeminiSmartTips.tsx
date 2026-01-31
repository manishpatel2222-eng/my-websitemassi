
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Sparkles, Loader2, Quote } from 'lucide-react';

const GeminiSmartTips: React.FC = () => {
  const [tip, setTip] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchHealthTip = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: "Give me one short, insightful health tip specifically about why Gujarati Khakhra (whole wheat crispy bread) with Methi (fenugreek) or Zeera (cumin) is a superior healthy snack compared to potato chips or biscuits. Keep it under 40 words and make it sound authentic and appetizing.",
          config: {
            temperature: 0.8,
            topP: 0.95,
          }
        });
        setTip(response.text || "Hand-rolled with whole wheat, Khakhra is a slow-digesting fuel. Rich in fiber and roasted with minimal oil, it keeps you full longer than processed snacks while Methi and Zeera boost your digestion naturally.");
      } catch (error) {
        console.error("Gemini Error:", error);
        setTip("Whole wheat Khakhra is a high-fiber, low-calorie alternative to fried snacks. Naturally roasted and nutrient-dense, it's the perfect companion for your health journey.");
      } finally {
        setLoading(false);
      }
    };

    fetchHealthTip();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-[40px] p-8 md:p-12 shadow-inner border border-stone-100 flex flex-col md:row items-center gap-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4">
            <Sparkles className="w-6 h-6 text-amber-300 animate-pulse" />
        </div>
        
        <div className="flex-shrink-0 w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center shadow-lg shadow-amber-900/20">
          <Quote className="text-white w-10 h-10 fill-white" />
        </div>

        <div className="flex-1">
          <h4 className="text-amber-600 font-bold text-xs uppercase tracking-widest mb-2">Smart Healthy Insight</h4>
          {loading ? (
            <div className="flex items-center gap-2 text-stone-400 italic">
              <Loader2 className="w-4 h-4 animate-spin" />
              Fetching nutrition wisdom...
            </div>
          ) : (
            <p className="text-xl md:text-2xl font-serif text-stone-800 leading-relaxed italic">
              "{tip}"
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GeminiSmartTips;
