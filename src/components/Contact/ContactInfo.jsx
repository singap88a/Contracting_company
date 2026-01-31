import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      {[
        { icon: MapPin, title: 'العنوان', info: 'شارع التخصصي، الرياض' },
        { icon: Phone, title: 'الهاتف', info: '+966 11 234 5678' },
        { icon: Mail, title: 'البريد', info: 'info@contracting-co.com' },
        { icon: Clock, title: 'ساعات العمل', info: 'السبت - الخميس: 8ص - 6م' },
      ].map((item, i) => (
        <div key={i} className="flex gap-4">
           <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 flex-shrink-0">
             <item.icon size={24} />
           </div>
           <div>
             <h4 className="font-bold text-secondary-900 mb-1">{item.title}</h4>
             <p className="text-sm text-gray-500" dir="ltr">{item.info}</p>
           </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
