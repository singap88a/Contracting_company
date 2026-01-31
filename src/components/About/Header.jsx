import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <div className="container mx-auto px-4 max-w-7xl mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto"
      >
        <span className="text-primary-600 font-bold mb-4 block">من نحن</span>
        <h1 className="text-5xl font-bold text-secondary-900 mb-6">راد في عالم المقاولات والإنشاءات</h1>
        <p className="text-xl text-gray-500 leading-relaxed">
          تأسست شركتنا على مبادئ الجودة والاحترافية. نحن نفخر بسجل حافل من المشاريع الناجحة التي ساهمت في تطوير البنية التحتية والعمرانية.
        </p>
      </motion.div>
    </div>
  );
};

export default Header;
