import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building2, ArrowLeft, Loader2 } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { API_URL } from '../../config';

import 'swiper/css';
import 'swiper/css/pagination';

const ServicesHighlights = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`${API_URL}/services`);
        if (response.ok) {
          const data = await response.json();
          const mappedData = data.map(s => ({
            ...s,
            id: s._id,
            title: s.name,
            desc: s.description,
            iconDisplay: s.icon ? s.icon : <Building2 size={32} strokeWidth={1.5} />,
            image: s.image || 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop'
          }));
          setServices(mappedData);
        }
      } catch (err) {
        console.error('Error fetching services:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24">
        <Loader2 className="w-12 h-12 text-primary-500 animate-spin" />
      </div>
    );
  }

  return (
    <section className="py-24 bg-gray-50 overflow-hidden" dir="rtl">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-3xl text-right">
            <span className="text-secondary-500 font-bold tracking-widest uppercase mb-4 block">خدماتنا المتميزة</span>
            <h2 className="text-3xl lg:text-5xl font-black text-secondary-900 leading-[1.1]">
              نقدم حلولاً هندسية <br />
              <span className="text-primary-500 relative">
                 متكاملة
                 <svg className="absolute w-full h-3 -bottom-1 right-0 text-primary-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none"/></svg>
              </span> تفوق التوقعات
            </h2>
          </div>
          
          <Link 
            to="/services" 
            className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden rounded-full transition-all bg-primary-500 hover:bg-primary-600 "
          >
            <span className="relative flex items-center gap-3 text-white font-bold text-lg">
              جميع الخدمات
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            </span>
          </Link>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          pagination={{
            clickable: true,
            el: '.services-pagination',
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          loop={services.length > 3}
          className="pb-4"
        >
          {services.map((service) => (
            <SwiperSlide key={service.id} className="pb-4">
              <div className="group relative h-[450px] rounded-[2rem] overflow-hidden cursor-pointer shadow-xl">
                {/* Background Image - Always Visible */}
                <div className="absolute inset-0">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Permanent Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-secondary-900/60 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-80"></div>
                </div>
                
                <div className="relative h-full p-8 flex flex-col justify-end z-10 text-right">
                   <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-primary-500 mb-6 border border-white/20 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                      <span className="text-3xl">
                        {typeof service.iconDisplay === 'string' ? service.iconDisplay : service.iconDisplay}
                      </span>
                   </div>
                   
                   <h3 className="text-3xl font-bold text-white mb-4 font-cairo line-clamp-1">
                     {service.title}
                   </h3>
                   
                   <p className="text-gray-300 text-lg leading-relaxed mb-6 opacity-100 transform translate-y-0 transition-all duration-500 line-clamp-2">
                     {service.desc}
                   </p>
                   
                   <div className="w-full h-[1px] bg-white/20 group-hover:bg-primary-500 transition-colors duration-300"></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="services-pagination flex justify-center items-center mt-4"></div>
      </div>
      <style>{`
        .services-pagination .swiper-pagination-bullet {
          background: #CBD5E1 !important;
          opacity: 1 !important;
          width: 10px !important;
          height: 10px !important;
          margin: 0 5px !important;
          transition: all 0.3s ease;
          border-radius: 50% !important;
        }
        .services-pagination .swiper-pagination-bullet-active {
          background: #F97316 !important;
          width: 30px !important;
          border-radius: 10px !important;
        }
      `}</style>
    </section>
  );
};

export default ServicesHighlights;
