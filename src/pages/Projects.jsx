import React, { useState } from 'react';
import ProjectFilter from '../components/Projects/ProjectFilter';
import ProjectGrid from '../components/Projects/ProjectGrid';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'برج الأفق التجاري',
      category: 'تجاري',
      location: 'الرياض',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'مجمع النخيل السكني',
      category: 'سكنى',
      location: 'جدة',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'فيلا الروابي الخاصة',
      category: 'سكنى',
      location: 'الرياض',
      image: 'https://images.unsplash.com/photo-1600596542815-2495db98dada?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 4,
      title: 'تطوير حديقة الملك',
      category: 'عام',
      location: 'الدمام',
      image: 'https://images.unsplash.com/photo-1558036117-15ea8475e297?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 5,
      title: 'مول المستقبل',
      category: 'تجاري',
      location: 'الخبر',
      image: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 6,
      title: 'مستشفى الشفاء الدولي',
      category: 'طبي',
      location: 'مكة',
      image: 'https://images.unsplash.com/photo-1587351021759-3e566b9af923?q=80&w=800&auto=format&fit=crop',
    }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);
  const categories = ['all', 'سكنى', 'تجاري', 'طبي', 'عام'];

  return (
    <div className="py-20 min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-secondary-900 mb-4">معرض مشاريعنا</h1>
          <p className="text-gray-500">نفتخر بتقديم مجموعة متنوعة من المشاريع المتميزة في جميع أنحاء المملكة</p>
        </div>

        <ProjectFilter filter={filter} setFilter={setFilter} categories={categories} />
        <ProjectGrid filteredProjects={filteredProjects} />
      </div>
    </div>
  );
};

export default Projects;
