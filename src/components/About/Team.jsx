import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Mail, ArrowUpRight, Loader2, MessageCircle } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { API_URL } from '../../config';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Team = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await fetch(`${API_URL}/team`);
        if (response.ok) {
          const data = await response.json();
          setTeam(data);
        }
      } catch (err) {
        console.error('Error fetching team:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-32">
        <Loader2 className="w-12 h-12 text-primary-500 animate-spin" />
      </div>
    );
  }

  // Fallback if no team members are found
  if (team.length === 0) return null;

  return (
    <section className="py-32 relative overflow-hidden bg-white" dir="rtl">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="text-center md:text-right w-full md:w-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
               <span className="text-primary-600 font-[1000] tracking-[0.4em] uppercase mb-4 block">نخبة الخبراء</span>
               <h2 className="text-5xl md:text-7xl font-[1000] text-secondary-900 mb-4 leading-none">فريق <span className="text-primary-500">الإبداع</span></h2>
               <div className="w-32 h-2 bg-gradient-to-r from-transparent via-primary-500 to-transparent mx-auto md:mx-0 rounded-full"></div>
            </motion.div>
          </div>

          <a href="/team" className="hidden md:inline-flex items-center gap-3 px-8 py-4 bg-secondary-900 text-white rounded-full hover:bg-primary-500 transition-all duration-300 group">
            <span className="font-bold">عرض كل الفريق</span>
            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
          </a>
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
            el: '.team-pagination',
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          loop={team.length > 4}
          className="pb-20"
        >
          {team.map((member, index) => (
            <SwiperSlide key={member._id || index}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group h-full cursor-pointer"
                onClick={() => navigate(`/team/${member._id}`)}
              >
                <div className="relative rounded-[3.5rem] overflow-hidden bg-white border border-gray-100 mb-8 aspect-[4/5] shadow-2xl">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-4xl text-gray-400">👤</span>
                    </div>
                  )}
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-secondary-900/95 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 text-white translate-y-full group-hover:translate-y-0 text-right">
                    <p className="text-base leading-relaxed text-gray-300 mb-6 font-medium line-clamp-4">
                      {member.bio}
                    </p>
                    <div className="flex gap-3 justify-end">
                      {member.socials?.facebook && (
                        <a 
                          href={member.socials.facebook} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          onClick={(e) => e.stopPropagation()}
                          className="w-10 h-10 rounded-2xl bg-white/10 hover:bg-primary-500 flex items-center justify-center transition-all transform hover:rotate-12 border border-transparent hover:border-primary-500"
                        >
                          <Facebook size={18} />
                        </a>
                      )}
                      {member.socials?.whatsapp && (
                        <a 
                          href={`https://wa.me/${member.socials.whatsapp}`} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          onClick={(e) => e.stopPropagation()}
                          className="w-10 h-10 rounded-2xl bg-white/10 hover:bg-primary-500 flex items-center justify-center transition-all transform hover:rotate-12 border border-transparent hover:border-primary-500"
                        >
                          <MessageCircle size={18} />
                        </a>
                      )}
                      {member.socials?.email && (
                        <a 
                          href={`mailto:${member.socials.email}`} 
                          onClick={(e) => e.stopPropagation()}
                          className="w-10 h-10 rounded-2xl bg-white/10 hover:bg-primary-500 flex items-center justify-center transition-all transform hover:rotate-12 border border-transparent hover:border-primary-500"
                        >
                          <Mail size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Floating role tag */}
                  <div className="absolute top-6 right-6 py-2 px-4 bg-primary-500 text-secondary-950 rounded-full shadow-lg font-black text-[9px] uppercase tracking-widest">
                     {member.role}
                  </div>
                </div>
                
                <div className="flex items-center justify-between px-6">
                  <div className="text-right">
                    <h3 className="text-xl font-black text-secondary-900 mb-1 group-hover:text-primary-500 transition-colors uppercase tracking-widest leading-none truncate max-w-[150px]">{member.name}</h3>
                    <p className="text-gray-400 text-xs font-black uppercase tracking-widest group-hover:text-primary-500 transition-colors">
                      {member.role}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-white border-2 border-primary-500 flex items-center justify-center group-hover:bg-primary-500 transition-all duration-500 flex-shrink-0">
                     <ArrowUpRight size={20} className="text-primary-500 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="team-pagination flex justify-center items-center mt-4"></div>
      </div>
      <style>{`
        .team-pagination .swiper-pagination-bullet {
          background: #CBD5E1 !important;
          opacity: 1 !important;
          width: 10px !important;
          height: 10px !important;
          margin: 0 5px !important;
          transition: all 0.3s ease;
          border-radius: 50% !important;
          cursor: pointer !important;
        }
        .team-pagination .swiper-pagination-bullet-active {
          background: #F97316 !important;
          width: 30px !important;
          border-radius: 10px !important;
        }
      `}</style>
    </section>
  );
};

export default Team;
