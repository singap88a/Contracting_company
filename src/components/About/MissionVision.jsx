import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Users } from 'lucide-react';

const MissionVision = () => {
  return (
    <section className="pt-10 pb-24 bg-white relative overflow-hidden" dir="rtl">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-500/5 rounded-full blur-[100px] pointer-events-none"></div>
          
          {/* Mission Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden bg-secondary-900 text-white rounded-[3rem] p-12 border border-secondary-800 hover:border-primary-500/30 transition-all duration-500 shadow-2xl shadow-secondary-900/20"
          >
            {/* Background Icon Decoration - Corners */}
            <Target className="absolute -bottom-8 -right-8 w-40 h-40 opacity-[0.05] text-white group-hover:opacity-[0.1] group-hover:scale-110 transition-all duration-700 -rotate-12" />
            <Target className="absolute -top-8 -left-8 w-32 h-32 opacity-[0.03] text-white group-hover:opacity-[0.05] group-hover:scale-110 transition-all duration-700 rotate-12" />

            <div className="relative z-10">
                <div className="flex items-center gap-6 mb-8">
                   <div className="w-16 h-16 rounded-2xl bg-white/10 shadow-lg text-primary-500 flex items-center justify-center group-hover:bg-primary-500 group-hover:text-white transition-all duration-500">
                      <Target size={32} />
                   </div>
                   <h3 className="text-3xl font-black text-white">مهامنا</h3>
                </div>
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-bold">
                  تتلخص مهامنا في تقديم خدمات هندسية وتقنية متكاملة في قطاعي المقاولات والأنظمة الأمنية، مع التركيز المطلق على جودة التنفيذ والالتزام بالجداول الزمنية، لنكون المساهم الأول في نهضة البنية التحتية وتعزيز منظومة الأمان في المملكة.
                </p>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative overflow-hidden bg-secondary-900 text-white rounded-[3rem] p-12 border border-secondary-800 hover:border-primary-500/30 transition-all duration-500 shadow-2xl shadow-secondary-900/20"
          >
            {/* Background Icon Decoration - Corners */}
            <Zap className="absolute -bottom-8 -right-8 w-40 h-40 opacity-[0.05] text-white group-hover:opacity-[0.1] group-hover:scale-110 transition-all duration-700 -rotate-12" />
            <Zap className="absolute -top-8 -left-8 w-32 h-32 opacity-[0.03] text-white group-hover:opacity-[0.05] group-hover:scale-110 transition-all duration-700 rotate-12" />

            <div className="relative z-10">
                <div className="flex items-center gap-6 mb-8">
                   <div className="w-16 h-16 rounded-2xl bg-white/10 shadow-lg text-primary-500 flex items-center justify-center group-hover:bg-primary-500 group-hover:text-white transition-all duration-500">
                      <Zap size={32} />
                   </div>
                   <h3 className="text-3xl font-black text-white">رؤيتنا</h3>
                </div>
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-bold">
                  نسعى لأن نصبح الخيار الأول والاسم الأكثر ثقة في المملكة العربية السعودية بمجال الإنشاءات وكافة الأنظمة الأمنية، من خلال استشراف المستقبل واعتماد أحدث الممارسات الهندسية والتقنية التي تحقق التنمية المستدامة والأمان الشامل.
                </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
