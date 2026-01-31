import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="container mx-auto px-4 max-w-7xl mt-20">
      <div className="bg-secondary-900 rounded-3xl p-12 text-center text-white relative overflow-hidden">
           <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">هل لديك مشروع خاص؟</h2>
              <p className="mb-8 text-gray-300">نحن هنا لمساعدتك في تحقيق رؤيتك. تواصل معنا لمناقشة تفاصيل مشروعك.</p>
              <Link to="/contact" className="px-8 py-4 bg-primary-500 hover:bg-primary-600 rounded-full font-bold shadow-lg shadow-primary-500/30 transition-all">تواصل معنا الآن</Link>
           </div>
           <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]"></div>
      </div>
    </div>
  );
};

export default Banner;
