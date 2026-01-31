import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, MapPin } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HomeProjects = () => {
    const swiperRef = useRef(null);

    const projects = [
        {
            id: 1,
            title: 'برج النخبة السكني',
            category: 'سكني',
            location: 'الرياض، حي الصحافة',
            image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop'
        },
        {
            id: 2,
            title: 'مجمع الأعمال الذكي',
            category: 'تجاري',
            location: 'جدة، طريق الملك',
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop'
        },
        {
            id: 3,
            title: 'فيلا مودرن فاخرة',
            category: 'سكني',
            location: 'الدمام، الشاطئ',
            image: 'https://images.unsplash.com/photo-1600596542815-2a4d9f6fac90?q=80&w=1000&auto=format&fit=crop'
        },
         {
            id: 4,
            title: 'منتجع الشروق',
            category: 'سياحي',
            location: 'الخبر',
            image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1000&auto=format&fit=crop'
        },
    ];

    const ProjectCard = ({ project }) => (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative h-[500px] rounded-[2rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 bg-gray-900 border border-gray-100/10"
        >
            <div className="absolute inset-0">
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300"></div>
            </div>

            <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                <div className="mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
                        {project.category}
                    </span>
                    <h3 className="text-3xl font-black text-white mb-2 font-cairo leading-tight">
                        {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-300 text-sm font-medium">
                        <MapPin size={16} className="text-primary-500" />
                        {project.location}
                    </div>
                </div>
                
                <div className="w-full h-px bg-white/10 mb-6 group-hover:bg-white/30 transition-colors"></div>

                <Link 
                    to={`/projects/${project.id}`} 
                    className="inline-flex items-center gap-3 text-white font-bold group-hover:gap-6 transition-all duration-300"
                >
                    عرض التفاصيل
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary-500 group-hover:text-secondary-900 transition-all">
                       <ArrowUpRight size={18} />
                    </div>
                </Link>
            </div>
        </motion.div>
    );

  return (
    <section className="py-24 bg-white border-b border-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* Header & Nav */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-3xl">
                <span className="text-primary-600 font-bold tracking-widest uppercase mb-4 block">معرض الأعمال</span>
                <h2 className="text-4xl lg:text-5xl font-black text-secondary-900 leading-[1.2]">
                  أحدث <span className="text-transparent bg-clip-text bg-gradient-to-l from-secondary-900 to-primary-600">مشاريعنا</span> المتميزة
                </h2>
            </div>

            {/* Navigation Buttons (Mobile Only) */}
            <div className="flex items-center gap-4 lg:hidden">
                 <button 
                   onClick={() => swiperRef.current?.slidePrev()}
                   className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-secondary-900 hover:bg-secondary-900 hover:text-white transition-all duration-300"
                 >
                    <ArrowRight size={24} />
                 </button>
                 <button 
                   onClick={() => swiperRef.current?.slideNext()}
                   className="w-14 h-14 rounded-full bg-secondary-900 text-white flex items-center justify-center hover:bg-primary-500 hover:text-secondary-900 transition-all duration-300 shadow-lg"
                 >
                    <ArrowLeft size={24} />
                 </button>
            </div>
        </div>

        {/* Projects Slider */}
        <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }}
            loop={true}
            className="pb-16 !overflow-visible"
        >
            {projects.map((project, index) => (
                <SwiperSlide key={project.id}>
                    <ProjectCard project={project} />
                </SwiperSlide>
            ))}
        </Swiper>

        <div className="flex justify-center mt-8">
             <Link 
               to="/projects"
               className="inline-flex items-center gap-3 px-8 py-4 bg-secondary-900 text-white font-bold rounded-xl hover:bg-primary-500 hover:text-white transition-all duration-300 shadow-xl shadow-secondary-900/10 group"
             >
                <span className="text-base">استكشف كافة المشاريع</span>
                <AnimatePresence>
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                </AnimatePresence>
             </Link>
        </div>

      </div>
      
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-black to-transparent"></div>
    </section>
  );
};

export default HomeProjects;
