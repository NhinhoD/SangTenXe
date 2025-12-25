
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES, COMPANY_PHONE } from '../constants';
import { CheckCircle, ArrowRight, Phone, ShieldCheck } from 'lucide-react';

const ServicePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find(s => s.id === id);

  useEffect(() => {
    if (service) {
      document.title = `${service.title} - SangTenXe24h Uy Tín`;
    } else {
      document.title = "Dịch Vụ Giấy Tờ Xe Ô Tô & Xe Máy TP.HCM - SangTenXe24h";
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
      <div className="bg-slate-50 py-16 border-b border-gray-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">
            {service ? service.title : "Các Dịch Vụ Xe Tại SangTenXe24h"}
          </h1>
          <nav className="flex items-center gap-2 text-sm text-slate-500" aria-label="Breadcrumb">
             <Link to="/" className="hover:text-sky-600">Trang chủ</Link>
             <span className="text-gray-300">/</span>
             <Link to="/dich-vu" className="hover:text-sky-600">Dịch vụ</Link>
             {service && (
               <>
                 <span className="text-gray-300">/</span>
                 <span className="text-sky-600 font-medium">{service.title}</span>
               </>
             )}
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Content */}
          <article className="lg:w-2/3">
            {service ? (
              <div className="prose max-w-none text-slate-700">
                <header className="rounded-2xl overflow-hidden shadow-lg mb-10">
                    <img 
                    src={service.image} 
                    alt={`Quy trình thực hiện ${service.title} chuyên nghiệp`} 
                    className="w-full h-[400px] object-cover"
                    />
                </header>
                
                <h2 className="text-2xl font-bold text-slate-800 mb-6 border-l-4 border-sky-500 pl-4">Thông tin chi tiết dịch vụ</h2>
                <p className="mb-8 text-lg leading-relaxed text-slate-600">{service.description}</p>
                <p className="mb-6">
                    Tại <strong>SangTenXe24h</strong>, chúng tôi cam kết mang lại trải nghiệm dịch vụ 5 sao. Thủ tục {service.title.toLowerCase()} được thực hiện bởi đội ngũ chuyên viên am hiểu luật giao thông đường bộ, giúp bạn tránh mọi rủi ro pháp lý sau khi mua bán xe.
                </p>
                
                <h3 className="text-xl font-bold text-slate-800 mb-5 mt-8">Tại sao nên chọn dịch vụ của chúng tôi?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                    <div className="flex items-start gap-3 bg-sky-50 p-4 rounded-lg">
                        <CheckCircle className="text-sky-500 shrink-0 mt-1" size={20} />
                        <span className="text-sm font-medium">Hỗ trợ tận nhà, không cần di chuyển xa.</span>
                    </div>
                    <div className="flex items-start gap-3 bg-sky-50 p-4 rounded-lg">
                        <CheckCircle className="text-sky-500 shrink-0 mt-1" size={20} />
                        <span className="text-sm font-medium">Báo giá trọn gói, không phí ẩn.</span>
                    </div>
                    <div className="flex items-start gap-3 bg-sky-50 p-4 rounded-lg">
                        <CheckCircle className="text-sky-500 shrink-0 mt-1" size={20} />
                        <span className="text-sm font-medium">Xử lý hồ sơ khó, xe mất giấy tờ.</span>
                    </div>
                    <div className="flex items-start gap-3 bg-sky-50 p-4 rounded-lg">
                        <CheckCircle className="text-sky-500 shrink-0 mt-1" size={20} />
                        <span className="text-sm font-medium">Tư vấn biển số định danh miễn phí.</span>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-sky-500 to-blue-600 p-8 rounded-2xl text-white shadow-xl mt-10">
                  <h3 className="text-2xl font-bold mb-3">Bạn cần báo giá thủ tục xe?</h3>
                  <p className="mb-6 text-sky-100">Hãy gọi ngay để chúng tôi kiểm tra tình trạng hồ sơ và báo phí chính xác nhất cho bạn.</p>
                  <a href={`tel:${COMPANY_PHONE.replace(/\s/g, '')}`} className="inline-flex items-center gap-3 bg-white text-sky-600 font-bold py-3 px-8 rounded-full hover:bg-sky-50 transition shadow-md">
                    <Phone size={20} className="animate-tada" /> Liên hệ ngay: {COMPANY_PHONE}
                  </a>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {SERVICES.map(s => (
                   <div key={s.id} className="border border-gray-100 bg-white rounded-xl p-6 hover:shadow-xl transition duration-300 flex flex-col h-full hover:border-sky-200">
                     <Link to={`/dich-vu/${s.id}`} className="flex flex-col h-full">
                        <div className="h-48 overflow-hidden rounded-lg mb-5 relative group">
                             <img src={s.image} alt={s.title} className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-slate-800 hover:text-sky-600 transition">{s.title}</h3>
                        <p className="text-slate-500 mb-4 line-clamp-3 text-sm flex-grow">{s.description}</p>
                        <span className="text-sky-600 font-bold flex items-center gap-1 mt-auto text-sm">Tìm hiểu thêm <ArrowRight size={16}/></span>
                     </Link>
                   </div>
                 ))}
              </div>
            )}
          </article>

          {/* Sidebar */}
          <aside className="lg:w-1/3">
            <div className="sticky top-24 space-y-8">
                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-800 mb-5 pb-3 border-b border-gray-100 flex items-center gap-2">
                    <ShieldCheck size={20} className="text-sky-500" />
                    Dịch vụ liên quan
                </h3>
                <ul className="space-y-4">
                    {SERVICES.filter(s => s.id !== id).map(s => (
                    <li key={s.id}>
                        <Link to={`/dich-vu/${s.id}`} className="flex items-center gap-4 group">
                        <img src={s.image} alt={s.title} className="w-14 h-14 rounded-lg object-cover shadow-sm group-hover:shadow transition" />
                        <div>
                            <span className="text-slate-700 group-hover:text-sky-600 transition font-medium text-sm line-clamp-2">{s.title}</span>
                        </div>
                        </Link>
                    </li>
                    ))}
                </ul>
                </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
