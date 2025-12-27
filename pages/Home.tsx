
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Clock, DollarSign, MapPin, Phone, Send, Map as MapIcon, ChevronLeft, ChevronRight, CheckCircle2, Star, Users, Trophy } from 'lucide-react';
import { SERVICES, COMPANY_PHONE, COMPANY_ADDRESS } from '../constants';
import ServiceCard from '../components/ServiceCard';
import Reveal from '../components/Reveal';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Dịch Vụ Sang Tên Xe Ô Tô & Máy",
      highlight: "Sang Tên Xe TPHCM Uy Tín",
      desc: "Chuyên giải quyết các thủ tục sang tên xe, sang tên chính chủ và giữ biển số định danh theo luật mới 2025. Hỗ trợ tận nhà, bảo mật tuyệt đối.",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1600",
      cta: "Báo Giá Sang Tên",
      link: "/dich-vu/sang-ten"
    },
    {
      title: "Rút Hồ Sơ Gốc Xe Toàn Quốc",
      highlight: "Rút Hồ Sơ Gốc Nhanh Gọn",
      desc: "Nhận rút hồ sơ gốc xe ô tô, xe máy từ tất cả các tỉnh thành về TP.HCM. Thủ tục rút hồ sơ gốc xe chuyên nghiệp, giá rẻ nhất thị trường.",
      image: "https://images.unsplash.com/photo-1549194388-f61be84a6e9e?auto=format&fit=crop&q=80&w=1600",
      cta: "Tư Vấn Rút Gốc",
      link: "/dich-vu/rut-ho-so"
    },
    {
      title: "Làm Lại Giấy Tờ Xe Bị Mất",
      highlight: "Cấp Lại Cà Vẹt Hỏa Tốc",
      desc: "Dịch vụ làm lại cà vẹt xe bị mất, đổi biển số định danh, ép biển số inox. Phục vụ tận nơi tại Bình Thạnh và toàn bộ quận huyện Sài Gòn.",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1600",
      cta: "Làm Lại Giấy Tờ",
      link: "/dich-vu/cap-doi"
    }
  ];

  useEffect(() => {
    document.title = "Dịch Vụ Sang Tên Xe Ô Tô, Xe Máy & Rút Hồ Sơ Gốc | SangTenOtoSG";
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
      
      {/* Hero Section - Elite Slide Show */}
      <section className="relative h-[650px] md:h-[850px] flex items-center justify-center overflow-hidden bg-slate-950">
        <h1 className="sr-only">Dịch vụ sang tên xe ô tô, rút hồ sơ gốc, làm lại đăng ký xe và cà số máy tại TPHCM</h1>
        
        {heroSlides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-linear transform scale-110"
              style={{ backgroundImage: `url("${slide.image}")`, transform: index === currentSlide ? 'scale(1)' : 'scale(1.1)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent"></div>
              <div className="absolute inset-0 bg-slate-950/20"></div>
            </div>

            <div className="relative h-full container mx-auto px-6 flex flex-col justify-center text-left text-white z-10">
              <div className={`${index === currentSlide ? 'animate-fade-up' : 'opacity-0'}`}>
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-12 h-[2px] bg-sky-500"></span>
                  <span className="text-sky-400 text-xs font-black uppercase tracking-[0.4em]">Uy tín - Chuyên nghiệp - Tận tâm</span>
                </div>
                <h2 className="text-4xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1] tracking-tighter drop-shadow-2xl">
                  {slide.title} <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400">{slide.highlight}</span>
                </h2>
                <p className="text-lg md:text-2xl text-slate-300 mb-12 max-w-2xl font-light leading-relaxed opacity-90">
                  {slide.desc}
                </p>
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                  <Link 
                    to={slide.link}
                    className="group relative bg-sky-500 hover:bg-sky-400 text-white font-black py-5 px-12 rounded-2xl shadow-[0_20px_50px_rgba(14,165,233,0.3)] transform hover:-translate-y-1.5 transition-all duration-300 flex items-center justify-center gap-3 uppercase text-sm tracking-widest overflow-hidden"
                  >
                    <span className="relative z-10">{slide.cta}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </Link>
                  <a 
                    href={`tel:${COMPANY_PHONE.replace(/\s/g, '')}`}
                    className="flex items-center gap-4 py-4 px-2 hover:opacity-80 transition-opacity"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                      <Phone size={24} className="animate-pulse" />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1">Liên hệ Hotline</span>
                      <span className="text-xl font-black text-white">{COMPANY_PHONE}</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Dynamic Controls */}
        <div className="absolute bottom-16 left-6 md:left-24 z-30 flex items-end gap-12">
          <div className="flex gap-4">
            {heroSlides.map((_, index) => (
              <button 
                key={index} 
                onClick={() => setCurrentSlide(index)} 
                className={`h-1 transition-all duration-500 rounded-full ${index === currentSlide ? 'w-16 bg-sky-500' : 'w-6 bg-white/20 hover:bg-white/40'}`} 
              />
            ))}
          </div>
          <div className="hidden md:flex gap-4">
            <button onClick={prevSlide} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all"><ChevronLeft size={20}/></button>
            <button onClick={nextSlide} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all"><ChevronRight size={20}/></button>
          </div>
        </div>
        
        {/* Elegant Wave Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-20"></div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white relative z-30 -mt-12">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.08)] p-10 md:p-16 border border-slate-50 flex flex-wrap justify-between items-center gap-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-sky-50 rounded-3xl flex items-center justify-center text-sky-600">
                <Shield size={32} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-black text-slate-800 text-lg">Sang tên an toàn</h4>
                <p className="text-slate-500 text-sm">Hồ sơ thực hiện đúng quy định 100%</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-blue-50 rounded-3xl flex items-center justify-center text-blue-600">
                <Clock size={32} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-black text-slate-800 text-lg">Rút hồ sơ hỏa tốc</h4>
                <p className="text-slate-500 text-sm">Xử lý nhanh, giao kết quả tận nơi</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-indigo-50 rounded-3xl flex items-center justify-center text-indigo-600">
                <DollarSign size={32} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-black text-slate-800 text-lg">Giá dịch vụ rẻ</h4>
                <p className="text-slate-500 text-sm">Cam kết không phát sinh bất kỳ phí gì</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Masterpiece Layout */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 relative">
              <Reveal effect="left">
                <div className="relative">
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-sky-500/10 rounded-full blur-3xl animate-pulse"></div>
                  <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl"></div>
                  <div className="grid grid-cols-2 gap-6 relative z-10">
                    <img src="https://images.unsplash.com/photo-1549194388-f61be84a6e9e?auto=format&fit=crop&q=80&w=800" className="rounded-[2.5rem] shadow-2xl w-full h-80 object-cover mt-12 hover:scale-[1.02] transition-transform duration-500" alt="Dịch vụ rút hồ sơ gốc xe ô tô toàn quốc" />
                    <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800" className="rounded-[2.5rem] shadow-2xl w-full h-80 object-cover hover:scale-[1.02] transition-transform duration-500" alt="Dịch vụ sang tên xe ô tô TPHCM hỏa tốc" />
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white rounded-full shadow-2xl flex flex-col items-center justify-center z-20 border-8 border-sky-50">
                    <span className="text-3xl font-black text-sky-600">10+</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Năm kinh nghiệm</span>
                  </div>
                </div>
              </Reveal>
            </div>
            
            <div className="lg:w-1/2">
              <Reveal effect="right">
                <div className="mb-10">
                  <span className="inline-block py-1 px-4 bg-sky-50 text-sky-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4">Chuyên gia thủ tục xe</span>
                  <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-[1.2]">Dịch Vụ Sang Tên Xe & <span className="text-sky-600">Rút Hồ Sơ Gốc</span> Uy Tín</h3>
                  <p className="text-slate-600 text-xl leading-relaxed mb-8 font-light">
                    Hơn một thập kỷ qua, <strong>SangTenOtoSG</strong> đã giúp hàng ngàn khách hàng hoàn tất thủ tục <strong>sang tên xe</strong>, <strong>rút hồ sơ gốc</strong> và <strong>làm lại đăng ký xe</strong> một cách nhanh chóng nhất tại TPHCM.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                    {[
                      "Thủ tục sang tên xe chính chủ 2025",
                      "Rút hồ sơ gốc xe ô tô hỏa tốc",
                      "Cấp lại cà vẹt xe bị mất nhanh",
                      "Cà số khung số máy tận nhà"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-50 text-green-500 flex items-center justify-center shrink-0">
                          <CheckCircle2 size={16} />
                        </div>
                        <span className="text-slate-700 font-bold text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-8 items-center border-t border-slate-100 pt-10">
                    <div className="flex flex-col">
                      <span className="text-3xl font-black text-slate-900">5.000+</span>
                      <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">Khách hàng tin dùng</span>
                    </div>
                    <div className="w-px h-10 bg-slate-200"></div>
                    <div className="flex flex-col">
                      <span className="text-3xl font-black text-slate-900">24/7</span>
                      <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">Hỗ trợ hotline</span>
                    </div>
                    <Link to="/gioi-thieu" className="ml-auto text-sky-600 font-black flex items-center gap-2 group hover:gap-4 transition-all">
                      Tìm hiểu thêm <ChevronRight size={20} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - High Fidelity */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <Reveal className="max-w-2xl">
              <span className="text-sky-500 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Các dịch vụ tiêu biểu</span>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">Dịch Vụ Giấy Tờ Xe <br/> <span className="text-sky-600">Sang Tên & Rút Hồ Sơ</span></h3>
            </Reveal>
            <Link to="/dich-vu" className="hidden md:flex bg-white border border-slate-200 text-slate-800 font-bold py-4 px-10 rounded-2xl hover:bg-slate-900 hover:text-white transition-all items-center gap-3">
              Xem tất cả dịch vụ <ChevronRight size={18} />
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

      {/* Map & Office Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-[4rem] shadow-[0_100px_150px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col lg:flex-row border border-slate-50 min-h-[650px]">
            <div className="lg:w-[45%] p-12 md:p-20 flex flex-col justify-center">
              <Reveal>
                <span className="text-sky-500 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Địa chỉ sang tên xe uy tín</span>
                <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-10 leading-tight">Văn Phòng Tại <br/> Trung Tâm <span className="text-sky-600">Bình Thạnh</span></h3>
                
                <div className="space-y-10 mb-12">
                  <div className="flex items-start gap-6 group">
                    <div className="w-16 h-16 bg-sky-50 rounded-[2rem] flex items-center justify-center text-sky-600 shrink-0 border border-sky-100 group-hover:bg-sky-600 group-hover:text-white transition-all duration-500">
                      <MapPin size={28} />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 text-lg mb-2">Trụ sở chính TPHCM</h4>
                      <p className="text-slate-500 leading-relaxed max-w-xs">{COMPANY_ADDRESS}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6 group">
                    <div className="w-16 h-16 bg-sky-50 rounded-[2rem] flex items-center justify-center text-sky-600 shrink-0 border border-sky-100 group-hover:bg-sky-600 group-hover:text-white transition-all duration-500">
                      <Phone size={28} />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 text-lg mb-2">Tư vấn sang tên xe 24/7</h4>
                      <p className="text-sky-600 text-3xl font-black">{COMPANY_PHONE}</p>
                      <p className="text-slate-400 text-xs mt-1 uppercase font-bold tracking-widest">Zalo tư vấn hỏa tốc</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Link to="/lien-he" className="bg-sky-600 hover:bg-sky-700 text-white font-black py-5 px-10 rounded-2xl shadow-xl shadow-sky-600/20 transition-all uppercase tracking-widest text-xs">Yêu cầu tư vấn</Link>
                  <a href="https://maps.app.goo.gl/TirK5G6C877rXwE46" target="_blank" rel="noopener noreferrer" className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-black py-5 px-10 rounded-2xl transition-all uppercase tracking-widest text-xs flex items-center gap-2">
                    <MapIcon size={18} /> Chỉ đường
                  </a>
                </div>
              </Reveal>
            </div>
            <div className="lg:w-[55%] h-[500px] lg:h-auto min-h-[500px] relative">
              <iframe 
                src={mapEmbedUrl}
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy" 
                title="Bản đồ địa chỉ rút hồ sơ gốc xe tphcm"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Footer CTA */}
      <section className="py-20 bg-sky-600 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <Reveal>
            <h3 className="text-3xl md:text-5xl font-black text-white mb-10 leading-tight">Hỗ Trợ Làm Giấy Tờ Xe Hỏa Tốc Tại Nhà</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href={`tel:${COMPANY_PHONE.replace(/\s/g, '')}`} className="bg-white text-sky-600 font-black py-5 px-12 rounded-2xl shadow-2xl hover:scale-105 transition-all uppercase tracking-widest text-sm">GỌI HOTLINE: {COMPANY_PHONE}</a>
              <Link to="/tu-van" className="bg-sky-950 text-white font-black py-5 px-12 rounded-2xl shadow-2xl hover:bg-slate-900 transition-all uppercase tracking-widest text-sm">TƯ VẤN THỦ TỤC MIỄN PHÍ</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
