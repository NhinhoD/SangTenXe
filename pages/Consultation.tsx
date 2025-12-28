
import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, MessageCircle, FileQuestion, HelpCircle, Calculator, Info, Landmark, ArrowRight } from 'lucide-react';
import { FAQ_ITEMS, COMPANY_PHONE } from '../constants';

const Consultation: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  
  // Tax Calculator State
  const [carValue, setCarValue] = useState<string>('');
  const [carType, setCarType] = useState<'old' | 'new'>('old');
  const [estimatedTax, setEstimatedTax] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Sang Tên Ô Tô Mất Bao Lâu? Ở Đâu? Chi Phí? - Tư Vấn SangTenXe24h";
  }, []);

  const calculateTax = () => {
    const value = parseFloat(carValue.replace(/,/g, ''));
    if (isNaN(value)) return;
    
    // Simple estimation logic for 2025
    // Old car: 2%, New car: 10-12%
    const rate = carType === 'old' ? 0.02 : 0.10;
    setEstimatedTax(value * rate);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(val);
  };

  const cleanPhone = COMPANY_PHONE.replace(/\s/g, '');

  return (
    <div className="bg-white">
      {/* Banner */}
      <div className="bg-slate-950 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-900/30 to-transparent"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="text-sky-400 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Hỗ trợ pháp lý & Dịch vụ hồ sơ xe ô tô</span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Tư Vấn Giấy Tờ Xe Ô Tô</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Giải đáp mọi thắc mắc về sang tên ô tô mất bao lâu, ở đâu, cần giấy tờ gì và chi phí sang tên ô tô 2025.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Main Content */}
          <div className="lg:w-2/3">
            
            {/* Tax Calculator Tool */}
            <div className="bg-slate-50 rounded-[3rem] p-10 md:p-14 mb-20 border border-slate-100 shadow-sm">
               <div className="flex items-center gap-4 mb-10">
                  <div className="w-14 h-14 bg-sky-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-sky-200">
                    <Calculator size={28} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-slate-900 leading-tight">Chi phí sang tên ô tô tạm tính</h2>
                    <p className="text-slate-500 text-sm font-medium">Ước tính lệ phí trước bạ khi làm giấy tờ xe ô tô tphcm</p>
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-8">
                     <div>
                        <label className="block text-slate-700 text-[10px] font-black uppercase tracking-widest mb-3 ml-1">Loại xe đăng ký</label>
                        <div className="flex bg-white p-1 rounded-2xl border border-slate-200">
                           <button 
                             onClick={() => setCarType('old')}
                             className={`flex-1 py-3 rounded-xl text-xs font-black transition-all ${carType === 'old' ? 'bg-sky-600 text-white shadow-md' : 'text-slate-400 hover:text-sky-600'}`}
                           >
                             SANG TÊN XE CŨ
                           </button>
                           <button 
                             onClick={() => setCarType('new')}
                             className={`flex-1 py-3 rounded-xl text-xs font-black transition-all ${carType === 'new' ? 'bg-sky-600 text-white shadow-md' : 'text-slate-400 hover:text-sky-600'}`}
                           >
                             ĐĂNG KÝ XE MỚI
                           </button>
                        </div>
                     </div>

                     <div>
                        <label className="block text-slate-700 text-[10px] font-black uppercase tracking-widest mb-3 ml-1">Giá trị ô tô thực tế (VND)</label>
                        <div className="relative">
                          <input 
                            type="text" 
                            value={carValue}
                            onChange={(e) => setCarValue(e.target.value)}
                            placeholder="Ví dụ: 500,000,000"
                            className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 text-slate-900 font-bold focus:ring-2 focus:ring-sky-500 outline-none transition-all"
                          />
                          <Landmark className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300" size={20} />
                        </div>
                     </div>

                     <button 
                        onClick={calculateTax}
                        className="w-full bg-slate-900 text-white font-black py-5 rounded-2xl hover:bg-sky-600 transition-all uppercase tracking-widest text-xs flex items-center justify-center gap-3 shadow-xl"
                     >
                        TÍNH CHI PHÍ <ArrowRight size={18} />
                     </button>
                  </div>

                  <div className="bg-white rounded-3xl p-10 flex flex-col justify-center items-center text-center border border-slate-100 shadow-inner">
                     {estimatedTax !== null ? (
                        <>
                          <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-4">Thuế trước bạ dự kiến</span>
                          <span className="text-4xl font-black text-sky-600 mb-6 tracking-tight">{formatCurrency(estimatedTax)}</span>
                          <p className="text-slate-500 text-xs leading-relaxed max-w-[200px]">
                            *Đây là con số tạm tính cho **sang tên ô tô**. Liên hệ SangTenXe24h để làm hồ sơ xe ô tô trọn gói chính xác nhất.
                          </p>
                        </>
                     ) : (
                        <div className="opacity-40 flex flex-col items-center">
                           <Calculator size={64} className="mb-4 text-slate-300" />
                           <p className="text-slate-400 font-bold text-sm uppercase tracking-widest">Nhập giá xe để tính</p>
                        </div>
                     )}
                  </div>
               </div>
            </div>

            {/* FAQs */}
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 bg-sky-50 text-sky-600 rounded-2xl flex items-center justify-center border border-sky-100">
                <HelpCircle size={28} />
              </div>
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Thủ Tục Giấy Tờ Xe Ô Tô</h2>
            </div>
            
            <div className="space-y-6">
              {FAQ_ITEMS.map((item, index) => (
                <div 
                  key={index} 
                  className={`group border rounded-3xl transition-all duration-500 overflow-hidden ${openFaqIndex === index ? 'border-sky-200 shadow-xl bg-white scale-[1.02]' : 'border-slate-100 bg-slate-50'}`}
                >
                  <button
                    className="w-full flex justify-between items-center p-8 text-left focus:outline-none"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className={`font-black text-lg transition-colors ${openFaqIndex === index ? 'text-sky-700' : 'text-slate-700'}`}>
                      {item.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${openFaqIndex === index ? 'bg-sky-600 text-white rotate-180' : 'bg-slate-200 text-slate-500'}`}>
                      <ChevronDown size={18} />
                    </div>
                  </button>
                  <div 
                    className={`px-8 overflow-hidden transition-all duration-500 ease-in-out ${
                      openFaqIndex === index ? 'max-h-[500px] pb-10 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="text-slate-600 leading-relaxed border-t border-slate-100 pt-8 font-light text-lg">
                      {item.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="lg:w-1/3">
             <div className="bg-white border border-slate-100 rounded-[2.5rem] shadow-2xl p-10 sticky top-28">
                <h3 className="text-xl font-black text-slate-900 mb-10 flex items-center gap-3 pb-6 border-b border-slate-50">
                   <div className="w-2 h-6 bg-sky-500 rounded-full"></div>
                   Nhu Cầu Phổ Biến
                </h3>
                
                <ul className="space-y-8">
                   <li className="group cursor-pointer">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="w-6 h-6 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center text-[10px] font-black">01</span>
                        <div className="font-black text-slate-800 group-hover:text-sky-600 transition text-sm uppercase tracking-tight">Sang tên ô tô nhanh</div>
                      </div>
                      <p className="text-xs text-slate-400 ml-9 font-medium">Dịch vụ sang tên ô tô tphcm hỏa tốc lấy ngay.</p>
                   </li>
                   <li className="group cursor-pointer">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="w-6 h-6 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center text-[10px] font-black">02</span>
                        <div className="font-black text-slate-800 group-hover:text-sky-600 transition text-sm uppercase tracking-tight">Đổi biển số ô tô tphcm</div>
                      </div>
                      <p className="text-xs text-slate-400 ml-9 font-medium">Cấp lại biển số ô tô bị mất hoặc đổi biển định danh.</p>
                   </li>
                   <li className="group cursor-pointer">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="w-6 h-6 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center text-[10px] font-black">03</span>
                        <div className="font-black text-slate-800 group-hover:text-sky-600 transition text-sm uppercase tracking-tight">Làm giấy tờ xe ô tô sài gòn</div>
                      </div>
                      <p className="text-xs text-slate-400 ml-9 font-medium">Dịch vụ hồ sơ xe ô tô trọn gói, an toàn tuyệt đối.</p>
                   </li>
                </ul>

                <div className="mt-12 pt-10 border-t border-slate-50">
                   <div className="bg-slate-900 rounded-[2rem] p-8 text-white text-center shadow-xl">
                      <p className="font-black text-lg mb-2 uppercase tracking-tight">Tư Vấn Giấy Tờ Xe</p>
                      <a href={`tel:${cleanPhone}`} className="block w-full py-4 bg-sky-600 hover:bg-sky-500 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] transition">
                        Gọi {COMPANY_PHONE}
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
