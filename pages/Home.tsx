
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Clock, DollarSign } from 'lucide-react';
import { SERVICES, COMPANY_PHONE } from '../constants';
import ServiceCard from '../components/ServiceCard';
import Reveal from '../components/Reveal';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "SangTenXe24h - Dịch Vụ Sang Tên Xe Ô Tô, Xe Máy Uy Tín 24/7 tại TP.HCM";
  }, []);

  return (
    <div className="bg-white font-sans overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative h-[550px] md:h-[700px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1600")' }}
          role="img"
          aria-label="Dịch vụ sang tên xe chuyên nghiệp"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white mt-12 mb-20">
          <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <span className="inline-block py-1 px-3 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-sm font-semibold mb-6 backdrop-blur-sm uppercase tracking-wider">
              DỊCH VỤ GIẤY TỜ XE CHUYÊN NGHIỆP 24/7
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Sang Tên Xe Ô Tô & Máy <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400">Nhanh Gọn - Uy Tín</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed animate-fade-up" style={{ animationDelay: '0.3s' }}>
            Chuyên giải quyết các thủ tục sang tên đổi chủ, rút hồ sơ gốc, làm lại giấy tờ xe bị mất tại TP.HCM và toàn quốc. Cam kết pháp lý, tiết kiệm chi phí.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Link 
              to="/lien-he"
              className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-sky-500/30 transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-2"
            >
               Tư Vấn Thủ Tục Ngay
            </Link>
            <a 
              href={`tel:${COMPANY_PHONE.replace(/\s/g, '')}`}
              className="bg-white hover:bg-gray-50 text-slate-800 font-bold py-4 px-8 rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-200"
            >
              Hotline: {COMPANY_PHONE}
            </a>
          </div>
        </div>
        
        {/* Soft Animated Wave Transition */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <div className="relative w-[200%] h-[120px] md:h-[180px]">
            <svg className="absolute bottom-0 left-0 w-full h-full wave-animation-slow opacity-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0 C300,100 600,0 900,100 C1200,200 1500,0 1800,100 L1800,120 L0,120 Z" fill="#ffffff"></path>
            </svg>
            <svg className="absolute bottom-0 left-0 w-full h-full wave-animation-fast" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,50 C350,150 750,0 1100,100 C1450,200 1850,50 2200,150 L2200,120 L0,120 Z" fill="#ffffff"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Intro Text Section */}
      <section className="py-24 bg-white text-center relative z-10">
        <div className="container mx-auto px-4">
          <Reveal>
            <h2 className="text-sm font-bold text-sky-500 uppercase tracking-widest mb-3">Về SangTenXe24h</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Chuyên Gia Xử Lý Hồ Sơ Xe Khó Tại TP.HCM</h3>
            <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed font-light">
              Với kinh nghiệm xử lý hàng ngàn bộ hồ sơ mỗi năm, <strong className="font-bold text-slate-800">SangTenXe24h</strong> tự tin giải quyết mọi vướng mắc pháp lý về xe cơ giới. Từ sang tên chính chủ, giữ biển định danh đến rút hồ sơ gốc toàn quốc.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative -mt-36 z-30">
            <Reveal effect="up" delay={100}>
              <div className="text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 border-b-4 border-sky-500 h-full">
                <div className="w-20 h-16 mx-auto bg-sky-50 text-sky-500 rounded-full flex items-center justify-center mb-6">
                  <Shield size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Pháp Lý 100%</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Mọi thủ tục đều được thực hiện theo đúng quy định pháp luật hiện hành. Bàn giao kết quả tận nơi.</p>
              </div>
            </Reveal>
            <Reveal effect="up" delay={250}>
              <div className="text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 border-b-4 border-blue-500 h-full">
                <div className="w-20 h-16 mx-auto bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mb-6">
                  <Clock size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Xử Lý Thần Tốc</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Rút ngắn thời gian làm thủ tục tại cơ quan chức năng, giúp bạn có giấy tờ xe sớm nhất có thể.</p>
              </div>
            </Reveal>
            <Reveal effect="up" delay={400}>
              <div className="text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 border-b-4 border-sky-500 h-full">
                <div className="w-20 h-16 mx-auto bg-sky-50 text-sky-500 rounded-full flex items-center justify-center mb-6">
                  <DollarSign size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Giá Cả Cạnh Tranh</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Báo giá minh bạch, trọn gói, cam kết không phát sinh bất kỳ khoản phí nào trong quá trình thực hiện.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <Reveal className="text-center mb-16">
            <h2 className="text-sm font-bold text-sky-500 uppercase tracking-widest mb-3">Dịch vụ chúng tôi cung cấp</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Giải Pháp Giấy Tờ Xe Toàn Diện</h3>
            <p className="text-slate-500 max-w-2xl mx-auto">Lựa chọn dịch vụ phù hợp với nhu cầu của bạn để được chuyên viên hỗ trợ ngay lập tức.</p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
