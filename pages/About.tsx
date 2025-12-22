
import React, { useEffect } from 'react';
import { Shield, Users, Award } from 'lucide-react';
import Reveal from '../components/Reveal';

const About: React.FC = () => {
  useEffect(() => {
    document.title = "Giới Thiệu Về SangTenXe24h - Chuyên Gia Giấy Tờ Xe Uy Tín";
  }, []);

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Banner */}
      <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/50 z-0"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500 rounded-full blur-[100px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-up">Về SangTenXe24h</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Đơn vị uy tín hàng đầu cung cấp giải pháp pháp lý xe cơ giới chuyên nghiệp.
          </p>
        </div>
      </div>

      {/* Intro Story */}
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <Reveal effect="left">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
                  alt="Văn phòng SangTenXe24h" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-sky-600 text-white p-6 rounded-tr-2xl">
                  <span className="block text-4xl font-bold">10+</span>
                  <span className="text-sm uppercase tracking-wider">Năm Kinh Nghiệm</span>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="md:w-1/2">
            <Reveal effect="right">
              <h2 className="text-sky-500 font-bold uppercase tracking-widest text-sm mb-2">Giá trị cốt lõi</h2>
              <h3 className="text-3xl font-bold text-slate-800 mb-6">Tận tâm phục vụ khách hàng</h3>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  <strong>SangTenXe24h</strong> ra đời với mục tiêu giải quyết triệt để những khó khăn mà chủ xe gặp phải khi làm thủ tục hành chính. Chúng tôi hiểu thời gian của bạn là vàng bạc.
                </p>
                <p>
                  Chúng tôi cam kết mang lại dịch vụ sang tên xe, rút hồ sơ gốc với quy trình minh bạch, chi phí rõ ràng và thời gian hoàn thành nhanh nhất có thể. Đội ngũ của SangTenXe24h am hiểu sâu sắc về luật pháp và các quy định mới nhất.
                </p>
                <p>
                  Hãy để chúng tôi gánh vác những thủ tục rườm rà, để bạn yên tâm tận hưởng niềm vui bên chiếc xe mới của mình.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Values Grid */}
      <div className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800">Tại sao nên chọn SangTenXe24h?</h2>
            <div className="w-20 h-1 bg-sky-500 mx-auto mt-4"></div>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal effect="up" delay={100}>
              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-sky-500 h-full">
                <div className="w-16 h-16 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center mb-6">
                  <Shield size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Minh Bạch</h3>
                <p className="text-slate-500">
                  Báo giá trọn gói một lần duy nhất, không phát sinh chi phí 'bôi trơn' hay phí ẩn nào khác.
                </p>
              </div>
            </Reveal>
            <Reveal effect="up" delay={250}>
              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-600 h-full">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
                  <Users size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Tận Tâm</h3>
                <p className="text-slate-500">
                  Hỗ trợ nhận và trả hồ sơ tận nơi miễn phí, giúp khách hàng tiết kiệm tối đa công sức.
                </p>
              </div>
            </Reveal>
            <Reveal effect="up" delay={400}>
              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-sky-500 h-full">
                <div className="w-16 h-16 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center mb-6">
                  <Award size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Chuyên Môn</h3>
                <p className="text-slate-500">
                  Xử lý chuyên nghiệp các hồ sơ xe qua nhiều đời chủ, mất giấy tờ, xe biển tỉnh về thành phố...
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
