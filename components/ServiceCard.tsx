
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
    <div className="group bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-slate-100 flex flex-col h-full hover:-translate-y-2">
      <div className="relative overflow-hidden h-48 mx-3 mt-3 rounded-2xl">
        <img 
          src={service.image} 
          alt={`Dịch vụ ${service.title}`} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
        
        {Icon && (
          <div className="absolute -bottom-1 right-6 w-12 h-12 bg-sky-500 rounded-xl shadow-lg flex items-center justify-center text-white transform group-hover:-translate-y-2 transition-transform duration-500 z-10 border-2 border-white">
            <Icon size={20} />
          </div>
        )}
      </div>
      
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <h3 className="text-lg font-black text-slate-900 mb-3 group-hover:text-sky-600 transition-colors line-clamp-2 leading-snug">
          {service.title}
        </h3>
        <p className="text-slate-500 text-[13px] mb-6 line-clamp-3 flex-grow leading-relaxed">
          {service.description}
        </p>
        
        <div className="flex items-center justify-between pt-5 border-t border-slate-50">
          <Link 
            to={`/dich-vu/${service.id}`}
            className="inline-flex items-center text-sky-600 font-black hover:text-sky-700 mt-auto self-start gap-1.5 text-[10px] uppercase tracking-widest group/link"
          >
            Quy trình
            <ChevronRight size={14} className="transform group-hover/link:translate-x-1 transition-transform" />
          </Link>
          <div className="w-7 h-7 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-sky-50 group-hover:text-sky-500 transition-colors">
            <ArrowRight size={12} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
