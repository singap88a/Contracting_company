import React from 'react';

const ProjectFilter = ({ filter, setFilter, categories }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setFilter(cat)}
          className={`px-6 py-2 rounded-full font-bold transition-all ${
            filter === cat
              ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
              : 'bg-white text-gray-500 hover:bg-gray-100'
          }`}
        >
          {cat === 'all' ? 'الكل' : cat}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilter;
