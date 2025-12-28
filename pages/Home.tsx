
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Clock, DollarSign, MapPin, Phone, Send, Map as MapIcon, ChevronLeft, ChevronRight, CheckCircle2, Star, Users, Trophy, MessageCircle, FileCheck, Truck } from 'lucide-react';
import { SERVICES, COMPANY_PHONE, COMPANY_ADDRESS } from '../constants';
import ServiceCard from '../components/ServiceCard';
import Reveal from '../components/Reveal';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Dịch Vụ Sang Tên Ô Tô Trọn Gói",
      highlight: "Sang Tên Xe Ô Tô Sài Gòn Uy Tín",
      desc: "Chuyên dịch vụ sang tên ô tô tphcm hỏa tốc. Giải quyết thủ tục sang tên ô tô không chính chủ, sang tên ô tô nhanh trong 3-5 ngày, hỗ trợ tận nhà 24/7.",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1600",
      cta: "Báo Giá Sang Tên Ô Tô",
      link: "/dich-vu/sang-ten"
    },
    {
      title: "Cấp Lại Biển Số Ô Tô TPHCM",
      highlight: "Đổi Biển Số Ô Tô Nhanh Gọn",
      desc: "Mất biển số ô tô làm lại hỏa tốc. Dịch vụ đổi biển số xe ô tô sài gòn sang biển định danh 2025. Thủ tục cấp lại đăng ký xe ô tô bị mất đơn giản nhất.",
      image: "https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?auto=format&fit=crop&q=80&w=1600",
      cta: "Làm Lại Biển Số",
      link: "/dich-vu/bien-so"
    },
    {
      title: "Dịch Vụ Giấy Tờ Xe Ô Tô 24h",
      highlight: "Làm Giấy Tờ Xe Ô Tô TPHCM",
      desc: "Nhận làm hồ sơ xe ô tô trọn gói, rút hồ sơ gốc toàn quốc. Sang tên ô tô không cần đi lại, giao kết quả tận nơi tại các quận huyện Sài Gòn.",
      image: "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=1600",
      cta: "Tư Vấn Hồ Sơ",
      link: "/dich-vu/giay-to"
    }
  ];

  useEffect(() => {
    document.title = "Dịch Vụ Sang Tên Ô Tô TPHCM | Sang Tên Xe Ô Tô Sài Gòn Trọn Gói";
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(slideInterval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));

  const mapEmbedUrl = "https://maps.google.com/maps?q=288H%20N%C6%A1%20Trang%20Long,%20B%C3%ACnh%20Th%E1%BA%A1nh,%20H%E1%BB%93%20Ch%C3%AD%20Minh&t=&z=17&ie=UTF8&iwloc=&output=embed";

  return (
    <div className="bg-white font-sans overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[700px] flex items-center justify-center overflow-hidden bg-slate-950">
        <h1 className="sr-only">Dịch vụ sang tên ô tô tphcm, sang tên xe ô tô sài gòn trọn gói, làm giấy tờ xe ô tô nhanh</h1>
        
        {heroSlides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-linear transform scale-105"
              style={{ backgroundImage: `url("${slide.image}")`, transform: index === currentSlide ? 'scale(1)' : 'scale(1.05)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent"></div>
            </div>

            <div className="relative h-full container mx-auto px-6 flex flex-col justify-center text-left text-white z-10">
              <div className={`${index === currentSlide ? 'animate-fade-up' : 'opacity-0'}`}>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-[2px] bg-sky-500"></span>
                  <span className="text-sky-400 text-[10px] font-bold uppercase tracking-[0.3em]">Chuyên gia sang tên ô tô 24h</span>
                </div>
                <h2 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight drop-shadow-lg max-w-3xl">
                  {slide.title} <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 italic">{slide.highlight}</span>
                </h2>
                <p className="text-base md:text-xl text-slate-300 mb-8 max-w-xl font-light leading-relaxed opacity-90">
                  {slide.desc}
                </p>
                <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                  <Link 
                    to={slide.link}
                    className="group relative bg-white text-slate-900 hover:bg-sky-500 hover:text-white font-black py-4 px-10 rounded-2xl shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 uppercase text-xs tracking-widest overflow-hidden"
                  >
                    <span className="relative z-10">{slide.cta}</span>
                  </Link>
                  <a 
                    href={`tel:${COMPANY_PHONE.replace(/\s/g, '')}`}
                    className="flex items-center gap-3 py-2 px-1 hover:opacity-80 transition-opacity"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-sky-400 shadow-lg">
                      <Phone size={22} className="animate-pulse" />
                    </div>
                    <div>
                      <span className="block text-[8px] uppercase font-bold text-slate-400 tracking-widest">Tư vấn 24/7</span>
                      <span className="text-lg font-black text-white">{COMPANY_PHONE}</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Controls */}
        <div className="absolute bottom-12 left-6 md:left-24 z-30 flex items-center gap-10">
          <div className="flex gap-3">
            {heroSlides.map((_, index) => (
              <button 
                key={index} 
                onClick={() => setCurrentSlide(index)} 
                className={`h-1.5 transition-all duration-500 rounded-full ${index === currentSlide ? 'w-12 bg-sky-500' : 'w-4 bg-white/20 hover:bg-white/40'}`} 
              />
            ))}
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-20"></div>
      </section>

      {/* Trust Badges */}
      <section className="py-10 bg-white relative z-30 -mt-16">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-[3rem] shadow-2xl p-10 md:p-14 border border-slate-50 flex flex-wrap justify-around items-center gap-10">
            <div className="flex items-center gap-5 group">
              <div className="w-16 h-16 bg-sky-50 rounded-[1.5rem] flex items-center justify-center text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-all duration-500 shadow-inner">
                <Shield size={28} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-black text-slate-800 text-sm uppercase tracking-wider">Hợp Pháp 100%</h4>
                <p className="text-slate-500 text-[11px] font-bold">Dịch vụ giấy tờ xe ô tô đúng luật</p>
              </div>
            </div>
            <div className="flex items-center gap-5 group">
              <div className="w-16 h-16 bg-blue-50 rounded-[1.5rem] flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-inner">
                <Clock size={28} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-black text-slate-800 text-sm uppercase tracking-wider">Xử Lý Nhanh</h4>
                <p className="text-slate-500 text-[11px] font-bold">Sang tên ô tô nhanh 3-5 ngày</p>
              </div>
            </div>
            <div className="flex items-center gap-5 group">
              <div className="w-16 h-16 bg-indigo-50 rounded-[1.5rem] flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-inner">
                <DollarSign size={28} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-black text-slate-800 text-sm uppercase tracking-wider">Chi Phí Tốt</h4>
                <p className="text-slate-500 text-[11px] font-bold">Chi phí sang tên ô tô rẻ nhất</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <Reveal>
            <span className="text-sky-500 font-black uppercase tracking-widest text-[10px] mb-4 block">Quy trình sang tên chuyên nghiệp</span>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-16 leading-tight">Sang Tên Xe Ô Tô TPHCM <br/> <span className="text-sky-600">Với 3 Bước Đơn Giản</span></h3>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-1/4 left-[15%] right-[15%] h-[2px] bg-slate-100 -z-10"></div>
            
            {[
              { icon: MessageCircle, title: "Tư Vấn Miễn Phí", desc: "Tư vấn sang tên ô tô cần giấy tờ gì và báo giá trọn gói hỏa tốc." },
              { icon: FileCheck, title: "Làm Hồ Sơ Xe Ô Tô", desc: "Tiếp nhận hồ sơ, làm thủ tục đăng ký xe, cấp lại biển số ô tô tận nơi." },
              { icon: Trophy, title: "Bàn Giao Kết Quả", desc: "Giao cà vẹt và biển số mới tận nhà. Sang tên ô tô không cần khách đi lại." }
            ].map((step, i) => (
              <Reveal key={i} delay={i * 200}>
                <div className="group flex flex-col items-center">
                  <div className="w-24 h-24 bg-white border-4 border-slate-50 rounded-full shadow-xl flex items-center justify-center text-sky-600 mb-8 group-hover:bg-sky-600 group-hover:text-white transition-all duration-500 relative">
                    <step.icon size={36} />
                    <span className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs font-black">{i + 1}</span>
                  </div>
                  <h4 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-wider">{step.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-[280px] mx-auto">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <Reveal className="max-w-xl">
              <span className="text-sky-500 font-black uppercase tracking-widest text-[10px] mb-4 block">Dịch vụ giấy tờ xe ô tô hỏa tốc</span>
              <h3 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">Dịch Vụ Sang Tên Ô Tô <br/> <span className="text-sky-600">Sài Gòn Trọn Gói</span></h3>
            </Reveal>
            <Link to="/dich-vu" className="hidden md:flex bg-slate-900 text-white font-black py-4 px-10 rounded-2xl hover:bg-sky-600 transition-all items-center gap-3 text-xs uppercase tracking-widest shadow-xl">
              Tất cả dịch vụ ô tô <ChevronRight size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {SERVICES.map((service, index) => (
              <Reveal key={service.id} effect="up" delay={index * 100}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col lg:flex-row border border-slate-50">
            <div className="lg:w-[40%] p-12 md:p-20 flex flex-col justify-center">
              <Reveal>
                <span className="text-sky-500 font-black uppercase tracking-widest text-[10px] mb-4 block">Địa chỉ sang tên ô tô tphcm</span>
                <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-10 leading-tight">Văn Phòng <br/> <span className="text-sky-600">Sài Gòn</span></h3>
                
                <div className="space-y-10 mb-12">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-600 shrink-0 border border-sky-100 shadow-sm">
                      <MapPin size={26} />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 text-sm mb-1 uppercase tracking-wider">Mua xe cũ sang tên ở đâu?</h4>
                      <p className="text-slate-500 text-xs leading-relaxed max-w-[220px] font-medium">{COMPANY_ADDRESS}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-600 shrink-0 border border-sky-100 shadow-sm">
                      <Phone size={26} />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 text-sm mb-1 uppercase tracking-wider">Dịch vụ sang tên ô tô nhanh</h4>
                      <p className="text-sky-600 text-3xl font-black tracking-tighter">{COMPANY_PHONE}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Link to="/lien-he" className="bg-sky-600 hover:bg-slate-900 text-white font-black py-5 px-10 rounded-2xl transition-all uppercase tracking-widest text-[10px] shadow-lg shadow-sky-200">Liên hệ ngay</Link>
                </div>
              </Reveal>
            </div>
            <div className="lg:w-[60%] h-[500px] lg:h-auto relative grayscale-[0.2] hover:grayscale-0 transition-all duration-700">
              <iframe 
                src={mapEmbedUrl}
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy" 
                title="Vị trí SangTenXe24h"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 bg-gradient-to-r from-sky-600 via-blue-700 to-indigo-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <Reveal>
            <h3 className="text-3xl md:text-5xl font-black text-white mb-10 leading-tight">Dịch Vụ Sang Tên Ô Tô Trọn Gói Tốt Nhất Sài Gòn!</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href={`tel:${COMPANY_PHONE.replace(/\s/g, '')}`} className="bg-white text-sky-700 font-black py-5 px-12 rounded-2xl shadow-2xl hover:scale-105 transition-all uppercase tracking-widest text-xs flex items-center justify-center gap-3">
                <Phone size={20} fill="currentColor" /> {COMPANY_PHONE}
              </a>
              <Link to="/tu-van" className="bg-slate-900 text-white font-black py-5 px-12 rounded-2xl shadow-2xl hover:bg-slate-800 transition-all uppercase tracking-widest text-xs">Sang tên ô tô hết bao nhiêu?</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
