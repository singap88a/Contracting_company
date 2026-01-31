import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle, Phone, Mail, ArrowLeft, Clock, MapPin, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const faqs = [
    {
      question: 'ما هي المناطق التي تغطونها؟',
      answer: 'نقدم خدماتنا في جميع أنحاء المملكة العربية السعودية، مع تركيز خاص على المناطق الرئيسية (الرياض، جدة، الدمام). لدينا فرق عمل متنقلة جاهزة للوصول إليكم أينما كنتم.'
    },
    {
      question: 'كيف يتم تحديد تكلفة المشروع؟',
      answer: 'تعتمد التكلفة على عدة عوامل منها حجم المشروع، المواصفات المطلوبة، ونوعية المواد المستخدمة. نقوم بتقديم عرض سعر مفصل وشفاف بعد دراسة المخططات وزيارة الموقع.'
    },
    {
      question: 'هل تقدمون ضمانات على التنفيذ؟',
      answer: 'نعم، نقدم ضمانات شاملة على جميع أعمال الهيكل والإنشاءات والتشطيبات وفقاً للأنظمة واللوائح المعمول بها، لضمان راحة بال عملائنا.'
    },
    {
      question: 'هل يمكنكم المساعدة في التصميم واستخراج التصاريح؟',
      answer: 'بالتأكيد، لدينا قسم هندسي متكامل يساعدكم في التصميم المعماري والإنشائي، كما نقوم بمتابعة واستخراج كافة التراخيص اللازمة لبدء العمل.'
    },
    {
        question: 'كم تستغرق عملية البناء عادة؟',
        answer: 'تختلف المدة حسب حجم وتعقيد المشروع. نقوم بوضع جدول زمني مفصل قبل البدء، ونلتزم بالموعد المحدد للتسليم بدقة متناهية.'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden text-secondary-900 border-b border-gray-100">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            
            {/* Left Column: FAQs */}
            <div className="lg:col-span-2">
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-1 bg-primary-500 rounded-full"></div>
                        <span className="text-secondary-500 font-bold tracking-widest uppercase">الأسئلة الشائعة</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-secondary-900 leading-tight mb-6">
                       هل لديك <span className="text-transparent bg-clip-text bg-gradient-to-l from-secondary-900 to-primary-600">استفسارات؟</span>
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl">
                        جمعنا لك أهم الأسئلة التي قد تدور في ذهنك حول خدماتنا وإجراءات العمل.
                    </p>
                </div>

                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div 
                      key={index} 
                      className={`rounded-2xl transition-all duration-300 overflow-hidden border ${activeIndex === index ? 'bg-white border-primary-100 shadow-lg shadow-primary-500/5' : 'bg-white border-transparent hover:border-gray-200'}`}
                    >
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full flex items-center justify-between p-6 text-right"
                      >
                        <span className={`text-lg font-bold transition-colors ${activeIndex === index ? 'text-primary-600' : 'text-gray-700'}`}>
                          {faq.question}
                        </span>
                        <span className={`transform transition-transform duration-300 flex-shrink-0 mr-4 ${activeIndex === index ? 'rotate-180 text-primary-500' : 'text-gray-400'}`}>
                          {activeIndex === index ? <HelpCircle size={24} /> : <ChevronDown size={24} />}
                        </span>
                      </button>
                      
                      <AnimatePresence>
                        {activeIndex === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="px-6 pb-6 text-gray-500 leading-relaxed border-t border-gray-50 pt-4">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
            </div>

            {/* Right Column: CTA Card (Sticky & Styled) */}
            <div className="lg:col-span-1 lg:sticky lg:top-28">
                <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-xl shadow-gray-200/50 relative overflow-hidden group">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
                    
                    <div className="relative z-10">
                        <div className="w-14 h-14 bg-primary-100/50 rounded-xl flex items-center justify-center text-primary-600 mb-6 group-hover:rotate-6 transition-transform duration-300">
                            <MessageCircle size={28} />
                        </div>
                        
                        <h3 className="text-2xl font-black text-secondary-900 mb-3">هل لديك سؤال آخر؟</h3>
                        <p className="text-gray-500 mb-8 leading-relaxed text-sm">
                            نحن هنا لمساعدتك. تواصل معنا مباشرة للحصول على الاستشارة المناسبة.
                        </p>
                        
                        <div className="space-y-5"> 
                            <div className="flex items-start gap-4">
                                <MapPin size={20} className="text-primary-500 mt-1" />
                                <div>
                                    <p className="font-bold text-secondary-900 text-sm">الرياض، حي الصحافة</p>
                                    <p className="text-xs text-gray-400">المقر الرئيسي</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-4">
                                <Clock size={20} className="text-primary-500 mt-1" />
                                <div>
                                    <p className="font-bold text-secondary-900 text-sm">9:00 ص - 6:00 م</p>
                                    <p className="text-xs text-gray-400">الأحد - الخميس</p>
                                </div>
                            </div>

                            <div className="h-px bg-gray-100 w-full my-4"></div>

                            <Link to="/contact" className="w-full py-4 bg-secondary-900 hover:bg-primary-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-secondary-900/10 active:scale-95">
                                تواصل معنا
                                <ArrowLeft size={18} />
                            </Link>
                            
                            <div className="flex gap-3">
                                <a href="tel:+966500000000" className="flex-1 py-3 border border-gray-200 hover:border-primary-500 hover:text-primary-600 rounded-xl flex items-center justify-center text-gray-600 font-bold transition-all text-sm">
                                    <Phone size={16} className="ml-2" />
                                    اتصال
                                </a>
                                <a href="mailto:info@company.com" className="flex-1 py-3 border border-gray-200 hover:border-primary-500 hover:text-primary-600 rounded-xl flex items-center justify-center text-gray-600 font-bold transition-all text-sm">
                                    <Mail size={16} className="ml-2" />
                                    إيميل
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
