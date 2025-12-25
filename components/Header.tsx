import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Car } from 'lucide-react';
import { COMPANY_PHONE, NAV_ITEMS } from '../constants.tsx';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 glass shadow-sm">
      <div className="container mx-auto px-4 h-20 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-sky-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:rotate-6 transition">
            <Car size={24} />
          </div>
          <span className="text-xl font-black tracking-tighter">SangTenXe<span className="text-sky-600">24h</span></span>
        </Link>

        <nav className="hidden md:flex gap-8 items-center">
          {NAV_ITEMS.map((item) => (
            <Link 
              key={item.path} 
              to={item.path} 
              className={`font-bold text-xs uppercase tracking-widest transition-colors hover:text-sky-600 ${location.pathname === item.path ? 'text-sky-600 underline underline-offset-8 decoration-2' : 'text-slate-600'}`}
            >
              {item.label}
            </Link>
          ))}
          <a href={`tel:${COMPANY_PHONE}`} className="bg-sky-600 text-white px-6 py-2.5 rounded-full font-black text-xs shadow-lg hover:bg-sky-700 transition flex items-center gap-2">
            <Phone size={14} /> {COMPANY_PHONE}
          </a>
        </nav>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t p-6 flex flex-col gap-6 animate-fade-up">
          {NAV_ITEMS.map((item) => (
            <Link 
              key={item.path} 
              to={item.path} 
              className="font-black text-slate-700 uppercase tracking-widest"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a href={`tel:${COMPANY_PHONE}`} className="bg-sky-600 text-white text-center py-4 rounded-2xl font-black">
            GỌI NGAY: {COMPANY_PHONE}
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;