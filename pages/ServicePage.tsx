
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES, COMPANY_PHONE } from '../constants';
import { CheckCircle, ArrowRight, Phone, ShieldCheck } from 'lucide-react';

const ServicePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find(s => s.id === id);

  useEffect(() => {
    if (service) {
      document.title = `${service.title} - SangTenXe24h TPHCM`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute("content", service.description);
    } else {
      document.title = "Dịch Vụ Sang Tên Xe Ô Tô, Xe Máy & Rút Hồ Sơ Gốc - SangTenXe24h";
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
    <div className="bg-white">
      {/* Header Banner */}
      <div className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-black text-white mb-6">
            {service ? service.title : "Dịch Vụ Giấy Tờ Xe SangTenXe24h"}
          </h1>
          <nav className="flex items-center justify-center md:justify-start gap-3 text-sm text-slate-400" aria-label="Breadcrumb">
             <Link to="/" className="hover:text-sky-400">Trang chủ</Link>
             <span className="text-slate-600">/</span>
             <Link to="/dich-vu" className="hover:text-sky-400">Dịch vụ</Link>
             {service && (
               <>
                 <span className="text-slate-600">/</span>
                 <span className="text-sky-400 font-bold uppercase tracking-widest text-[10px]">{service.id}</span>
               </>
             )}
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Main Content */}
          <article className="lg:w-2/3">
            {service ? (
              <div className="prose max-w-none text-slate-700">
                <header className="rounded-[2.5rem] overflow-hidden shadow-2xl mb-12 border-4 border-slate-50">
                    <img 
                    src={service.image} 
                    alt={`Dịch vụ ${service.title} uy tín hỏa tốc`} 
                    className="w-full h-[450px] object-cover"
                    />
                </header>
                
                <h2 className="text-3xl font-black text-slate-800 mb-8">Chi Tiết Dịch Vụ Tại SangTenXe24h</h2>
                <p className="mb-8 text-xl leading-relaxed text-slate-600 font-light italic border-l-4 border-sky-500 pl-6">
                  {service.description}
                </p>
                
                <div className="bg-slate-50 p-8 rounded-3xl mb-10">
                   <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                     <ShieldCheck className="text-sky-600" /> Cam Kết Dịch Vụ Của Chúng Tôi
                   </h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-sky-600 shrink-0 font-black">1</div>
                        <p className="text-sm font-medium">Xử lý <strong>sang tên xe</strong> nhanh gọn, đúng quy định Thông tư 24.</p>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-sky-600 shrink-0 font-black">2</div>
                        <p className="text-sm font-medium"><strong>Rút hồ sơ gốc xe</strong> toàn quốc, cam kết không nợ thuế, không tranh chấp.</p>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-sky-600 shrink-0 font-black">3</div>
                        <p className="text-sm font-medium">Báo giá <strong>dịch vụ sang tên xe</strong> trọn gói, tuyệt đối không phát sinh.</p>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-sky-600 shrink-0 font-black">4</div>
                        <p className="text-sm font-medium">Hỗ trợ làm lại cà vẹt mất và đổi biển số định danh hỏa tốc.</p>
                      </div>
                   </div>
                </div>

                <h3 className="text-2xl font-black text-slate-800 mb-6">Quy trình thực hiện chuyên nghiệp</h3>
                <p className="mb-6">
                  Đội ngũ chuyên viên của chúng tôi sẽ thay mặt bạn thực hiện mọi công việc từ soạn thảo hợp đồng mua bán xe, đóng thuế trước bạ đến nộp hồ sơ tại cơ quan đăng ký xe. Bạn chỉ cần ngồi tại nhà và nhận kết quả. 
                </p>

                <div className="bg-sky-600 p-10 rounded-[2.5rem] text-white shadow-2xl mt-12 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
                  <h3 className="text-3xl font-black mb-4">Nhận Báo Giá Ngay Sau 5 Phút</h3>
                  <p className="mb-8 text-sky-100 opacity-90">Chuyên viên tư vấn về <strong>sang tên xe tphcm</strong> và <strong>rút hồ sơ gốc</strong> đang chờ hỗ trợ bạn. Mọi tư vấn đều hoàn toàn miễn phí!</p>
                  <a href={`tel:${COMPANY_PHONE.replace(/\s/g, '')}`} className="inline-flex items-center gap-4 bg-white text-sky-600 font-black py-4 px-10 rounded-2xl hover:bg-slate-100 transition shadow-xl uppercase tracking-widest text-sm">
                    <Phone size={24} className="animate-tada" /> {COMPANY_PHONE}
                  </a>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {SERVICES.map(s => (
                   <div key={s.id} className="group border border-slate-100 bg-white rounded-3xl p-8 hover:shadow-3xl transition-all duration-500 flex flex-col h-full hover:-translate-y-2">
                     <Link to={`/dich-vu/${s.id}`} className="flex flex-col h-full">
                        <div className="h-56 overflow-hidden rounded-2xl mb-6 relative">
                             <img src={s.image} alt={s.title} className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" />
                             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                        </div>
                        <h3 className="text-2xl font-black mb-4 text-slate-800 group-hover:text-sky-600 transition leading-tight">{s.title}</h3>
                        <p className="text-slate-500 mb-6 line-clamp-3 text-sm font-medium flex-grow leading-relaxed">{s.description}</p>
                        <span className="text-sky-600 font-black flex items-center gap-2 mt-auto text-sm uppercase tracking-widest">Xem Quy Trình <ArrowRight size={18}/></span>
                     </Link>
                   </div>
                 ))}
              </div>
            )}
          </article>

          {/* Sidebar */}
          <aside className="lg:w-1/3">
            <div className="sticky top-24 space-y-10">
                <div className="bg-white border border-slate-100 rounded-[2rem] p-8 shadow-xl">
                <h3 className="text-xl font-black text-slate-800 mb-8 flex items-center gap-3">
                    <div className="w-2 h-8 bg-sky-500 rounded-full"></div>
                    Dịch vụ nổi bật
                </h3>
                <ul className="space-y-6">
                    {SERVICES.filter(s => s.id !== id).map(s => (
                    <li key={s.id}>
                        <Link to={`/dich-vu/${s.id}`} className="flex items-center gap-5 group">
                        <img src={s.image} alt={s.title} className="w-20 h-20 rounded-2xl object-cover shadow-lg group-hover:scale-110 transition duration-300" />
                        <div>
                            <span className="text-slate-800 group-hover:text-sky-600 transition font-bold text-sm leading-snug block line-clamp-2">{s.title}</span>
                            <span className="text-[10px] text-sky-500 font-black uppercase tracking-widest mt-1 block">Khám phá</span>
                        </div>
                        </Link>
                    </li>
                    ))}
                </ul>
                </div>
                
                <div className="bg-slate-900 rounded-[2rem] p-10 text-white text-center shadow-2xl">
                    <h4 className="text-xl font-black mb-4">Bạn Ở Bình Thạnh?</h4>
                    <p className="text-slate-400 text-sm mb-8">Chúng tôi có văn phòng ngay tại <strong>288H Nơ Trang Long</strong>, hỗ trợ sang tên xe cực nhanh cho cư dân địa phương!</p>
                    <Link to="/lien-he" className="block w-full py-4 bg-sky-600 hover:bg-sky-500 rounded-xl font-black text-xs uppercase tracking-widest transition">Xem Chỉ Đường</Link>
                </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
