import React from 'react';

const PrivacyContent = () => {
  return (
    <div className="space-y-8 text-gray-600 leading-relaxed">
      <section>
        <h2 className="text-2xl font-bold text-secondary-900 mb-4">جمع المعلومات</h2>
        <p>نقوم بجمع المعلومات التي تقدمها لنا طواعية عبر النماذج الموجودة في الموقع، مثل الاسم، البريد الإلكتروني، ورقم الهاتف، وذلك بغرض التواصل معك وتقديم الخدمات.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-secondary-900 mb-4">استخدام المعلومات</h2>
        <p>تستخدم المعلومات التي نجمعها لتحسين خدماتنا، الرد على استفساراتكم، ومعالجة طلبات الخدمة. نحن لا نشارك معلوماتك الشخصية مع أي طرف ثالث دون موافقتك.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-secondary-900 mb-4">أمان المعلومات</h2>
        <p>نحن نتخذ تدابير أمنية مناسبة لحماية معلوماتك من الوصول غير المصرح به أو التعديل أو الكشف أو الإتلاف.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-secondary-900 mb-4">ملفات تعريف الارتباط (Cookies)</h2>
        <p>قد يستخدم موقعنا ملفات تعريف الارتباط لتحسين تجربة المستخدم وتحليل حركة المرور. يمكنك تعديل إعدادات المتصفح لرفض ملفات تعريف الارتباط إذا كنت تفضل ذلك.</p>
      </section>
    </div>
  );
};

export default PrivacyContent;
