import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, Construction, Ruler, Calculator } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-16 relative overflow-hidden bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-secondary-900 rounded-[2.5rem] p-8 md:p-12 overflow-hidden shadow-2xl shadow-secondary-900/20 group"
        >
          {/* Animated Background Gradients */}
          <div className="absolute inset-0 opacity-20">
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-primary-500 transition-colors duration-700"></div>
             <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary-600 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
          </div>

          {/* Premium 3D Architectural Background */}
          <div className="absolute inset-0 overflow-hidden">
             {/* Deep Midnight Blue Gradient */}
             <div className="absolute inset-0 bg-gradient-to-r from-secondary-950 via-secondary-900 to-secondary-950"></div>
             
             {/* Luminous Mesh Gradient */}
             <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-900/10 rounded-full blur-[100px] opacity-40 mix-blend-screen"></div>
             <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] opacity-30 mix-blend-screen"></div>

             {/* 3D Geometric Overlay (Hexagons for Structure) */}
             <svg className="absolute inset-0 w-full h-full opacity-[0.07]" viewBox="0 0 100 100" preserveAspectRatio="none">
               <defs>
                 <pattern id="hexagons" width="20" height="34.6" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                   <path d="M20 0 L10 17.3 L0 0" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white/30" />
                   <path d="M10 17.3 L0 34.6 L-10 17.3" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white/30" />
                   <path d="M10 17.3 L20 34.6 L30 17.3" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white/30" />
                 </pattern>
               </defs>
               <rect x="0" y="0" width="100%" height="100%" fill="url(#hexagons)" />
             </svg>
             
             {/* Dramatic Light Beams */}
             <div className="absolute -top-40 -right-20 w-96 h-[500px] bg-gradient-to-b from-primary-500/10 to-transparent transform rotate-45 blur-3xl"></div>
             
             {/* Abstract Construction Lines */}
             <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 800 400">
               <path d="M0 400 L800 0" stroke="url(#lineGradient)" strokeWidth="1" fill="none" />
               <path d="M100 400 L800 50" stroke="url(#lineGradient)" strokeWidth="0.5" fill="none" />
               <path d="M0 350 L700 0" stroke="url(#lineGradient)" strokeWidth="0.5" fill="none" />
               <defs>
                 <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                   <stop offset="0%" stopColor="transparent" />
                   <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.5" />
                   <stop offset="100%" stopColor="transparent" />
                 </linearGradient>
               </defs>
             </svg>
             
             {/* Floating Particles */}
             <div className="absolute inset-0" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px', opacity: 0.3 }}></div>
          </div>

          {/* Floating Icons/Elements - "Rich Details" */}
          <div className="absolute top-10 left-10 text-primary-500/10 transform -rotate-12 hidden lg:block hover:scale-110 transition-transform duration-500">
            <Construction size={120} />
          </div>
          <div className="absolute bottom-10 right-10 text-white/5 transform rotate-12 hidden lg:block hover:scale-110 transition-transform duration-500">
            <Ruler size={100} />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            
            {/* Text Content */}
            <div className="text-center lg:text-right max-w-2xl">
              <motion.span 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-block mb-3 text-primary-400 font-bold tracking-wider uppercase text-sm"
              >
                مستعد لبناء مستقبلك؟
              </motion.span>
              
              <motion.h2 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight"
              >
                ابدأ رحلة بناء
                <span className="relative inline-block mr-3 text-primary-500">
                  مشروعك
                  <svg className="absolute w-full h-3 -bottom-1 right-0 text-primary-500 opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span>
                <span className="block mt-2 text-white/90">مع خبرائنا المعتمدين</span>
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0"
              >
                نحول رؤيتك إلى واقع ملموس بأعلى معايير الجودة والاحترافية. اطلب استشارتك المجانية اليوم.
              </motion.p>
            </div>

            {/* Actions */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.4 }}
               className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto"
            >
              <Link 
                to="/contact" 
                className="group relative px-8 py-4 bg-primary-500 hover:bg-primary-400 text-white font-black rounded-2xl transition-all shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 hover:-translate-y-1 overflow-hidden"
              >
                 <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
                 <div className="relative flex items-center justify-center gap-3">
                   <span>اطلب عرض سعر</span>
                   <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
                 </div>
              </Link>
              
              <a 
                href="tel:+966500000000" 
                className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-2xl transition-all hover:border-white/20 flex items-center justify-center gap-3 hover:-translate-y-1 backdrop-blur-sm"
              >
                  <Phone size={20} className="text-primary-400" />
                  <span>تواصل هاتفياً</span>
              </a>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
