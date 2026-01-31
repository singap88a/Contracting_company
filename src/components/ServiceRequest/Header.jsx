import React from 'react';
import { ClipboardList } from 'lucide-react';

const Header = () => {
  return (
    <div className="bg-primary-500 p-10 text-white text-center">
      <ClipboardList size={48} className="mx-auto mb-4 opacity-80" />
      <h1 className="text-3xl font-bold mb-2">طلب خدمة جديدة</h1>
      <p className="opacity-90">املأ النموذج التالي لطلب خدمة، وسيقوم فريقنا بالتواصل معك في أقرب وقت.</p>
    </div>
  );
};

export default Header;
