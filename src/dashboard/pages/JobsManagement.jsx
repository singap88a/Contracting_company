import React, { useState } from 'react';
import DataTable from '../components/DataTable';
import Modal from '../components/Modal';
import FormInput from '../components/FormInput';
import { Plus } from 'lucide-react';

const JobsManagement = () => {
  const [jobs, setJobs] = useState([
    { 
      id: 1, 
      title: 'مهندس مدني', 
      name: 'مهندس مدني - قسم التنفيذ',
      description: 'نبحث عن مهندس مدني ذو خبرة في إدارة المشاريع الإنشائية',
      employmentType: 'دوام كامل',
      applicants: 12 
    },
    { 
      id: 2, 
      title: 'مهندس معماري', 
      name: 'مهندس معماري - قسم التصميم',
      description: 'مطلوب مهندس معماري للعمل على تصميم المشاريع السكنية والتجارية',
      employmentType: 'دوام كامل',
      applicants: 8 
    },
    { 
      id: 3, 
      title: 'مدير مشاريع', 
      name: 'مدير مشاريع - إدارة عليا',
      description: 'مدير مشاريع لإدارة المشاريع الكبرى',
      employmentType: 'عقد مشروع',
      applicants: 25 
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    name: '',
    description: '',
    employmentType: 'دوام كامل'
  });

  const columns = [
    { key: 'id', label: '#', sortable: true },
    { key: 'title', label: 'العنوان', sortable: true },
    { key: 'name', label: 'الاسم الوظيفي', sortable: true },
    { key: 'employmentType', label: 'نوع الدوام' },
    { 
      key: 'applicants', 
      label: 'المتقدمين',
      render: (count) => (
        <span className="dashboard-badge badge-info">{count}</span>
      )
    }
  ];

  const handleAdd = () => {
    setEditingJob(null);
    setFormData({
      title: '',
      name: '',
      description: '',
      employmentType: 'دوام كامل'
    });
    setIsModalOpen(true);
  };

  const handleEdit = (job) => {
    setEditingJob(job);
    setFormData(job);
    setIsModalOpen(true);
  };

  const handleDelete = (job) => {
    if (window.confirm(`هل أنت متأكد من حذف الوظيفة "${job.title}"؟`)) {
      setJobs(jobs.filter(j => j.id !== job.id));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editingJob) {
      setJobs(jobs.map(j => 
        j.id === editingJob.id ? { ...formData, id: j.id, applicants: j.applicants } : j
      ));
    } else {
      const newJob = {
        ...formData,
        id: Math.max(...jobs.map(j => j.id), 0) + 1,
        applicants: 0
      };
      setJobs([...jobs, newJob]);
    }
    
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-[#1a2332]">إدارة الوظائف</h2>
          <p className="text-gray-600 mt-1">إضافة وتعديل وحذف الوظائف المتاحة</p>
        </div>
        <button
          onClick={handleAdd}
          className="dashboard-btn dashboard-btn-primary flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          إضافة وظيفة جديدة
        </button>
      </div>

      {/* Jobs Table */}
      <DataTable
        columns={columns}
        data={jobs}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {/* Add/Edit Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingJob ? 'تعديل الوظيفة' : 'إضافة وظيفة جديدة'}
        size="lg"
      >
        <form onSubmit={handleSubmit}>
          <FormInput
            label="العنوان الوظيفي"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="مثال: مهندس مدني"
            required
          />

          <FormInput
            label="الاسم الوظيفي الكامل"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="مثال: مهندس مدني - قسم التنفيذ"
            required
          />

          <FormInput
            label="الوصف الوظيفي"
            name="description"
            type="textarea"
            value={formData.description}
            onChange={handleChange}
            placeholder="وصف تفصيلي للوظيفة والمهام المطلوبة..."
            rows={6}
            required
          />

          <FormInput
            label="نوع الدوام"
            name="employmentType"
            type="select"
            value={formData.employmentType}
            onChange={handleChange}
            options={[
              { value: 'دوام كامل', label: 'دوام كامل' },
              { value: 'دوام جزئي', label: 'دوام جزئي' },
              { value: 'عقد مشروع', label: 'عقد مشروع' }
            ]}
            required
          />

          <div className="flex items-center gap-3 mt-6">
            <button
              type="submit"
              className="dashboard-btn dashboard-btn-primary flex-1"
            >
              {editingJob ? 'تحديث الوظيفة' : 'إضافة الوظيفة'}
            </button>
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="dashboard-btn dashboard-btn-outline flex-1"
            >
              إلغاء
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default JobsManagement;
