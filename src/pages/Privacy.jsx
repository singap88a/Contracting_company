import React from 'react';
import PrivacyContent from '../components/Privacy/PrivacyContent';

const Privacy = () => {
  return (
    <div className="py-20 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-secondary-900 mb-8 pb-4 border-b">سياسة الخصوصية</h1>
        <PrivacyContent />
      </div>
    </div>
  );
};

export default Privacy;
