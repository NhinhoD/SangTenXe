
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES, COMPANY_PHONE } from '../constants';
import { CheckCircle, ArrowRight, Phone, ShieldCheck } from 'lucide-react';

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
    <div className="bg-white">
      {/* Header Banner */}
      <div className="bg-slate-50 py-16 border-b border-gray-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">
            {service ? service.title : "Dịch vụ của chúng tôi"}
          </h1>
          <div className="flex items-center gap-2 text-sm text-slate-500">
             <Link to="/" className="hover:text-sky-600">Trang chủ</Link>
             <span className="text-gray-300">/</span>
             <Link to="/dich-vu" className="hover:text-sky-600">Dịch vụ</Link>
             {service && (
               <>
                 <span className="text-gray-300">/</span>
                 <span className="text-sky-600 font-medium">{service.title}</span>
               </>
             )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Content */}
          <div className="lg:w-2/3">
            {service ? (
              <div className="prose max-w-none text-slate-700">
                <div className="rounded-2xl overflow-hidden shadow-lg mb-10">
                    <img 
                    src={service.image} 
                    alt={`Quy trình ${service.title} tại SangTenXe24h`} 
                    className="w-full h-[400px] object-cover"
                    />
                </div>
                
                <h2 className="text-2xl font-bold text-slate-800 mb-6 border-l-4 border-sky-500 pl-4">Tổng quan dịch vụ</h2>
                <p className="mb-8 text-lg leading-relaxed text-slate-600">{service.description}</p>
                <p className="mb-6">
                    Chúng tôi hiểu rằng các thủ tục hành chính về xe cộ thường phức tạp và tốn thời gian. Với dịch vụ {service.title.toLowerCase()}, 
                    chúng tôi cam kết thay mặt bạn xử lý toàn bộ quy trình từ A-Z với chi phí hợp lý nhất.
                </p>
                
                <h3 className="text-xl font-bold text-slate-800 mb-5 mt-8">Lợi ích khi sử dụng dịch vụ</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                    <div className="flex items-start gap-3 bg-sky-50 p-4 rounded-lg">
                        <CheckCircle className="text-sky-500 shrink-0 mt-1" size={20} />
                        <span className="text-sm font-medium">Tiết kiệm 90% thời gian đi lại</span>
                    </div>
                    <div className="flex items-start gap-3 bg-sky-50 p-4 rounded-lg">
                        <CheckCircle className="text-sky-500 shrink-0 mt-1" size={20} />
                        <span className="text-sm font-medium">Chi phí trọn gói, không phát sinh</span>
                    </div>
                    <div className="flex items-start gap-3 bg-sky-50 p-4 rounded-lg">
                        <CheckCircle className="text-sky-500 shrink-0 mt-1" size={20} />
                        <span className="text-sm font-medium">Tư vấn pháp lý miễn phí trọn đời</span>
                    </div>
                    <div className="flex items-start gap-3 bg-sky-50 p-4 rounded-lg">
                        <CheckCircle className="text-sky-500 shrink-0 mt-1" size={20} />
                        <span className="text-sm font-medium">Giao nhận hồ sơ tận nơi (Nội thành)</span>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-sky-500 to-blue-600 p-8 rounded-2xl text-white shadow-xl mt-10">
                  <h3 className="text-2xl font-bold mb-3">Bạn cần tư vấn chi tiết?</h3>
                  <p className="mb-6 text-sky-100">Đừng để hồ sơ giấy tờ làm khó bạn. Hãy để chuyên gia của chúng tôi hỗ trợ ngay lập tức.</p>
                  <a href={`tel:${COMPANY_PHONE.replace(/\s/g, '')}`} className="inline-flex items-center gap-3 bg-white text-sky-600 font-bold py-3 px-8 rounded-full hover:bg-sky-50 transition shadow-md">
                    <Phone size={20} className="animate-tada" /> Gọi ngay: {COMPANY_PHONE}
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
                             <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition"></div>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-slate-800 hover:text-sky-600 transition">{s.title}</h3>
                        <p className="text-slate-500 mb-4 line-clamp-3 text-sm flex-grow">{s.description}</p>
                        <span className="text-sky-600 font-bold flex items-center gap-1 mt-auto text-sm">Xem chi tiết <ArrowRight size={16}/></span>
                     </Link>
                   </div>
                 ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-24 space-y-8">
                {/* Other Services */}
                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-800 mb-5 pb-3 border-b border-gray-100 flex items-center gap-2">
                    <ShieldCheck size={20} className="text-sky-500" />
                    Dịch vụ khác
                </h3>
                <ul className="space-y-4">
                    {SERVICES.filter(s => s.id !== id).map(s => (
                    <li key={s.id}>
                        <Link to={`/dich-vu/${s.id}`} className="flex items-center gap-4 group">
                        <img src={s.image} alt={`Dịch vụ ${s.title}`} className="w-14 h-14 rounded-lg object-cover shadow-sm group-hover:shadow transition" />
                        <div>
                            <span className="text-slate-700 group-hover:text-sky-600 transition font-medium text-sm line-clamp-2">{s.title}</span>
                        </div>
                        </Link>
                    </li>
                    ))}
                </ul>
                </div>

                {/* Support Box */}
                <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl p-8 text-center text-white relative overflow-hidden shadow-lg">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500 rounded-full blur-3xl opacity-20 -mr-10 -mt-10"></div>
                    <p className="text-sm text-sky-300 font-bold tracking-widest uppercase mb-2">Hỗ trợ 24/7</p>
                    <h3 className="text-2xl font-bold mb-4">Bạn cần giúp đỡ?</h3>
                    <p className="text-slate-400 text-sm mb-6">Liên hệ ngay để được chuyên viên tư vấn miễn phí về hồ sơ của bạn.</p>
                    <p className="text-3xl font-bold text-white mb-6 tracking-wider">{COMPANY_PHONE}</p>
                    <a href={`tel:${COMPANY_PHONE.replace(/\s/g, '')}`} className="block w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 rounded-lg transition shadow-lg shadow-sky-900/50">
                        GỌI NGAY
                    </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
