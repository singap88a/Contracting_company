import React from 'react';
import { Upload } from 'lucide-react';

const ApplicationForm = ({ selectedJob }) => {
  return (
    <div className="lg:col-span-2">
      <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
        <h3 className="text-2xl font-bold text-secondary-900 mb-2">
          {selectedJob ? `التقديم لوظيفة: ${selectedJob.title}` : 'المعلومات الشخصية'}
        </h3>
        <p className="text-gray-500 mb-8">يرجى تعبئة النموذج أدناه وسيتم التواصل معك في أقرب وقت.</p>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">الاسم الكامل</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all" placeholder="الاسم الثلاثي" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">البريد الإلكتروني</label>
              <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all" placeholder="example@domain.com" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">رقم الهاتف</label>
              <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all" placeholder="05xxxxxxxx" dir="ltr" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">المسمى الوظيفي المستهدف</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all" placeholder="مثال: مهندس مدني" defaultValue={selectedJob?.title} />
            </div>
          </div>

          <div>
             <label className="block text-sm font-bold text-gray-700 mb-2">السيرة الذاتية</label>
             <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-primary-500 transition-colors cursor-pointer bg-gray-50">
                <Upload size={32} className="mx-auto text-gray-400 mb-2" />
                <p className="text-gray-600 font-medium">اسحب الملف هنا أو اضغط للتحميل</p>
                <p className="text-xs text-gray-400 mt-1">PDF, DOCX (Max 5MB)</p>
             </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">رسالة تعريفية (اختياري)</label>
            <textarea rows="4" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all" placeholder="حدثنا قليلاً عن نفسك..."></textarea>
          </div>

          <button type="button" className="w-full py-4 bg-primary-500 text-white rounded-xl font-bold hover:bg-primary-600 transition-colors shadow-lg shadow-primary-500/20">
            إرسال الطلب
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
