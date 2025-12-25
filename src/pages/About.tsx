import React, { useEffect } from 'react';
import { Shield, Users, Award } from 'lucide-react';
import Reveal from '../components/Reveal.tsx';

const About: React.FC = () => {
  useEffect(() => {
    document.title = "Giới Thiệu Về SangTenXe24h";
  }, []);

  return (
    <div className="bg-white">
      <div className="bg-slate-900 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Về SangTenXe24h</h1>
      </div>
      <div className="container mx-auto px-4 py-20">
        <Reveal effect="up">
          <p className="text-lg text-slate-600 max-w-3xl mx-auto text-center">
            Chúng tôi là đơn vị hàng đầu trong việc hỗ trợ các thủ tục pháp lý liên quan đến xe cơ giới, 
            giúp hàng ngàn khách hàng tiết kiệm thời gian và công sức.
          </p>
        </Reveal>
      </div>
    </div>
  );
};

export default About;