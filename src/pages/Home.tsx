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
        
        {/* Soft Animated Wave Transition */}
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

      {/* Value Proposition Cards */}
      <section className="py-20 bg-white relative z-30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-40">
            <Reveal effect="up" delay={100}>
              <div className="bg-white p-10 rounded-3xl shadow-2xl hover:shadow-sky-200 transition-all duration-500 border border-slate-50 flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-sky-50 text-sky-600 rounded-2xl flex items-center justify-center mb-8 transform group-hover:rotate-6 transition-transform">
                  <Shield size={40} />
                </div>
                <h3 className="text-2xl font-black text-slate-800 mb-4">Pháp Lý An Toàn</h3>
                <p className="text-slate-500 leading-relaxed font-medium">Đảm bảo 100% hồ sơ đúng quy định Thông tư 24, bảo vệ quyền lợi tối đa cho khách hàng.</p>
              </div>
            </Reveal>
            <Reveal effect="up" delay={250}>
              <div className="bg-white p-10 rounded-3xl shadow-2xl hover:shadow-blue-200 transition-all duration-500 border border-slate-50 flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 transform group-hover:rotate-6 transition-transform">
                  <Clock size={40} />
                </div>
                <h3 className="text-2xl font-black text-slate-800 mb-4">Xử Lý Thần Tốc</h3>
                <p className="text-slate-500 leading-relaxed font-medium">Thủ tục nhanh gọn từ 2-5 ngày làm việc. Có hỗ trợ làm nhanh trong ngày cho khách hàng gấp.</p>
              </div>
            </Reveal>
            <Reveal effect="up" delay={400}>
              <div className="bg-white p-10 rounded-3xl shadow-2xl hover:shadow-indigo-200 transition-all duration-500 border border-slate-50 flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-8 transform group-hover:rotate-6 transition-transform">
                  <DollarSign size={40} />
                </div>
                <h3 className="text-2xl font-black text-slate-800 mb-4">Chi Phí Tối Ưu</h3>
                <p className="text-slate-500 leading-relaxed font-medium">Báo giá trọn gói minh bạch ngay từ đầu, tuyệt đối không phát sinh chi phí ngoài dự kiến.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <Reveal className="text-center mb-20">
            <h2 className="text-sky-600 font-black uppercase tracking-[0.2em] text-sm mb-4">Dịch vụ của chúng tôi</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-800 mb-6">Giải Pháp Toàn Diện Cho Xe Của Bạn</h3>
            <div className="w-24 h-2 bg-sky-500 mx-auto rounded-full"></div>
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

      {/* How it works section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
               <Reveal effect="left">
                 <h2 className="text-sky-600 font-black uppercase tracking-widest text-sm mb-4">Quy trình làm việc</h2>
                 <h3 className="text-4xl font-black text-slate-800 mb-8 leading-tight">Chỉ Với 3 Bước Đơn Giản <br/> Để Hoàn Tất Hồ Sơ</h3>
                 <div className="space-y-10">
                    <div className="flex gap-6">
                       <div className="flex-shrink-0 w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center font-black text-xl shadow-lg shadow-sky-200">1</div>
                       <div>
                          <h4 className="text-xl font-bold text-slate-800 mb-2">Tư Vấn & Tiếp Nhận</h4>
                          <p className="text-slate-500 font-medium">Chụp ảnh hồ sơ gửi qua Zalo, chuyên viên kiểm tra và báo giá chính xác sau 5 phút.</p>
                       </div>
                    </div>
                    <div className="flex gap-6">
                       <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center font-black text-xl shadow-lg shadow-blue-200">2</div>
                       <div>
                          <h4 className="text-xl font-bold text-slate-800 mb-2">Xử Lý Hồ Sơ</h4>
                          <p className="text-slate-500 font-medium">Đội ngũ nhân viên trực tiếp thực hiện mọi thủ tục tại cơ quan chức năng, bạn không cần đi lại.</p>
                       </div>
                    </div>
                    <div className="flex gap-6">
                       <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-black text-xl shadow-lg shadow-indigo-200">3</div>
                       <div>
                          <h4 className="text-xl font-bold text-slate-800 mb-2">Bàn Giao Kết Quả</h4>
                          <p className="text-slate-500 font-medium">Giao trả cà vẹt, biển số tận tay khách hàng. Thanh toán khi đã hoàn tất mọi công việc.</p>
                       </div>
                    </div>
                 </div>
               </Reveal>
            </div>
            <div className="lg:w-1/2 relative">
               <Reveal effect="right">
                 <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50">
                    <img src="https://images.unsplash.com/photo-1542362567-b054ec5f2b53?auto=format&fit=crop&q=80&w=1000" alt="Quy trình làm việc" className="w-full h-[550px] object-cover" />
                 </div>
                 <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl z-20 max-w-xs border border-slate-100 hidden md:block">
                    <div className="flex items-center gap-3 mb-4">
                       <CheckCircle2 className="text-green-500" size={32} />
                       <span className="font-black text-slate-800 text-lg">Cam Kết Uy Tín</span>
                    </div>
                    <p className="text-slate-500 text-sm font-medium">Hoàn tiền 100% nếu hồ sơ không được giải quyết đúng hẹn.</p>
                 </div>
               </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-sky-500 rounded-full opacity-20 blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-500 rounded-full opacity-20 blur-[120px]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <Reveal>
            <h2 className="text-3xl md:text-5xl text-white font-black mb-6">Bạn đang cần sang tên xe ngay hôm nay?</h2>
            <p className="text-slate-400 mb-12 text-lg md:text-xl max-w-2xl mx-auto font-medium">Đừng để những rắc rối về giấy tờ làm mất thời gian của bạn. Liên hệ ngay để được phục vụ tốt nhất.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href={`tel:${COMPANY_PHONE.replace(/\s/g, '')}`}
                className="bg-sky-600 hover:bg-sky-500 text-white font-black py-5 px-12 rounded-2xl shadow-2xl shadow-sky-600/30 transition-all hover:scale-105 text-xl"
              >
                GỌI NGAY: {COMPANY_PHONE}
              </a>
              <Link to="/lien-he" className="text-white font-bold hover:text-sky-400 underline underline-offset-8 transition-colors">Để lại yêu cầu tư vấn</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Home;