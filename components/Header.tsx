
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown, Clock } from 'lucide-react';
import { COMPANY_PHONE, NAV_ITEMS } from '../constants.tsx';

const Logo = () => (
  <div className="flex items-center gap-2 group">
    <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
      <div className="absolute inset-0 bg-sky-100 rounded-xl rotate-6 group-hover:rotate-12 transition-transform"></div>
      <div className="relative w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg transform group-hover:-translate-y-1 transition-transform">
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 md:w-7 md:h-7 text-white" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-1.1 0-2 .9-2 2v7h2" />
          <circle cx="7" cy="17" r="2" />
          <circle cx="17" cy="17" r="2" />
          <path d="M9 17h6" />
          <path d="m11 12 2 2 4-4" />
        </svg>
      </div>
    </div>
    <div className="flex flex-col leading-none">
      <span className="text-lg md:text-xl font-black text-slate-800 tracking-tighter">SangTenXe<span className="text-sky-600">24h</span></span>
      <span className="text-[8px] md:text-[10px] font-bold text-sky-500 uppercase tracking-[0.2em] mt-0.5">Uy tín hàng đầu</span>
    </div>
  </div>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    setExpandedItem(null);
  }, [location.pathname]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleMobileParentClick = (item: any, e: React.MouseEvent) => {
    if (item.children) {
      e.preventDefault();
      setExpandedItem(expandedItem === item.label ? null : item.label);
    } else {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="w-full shadow-md z-50 bg-white sticky top-0">
      <div className="border-b border-gray-100 bg-white">
        <div className="container mx-auto px-4 h-16 md:h-20 flex justify-between items-center">
          <Link to="/" className="flex-shrink-0">
            <Logo />
          </Link>
          <div className="flex items-center gap-3 md:gap-6">
            <div className="hidden lg:flex flex-col items-end text-right border-r border-gray-100 pr-6">
              <span className="flex items-center gap-1.5 text-xs font-bold text-sky-600 uppercase tracking-wider mb-1">
                <Clock size={14} /> Hỗ trợ 24/7 trực tuyến
              </span>
              <span className="text-xs text-slate-400 font-medium italic">Tiết kiệm thời gian - Đảm bảo pháp lý</span>
            </div>
            <div className="flex items-center gap-3 bg-slate-50 md:bg-sky-50 px-3 md:px-5 py-2 rounded-2xl border border-sky-100 hover:border-sky-300 transition-all group">
              <div className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-sky-200 group-hover:scale-110 transition-transform">
                 <Phone size={18} className="fill-current animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] md:text-[10px] text-slate-400 font-bold uppercase tracking-wider leading-none mb-1">Hotline / Zalo</span>
                <span className="text-sm md:text-lg font-black text-sky-700 leading-none">{COMPANY_PHONE}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-900 md:bg-white border-b border-gray-200 md:border-b-0">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-12 md:h-14">
            <button className="md:hidden flex items-center gap-2 text-white font-bold text-sm uppercase tracking-widest px-2" onClick={toggleMenu}>
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              <span>Menu</span>
            </button>
            <nav className="hidden md:flex space-x-1 h-full">
              {NAV_ITEMS.map((item) => (
                <div key={item.path} className="relative group h-full flex items-center">
                  <Link to={item.path} className={`px-4 lg:px-6 h-full flex items-center gap-1.5 font-bold text-sm transition-all duration-200 border-b-4 ${location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path)) ? 'text-sky-600 border-sky-500 bg-sky-50/50' : 'text-slate-600 border-transparent hover:text-sky-600 hover:bg-slate-50'}`}>
                    {item.label}
                    {item.children && <ChevronDown size={14} className="opacity-70 group-hover:rotate-180 transition-transform" />}
                  </Link>
                  {item.children && (
                    <div className="absolute top-full left-0 w-64 bg-white text-slate-700 shadow-2xl rounded-b-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 transform origin-top-left border-t-4 border-sky-500 py-2">
                      {item.children.map((child) => (
                        <Link key={child.path} to={child.path} className="block px-6 py-3 hover:bg-sky-50 border-l-4 border-transparent hover:border-sky-500 text-sm font-semibold transition-all hover:text-sky-600 hover:pl-8">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <div className="hidden md:block">
               <Link to="/lien-he" className="text-xs bg-sky-600 hover:bg-sky-700 text-white px-6 py-2.5 rounded-full font-black shadow-lg shadow-sky-200 transition-all hover:-translate-y-1 uppercase tracking-wider">Gửi yêu cầu ngay</Link>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 absolute w-full shadow-2xl z-50 overflow-y-auto max-h-[calc(100vh-120px)] animate-fade-up">
            {NAV_ITEMS.map((item) => {
              const hasChildren = !!item.children;
              const isExpanded = expandedItem === item.label;
              return (
                <div key={item.path} className="border-b border-gray-100 last:border-0">
                  <Link to={item.path} onClick={(e) => hasChildren ? handleMobileParentClick(item, e) : setIsMenuOpen(false)} className={`flex items-center justify-between w-full px-6 py-4 font-bold text-slate-700 transition-all ${isExpanded ? 'text-sky-600 bg-sky-50/50' : ''}`}>
                    <span>{item.label}</span>
                    {hasChildren && <ChevronDown size={20} className={`transition-transform duration-300 ${isExpanded ? 'rotate-180 text-sky-600' : 'text-slate-400'}`} />}
                  </Link>
                  {hasChildren && (
                    <div className={`bg-slate-50 transition-all duration-300 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[500px] opacity-100 border-t border-gray-100' : 'max-h-0 opacity-0'}`}>
                      {item.children.map(child => (
                        <Link key={child.path} to={child.path} onClick={() => setIsMenuOpen(false)} className={`block px-10 py-3.5 text-sm text-slate-600 hover:text-sky-600 border-b border-gray-100 last:border-0 transition-colors ${location.pathname === child.path ? 'text-sky-600 font-bold bg-white' : ''}`}>
                           • {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
