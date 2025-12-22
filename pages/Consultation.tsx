
import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, MessageCircle, FileQuestion, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS, COMPANY_PHONE } from '../constants';

const Consultation: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    document.title = "Tư Vấn & Hỏi Đáp Thủ Tục Giấy Tờ Xe - SangTenXe24h";
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const cleanPhone = COMPANY_PHONE.replace(/\s/g, '');

  return (
    <div className="bg-white">
      <div className="bg-sky-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">Tư Vấn Thủ Tục Xe</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Giải đáp mọi thắc mắc về sang tên, rút hồ sơ, biển số định danh và các vấn đề pháp lý liên quan tại SangTenXe24h.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* FAQ Section */}
          <div className="lg:w-2/3">
            <div className="flex items-center gap-3 mb-8">
              <HelpCircle className="text-sky-500" size={28} />
              <h2 className="text-2xl font-bold text-slate-800">Câu Hỏi Thường Gặp</h2>
            </div>
            
            <div className="space-y-4">
              {FAQ_ITEMS.map((item, index) => (
                <div 
                  key={index} 
                  className={`border rounded-xl transition-all duration-300 ${openFaqIndex === index ? 'border-sky-200 shadow-md bg-white' : 'border-gray-100 bg-gray-50'}`}
                >
                  <button
                    className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className={`font-bold text-lg ${openFaqIndex === index ? 'text-sky-700' : 'text-slate-700'}`}>
                      {item.question}
                    </span>
                    {openFaqIndex === index ? (
                      <ChevronUp className="text-sky-500 shrink-0" size={20} />
                    ) : (
                      <ChevronDown className="text-gray-400 shrink-0" size={20} />
                    )}
                  </button>
                  <div 
                    className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${
                      openFaqIndex === index ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="text-slate-600 leading-relaxed border-t border-gray-100 pt-4">
                      {item.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-sky-50 border border-sky-100 rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold text-slate-800 mb-2">Bạn có câu hỏi khác?</h3>
              <p className="text-slate-600 mb-6">Đội ngũ chuyên gia của chúng tôi sẵn sàng giải đáp miễn phí cho riêng trường hợp của bạn.</p>
              <div className="flex justify-center gap-4">
                 <a href={`https://zalo.me/${cleanPhone}`} target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition shadow-md flex items-center gap-2">
                    Chat Zalo
                 </a>
                 <a href={`tel:${cleanPhone}`} className="bg-white border border-gray-300 hover:bg-gray-50 text-slate-700 font-bold py-3 px-6 rounded-lg transition shadow-md flex items-center gap-2">
                    Gọi Hotline
                 </a>
              </div>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="lg:w-1/3">
             <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 sticky top-24">
                <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2 pb-4 border-b border-gray-100">
                   <FileQuestion className="text-sky-500" />
                   Chủ đề tư vấn hot
                </h3>
                
                <ul className="space-y-4">
                   <li className="group cursor-pointer">
                      <div className="font-semibold text-slate-700 group-hover:text-sky-600 transition">Thủ tục sang tên không chính chủ</div>
                      <p className="text-xs text-slate-400 mt-1">Cập nhật quy định mới nhất 2025</p>
                   </li>
                   <li className="group cursor-pointer">
                      <div className="font-semibold text-slate-700 group-hover:text-sky-600 transition">Biển số định danh là gì?</div>
                      <p className="text-xs text-slate-400 mt-1">Hướng dẫn giữ biển số đẹp cho xe mới</p>
                   </li>
                   <li className="group cursor-pointer">
                      <div className="font-semibold text-slate-700 group-hover:text-sky-600 transition">Phí trước bạ xe cũ 2025</div>
                      <p className="text-xs text-slate-400 mt-1">Cách tính thuế chính xác tiết kiệm</p>
                   </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-gray-100">
                   <div className="bg-slate-900 rounded-xl p-5 text-white text-center">
                      <MessageCircle className="mx-auto mb-3 text-sky-400" size={32} />
                      <p className="font-bold text-lg mb-1">Tư vấn trực tuyến</p>
                      <p className="text-sm text-slate-400 mb-4">Chúng tôi đang online để hỗ trợ bạn ngay</p>
                      <a href={`https://zalo.me/${cleanPhone}`} target="_blank" rel="noopener noreferrer" className="block w-full py-2 bg-sky-600 hover:bg-sky-500 rounded font-bold text-sm transition">
                        Bắt đầu chat ngay
                      </a>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
