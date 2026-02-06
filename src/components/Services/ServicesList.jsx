import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building2, ArrowLeft, Loader2, LayoutGrid, Construction, ShieldCheck } from 'lucide-react';
import { API_URL } from '../../config';
import ServiceCard from './ServiceCard';

const ServicesList = () => {
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`${API_URL}/services`);
        if (response.ok) {
          const data = await response.json();
          const mappedData = data.map(s => ({
            ...s,
            id: s._id,
            title: s.name,
            desc: s.description,
            iconDisplay: s.icon ? s.icon : '🏗️'
          }));
          setServices(mappedData);
          setFilteredServices(mappedData);
        }
      } catch (err) {
        console.error('Error fetching services:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredServices(services);
    } else {
      setFilteredServices(services.filter(s => s.category === activeFilter));
    }
  }, [activeFilter, services]);

  const filters = [
    { id: 'all', label: 'الكل', icon: LayoutGrid },
    { id: 'contracting', label: 'قسم المقاولات', icon: Construction },
    { id: 'safety', label: 'قسم السلامة', icon: ShieldCheck }
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24">
        <Loader2 className="w-12 h-12 text-primary-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 max-w-7xl relative z-10 py-12">
      {/* Professional Filter UI */}
      <div className="flex justify-center mb-16 px-4">
        <div className="inline-flex p-1.5 bg-white/40 backdrop-blur-2xl rounded-full border border-primary-500/20 shadow-[0_8px_32px_rgba(249,115,22,0.08)] items-center">
          {filters.map((filter) => {
            const Icon = filter.icon;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`group relative px-6 md:px-10 py-3 rounded-full text-sm md:text-base font-black transition-all duration-500 whitespace-nowrap flex items-center gap-2.5 ${
                  activeFilter === filter.id
                    ? 'text-white'
                    : 'text-secondary-900/60 hover:text-secondary-900'
                }`}
              >
                {activeFilter === filter.id && (
                  <motion.div 
                    layoutId="activePillServices"
                    className="absolute inset-0 bg-primary-500 rounded-full shadow-[0_10px_25px_-5px_rgba(249,115,22,0.4)]"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                  />
                )}
                
                <Icon size={18} className={`relative z-10 transition-transform duration-300 ${activeFilter === filter.id ? 'scale-110' : 'group-hover:scale-110 opacity-70 group-hover:opacity-100'}`} />
                <span className="relative z-10">{filter.label}</span>
                
                {/* Corner Accent on Hover for Inactive */}
                {activeFilter !== filter.id && (
                  <div className="absolute inset-0 rounded-full bg-secondary-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredServices.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ServicesList;
