import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, User, Tag, Sparkles } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: "بدء تنفيذ مشروع برج الريادة الذكي في قلب العاصمة",
    excerpt: "مشروع برج الريادة يمثل نقلة نوعية في عالم الأبراج الذكية والمستدامة في المنطقة، حيث نستخدم أحدث تقنيات البناء...",
    date: "31 يناير 2026",
    author: "أحمد محمد",
    category: "مشاريع",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "حصول الشركة على جائزة الابتكار الهندسي للعام الثاني",
    excerpt: "تفخر صرح البناء بحصولها على هذه الجائزة المرموقة التي تتوج جهود فريقنا في الابتكار والتطوير الهيكلي...",
    date: "25 يناير 2026",
    author: "سارة علي",
    category: "جوائز",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "توسيع شراكتنا مع كبرى المكاتب الاستشارية العالمية",
    excerpt: "خطوة استراتيجية جديدة تهدف إلى تبادل الخبرات ونقل أحدث تقنيات التصميم المعماري لمشاريعنا القادمة...",
    date: "15 يناير 2026",
    author: "خالد عمر",
    category: "شراكات",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "مستقبل المدن المستدامة: رؤية 2030 في قطاع المقاولات",
    excerpt: "كيف تساهم التقنيات الخضراء في تقليل البصمة الكربونية للمباني الحديثة وضمان جودة حياة أفضل...",
    date: "10 يناير 2026",
    author: "منى عبدالله",
    category: "استدامة",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
  },
];

const Articles = () => {
  return (
    <div className="bg-white pb-24 text-right min-h-screen">
      {/* Compact Header - Professional White Style */}
      <section className="relative py-16 bg-white overflow-hidden border-b border-gray-50">
        {/* Subtle Background */}
        <div className="absolute inset-0 z-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#1E3A8A 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          >
            <div className="text-right">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-px bg-primary-500"></div>
                <span className="text-primary-500 font-black uppercase tracking-[0.3em] text-[10px]">المدونة والأخبار</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-secondary-950 leading-tight">
               <span className="text-secondary">آخر</span>  <span className="text-primary-500">المستجدات</span> <span className="text-secondary">والبصمات</span>
              </h1>
            </div>
            
            <div className="group bg-primary-50 px-6 py-3 rounded-full border border-primary-100 hidden md:flex items-center gap-3 transition-all hover:bg-primary-500 hover:shadow-lg hover:shadow-primary-500/20 cursor-default">
              <Sparkles size={14} className="text-primary-500 group-hover:text-white transition-colors animate-pulse" />
              <p className="text-[10px] text-primary-900 group-hover:text-white font-black uppercase tracking-[0.2em] transition-colors">
                بناء المستقبل برؤية هندسية واعدة
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid - Minimalist Compact Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-primary-500/20 hover:shadow-2xl hover:shadow-secondary-900/5 transition-all duration-500"
              >
                {/* Compact Image with Tag */}
                <Link to={`/articles/${article.id}`} className="block relative aspect-[16/9] overflow-hidden">
                   <img 
                      src={article.image} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      alt={article.title} 
                   />
                   <div className="absolute top-4 right-4 py-1.5 px-4 bg-primary-500 text-white rounded-xl font-black text-[9px] uppercase tracking-wider">
                     {article.category}
                   </div>
                </Link>
                
                <div className="p-8 flex flex-col flex-1">
                  {/* Clean Meta */}
                  <div className="flex items-center gap-4 text-gray-400 text-[10px] font-bold mb-4 justify-end">
                    <span>{article.date}</span>
                    <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
                    <span>بواسطة {article.author}</span>
                  </div>

                  <Link to={`/articles/${article.id}`}>
                    <h3 className="text-xl font-black text-secondary-950 group-hover:text-primary-500 transition-colors leading-snug line-clamp-2">
                      {article.title}
                    </h3>
                  </Link>
                  
                  {/* Minimal Excerpt or Button */}
                  <div className="mt-6 pt-6 border-t border-gray-50 flex items-center justify-between">
                    <Link 
                      to={`/articles/${article.id}`} 
                      className="text-primary-500 font-black text-xs flex items-center gap-2 group/link"
                    >
                      <ArrowLeft size={16} className="transition-transform group-hover/link:-translate-x-1" />
                      <span>تفاصيل المقال</span>
                    </Link>
                    
                    <div className="flex gap-1">
                       <div className="w-1.5 h-1.5 rounded-full bg-gray-100 group-hover:bg-primary-500/30 transition-colors"></div>
                       <div className="w-1.5 h-1.5 rounded-full bg-gray-100 group-hover:bg-primary-500/60 transition-colors"></div>
                       <div className="w-1.5 h-1.5 rounded-full bg-gray-100 group-hover:bg-primary-500 transition-colors"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Articles;
