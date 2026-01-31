import React from 'react';
import ServicesList from '../components/Services/ServicesList';
import Banner from '../components/Services/Banner';

const Services = () => {
  return (
    <div className="py-20 min-h-screen bg-gray-50">
      <ServicesList />
      <Banner />
    </div>
  );
};

export default Services;
