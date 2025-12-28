
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
      
      {/* Hero Section - Elite Slide Show (Optimized height) */}
      <section className="relative h-[500px] md:h-[650px] flex items-center justify-center overflow-hidden bg-slate-950">
        <h1 className="sr-only">Dịch vụ sang tên xe ô tô, rút hồ sơ gốc, làm lại đăng ký xe và cà số máy tại TPHCM</h1>
        
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
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent"></div>
            </div>

            <div className="relative h-full container mx-auto px-6 flex flex-col justify-center text-left text-white z-10">
              <div className={`${index === currentSlide ? 'animate-fade-up' : 'opacity-0'}`}>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-[1px] bg-sky-500"></span>
                  <span className="text-sky-400 text-[10px] font-bold uppercase tracking-[0.3em]">Uy tín - Chuyên nghiệp - Tận tâm</span>
                </div>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight drop-shadow-lg">
                  {slide.title} <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400">{slide.highlight}</span>
                </h2>
                <p className="text-base md:text-lg text-slate-300 mb-8 max-w-xl font-light leading-relaxed opacity-90">
                  {slide.desc}
                </p>
                <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                  <Link 
                    to={slide.link}
                    className="group relative bg-sky-500 hover:bg-sky-400 text-white font-bold py-4 px-10 rounded-xl shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 uppercase text-xs tracking-widest overflow-hidden"
                  >
                    <span className="relative z-10">{slide.cta}</span>
                  </Link>
                  <a 
                    href={`tel:${COMPANY_PHONE.replace(/\s/g, '')}`}
                    className="flex items-center gap-3 py-2 px-1 hover:opacity-80 transition-opacity"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-sky-400">
                      <Phone size={18} className="animate-pulse" />
                    </div>
                    <div>
                      <span className="block text-[8px] uppercase font-bold text-slate-400 tracking-widest">Liên hệ Hotline</span>
                      <span className="text-base font-black text-white">{COMPANY_PHONE}</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Dynamic Controls (Optimized) */}
        <div className="absolute bottom-10 left-6 md:left-24 z-30 flex items-end gap-8">
          <div className="flex gap-2.5">
            {heroSlides.map((_, index) => (
              <button 
                key={index} 
                onClick={() => setCurrentSlide(index)} 
                className={`h-1 transition-all duration-500 rounded-full ${index === currentSlide ? 'w-10 bg-sky-500' : 'w-4 bg-white/20 hover:bg-white/40'}`} 
              />
            ))}
          </div>
          <div className="hidden md:flex gap-3">
            <button onClick={prevSlide} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all"><ChevronLeft size={16}/></button>
            <button onClick={nextSlide} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all"><ChevronRight size={16}/></button>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent z-20"></div>
      </section>

      {/* Trust Badges (Optimized) */}
      <section className="py-10 bg-white relative z-30 -mt-10">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-[2rem] shadow-xl p-8 md:p-12 border border-slate-50 flex flex-wrap justify-around items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-600">
                <Shield size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm">Sang tên an toàn</h4>
                <p className="text-slate-500 text-[11px]">Đúng quy định 100%</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                <Clock size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm">Rút hồ sơ hỏa tốc</h4>
                <p className="text-slate-500 text-[11px]">Xử lý nhanh, tận nơi</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600">
                <DollarSign size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm">Giá dịch vụ rẻ</h4>
                <p className="text-slate-500 text-[11px]">Không phát sinh phí</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section (Optimized spacing) */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 relative">
              <Reveal effect="left">
                <div className="relative max-w-lg mx-auto">
                  <div className="grid grid-cols-2 gap-4 relative z-10">
                    <img src="https://images.unsplash.com/photo-1549194388-f61be84a6e9e?auto=format&fit=crop&q=80&w=800" className="rounded-3xl shadow-xl w-full h-64 object-cover mt-8" alt="Rút hồ sơ gốc xe" />
                    <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800" className="rounded-3xl shadow-xl w-full h-64 object-cover" alt="Sang tên xe" />
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full shadow-xl flex flex-col items-center justify-center z-20 border-4 border-sky-50">
                    <span className="text-2xl font-black text-sky-600">10+</span>
                    <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest text-center px-2 leading-tight">Năm kinh nghiệm</span>
                  </div>
                </div>
              </Reveal>
            </div>
            
            <div className="lg:w-1/2">
              <Reveal effect="right">
                <div className="mb-8">
                  <span className="inline-block py-1 px-3 bg-sky-50 text-sky-600 rounded-lg text-[9px] font-black uppercase tracking-widest mb-3">Chuyên gia thủ tục xe</span>
                  <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">Dịch Vụ Sang Tên Xe & <span className="text-sky-600">Rút Hồ Sơ Gốc</span> Uy Tín</h3>
                  <p className="text-slate-600 text-base leading-relaxed mb-6 font-light">
                    Hơn một thập kỷ qua, <strong>SangTenOtoSG</strong> đã giúp hàng ngàn khách hàng hoàn tất thủ tục <strong>sang tên xe</strong>, <strong>rút hồ sơ gốc</strong> và <strong>làm lại đăng ký xe</strong> một cách nhanh chóng nhất tại TPHCM.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {[
                      "Sang tên chính chủ 2025",
                      "Rút hồ sơ hỏa tốc",
                      "Cấp lại cà vẹt bị mất",
                      "Cà số máy tận nhà"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-green-50 text-green-500 flex items-center justify-center shrink-0">
                          <CheckCircle2 size={14} />
                        </div>
                        <span className="text-slate-700 font-bold text-xs">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-6 items-center border-t border-slate-100 pt-8">
                    <div className="flex flex-col">
                      <span className="text-2xl font-black text-slate-900">5.000+</span>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Khách hàng</span>
                    </div>
                    <div className="w-px h-8 bg-slate-100"></div>
                    <div className="flex flex-col">
                      <span className="text-2xl font-black text-slate-900">24/7</span>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Hỗ trợ hotline</span>
                    </div>
                    <Link to="/gioi-thieu" className="ml-auto text-sky-600 font-black flex items-center gap-1.5 group text-sm hover:gap-3 transition-all">
                      Xem chi tiết <ChevronRight size={16} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid (Optimized spacing) */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <Reveal className="max-w-xl">
              <span className="text-sky-500 font-black uppercase tracking-widest text-[9px] mb-3 block">Các dịch vụ tiêu biểu</span>
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">Dịch Vụ Giấy Tờ Xe <br/> <span className="text-sky-600">Sang Tên & Rút Hồ Sơ</span></h3>
            </Reveal>
            <Link to="/dich-vu" className="hidden md:flex bg-white border border-slate-200 text-slate-800 font-bold py-3 px-8 rounded-xl hover:bg-slate-900 hover:text-white transition-all items-center gap-2 text-sm">
              Xem tất cả <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <Reveal key={service.id} effect="up" delay={index * 100}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section (Optimized height) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-slate-50 min-h-[500px]">
            <div className="lg:w-[40%] p-10 md:p-16 flex flex-col justify-center">
              <Reveal>
                <span className="text-sky-500 font-black uppercase tracking-widest text-[9px] mb-4 block">Địa chỉ sang tên xe uy tín</span>
                <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 leading-tight">Văn Phòng Tại <br/> <span className="text-sky-600">Bình Thạnh</span></h3>
                
                <div className="space-y-8 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-600 shrink-0 border border-sky-100">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">Trụ sở chính TPHCM</h4>
                      <p className="text-slate-500 text-xs leading-relaxed max-w-[200px]">{COMPANY_ADDRESS}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-600 shrink-0 border border-sky-100">
                      <Phone size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">Hotline tư vấn hỏa tốc</h4>
                      <p className="text-sky-600 text-2xl font-black">{COMPANY_PHONE}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Link to="/lien-he" className="bg-sky-600 hover:bg-sky-700 text-white font-black py-4 px-8 rounded-xl transition-all uppercase tracking-widest text-[10px]">Tư vấn ngay</Link>
                  <a href="https://maps.app.goo.gl/TirK5G6C877rXwE46" target="_blank" rel="noopener noreferrer" className="bg-slate-50 hover:bg-slate-100 text-slate-800 font-black py-4 px-8 rounded-xl transition-all uppercase tracking-widest text-[10px] flex items-center gap-2">
                    <MapIcon size={14} /> Chỉ đường
                  </a>
                </div>
              </Reveal>
            </div>
            <div className="lg:w-[60%] h-[400px] lg:h-auto relative">
              <iframe 
                src={mapEmbedUrl}
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy" 
                title="Bản đồ"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer (Optimized) */}
      <section className="py-16 bg-sky-600 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <Reveal>
            <h3 className="text-2xl md:text-4xl font-black text-white mb-8 leading-tight">Hỗ Trợ Làm Giấy Tờ Xe Hỏa Tốc Tại Nhà</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href={`tel:${COMPANY_PHONE.replace(/\s/g, '')}`} className="bg-white text-sky-600 font-black py-4 px-10 rounded-xl shadow-lg hover:scale-105 transition-all uppercase tracking-widest text-xs">GỌI HOTLINE: {COMPANY_PHONE}</a>
              <Link to="/tu-van" className="bg-sky-950 text-white font-black py-4 px-10 rounded-xl shadow-lg hover:bg-slate-900 transition-all uppercase tracking-widest text-xs">TƯ VẤN MIỄN PHÍ</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
