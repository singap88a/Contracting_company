import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Facebook, Mail, ArrowUpRight, Loader2, MessageCircle, ChevronLeft } from 'lucide-react';
import { API_URL } from '../../config';

const TeamPage = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

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
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-12 h-12 text-primary-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen" dir="rtl">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-gray-500 mb-8 font-medium">
          <Link to="/" className="hover:text-primary-500 transition-colors">الرئيسية</Link>
          <ChevronLeft size={16} />
          <Link to="/about" className="hover:text-primary-500 transition-colors">عن الشركة</Link>
          <ChevronLeft size={16} />
          <span className="text-secondary-900">فريق العمل</span>
        </div>

        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-primary-600 font-bold tracking-[0.3em] uppercase mb-4 block">شركاء النجاح</span>
            <h1 className="text-4xl md:text-6xl font-black text-secondary-900 mb-6">تعرف على <span className="text-primary-500">فريقنا</span></h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
              نحن نفخر بامتلاكنا نخبة من أفضل الكفاءات والخبراء في مختلف المجالات الهندسية والإنشائية، يعملون بشغف لتحويل رؤيتكم إلى واقع ملموس.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {team.map((member, index) => (
            <motion.div 
              key={member._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link to={`/team/${member._id}`}>
                <div className="relative rounded-[3rem] overflow-hidden bg-white border border-gray-100 mb-8 aspect-[4/5] shadow-xl group-hover:shadow-2xl transition-all duration-500">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                      <span className="text-6xl text-gray-300">👤</span>
                    </div>
                  )}
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-secondary-900/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 text-white translate-y-10 group-hover:translate-y-0">
                    <p className="text-sm leading-relaxed text-gray-300 mb-6 line-clamp-3">
                      {member.bio}
                    </p>
                    <div className="flex gap-3">
                      {member.socials?.facebook && (
                        <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center border border-white/10 text-white">
                          <Facebook size={16} />
                        </div>
                      )}
                      {member.socials?.whatsapp && (
                        <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center border border-white/10 text-white">
                          <MessageCircle size={16} />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Floating role tag */}
                  <div className="absolute top-6 right-6 py-1.5 px-4 bg-primary-500 text-secondary-950 rounded-full shadow-lg font-black text-[10px] uppercase tracking-widest">
                     {member.role}
                  </div>
                </div>
              </Link>
              
              <div className="flex items-center justify-between px-4">
                <div className="text-right">
                  <Link to={`/team/${member._id}`}>
                    <h3 className="text-xl font-black text-secondary-900 mb-1 group-hover:text-primary-500 transition-colors leading-none">{member.name}</h3>
                  </Link>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">
                    {member.role}
                  </p>
                </div>
                <Link 
                  to={`/team/${member._id}`}
                  className="w-10 h-10 rounded-2xl bg-white border-2 border-primary-500 flex items-center justify-center group-hover:bg-primary-500 transition-all duration-500"
                >
                   <ArrowUpRight size={20} className="text-primary-500 group-hover:text-white transition-colors" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
