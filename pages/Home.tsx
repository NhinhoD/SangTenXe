
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Clock, DollarSign, MapPin, Phone, Send, Map as MapIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { SERVICES, COMPANY_PHONE, COMPANY_ADDRESS } from '../constants';
import ServiceCard from '../components/ServiceCard';
import Reveal from '../components/Reveal';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Sang Tên Xe Ô Tô & Máy",
      highlight: "Nhanh Gọn - Đúng Luật",
      desc: "Chuyên giải quyết các thủ tục sang tên đổi chủ, giữ biển số định danh theo Thông tư 24 mới nhất. Hỗ trợ tận nhà tại TP.HCM.",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1600",
      cta: "Tư Vấn Ngay",
      link: "/dich-vu/sang-ten"
    },
    {
      title: "Rút Hồ Sơ Gốc Toàn Quốc",
      highlight: "Chuyên Nghiệp - Uy Tín",
      desc: "Nhận rút hồ sơ gốc xe ô tô, xe máy từ các tỉnh về TP.HCM và ngược lại. Xử lý nhanh các trường hợp khó, mất giấy tờ.",
      image: "https://images.unsplash.com/photo-1549194388-f61be84a6e9e?auto=format&fit=crop&q=80&w=1600",
      cta: "Xem Quy Trình",
      link: "/dich-vu/rut-ho-so"
    },
    {
      title: "Làm Lại Giấy Tờ & Biển Số",
      highlight: "Thủ Tục Đơn Giản",
      desc: "Dịch vụ cấp lại cà vẹt bị mất, đổi biển số định danh, ép biển số chống nước. Giao kết quả tận nơi, không cần chờ đợi.",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1600",
      cta: "Liên Hệ Làm Lại",
      link: "/dich-vu/bien-so"
    }
  ];

  useEffect(() => {
    document.title = "SangTenXe24h - Dịch Vụ Sang Tên Xe Ô Tô, Xe Máy Uy Tín 24/7 tại TP.HCM";
    
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));

  // URL nhúng bản đồ tìm kiếm với dấu ghim đỏ
  const mapEmbedUrl = "https://maps.google.com/maps?q=288H%20N%C6%A1%20Trang%20Long,%20B%C3%ACnh%20Th%E1%BA%A1nh,%20H%E1%BB%93%20Ch%C3%AD%20Minh&t=&z=17&ie=UTF8&iwloc=&output=embed";

  return (
    <div className="bg-white font-sans overflow-x-hidden">
      
      {/* Hero Section Slide Show */}
      <section className="relative h-[600px] md:h-[750px] flex items-center justify-center overflow-hidden bg-slate-900">
        {heroSlides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url("${slide.image}")` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent"></div>
            </div>

            <div className="relative h-full container mx-auto px-4 flex flex-col justify-center text-left text-white z-10">
              <div className={index === currentSlide ? 'animate-fade-up' : ''}>
                <span className="inline-block py-1 px-3 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-sm font-semibold mb-6 backdrop-blur-sm uppercase tracking-wider">
                  DỊCH VỤ GIẤY TỜ XE CHUYÊN NGHIỆP 24/7
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
                  {slide.title} <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400">{slide.highlight}</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl font-light leading-relaxed">
                  {slide.desc}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to={slide.link}
                    className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-sky-500/30 transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                     {slide.cta}
                  </Link>
                  <a 
                    href={`tel:${COMPANY_PHONE.replace(/\s/g, '')}`}
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 font-bold py-4 px-8 rounded-full transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    Hotline: {COMPANY_PHONE}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 md:left-8 z-30 p-2 md:p-3 rounded-full bg-black/20 hover:bg-sky-500 text-white transition-all backdrop-blur-sm"
          aria-label="Slide trước"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 md:right-8 z-30 p-2 md:p-3 rounded-full bg-black/20 hover:bg-sky-500 text-white transition-all backdrop-blur-sm"
          aria-label="Slide tiếp theo"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots Indicators */}
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-30 flex gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 transition-all duration-300 rounded-full ${
                index === currentSlide ? 'w-10 bg-sky-500' : 'w-2 bg-white/50 hover:bg-white'
              }`}
              aria-label={`Chuyển đến slide ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Wave Animation Background */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
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
              <div className="text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 border-b-4 border-sky-500 h-full flex flex-col items-center">
                <div className="w-20 h-20 bg-sky-50 text-sky-500 rounded-full flex items-center justify-center mb-6">
                  <Shield size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Pháp Lý 100%</h3>
                <p className="text-slate-500 text-sm leading-relaxed text-center">Mọi thủ tục đều được thực hiện theo đúng quy định pháp luật hiện hành. Bàn giao kết quả tận nơi.</p>
              </div>
            </Reveal>
            <Reveal effect="up" delay={250}>
              <div className="text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 border-b-4 border-blue-500 h-full flex flex-col items-center">
                <div className="w-20 h-20 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mb-6">
                  <Clock size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Xử Lý Thần Tốc</h3>
                <p className="text-slate-500 text-sm leading-relaxed text-center">Rút ngắn thời gian làm thủ tục tại cơ quan chức năng, giúp bạn có giấy tờ xe sớm nhất có thể.</p>
              </div>
            </Reveal>
            <Reveal effect="up" delay={400}>
              <div className="text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 border-b-4 border-sky-500 h-full flex flex-col items-center">
                <div className="w-20 h-20 bg-sky-50 text-sky-500 rounded-full flex items-center justify-center mb-6">
                  <DollarSign size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Giá Cạnh Tranh</h3>
                <p className="text-slate-500 text-sm leading-relaxed text-center">Báo giá minh bạch, trọn gói, cam kết không phát sinh bất kỳ khoản phí nào trong quá trình thực hiện.</p>
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

      {/* Quick Contact & Map Section on Home */}
      <section className="py-24 bg-slate-50 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
            {/* Left: Contact Info & Mini Form */}
            <div className="lg:w-1/2 p-8 md:p-12 lg:p-16">
              <Reveal>
                <h2 className="text-sky-500 font-bold uppercase tracking-widest text-sm mb-3">Liên hệ văn phòng</h2>
                <h3 className="text-3xl md:text-4xl font-black text-slate-800 mb-8 leading-tight">Tìm Chúng Tôi Tại Bình Thạnh</h3>
                
                <div className="space-y-6 mb-10">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-sky-600 shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">Địa chỉ chính</h4>
                      <p className="text-slate-500 text-sm">{COMPANY_ADDRESS}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-sky-600 shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">Hotline tư vấn</h4>
                      <p className="text-sky-600 text-xl font-black">{COMPANY_PHONE}</p>
                    </div>
                  </div>
                </div>

                <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                  <input type="tel" placeholder="Nhập SĐT để nhận báo giá nhanh" className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 focus:outline-none focus:border-sky-500 transition shadow-sm" />
                  <button className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 shadow-lg transition-all group">
                    Gửi yêu cầu <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </Reveal>
            </div>
            
            {/* Right: Map Integration with Marker Pin */}
            <div className="lg:w-1/2 h-[400px] lg:h-auto min-h-[400px] bg-slate-100 relative group">
              <div className="absolute top-6 right-6 z-10">
                <a 
                  href="https://maps.app.goo.gl/TirK5G6C877rXwE46" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/90 backdrop-blur-sm text-slate-800 font-bold py-2 px-4 rounded-xl shadow-xl flex items-center gap-2 hover:bg-white transition-all text-sm"
                >
                  <MapIcon size={16} /> Xem bản đồ lớn
                </a>
              </div>
              <iframe 
                src={mapEmbedUrl}
                className="absolute inset-0 w-full h-full border-0 transition-all duration-700"
                allowFullScreen={true}
                loading="lazy" 
                title="Bản đồ văn phòng SangTenXe24h"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
