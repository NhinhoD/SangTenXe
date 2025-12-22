
import React, { useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send, ShieldCheck } from 'lucide-react';
import { COMPANY_ADDRESS, COMPANY_EMAIL, COMPANY_PHONE } from '../constants';

const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = "Liên Hệ Tư Vấn Dịch Vụ Sang Tên Xe 24/7 - SangTenXe24h";
  }, []);

  return (
    <div className="bg-white">
      <div className="bg-slate-50 py-16 border-b border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <span className="text-sky-500 font-bold uppercase tracking-wider text-sm mb-2 block">SangTenXe24h - Liên hệ ngay</span>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">Tư Vấn Miễn Phí 24/7</h1>
          <p className="text-slate-500 max-w-2xl mx-auto">Đội ngũ SangTenXe24h luôn sẵn sàng giải quyết mọi vấn đề về hồ sơ xe của bạn nhanh chóng nhất.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-2">
               Thông tin liên hệ
            </h2>
            <div className="space-y-8 flex-grow">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-600 shrink-0 shadow-sm border border-sky-100">
                  <MapPin size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1 text-lg">Địa chỉ văn phòng</h3>
                  <p className="text-slate-600 leading-relaxed">{COMPANY_ADDRESS}</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-600 shrink-0 shadow-sm border border-sky-100">
                  <Phone size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1 text-lg">Hotline / Zalo (24/7)</h3>
                  <p className="text-sky-600 text-3xl font-black">{COMPANY_PHONE}</p>
                  <p className="text-sm text-slate-400 mt-1">Hỗ trợ nhanh qua Zalo cho tất cả các tỉnh thành</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-600 shrink-0 shadow-sm border border-sky-100">
                  <Mail size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1 text-lg">Email nhận hồ sơ</h3>
                  <p className="text-slate-600 font-medium">{COMPANY_EMAIL}</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-600 shrink-0 shadow-sm border border-sky-100">
                  <Clock size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1 text-lg">Thời gian làm việc</h3>
                  <p className="text-slate-600 font-medium">Phục vụ linh hoạt các ngày trong tuần</p>
                  <p className="text-slate-500 italic">Tư vấn Online & Hotline hoạt động 24/7</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-slate-900 rounded-3xl text-white flex items-center gap-6">
                <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center shrink-0">
                    <ShieldCheck size={32} />
                </div>
                <div>
                    <h4 className="font-bold text-lg mb-1">Cam kết từ SangTenXe24h</h4>
                    <p className="text-sm text-slate-400">Hồ sơ hợp pháp 100%, không phát sinh chi phí, hoàn tiền nếu không hoàn thành.</p>
                </div>
            </div>
          </div>

          {/* Optimized Form */}
          <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-gray-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-sky-50 rounded-full -mr-20 -mt-20 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-50 rounded-full -ml-12 -mb-12 opacity-50"></div>
            
            <h2 className="text-2xl font-bold text-slate-800 mb-2 relative z-10">Đăng ký tư vấn ngay</h2>
            <p className="text-slate-500 mb-8 relative z-10 text-sm">Để lại thông tin, chúng tôi sẽ gọi lại tư vấn chi tiết chỉ sau 5 phút.</p>
            
            <form onSubmit={(e) => e.preventDefault()} className="relative z-10 space-y-5">
              <div className="group">
                <label className="block text-slate-700 text-xs font-bold mb-1.5 ml-1 uppercase tracking-wider" htmlFor="name">
                  Họ và tên khách hàng
                </label>
                <input 
                  className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-3.5 px-5 text-slate-800 leading-tight focus:outline-none focus:bg-white focus:border-sky-500 transition-all shadow-sm" 
                  id="name" 
                  type="text" 
                  placeholder="Ví dụ: Nguyễn Văn A" 
                  required
                />
              </div>
              <div className="group">
                <label className="block text-slate-700 text-xs font-bold mb-1.5 ml-1 uppercase tracking-wider" htmlFor="phone">
                  Số điện thoại <span className="text-red-500">*</span>
                </label>
                <input 
                  className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-3.5 px-5 text-slate-800 leading-tight focus:outline-none focus:bg-white focus:border-sky-500 transition-all shadow-sm" 
                  id="phone" 
                  type="tel" 
                  placeholder="Nhập số điện thoại để gọi lại" 
                  required
                />
              </div>
              <div className="group">
                <label className="block text-slate-700 text-xs font-bold mb-1.5 ml-1 uppercase tracking-wider" htmlFor="service">
                  Dịch vụ bạn quan tâm
                </label>
                <select className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-3.5 px-5 text-slate-800 leading-tight focus:outline-none focus:bg-white focus:border-sky-500 transition-all shadow-sm">
                    <option>Sang tên ô tô / xe máy</option>
                    <option>Rút hồ sơ gốc</option>
                    <option>Làm lại giấy tờ / biển số</option>
                    <option>Cà số khung số máy</option>
                    <option>Đăng kiểm / Vận tải</option>
                    <option>Khác (tư vấn chung)</option>
                </select>
              </div>
              <div className="group">
                <label className="block text-slate-700 text-xs font-bold mb-1.5 ml-1 uppercase tracking-wider" htmlFor="message">
                  Ghi chú yêu cầu (không bắt buộc)
                </label>
                <textarea 
                  className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-3.5 px-5 text-slate-800 leading-tight focus:outline-none focus:bg-white focus:border-sky-500 transition-all shadow-sm h-28 resize-none" 
                  id="message" 
                  placeholder="Tôi cần tư vấn gấp thủ tục..." 
                ></textarea>
              </div>
              
              <button 
                className="w-full relative overflow-hidden bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 text-white font-black py-5 rounded-2xl focus:outline-none transition-all duration-300 flex items-center justify-center gap-3 shadow-xl shadow-sky-500/20 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] group" 
                type="submit"
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                <Send size={22} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500 ease-out" /> 
                <span className="relative z-10 tracking-widest uppercase">GỬI YÊU CẦU NGAY</span>
              </button>
              
              <p className="text-center text-[10px] text-slate-400 mt-4 px-4 uppercase font-bold tracking-widest">
                Chúng tôi cam kết bảo mật thông tin khách hàng tuyệt đối
              </p>
            </form>
          </div>
        </div>
      </div>
      
      {/* Visual Map Area */}
      <div className="w-full h-[450px] bg-slate-100 relative group overflow-hidden border-t border-gray-100">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066&auto=format&fit=crop')] bg-cover bg-center opacity-40 grayscale group-hover:grayscale-0 transition duration-1000"></div>
         <div className="absolute inset-0 bg-sky-900/10 group-hover:bg-transparent transition duration-500"></div>
         
         <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-[2rem] shadow-2xl border border-white text-center max-w-md transform transition-all group-hover:scale-105 duration-500">
                <div className="w-16 h-16 bg-sky-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-sky-200">
                    <MapPin size={32} className="animate-bounce" />
                </div>
                <h3 className="font-black text-xl text-slate-800 mb-2">Văn Phòng SangTenXe24h</h3>
                <p className="text-slate-600 mb-4">{COMPANY_ADDRESS}</p>
                <div className="flex gap-3 justify-center">
                    <a href="#" className="bg-sky-600 text-white px-5 py-2 rounded-full text-sm font-bold shadow-md hover:bg-sky-700 transition">Chỉ đường</a>
                    <a href={`tel:${COMPANY_PHONE.replace(/\s/g, '')}`} className="bg-slate-100 text-slate-700 px-5 py-2 rounded-full text-sm font-bold hover:bg-slate-200 transition">Gửi Zalo</a>
                </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default ContactPage;
