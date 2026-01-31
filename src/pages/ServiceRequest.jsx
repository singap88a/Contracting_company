import React from 'react';
import Header from '../components/ServiceRequest/Header';
import ServiceForm from '../components/ServiceRequest/ServiceForm';

const ServiceRequest = () => {
  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <Header />
          <ServiceForm />
        </div>
      </div>
    </div>
  );
};

export default ServiceRequest;
