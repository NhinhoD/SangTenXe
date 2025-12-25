import React, { useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send, ShieldCheck } from 'lucide-react';
import { COMPANY_ADDRESS, COMPANY_EMAIL, COMPANY_PHONE } from '../constants.tsx';

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
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-slate-800 mb-8">Thông tin liên hệ</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <MapPin size={28} className="text-sky-600" />
                <p className="text-slate-600">{COMPANY_ADDRESS}</p>
              </div>
              <div className="flex items-start gap-5">
                <Phone size={28} className="text-sky-600" />
                <p className="text-sky-600 text-3xl font-black">{COMPANY_PHONE}</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-gray-50">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <input className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-3.5 px-5" placeholder="Họ và tên" />
              <input className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-3.5 px-5" placeholder="Số điện thoại" />
              <button className="w-full bg-sky-600 text-white font-black py-5 rounded-2xl" type="submit">GỬI YÊU CẦU</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;