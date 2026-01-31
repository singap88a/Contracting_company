import React from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
  return (
    <>
       <h3 className="text-2xl font-bold text-secondary-900 mb-6">أرسل لنا رسالة</h3>
       <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <input type="text" placeholder="الاسم" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 outline-none bg-gray-50/50" />
             <input type="email" placeholder="البريد الإلكتروني" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 outline-none bg-gray-50/50" />
          </div>
          <input type="text" placeholder="الموضوع" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 outline-none bg-gray-50/50" />
          <textarea rows="4" placeholder="نص الرسالة" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 outline-none bg-gray-50/50"></textarea>
          <button className="w-full py-4 bg-secondary-900 text-white rounded-xl font-bold hover:bg-secondary-800 transition-colors flex items-center justify-center gap-2">
            <Send size={18} />
            إرسال الرسالة
          </button>
       </form>
    </>
  );
};

export default ContactForm;
