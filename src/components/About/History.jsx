import React from 'react';

const History = () => {
  return (
    <div className="bg-secondary-900 text-white py-20 mb-20 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500 rounded-full blur-[100px] opacity-20"></div>
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">تاريخنا العريق</h2>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              بدأت رحلتنا منذ أكثر من عقدين من الزمان، التزمنا خلالها بتقديم أفضل الخدمات الهندسية. نمت شركتنا لتصبح واحدة من الأسماء المرموقة في قطاع المقاولات، معتمدة على فريق من الخبراء واستخدام أحدث التقنيات.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-4xl font-bold text-primary-500 mb-2">2003</h3>
                <p className="text-sm text-gray-400">سنة التأسيس</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-primary-500 mb-2">150+</h3>
                <p className="text-sm text-gray-400">موظف محترف</p>
              </div>
            </div>
          </div>
          <div className="h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1531835551805-16d864c8d311?q=80&w=800&auto=format&fit=crop" 
              alt="Company History" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
