import React from 'react';

const ServiceForm = () => {
  return (
    <div className="p-10">
      <form className="space-y-8">
        {/* Personal Info */}
        <section>
          <h3 className="text-xl font-bold text-secondary-900 mb-4 border-b pb-2">بيانات العميل</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">الاسم الكامل</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500/20 outline-none" placeholder="الاسم" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">رقم الجوال</label>
              <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500/20 outline-none" placeholder="05xxxxxxxx" dir="ltr" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">البريد الإلكتروني</label>
              <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500/20 outline-none" placeholder="example@domain.com" />
            </div>
          </div>
        </section>

        {/* Project Info */}
        <section>
          <h3 className="text-xl font-bold text-secondary-900 mb-4 border-b pb-2">تفاصيل المشروع</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
               <label className="block text-sm font-medium text-gray-700 mb-2">نوع الخدمة</label>
               <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500/20 outline-none bg-white">
                 <option>بناء وتشييد</option>
                 <option>تصميم معماري</option>
                 <option>تصميم داخلي</option>
                 <option>تشطيب</option>
                 <option>ترميم</option>
                 <option>أخرى</option>
               </select>
            </div>
            <div>
               <label className="block text-sm font-medium text-gray-700 mb-2">المدينة</label>
               <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500/20 outline-none" placeholder="مثال: الرياض" />
            </div>
            <div>
               <label className="block text-sm font-medium text-gray-700 mb-2">الميزانية التقريبية (ريال)</label>
               <input type="number" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500/20 outline-none" placeholder="0" />
            </div>
            <div>
               <label className="block text-sm font-medium text-gray-700 mb-2">المساحة (م²)</label>
               <input type="number" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500/20 outline-none" placeholder="0" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">وصف المشروع</label>
              <textarea rows="4" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500/20 outline-none" placeholder="اكتب تفاصيل إضافية عن مشروعك..."></textarea>
            </div>
          </div>
        </section>

        <div className="pt-4">
          <button type="button" className="w-full py-4 bg-secondary-900 text-white font-bold rounded-xl hover:bg-secondary-800 transition-all shadow-lg text-lg">
            إرسال الطلب
          </button>
        </div>
      </form>
    </div>
  );
};

export default ServiceForm;
