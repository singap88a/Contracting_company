import React from 'react';
import { motion } from 'framer-motion';
import { Users, Building2, Trophy, Clock, CheckCircle } from 'lucide-react';

const Statistics = () => {
  const stats = [
    { 
      id: 1, 
      number: '+15', 
      label: 'عاماً من التميز',
      subtext: 'خبرة متراكمة',
      icon: Clock,
    },
    { 
      id: 2, 
      number: '+500', 
      label: 'مشروع ناجح',
      subtext: 'جودة عالية',
      icon: Building2,
    },
    { 
      id: 3, 
      number: '+50', 
      label: 'جائزة محلية',
      subtext: 'تميز وإبداع',
      icon: Trophy,
    },
    { 
      id: 4, 
      number: '+120', 
      label: 'خبير ومهندس',
      subtext: 'كادر متخصص',
      icon: Users,
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div key={stat.id} className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-secondary-500 hover:shadow-lg transition-all duration-300 text-center">
               <div className="w-12 h-12 mx-auto bg-gray-50 rounded-full flex items-center justify-center text-secondary-900 group-hover:bg-secondary-900 group-hover:text-white transition-colors duration-300 mb-4">
                  <stat.icon size={24} strokeWidth={1.5} />
               </div>
               
               <h3 className="text-3xl font-black text-secondary-900 mb-1">{stat.number}</h3>
               <p className="text-gray-600 font-bold mb-1">{stat.label}</p>
               <p className="text-xs text-gray-400">{stat.subtext}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
