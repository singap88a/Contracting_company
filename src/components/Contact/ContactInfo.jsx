import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { API_URL } from '../../config';

const ContactInfo = () => {
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/settings`)
      .then(res => res.json())
      .then(data => setSettings(data))
      .catch(err => console.error('Error fetching settings:', err));
  }, []);

  const infoItems = [
    { icon: MapPin, title: 'العنوان', info: settings?.address || 'تحميل...' },
    { icon: Phone, title: 'الهاتف', info: settings?.phone || 'تحميل...' },
    { icon: Mail, title: 'البريد', info: settings?.email || 'تحميل...' },
    { icon: Clock, title: 'ساعات العمل', info: settings?.workingHours || 'تحميل...' },
  ];

  return (
    <div className="relative overflow-hidden bg-white rounded-[2.5rem] shadow-xl border border-gray-100 p-4 md:p-8">
      {/* Decorative Background Graphics */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary-900/5 rounded-full blur-3xl -ml-24 -mb-24"></div>
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
        {infoItems.map((item, i) => (
          <div key={i} className={`flex flex-col items-center text-center px-6 ${i !== infoItems.length - 1 ? 'lg:border-l lg:border-gray-100' : ''}`}>
             <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-500 mb-4 shadow-inner">
               <item.icon size={26} />
             </div>
             <div>
               <h4 className="font-bold text-secondary-900 mb-2 text-lg">{item.title}</h4>
               <p className="text-gray-500 text-sm font-semibold leading-relaxed" dir={item.title === 'الهاتف' ? 'ltr' : 'rtl'}>{item.info}</p>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
