import React from 'react';
import ContactInfo from '../../components/Contact/ContactInfo';
import ContactForm from '../../components/Contact/ContactForm';
import Map from '../../components/Contact/Map';

const Contact = () => {
  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-secondary-900 mb-4">تواصل معنا</h1>
          <p className="text-xl text-gray-500">نحن هنا للإجابة على جميع استفساراتك. لا تتردد في الاتصال بنا.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl overflow-hidden shadow-xl">
          {/* Contact Info & Form */}
          <div className="p-8 md:p-12">
             <ContactInfo />
             <ContactForm />
          </div>

          {/* Map */}
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Contact;
