import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, MapPin } from 'lucide-react';

const ProjectGrid = ({ filteredProjects }) => {
  return (
    <motion.div 
      layout
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      <AnimatePresence>
        {filteredProjects.map((project) => (
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            key={project.id}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
          >
            <div className="relative h-64 overflow-hidden">
               <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <Link to={`/projects/${project.id}`} className="text-white font-bold flex items-center gap-2 hover:text-primary-400">
                    عرض التفاصيل <ExternalLink size={18} />
                  </Link>
               </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm font-bold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">{project.category}</span>
                <div className="flex items-center text-gray-400 text-sm gap-1">
                  <MapPin size={14} />
                  {project.location}
                </div>
              </div>
              <h3 className="text-xl font-bold text-secondary-900 group-hover:text-primary-600 transition-colors">
                {project.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectGrid;
