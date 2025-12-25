
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES, COMPANY_PHONE } from '../constants';
import { CheckCircle, ArrowRight, Phone, ShieldCheck, Briefcase, Zap, HeartHandshake } from 'lucide-react';
import Reveal from '../components/Reveal';

const ServicePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find(s => s.id === id);

  useEffect(() => {
    if (service) {
      document.title = `${service.title} - SangTenXe24h`;
    } else {
      document.title = "Dịch vụ Sang Tên Xe Ô Tô & Xe Máy - SangTenXe24h";
    }
  }, [service]);

  if (!service && id) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4 text-slate-800">Dịch vụ không tồn tại</h2>
        <Link to="/dich-vu" className="text-sky-600 hover:underline">Quay lại danh sách dịch vụ</Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Dynamic Header */}
      <div className="bg-slate-900 py-20 relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-blue-900/20 z-0"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500 rounded-full blur-[120px] opacity-10 translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Reveal effect="up">
            <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight max-w-3xl">
              {service ? service.title : "Danh Sách Dịch Vụ Pháp Lý Xe"}
            </h1>
            <div className="flex items-center gap-2 text-sm text-slate-400 font-bold uppercase tracking-widest">
               <Link to="/" className="hover:text-white transition">Trang chủ</Link>
               <span className="opacity-30">/</span>
               <Link to="/dich-vu" className="hover:text-white transition">Dịch vụ</Link>
               {service && (
                 <>
                   <span className="opacity-30">/</span>
                   <span className="text-sky-400">{service.title}</span>
                 </>
               )}
            </div>
          </Reveal>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Content Column */}
          <div className="lg:w-2/3">
            {service ? (
              <div className="space-y-12">
                <Reveal effect="up">
                  <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-slate-50 mb-10">
                      <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-[450px] object-cover"
                      />
                  </div>
                  
                  <div className="prose max-w-none">
                    <h2 className="text-3xl font-black text-slate-800 mb-6">Chi tiết dịch vụ</h2>
                    <p className="text-xl leading-relaxed text-slate-600 mb-8">{service.description}</p>
                    <p className="text-lg text-slate-500 mb-8">
                      Tại <strong>SangTenXe24h</strong>, chúng tôi hiểu rằng việc mua bán xe cũ đi kèm với rất nhiều thủ tục hành chính rắc rối. 
                      Đặc biệt là sau khi Thông tư 24 có hiệu lực, quy trình thu hồi biển số và đăng ký định danh trở nên phức tạp hơn đối với người không am hiểu. 
                      Dịch vụ của chúng tôi giúp bạn loại bỏ hoàn toàn những lo lắng này.
                    </p>
                  </div>
                </Reveal>

                <Reveal effect="up">
                  <h3 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3">
                    <Zap className="text-sky-500" /> Cam kết chất lượng
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        "Thời gian hoàn thành đúng như thỏa thuận",
                        "Hồ sơ pháp lý chuẩn 100%, có giá trị vĩnh viễn",
                        "Báo giá 1 lần, tuyệt đối không phát sinh phí",
                        "Nhân viên tận tâm, tư vấn nhiệt tình 24/7",
                        "Hỗ trợ cà số khung, số máy tại nhà",
                        "Bàn giao kết quả tận tay khách hàng"
                      ].map((text, idx) => (
                        <div key={idx} className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-sky-200 hover:bg-white hover:shadow-xl transition-all">
                            <CheckCircle className="text-green-500 shrink-0 mt-0.5" size={24} />
                            <span className="text-slate-700 font-bold">{text}</span>
                        </div>
                      ))}
                  </div>
                </Reveal>

                {/* Call to action card */}
                <Reveal effect="up">
                  <div className="bg-gradient-to-br from-sky-600 to-blue-700 p-10 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                    <div className="relative z-10">
                      <h3 className="text-3xl font-black mb-4">Nhận báo giá trọn gói ngay!</h3>
                      <p className="mb-8 text-sky-100 text-lg">Chỉ cần chụp ảnh hồ sơ gửi qua Zalo, chúng tôi sẽ kiểm tra và báo giá chính xác sau 5 phút.</p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <a href={`tel:${COMPANY_PHONE.replace(/\s/g, '')}`} className="flex items-center justify-center gap-3 bg-white text-sky-600 font-black py-4 px-10 rounded-2xl hover:bg-sky-50 transition shadow-xl">
                          <Phone size={24} className="animate-pulse" /> {COMPANY_PHONE}
                        </a>
                        <a href={`https://zalo.me/${COMPANY_PHONE.replace(/\s/g, '')}`} target="_blank" className="flex items-center justify-center gap-3 bg-blue-500 text-white font-black py-4 px-10 rounded-2xl hover:bg-blue-400 transition shadow-xl">
                           Chat Zalo Tư Vấn
                        </a>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            ) : (
              /* All services grid */
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                 {SERVICES.map((s, idx) => (
                   <Reveal key={s.id} effect="up" delay={idx * 50}>
                    <div className="group bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                      <div className="h-56 overflow-hidden relative">
                           <img src={s.image} alt={s.title} className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" />
                           <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                           <div className="absolute bottom-4 left-6 flex items-center gap-2">
                              {s.icon && <s.icon className="text-sky-400" size={24} />}
                              <span className="text-white font-black text-sm uppercase tracking-widest">Dịch vụ hot</span>
                           </div>
                      </div>
                      <div className="p-8">
                        <h3 className="text-xl font-black mb-4 text-slate-800 group-hover:text-sky-600 transition">{s.title}</h3>
                        <p className="text-slate-500 mb-6 line-clamp-3 text-base leading-relaxed">{s.description}</p>
                        <Link to={`/dich-vu/${s.id}`} className="inline-flex items-center gap-2 text-sky-600 font-black text-sm group/btn">
                          XEM CHI TIẾT <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
                        </Link>
                      </div>
                    </div>
                   </Reveal>
                 ))}
              </div>
            )}
          </div>

          {/* Sidebar Area */}
          <div className="lg:w-1/3">
            <div className="sticky top-28 space-y-10">
                {/* Stats / Why Us */}
                <div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100">
                  <h3 className="text-xl font-black text-slate-800 mb-8 border-b border-slate-200 pb-4">Vì sao chọn chúng tôi?</h3>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center shrink-0">
                          <Briefcase size={24} />
                       </div>
                       <div>
                          <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Kinh nghiệm</p>
                          <p className="text-slate-800 font-black">10+ năm chuyên môn</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                          <Zap size={24} />
                       </div>
                       <div>
                          <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Tốc độ</p>
                          <p className="text-slate-800 font-black">Làm nhanh trong ngày</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center shrink-0">
                          <HeartHandshake size={24} />
                       </div>
                       <div>
                          <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Uy tín</p>
                          <p className="text-slate-800 font-black">10.000+ Khách hàng tin dùng</p>
                       </div>
                    </div>
                  </div>
                </div>

                {/* Other Services Navigation */}
                {service && (
                   <div className="bg-white border border-slate-100 rounded-[2rem] p-8 shadow-xl">
                    <h3 className="text-xl font-black text-slate-800 mb-6 flex items-center gap-2">
                        <ShieldCheck size={24} className="text-sky-500" />
                        Dịch vụ khác
                    </h3>
                    <ul className="space-y-4">
                        {SERVICES.filter(s => s.id !== id).slice(0, 5).map(s => (
                        <li key={s.id}>
                            <Link to={`/dich-vu/${s.id}`} className="flex items-center gap-4 group">
                              <div className="w-16 h-12 rounded-lg overflow-hidden shrink-0">
                                <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-125 transition duration-500" />
                              </div>
                              <span className="text-slate-600 group-hover:text-sky-600 transition font-bold text-sm line-clamp-2 leading-tight">{s.title}</span>
                            </Link>
                        </li>
                        ))}
                    </ul>
                    <Link to="/dich-vu" className="mt-8 block text-center py-4 bg-slate-50 hover:bg-sky-50 text-sky-600 font-black text-xs rounded-xl transition uppercase tracking-widest">
                       Tất cả dịch vụ
                    </Link>
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
