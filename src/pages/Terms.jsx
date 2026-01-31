import React from 'react';
import TermsContent from '../components/Terms/TermsContent';

const Terms = () => {
  return (
    <div className="py-20 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-secondary-900 mb-8 pb-4 border-b">الشروط والأحكام</h1>
        <TermsContent />
      </div>
    </div>
  );
};

export default Terms;
