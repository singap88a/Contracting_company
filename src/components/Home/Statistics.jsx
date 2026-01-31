import React from 'react';
import { motion } from 'framer-motion';
import { Users, Building2, Trophy, Clock } from 'lucide-react';

const Statistics = () => {
  const stats = [
    { 
      id: 1, 
      number: '+15', 
      label: 'عاماً من التميز',
      icon: Clock,
    },
    { 
      id: 2, 
      number: '+500', 
      label: 'مشروع ناجح',
      icon: Building2,
    },
    { 
      id: 3, 
      number: '+50', 
      label: 'جائزة محلية',
      icon: Trophy,
    },
    { 
      id: 4, 
      number: '+120', 
      label: 'خبير ومهندس',
      icon: Users,
    },
  ];

  return (
    <section className="py-24 bg-secondary-900 relative overflow-hidden">
      {/* Dynamic Background Concept */}
      <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-fixed bg-center opacity-10 filter grayscale contrast-150"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-secondary-900/20 to-transparent"></div>
          <div className="absolute inset-0 bg-primary-900/10 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="relative"
        >
            {/* The Single Huge Glass Panel */}
            <div className="relative bg-secondary-900/40 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 md:p-12 overflow-hidden shadow-2xl shadow-secondary-900/50">
                {/* Glow Effects inside the card */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-50"></div>
                
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0">
                    {stats.map((stat, index) => (
                        <div key={stat.id} className="flex-1 w-full lg:w-auto relative group">
                            <div className="flex flex-col items-center text-center px-4">
                                
                                {/* Animated Icon Container */}
                                <div className="mb-6 relative">
                                    <div className="absolute inset-0 bg-primary-500 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                                    <stat.icon size={40} className="text-primary-500 relative z-10" />
                                </div>

                                <motion.h3 
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: index * 0.1 + 0.5, type: 'spring' }}
                                    className="text-5xl md:text-6xl font-black text-white mb-2"
                                >
                                    {stat.number}
                                </motion.h3>
                                
                                <p className="text-gray-400 font-bold text-lg uppercase tracking-wider">{stat.label}</p>
                            </div>

                            {/* Divider Line (Visible only on desktop, between items) */}
                            {index < stats.length - 1 && (
                                <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-20 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
                            )}
                            
                            {/* Mobile Divider (Horizontal) */}
                             {index < stats.length - 1 && (
                                <div className="block lg:hidden w-20 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mt-10"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;
