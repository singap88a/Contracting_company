import React, { useState } from 'react';
import JobList from '../components/Careers/JobList';
import ApplicationForm from '../components/Careers/ApplicationForm';

const Careers = () => {
  const jobs = [
    { id: 1, title: 'مهندس مدني أول', location: 'الرياض', type: 'دوام كامل' },
    { id: 2, title: 'مهندس معماري', location: 'جدة', type: 'دوام كامل' },
    { id: 3, title: 'مشرف موقع', location: 'الدمام', type: 'عقد مشروع' },
    { id: 4, title: 'محاسب تكاليف', location: 'الرياض', type: 'دوام كامل' },
  ];

  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-secondary-900 mb-6">انضم لفريقنا</h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            نبحث دائماً عن المبدعين والموهوبين للانضمام إلى عائلتنا. اكتشف الفرص المتاحة وكن جزءاً من نجاحنا.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Job Listings */}
          <JobList jobs={jobs} selectedJob={selectedJob} setSelectedJob={setSelectedJob} />

          {/* Application Form */}
          <ApplicationForm selectedJob={selectedJob} />
        </div>
      </div>
    </div>
  );
};

export default Careers;
