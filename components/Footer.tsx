
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Youtube, ChevronRight } from 'lucide-react';
import { COMPANY_ADDRESS, COMPANY_EMAIL, COMPANY_PHONE, SERVICES } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t-4 border-sky-500">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-6 bg-sky-500 rounded-sm"></span>
              SangTenXe24h
            </h3>
            <p className="text-sm leading-7 mb-6 text-slate-400">
              Chuyên gia dịch vụ sang tên xe ô tô, rút hồ sơ gốc và pháp lý xe cơ giới uy tín hàng đầu. Chúng tôi mang đến sự an tâm tuyệt đối về mặt hồ sơ cho mọi giao dịch mua bán xe của bạn.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-blue-600 hover:scale-110 transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-red-600 hover:scale-110 transition-all duration-300">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Liên Kết</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-sky-400 transition flex items-center gap-2"><ChevronRight size={14} /> Trang chủ</Link></li>
              <li><Link to="/gioi-thieu" className="hover:text-sky-400 transition flex items-center gap-2"><ChevronRight size={14} /> Giới thiệu</Link></li>
              <li><Link to="/dich-vu" className="hover:text-sky-400 transition flex items-center gap-2"><ChevronRight size={14} /> Dịch vụ</Link></li>
              <li><Link to="/blog" className="hover:text-sky-400 transition flex items-center gap-2"><ChevronRight size={14} /> Blog xe</Link></li>
              <li><Link to="/lien-he" className="hover:text-sky-400 transition flex items-center gap-2"><ChevronRight size={14} /> Liên hệ</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Dịch Vụ Hot</h3>
            <ul className="space-y-3 text-sm">
              {SERVICES.slice(0, 5).map(service => (
                <li key={service.id}>
                  <Link to={`/dich-vu/${service.id}`} className="hover:text-sky-400 transition flex items-start gap-2">
                     <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Liên Hệ</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-sky-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{COMPANY_ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-sky-500 shrink-0" />
                <span className="font-bold text-white text-lg tracking-wide">{COMPANY_PHONE}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-sky-500 shrink-0" />
                <span className="text-slate-300">{COMPANY_EMAIL}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} SangTenXe24h. Bản quyền thuộc về chúng tôi.</p>
          <div className="flex gap-4">
             <span className="hover:text-white cursor-pointer">Pháp lý</span>
             <span className="hover:text-white cursor-pointer">Bảo mật</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
