import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { ArrowLeft, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Hero = () => {
  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1920&auto=format&fit=crop',
      title: 'نبني المستقبل',
      subtitle: 'برؤية هندسية مبتكرة',
      description: 'نحول الأحلام المعمارية إلى واقع ملموس بأعلى معايير الجودة والإتقان، لنصنع غداً أفضل.',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1920&auto=format&fit=crop',
      title: 'دقة في التنفيذ',
      subtitle: 'واحترافية بلا حدود',
      description: 'التزام تام بالمواصفات والجداول الزمنية، مع اهتمام فائق بأدق التفاصيل الإنشائية.',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1531834685032-c34bf0d84c7c?q=80&w=1920&auto=format&fit=crop',
      title: 'حلول ذكية',
      subtitle: 'لمساحات عصرية',
      description: 'نبتكر تصاميم داخلية وخارجية تعكس هويتكم وتلبي احتياجاتكم الوظيفية بأسلوب عصري.',
    }
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect={'fade'}
        speed={1500}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
            clickable: true,
            renderBullet: (index, className) => {
                return '<span class="' + className + ' custom-bullet"></span>';
            }
        }}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative h-full w-full">
            {/* Background Image - Full Screen */}
            <div className="absolute inset-0">
               <motion.img 
                 initial={{ scale: 1.1 }}
                 whileInView={{ scale: 1 }}
                 transition={{ duration: 6, ease: "easeOut" }}
                 src={slide.image} 
                 alt={slide.title} 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4 max-w-7xl">
                <div className="max-w-3xl relative z-10 px-4 lg:px-0">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="border-r-4 border-primary-500 pr-6 md:pr-10"
                    >
                      <h2 className="text-2xl md:text-3xl font-bold text-primary-500 mb-2 uppercase tracking-widest">{slide.subtitle}</h2>
                      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-6">
                        {slide.title}
                      </h1>
                      <p className="text-lg md:text-2xl text-gray-300 leading-relaxed max-w-2xl mb-12 font-light">
                        {slide.description}
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-6">
                        <Link 
                          to="/contact" 
                          className="px-10 py-5 bg-primary-500 hover:bg-primary-600 text-white font-bold text-lg rounded-full transition-all transform hover:-translate-y-1 shadow-lg shadow-primary-500/30 flex items-center justify-center gap-3"
                        >
                          ابدأ مشروعك
                          <ArrowLeft size={24} />
                        </Link>
                        <Link 
                          to="/projects" 
                          className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white hover:text-secondary-900 text-white font-bold text-lg rounded-full transition-all flex items-center justify-center gap-3"
                        >
                          <Play size={20} fill="currentColor" />
                           شاهد أعمالنا
                        </Link>
                      </div>
                    </motion.div>
                </div>
              </div>
            </div>

          </SwiperSlide>
        ))}
      </Swiper>

      {/* Social / Info - Floating Bottom Right */}
      <div className="absolute bottom-12 right-12 z-20 hidden lg:flex flex-col items-end gap-2 text-white/50">
          <span className="text-lg font-bold text-white">01</span>
          <div className="w-12 h-[2px] bg-white/20"></div>
          <span className="text-sm">03</span>
      </div>

       <style>{`
        .custom-bullet {
           width: 12px;
           height: 12px;
           background: transparent;
           border: 2px solid rgba(255,255,255,0.3);
           display: inline-block;
           margin: 0 6px;
           border-radius: 50%;
           transition: all 0.3s;
           cursor: pointer;
           position: relative;
        }
        .swiper-pagination-bullet-active.custom-bullet {
           background: #eab308;
           border-color: #eab308;
           transform: scale(1.2);
        }
        .swiper-pagination {
            bottom: 50px !important;
        }
      `}</style>
    </section>
  );
};

export default Hero;
