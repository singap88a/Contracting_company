import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ShieldCheck, Award, X } from 'lucide-react';

const AboutIntro = () => {
  const [isOpen, setIsOpen] = useState(false);
  const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ"; // Placeholder for YouTube

  return (
    <section className="py-24 bg-white relative overflow-hidden" dir="rtl">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gray-50/50 -z-10 skew-x-[-12deg] -translate-x-1/4"></div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          
          {/* Right Column: Text Content (Swapped to Right) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center order-2 lg:order-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-1 bg-primary-500 rounded-full"></div>
              <span className="text-primary-500 font-black text-sm uppercase tracking-widest">نبذة عن المؤسسة</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-secondary-900 mb-8 leading-[1.1]">
              رؤية رائدة لمستقبل <br />
              <span className="text-primary-500 italic relative inline-block">
                أكثر أماناً
                <svg className="absolute -bottom-2 left-0 w-full h-2 text-primary-500/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="6" fill="none" />
                </svg>
              </span>
            </h2>
            
            <div className="space-y-6">
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-bold">
                    تأسست مؤسسة ريدان الخليج في عام ٢٠١٨ بمدينة تبوك، لتكون صرحاً هندسياً رائداً يجمع بين خبرة المقاولات العامة وتطور الأنظمة الأمنية. نحن متخصصون في تصميم وتنفيذ وصيانة أنظمة إطفاء وإنذار الحريق، مع الالتزام التام بكافة الاشتراطات والمعايير الفنية المعتمدة.
                </p>
                <p className="text-gray-500 text-base md:text-lg leading-relaxed font-medium">
                    نسعى دائماً لتقديم حلول مبتكرة تتجاوز تطلعات عملائنا، من خلال فريق عمل احترافي يمتلك المهارة والخبرة اللازمة للتعامل مع أعقد المشاريع الإنشائية والأمنية، مما يجعلنا الشريك المفضل للباحثين عن الجودة والاحترافية. يتميز عملنا بالدقة المتناهية والالتزام بأعلى معايير الأمن والسلامة العالمية.
                </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-8">
                <div className="flex flex-col">
                    <span className="text-4xl font-black text-secondary-900">+٦ سنوات</span>
                    <span className="text-gray-400 font-bold">من الخبرة والتميز</span>
                </div>
                <div className="w-px h-12 bg-gray-100 hidden sm:block"></div>
                <div className="flex flex-col">
                    <span className="text-4xl font-black text-secondary-900">١٠٠٪</span>
                    <span className="text-gray-400 font-bold">حلول أمنية معتمدة</span>
                </div>
            </div>
          </motion.div>

          {/* Left Column: Video Container (Swapped to Left) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group h-full order-1 lg:order-2"
          >
            <div 
                className="relative h-full min-h-[450px] rounded-[3rem] overflow-hidden shadow-2xl shadow-secondary-900/10 border-8 border-white ring-1 ring-gray-100 cursor-pointer"
                onClick={() => setIsOpen(true)}
            >
              {/* Thumbnail Image with Filter */}
              <div className="relative h-full w-full">
                <img 
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  alt="فيديو المؤسسة" 
                />
                {/* Secondary Color Filter */}
                <div className="absolute inset-0 bg-secondary-900/20 mix-blend-multiply"></div>
              </div>
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/60 via-transparent to-secondary-900/20 opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.1 }}
                  className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center text-white shadow-2xl z-20"
                >
                  <Play size={32} fill="currentColor" />
                </motion.div>
              </div>

              {/* corner micro-cards */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 right-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 border border-white/50"
              >
                <div className="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center text-white">
                    <ShieldCheck size={20} />
                </div>
                <div>
                    <h4 className="text-sm font-black text-secondary-900">أنظمة معتمدة</h4>
                    <p className="text-[10px] text-gray-500 font-bold">بأعلى معايير السلامة</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 left-8 bg-secondary-900/90 backdrop-blur-md p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 border border-white/10"
              >
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-primary-500">
                    <Award size={20} />
                </div>
                <div>
                    <h4 className="text-sm font-black text-white">خبرة ٢٠١٨</h4>
                    <p className="text-[10px] text-primary-500/80 font-bold">تميز مستمر في تبوك</p>
                </div>
              </motion.div>
            </div>

            {/* Background Decorative Shapes */}
            <div className="absolute -z-10 -top-6 -right-6 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 -bottom-6 -left-6 w-40 h-40 bg-secondary-900/10 rounded-full blur-3xl"></div>
          </motion.div>

        </div>

        {/* Video Modal */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 z-50 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
                <iframe
                  className="w-full h-full"
                  src={videoUrl}
                  title="Company Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AboutIntro;