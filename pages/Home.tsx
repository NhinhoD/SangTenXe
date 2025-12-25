import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Clock, DollarSign, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SERVICES, COMPANY_PHONE } from '../constants.tsx';
import ServiceCard from '../components/ServiceCard.tsx';
import Reveal from '../components/Reveal.tsx';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "SangTenXe24h - Dịch Vụ Sang Tên Xe Ô Tô, Xe Máy Uy Tín 24/7";
  }, []);

  return (
    <div className="bg-white font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[750px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1600")' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-800/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white mt-8">
          <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <span className="inline-block py-2 px-4 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-bold mb-8 backdrop-blur-md uppercase tracking-[0.2em]">
              Giải Pháp Pháp Lý Xe Cơ Giới Toàn Quốc
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black mb-6 leading-tight tracking-tight animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Sang Tên Xe <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400">Nhanh Gọn 24/7</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto font-medium leading-relaxed animate-fade-up opacity-90" style={{ animationDelay: '0.3s' }}>
            Bỏ qua mọi thủ tục hành chính phức tạp. Chúng tôi giúp bạn hoàn tất hồ sơ sang tên, rút gốc chỉ trong vài ngày làm việc.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Link 
              to="/lien-he"
              className="bg-sky-600 hover:bg-sky-500 text-white font-black py-5 px-10 rounded-2xl shadow-2xl shadow-sky-600/40 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 text-lg"
            >
               Tư Vấn Ngay <ArrowRight size={20} />
            </Link>
            <a 
              href={`tel:${COMPANY_PHONE.replace(/\s/g, '')}`}
              className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-black py-5 px-10 rounded-2xl shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg"
            >
              📞 {COMPANY_PHONE}
            </a>
          </div>
        </div>
        
        {/* Animated Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <div className="relative w-[200%] h-[120px] md:h-[180px]">
            <svg className="absolute bottom-0 left-0 w-full h-full wave-animation-slow opacity-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0 C300,100 600,0 900,100 C1200,200 1500,0 1800,100 L1800,120 L0,120 Z" fill="#ffffff"></path>
            </svg>
            <svg className="absolute bottom-0 left-0 w-full h-full wave-animation opacity-40" style={{ animationDirection: 'reverse' }} viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,20 C400,120 800,0 1200,80 C1600,160 2000,20 2400,100 L2400,120 L0,120 Z" fill="#ffffff"></path>
            </svg>
            <svg className="absolute bottom-0 left-0 w-full h-full wave-animation-fast" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,50 C350,150 750,0 1100,100 C1450,200 1850,50 2200,150 L2200,120 L0,120 Z" fill="#ffffff"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <Reveal className="text-center mb-20">
            <h2 className="text-sky-600 font-black uppercase tracking-[0.2em] text-sm mb-4">Dịch vụ của chúng tôi</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-800 mb-6">Giải Pháp Toàn Diện Cho Xe Của Bạn</h3>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {SERVICES.map((service, index) => (
              <Reveal key={service.id} effect="up" delay={index * 100}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;