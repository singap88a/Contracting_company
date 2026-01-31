import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building2, Home, Ruler, Hammer, PaintBucket, Truck, ArrowLeft } from 'lucide-react';

const ServicesList = () => {
  const services = [
    {
      icon: Building2,
      title: 'بناء الأبراج التجارية',
      desc: 'تنفيذ الأبراج والمباني التجارية بأحدث الأنظمة الإنشائية والتقنيات الذكية.',
    },
    {
      icon: Home,
      title: 'الفلل السكنية',
      desc: 'بناء فلل وقصور فاخرة بتصاميم عصرية وتشطيبات عالية الجودة تناسب ذوقك.',
    },
    {
      icon: Ruler,
      title: 'التخطيط العمراني',
      desc: 'تخطيط وتصميم المجمعات السكنية والمخططات العمرانية وفق المعايير العالمية.',
    },
    {
      icon: Hammer,
      title: 'أعمال الترميم',
      desc: 'خدمات صيانة وترميم المباني القديمة وإعادة تأهيلها لتواكب العصر.',
    },
    {
      icon: PaintBucket,
      title: 'الديكور الداخلي',
      desc: 'تصميم وتنفيذ ديكورات داخلية وخارجية بلمسات فنية وإبداعية.',
    },
    {
      icon: Truck,
      title: 'تجهيز المواقع',
      desc: 'أعمال الحفر والردم وتجهيز المواقع الإنشائية والبنية التحتية.',
    },
  ];

  return (
    <div className="container mx-auto px-4 max-w-7xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">خدماتنا المتكاملة</h1>
        <p className="text-xl text-gray-500 max-w-3xl mx-auto">
          نقدم باقة شاملة من الخدمات الهندسية والمقاولات، مصممة لتلبية احتياجات عملائنا بدقة واحترافية عالية.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
          >
            <div className="w-20 h-20 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-8 group-hover:scale-110 transition-transform">
              <service.icon size={40} />
            </div>
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">{service.title}</h3>
            <p className="text-gray-500 leading-relaxed mb-8">
              {service.desc}
            </p>
            <Link 
              to="/request-service"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-secondary-50 text-secondary-700 font-bold hover:bg-secondary-900 hover:text-white transition-all w-full"
            >
              طلب الخدمة
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesList;
