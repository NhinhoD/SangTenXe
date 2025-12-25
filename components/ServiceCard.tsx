
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceCardProps {
  service: ServiceItem;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const Icon = service.icon;

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100 flex flex-col h-full hover:-translate-y-1">
      <div className="relative overflow-hidden h-52">
        <img 
          src={service.image} 
          alt={`Dịch vụ ${service.title} - SangTenXe24h`} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
        {Icon && (
          <div className="absolute -bottom-6 right-6 w-12 h-12 bg-sky-500 rounded-xl shadow-lg flex items-center justify-center text-white transform group-hover:-translate-y-2 transition-transform duration-300 z-10">
            <Icon size={24} />
          </div>
        )}
      </div>
      
      <div className="p-7 flex flex-col flex-grow pt-10">
        <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-sky-600 transition-colors line-clamp-2 min-h-[3.5rem]">
          {service.title}
        </h3>
        <p className="text-slate-500 text-sm mb-5 line-clamp-3 flex-grow leading-relaxed">
          {service.description}
        </p>
        <Link 
          to={`/dich-vu/${service.id}`}
          className="inline-flex items-center text-sky-600 font-bold hover:text-sky-700 mt-auto self-start gap-2 text-sm group/link"
        >
          Xem chi tiết 
          <ArrowRight size={16} className="transform group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
