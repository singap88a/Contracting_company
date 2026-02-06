import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronLeft } from 'lucide-react';

const ServiceCard = ({ service, index }) => {
  return (
    <Link to="/request-service" className="block h-full">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: index * 0.03, 
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1]
        }}
        viewport={{ once: true, margin: "-30px" }}
        className="group relative h-[250px] bg-white rounded-2xl p-6 flex flex-col text-right justify-between transition-all duration-500 border border-primary-200 hover:border-primary-400 hover:shadow-2xl hover:shadow-primary-100/50 overflow-hidden"
      >
        {/* Animated Border Gradient Surround */}
        <div className="absolute inset-0 p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 rounded-2xl animate-spin-slow"></div>
        </div>

        {/* Professional Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute top-0 right-0 w-full h-full">
            {/* Very subtle diagonal lines pattern */}
            <div 
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `linear-gradient(45deg, #3b82f6 1px, transparent 1px),
                                 linear-gradient(-45deg, #3b82f6 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
              }}
            />
          </div>
        </div>

        {/* Minimal Corner Accents */}
        <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-gray-300 opacity-50 group-hover:border-primary-400 group-hover:opacity-100 transition-all duration-300"></div>
        <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-gray-300 opacity-50 group-hover:border-primary-400 group-hover:opacity-100 transition-all duration-300"></div>

        {/* Content Container */}
        <div className="relative z-10 w-full">
          {/* Header with Professional Icon */}
          <div className="flex items-center gap-4 mb-5">
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-600 transition-all duration-500 flex-shrink-0 border border-primary-100 shadow-sm group-hover:bg-primary-400 group-hover:text-white group-hover:scale-110 group-hover:rotate-3">
                <span className="text-2xl">
                  {service.iconDisplay}
                </span>
              </div>
              
              {/* Icon Glow Effect */}
              <div className="absolute -inset-2 bg-primary-400 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700 -z-10"></div>
            </div>
            
            <div className="flex-1">
              <h3 className="text-xl font-bold text-secondary font-cairo leading-tight group-hover:text-primary-700 transition-colors duration-300">
                {service.title}
              </h3>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 font-normal pr-1">
            {service.desc}
          </p>
        </div>

        {/* Professional CTA */}
        <div className="relative z-10 pt-4 border-t border-gray-100 group-hover:border-primary-100 transition-colors duration-300">
          <div className="flex items-center justify-between">
            <div className="group/btn flex items-center gap-2 text-primary-600 font-bold text-sm transition-all duration-300">
              <div className="relative overflow-hidden flex items-center gap-2">
                <span className="relative">
                  طلب الخدمة
                  <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
                </span>
                <ArrowLeft size={18} className="transition-transform duration-500 group-hover:-translate-x-1" />

              </div>
            </div>
            
            {/* Animated Indicators */}
            <div className="flex items-center gap-1.5 pr-1">
              <div className="w-1.5 h-1.5 rounded-full bg-primary-200 group-hover:bg-primary-500 group-hover:scale-125 transition-all duration-300"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-primary-200 group-hover:bg-primary-500 group-hover:scale-125 transition-all duration-300 delay-75"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-primary-200 group-hover:bg-primary-500 group-hover:scale-125 transition-all duration-300 delay-150"></div>
            </div>
          </div>
        </div>

        {/* Very Subtle Hover Effect */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-5"
          initial={false}
        />
      </motion.div>
    </Link>
  );
};

export default ServiceCard;