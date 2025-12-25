
import React, { useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send, ShieldCheck, Map as MapIcon, ExternalLink } from 'lucide-react';
import { COMPANY_ADDRESS, COMPANY_EMAIL, COMPANY_PHONE } from '../constants';

const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = "Liên Hệ Tư Vấn Dịch Vụ Sang Tên Xe 24/7 - SangTenXe24h";
  }, []);

  // URL nhúng tìm kiếm đảm bảo ghim đúng địa chỉ với DẤU GHIM ĐỎ
  const mapEmbedUrl = "https://maps.google.com/maps?q=288H%20N%C6%A1%20Trang%20Long,%20B%C3%ACnh%20Th%E1%BA%A1nh,%20H%E1%BB%93%20Ch%C3%AD%20Minh&t=&z=17&ie=UTF8&iwloc=&output=embed";

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
      
      {/* Optimized Map Area with Red Marker Pin */}
      <div className="container mx-auto px-4 pb-20">
        <div className="bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden relative group">
          <div className="p-8 border-b border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-sky-500 text-white rounded-xl flex items-center justify-center shadow-lg shadow-sky-200">
                <MapIcon size={24} />
              </div>
              <div>
                <h3 className="font-black text-xl text-slate-800">Bản đồ văn phòng</h3>
                <p className="text-slate-500 text-sm">{COMPANY_ADDRESS}</p>
              </div>
            </div>
            <a 
              href="https://maps.app.goo.gl/TirK5G6C877rXwE46" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all hover:-translate-y-1"
            >
              <ExternalLink size={18} /> Mở Google Maps
            </a>
          </div>
          
          <div className="w-full h-[500px] bg-slate-100 relative">
            <iframe 
              src={mapEmbedUrl}
              className="absolute inset-0 w-full h-full border-0 transition-all duration-1000"
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Vị trí SangTenXe24h trên bản đồ"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
