
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
      highlight: "Cấp Lại Cà vẹt Hỏa Tốc",
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
      
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[700px] flex items-center justify-center overflow-hidden bg-slate-950">
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
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent"></div>
            </div>

            <div className="relative h-full container mx-auto px-6 flex flex-col justify-center text-left text-white z-10">
              <div className={`${index === currentSlide ? 'animate-fade-up' : 'opacity-0'}`}>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-[2px] bg-sky-500"></span>
                  <span className="text-sky-400 text-[10px] font-bold uppercase tracking-[0.3em]">Hơn 10 năm kinh nghiệm pháp lý xe</span>
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
                      <span className="block text-[8px] uppercase font-bold text-slate-400 tracking-widest">Hotline 24/7</span>
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
                <p className="text-slate-500 text-[11px] font-bold">Theo đúng Thông tư 24</p>
              </div>
            </div>
            <div className="flex items-center gap-5 group">
              <div className="w-16 h-16 bg-blue-50 rounded-[1.5rem] flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-inner">
                <Clock size={28} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-black text-slate-800 text-sm uppercase tracking-wider">Xử Lý Hỏa Tốc</h4>
                <p className="text-slate-500 text-[11px] font-bold">Chỉ từ 3-5 ngày làm việc</p>
              </div>
            </div>
            <div className="flex items-center gap-5 group">
              <div className="w-16 h-16 bg-indigo-50 rounded-[1.5rem] flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-inner">
                <DollarSign size={28} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-black text-slate-800 text-sm uppercase tracking-wider">Giá Tốt Nhất</h4>
                <p className="text-slate-500 text-[11px] font-bold">Không phát sinh chi phí</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <Reveal>
            <span className="text-sky-500 font-black uppercase tracking-widest text-[10px] mb-4 block">Quy trình chuyên nghiệp</span>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-16 leading-tight">Hoàn Tất Thủ Tục <br/> <span className="text-sky-600">Trong 3 Bước Đơn Giản</span></h3>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-1/4 left-[15%] right-[15%] h-[2px] bg-slate-100 -z-10"></div>
            
            {[
              { icon: MessageCircle, title: "Tư Vấn Miễn Phí", desc: "Liên hệ Hotline hoặc Zalo, chuyên viên sẽ tư vấn giải pháp tối ưu cho hồ sơ của bạn." },
              { icon: FileCheck, title: "Tiếp Nhận Hồ Sơ", desc: "Chúng tôi hỗ trợ nhận hồ sơ tận nơi. Bạn không cần phải đi lại hay chờ đợi tại cơ quan công an." },
              { icon: Trophy, title: "Bàn Giao Kết Quả", desc: "Sau khi hoàn thành, kết quả (Cà vẹt, Biển số) sẽ được giao tận nhà cho quý khách." }
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

      {/* About Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-100/50 rounded-full blur-[120px] -mr-64 -mt-64"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 relative">
              <Reveal effect="left">
                <div className="relative max-w-lg mx-auto">
                  <div className="grid grid-cols-2 gap-6 relative z-10">
                    <div className="space-y-6">
                       <img src="https://images.unsplash.com/photo-1549194388-f61be84a6e9e?auto=format&fit=crop&q=80&w=800" className="rounded-[2.5rem] shadow-2xl w-full h-80 object-cover" alt="Dịch vụ rút hồ sơ" />
                       <div className="bg-sky-600 p-8 rounded-[2.5rem] text-white shadow-xl">
                          <span className="text-4xl font-black block mb-2">99%</span>
                          <p className="text-xs font-bold uppercase tracking-widest opacity-80">Khách hàng hài lòng</p>
                       </div>
                    </div>
                    <div className="space-y-6 pt-12">
                       <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white shadow-xl">
                          <Users size={32} className="text-sky-400 mb-4" />
                          <p className="text-sm font-medium leading-relaxed">Phục vụ hơn 500 khách hàng mỗi tháng tại TPHCM.</p>
                       </div>
                       <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800" className="rounded-[2.5rem] shadow-2xl w-full h-80 object-cover" alt="Sang tên xe chính chủ" />
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
            
            <div className="lg:w-1/2">
              <Reveal effect="right">
                <div className="mb-10">
                  <span className="inline-block py-2 px-4 bg-sky-100 text-sky-600 rounded-xl text-[10px] font-black uppercase tracking-widest mb-6">Chuyên gia sang tên xe số 1 TPHCM</span>
                  <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-[1.1]">Dịch Vụ Pháp Lý Xe <br/> <span className="text-sky-600">Uy Tín - Chuyên Nghiệp</span></h3>
                  <p className="text-slate-600 text-lg leading-relaxed mb-8 font-light">
                    Tại <strong>SangTenXe24h</strong>, chúng tôi không chỉ làm hồ sơ, chúng tôi cung cấp sự an tâm tuyệt đối. Mọi rắc rối về giấy tờ xe, sang tên không chính chủ hay rút hồ sơ tỉnh đều được xử lý gọn gàng.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                    {[
                      "Thủ tục sang tên đúng luật 2025",
                      "Rút hồ sơ gốc hỏa tốc toàn quốc",
                      "Check gốc xe, giám định pháp lý",
                      "Cà số máy & Đăng kiểm tận nhà"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                        <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                          <CheckCircle2 size={16} />
                        </div>
                        <span className="text-slate-800 font-bold text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-8 items-center border-t border-slate-200 pt-10">
                    <div className="flex flex-col">
                      <span className="text-3xl font-black text-slate-900">10+</span>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Năm kinh nghiệm</span>
                    </div>
                    <div className="w-px h-10 bg-slate-200"></div>
                    <div className="flex flex-col">
                      <span className="text-3xl font-black text-slate-900">24/7</span>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Hỗ trợ hotline</span>
                    </div>
                    <Link to="/gioi-thieu" className="ml-auto flex items-center gap-2 group">
                       <span className="bg-sky-600 text-white w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                          <ChevronRight size={20} />
                       </span>
                       <span className="font-black text-slate-900 text-sm uppercase tracking-widest group-hover:text-sky-600 transition-colors">Về chúng tôi</span>
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <Reveal className="max-w-xl">
              <span className="text-sky-500 font-black uppercase tracking-widest text-[10px] mb-4 block">Dịch vụ hỏa tốc 24/7</span>
              <h3 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">Giải Pháp Giấy Tờ <br/> <span className="text-sky-600">Xe Chuyên Nghiệp</span></h3>
            </Reveal>
            <Link to="/dich-vu" className="hidden md:flex bg-slate-900 text-white font-black py-4 px-10 rounded-2xl hover:bg-sky-600 transition-all items-center gap-3 text-xs uppercase tracking-widest shadow-xl">
              Tất cả dịch vụ <ChevronRight size={18} />
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

      {/* Testimonials */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-sky-600/10 blur-[100px]"></div>
        <div className="container mx-auto px-6 text-center">
          <Reveal>
             <span className="text-sky-400 font-black uppercase tracking-widest text-[10px] mb-4 block italic">Cảm nhận từ khách hàng</span>
             <h3 className="text-3xl md:text-5xl font-black mb-20 leading-tight">Hàng Ngàn Khách Hàng <br/> <span className="text-sky-500">Đã Tin Tưởng Chúng Tôi</span></h3>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Anh Hoàng Nam", job: "Kinh doanh xe cũ", text: "Dịch vụ rút hồ sơ gốc ở đây cực nhanh, giá cả minh bạch. Tôi đã làm hơn 20 bộ hồ sơ và rất hài lòng." },
              { name: "Chị Minh Tuyết", job: "Nhân viên văn phòng", text: "Mình bị mất cà vẹt xe máy, liên hệ bên SangTenXe24h được hỗ trợ làm lại tận nơi, chỉ 3 ngày là có kết quả." },
              { name: "Anh Quốc Bảo", job: "Chủ xe ô tô", text: "Thủ tục sang tên đổi chủ xe ô tô chuyên nghiệp, tư vấn nhiệt tình về biển số định danh mới. Rất uy tín!" }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 200}>
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-10 rounded-[2.5rem] text-left hover:bg-white/10 transition-all duration-500">
                  <div className="flex gap-1 text-yellow-400 mb-6">
                    {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-slate-300 italic mb-8 leading-relaxed font-light">"{item.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400 font-black text-lg">
                      {item.name[0]}
                    </div>
                    <div>
                      <h5 className="font-bold text-sm">{item.name}</h5>
                      <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">{item.job}</span>
                    </div>
                  </div>
                </div>
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
                <span className="text-sky-500 font-black uppercase tracking-widest text-[10px] mb-4 block">Ghé thăm văn phòng</span>
                <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-10 leading-tight">Văn Phòng Tại <br/> <span className="text-sky-600">Sài Gòn</span></h3>
                
                <div className="space-y-10 mb-12">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-600 shrink-0 border border-sky-100 shadow-sm">
                      <MapPin size={26} />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 text-sm mb-1 uppercase tracking-wider">Trụ sở chính</h4>
                      <p className="text-slate-500 text-xs leading-relaxed max-w-[220px] font-medium">{COMPANY_ADDRESS}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-600 shrink-0 border border-sky-100 shadow-sm">
                      <Phone size={26} />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 text-sm mb-1 uppercase tracking-wider">Tư vấn hỏa tốc</h4>
                      <p className="text-sky-600 text-3xl font-black tracking-tighter">{COMPANY_PHONE}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Link to="/lien-he" className="bg-sky-600 hover:bg-slate-900 text-white font-black py-5 px-10 rounded-2xl transition-all uppercase tracking-widest text-[10px] shadow-lg shadow-sky-200">Liên hệ ngay</Link>
                  <a href="https://maps.app.goo.gl/TirK5G6C877rXwE46" target="_blank" rel="noopener noreferrer" className="bg-slate-50 hover:bg-slate-200 text-slate-800 font-black py-5 px-10 rounded-2xl transition-all uppercase tracking-widest text-[10px] flex items-center gap-2 border border-slate-100">
                    <MapIcon size={16} /> Chỉ đường
                  </a>
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
            <h3 className="text-3xl md:text-5xl font-black text-white mb-10 leading-tight">Giải Quyết Mọi Thủ Tục Xe Ngay Hôm Nay!</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href={`tel:${COMPANY_PHONE.replace(/\s/g, '')}`} className="bg-white text-sky-700 font-black py-5 px-12 rounded-2xl shadow-2xl hover:scale-105 transition-all uppercase tracking-widest text-xs flex items-center justify-center gap-3">
                <Phone size={20} fill="currentColor" /> {COMPANY_PHONE}
              </a>
              <Link to="/tu-van" className="bg-slate-900 text-white font-black py-5 px-12 rounded-2xl shadow-2xl hover:bg-slate-800 transition-all uppercase tracking-widest text-xs">Tính Thuế Trước Bạ</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
