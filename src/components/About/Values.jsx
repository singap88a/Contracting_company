import React from 'react';
import { motion } from 'framer-motion';
import { Target, Shield, Award } from 'lucide-react';

const Values = () => {
  return (
    <div className="container mx-auto px-4 max-w-7xl mb-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: Target, title: "رؤيتنا", desc: "أن نكون الخيار الأول في مجال المقاولات من خلال تقديم حلول مبتكرة ومستدامة." },
          { icon: Shield, title: "رسالتنا", desc: "الالتزام بأعلى معايير الجودة والسلامة وتنفيذ المشاريع بكفاءة ودقة متناهية." },
          { icon: Award, title: "قيمنا", desc: "النزاهة، الشفافية، الابتكار، والعمل بروح الفريق الواحد لخدمة عملائنا." }
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center"
          >
            <div className="w-16 h-16 mx-auto bg-primary-50 rounded-full flex items-center justify-center text-primary-600 mb-6">
              <item.icon size={32} />
            </div>
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">{item.title}</h3>
            <p className="text-gray-500 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Values;
