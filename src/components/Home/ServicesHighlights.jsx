import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building2, ArrowLeft, Loader2 } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { API_URL } from '../../config';

import 'swiper/css';
import 'swiper/css/pagination';
import ServiceCard from '../Services/ServiceCard';

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
            iconDisplay: s.icon ? s.icon : '🏗️'
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
          {services.map((service, index) => (
            <SwiperSlide key={service.id} className="pb-8">
              <ServiceCard service={service} index={index} />
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
