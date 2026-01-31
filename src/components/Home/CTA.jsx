import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Phone, ArrowUpRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-secondary-900">
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-600/20 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3"></div>
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          
          {/* Geometric Accents */}
          <div className="absolute top-1/4 left-10 w-24 h-24 border border-white/10 rounded-full opacity-20"></div>
          <div className="absolute bottom-1/4 right-10 w-16 h-16 border border-primary-500/30 rotate-45 opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary-400 text-sm font-bold mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
            مستعدون لبدء مشروعك القادم
        </div>

        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
          نحول رؤيتك الهندسية إلى <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600 relative">
             واقع ملموس
             <svg className="absolute w-full h-3 -bottom-2 right-0 text-primary-500/30 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none"/></svg>
          </span>
        </h2>
        
        <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
           فريق متكامل من المهندسين والخبراء جاهز لتنفيذ مشروعك بأعلى معايير الجودة والاحترافية. دعنا نبني المستقبل معاً.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/contact" 
              className="min-w-[200px] px-8 py-5 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold rounded-2xl transition-all shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:-translate-y-1 flex items-center justify-center gap-2 group"
            >
                اطلب عرض سعر
                <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
            </Link>
            
            <a 
              href="tel:+966500000000" 
              className="min-w-[200px] px-8 py-5 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 text-white font-bold rounded-2xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
            >
                <Phone size={20} />
                تواصل معنا
            </a>
        </div>
 

      </div>
    </section>
  );
};

export default CTA;
