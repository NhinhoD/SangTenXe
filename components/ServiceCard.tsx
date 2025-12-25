
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceCardProps {
  service: ServiceItem;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const Icon = service.icon;

  return (
    <div className="group bg-white rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.05)] hover:shadow-[0_50px_100px_rgba(14,165,233,0.15)] transition-all duration-700 overflow-hidden border border-slate-50 flex flex-col h-full hover:-translate-y-4">
      <div className="relative overflow-hidden h-64 mx-4 mt-4 rounded-[2rem]">
        <img 
          src={service.image} 
          alt={`Dịch vụ ${service.title} - SangTenXe24h`} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1500ms]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>
        
        {/* Category Badge */}
        <div className="absolute top-6 left-6">
          <div className="px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-[10px] font-black text-white uppercase tracking-widest">
            Service 2025
          </div>
        </div>

        {Icon && (
          <div className="absolute -bottom-2 right-8 w-16 h-16 bg-sky-500 rounded-[1.5rem] shadow-2xl flex items-center justify-center text-white transform group-hover:-translate-y-4 transition-transform duration-500 z-10 border-4 border-white">
            <Icon size={28} />
          </div>
        )}
      </div>
      
      <div className="p-10 flex flex-col flex-grow">
        <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-sky-600 transition-colors line-clamp-2 leading-tight">
          {service.title}
        </h3>
        <p className="text-slate-500 text-sm mb-8 line-clamp-3 flex-grow leading-relaxed font-medium">
          {service.description}
        </p>
        
        <div className="flex items-center justify-between pt-6 border-t border-slate-50">
          <Link 
            to={`/dich-vu/${service.id}`}
            className="inline-flex items-center text-sky-600 font-black hover:text-sky-700 mt-auto self-start gap-2 text-xs uppercase tracking-[0.2em] group/link"
          >
            Khám phá quy trình
            <ChevronRight size={16} className="transform group-hover/link:translate-x-2 transition-transform" />
          </Link>
          <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-sky-50 group-hover:text-sky-500 transition-colors">
            <ArrowRight size={14} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
