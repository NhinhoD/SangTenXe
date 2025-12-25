import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS, COMPANY_PHONE } from '../constants.tsx';

const Consultation: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    document.title = "Tư Vấn & Hỏi Đáp - SangTenXe24h";
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-800 mb-8 text-center">Hỏi Đáp Thủ Tục</h1>
      <div className="max-w-3xl mx-auto space-y-4">
        {FAQ_ITEMS.map((item, index) => (
          <div key={index} className="border rounded-xl p-5 bg-white shadow-sm">
            <button className="w-full flex justify-between font-bold" onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}>
              {item.question}
              {openFaqIndex === index ? <ChevronUp /> : <ChevronDown />}
            </button>
            {openFaqIndex === index && <p className="mt-4 text-slate-600">{item.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Consultation;