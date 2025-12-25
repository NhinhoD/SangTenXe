import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES, COMPANY_PHONE } from '../constants.tsx';
import { CheckCircle, ArrowRight, Phone, ShieldCheck, Briefcase, Zap } from 'lucide-react';
import Reveal from '../components/Reveal.tsx';

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
                  </div>
                </Reveal>

                <Reveal effect="up">
                  <h3 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3">
                    <Zap className="text-sky-500" /> Cam kết chất lượng
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        "Thời gian hoàn thành đúng như thỏa thuận",
                        "Hồ sơ pháp lý chuẩn 100%",
                        "Báo giá 1 lần, không phát sinh",
                        "Nhân viên tận tâm, 24/7",
                        "Hỗ trợ tận nhà",
                        "Bàn giao tận tay"
                      ].map((text, idx) => (
                        <div key={idx} className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-sky-200 transition-all">
                            <CheckCircle className="text-green-500 shrink-0 mt-0.5" size={24} />
                            <span className="text-slate-700 font-bold">{text}</span>
                        </div>
                      ))}
                  </div>
                </Reveal>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                 {SERVICES.map((s, idx) => (
                   <Reveal key={s.id} effect="up" delay={idx * 50}>
                    <div className="group bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                      <div className="h-56 overflow-hidden relative">
                           <img src={s.image} alt={s.title} className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" />
                      </div>
                      <div className="p-8">
                        <h3 className="text-xl font-black mb-4 text-slate-800">{s.title}</h3>
                        <Link to={`/dich-vu/${s.id}`} className="inline-flex items-center gap-2 text-sky-600 font-black text-sm">
                          XEM CHI TIẾT <ArrowRight size={18} />
                        </Link>
                      </div>
                    </div>
                   </Reveal>
                 ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;