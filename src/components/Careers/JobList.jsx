import React from 'react';
import { Briefcase, MapPin, Clock } from 'lucide-react';

const JobList = ({ jobs, selectedJob, setSelectedJob }) => {
  return (
    <div className="lg:col-span-1 space-y-4">
      <h3 className="font-bold text-xl text-secondary-900 mb-4">الوظائف المتاحة</h3>
      {jobs.map((job) => (
        <div 
          key={job.id}
          onClick={() => setSelectedJob(job)}
          className={`bg-white p-6 rounded-2xl shadow-sm cursor-pointer transition-all border ${selectedJob?.id === job.id ? 'border-primary-500 ring-2 ring-primary-500/10' : 'border-gray-100 hover:border-primary-300'}`}
        >
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-bold text-lg text-secondary-900">{job.title}</h4>
            <Briefcase size={16} className="text-primary-500 mt-1" />
          </div>
          <div className="flex gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
            <span className="flex items-center gap-1"><Clock size={14} /> {job.type}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobList;
