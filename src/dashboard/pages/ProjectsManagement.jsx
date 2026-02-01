import React, { useState } from 'react';
import DataTable from '../components/DataTable';
import Modal from '../components/Modal';
import FormInput from '../components/FormInput';
import { Plus, X, Upload } from 'lucide-react';

const ProjectsManagement = () => {
  const [projects, setProjects] = useState([
    { 
      id: 1, 
      name: 'برج الأعمال التجاري',
      sector: 'تجاري',
      description: 'مشروع برج تجاري حديث في قلب المدينة',
      client: 'شركة الاستثمار العقاري',
      executionYear: '2024',
      totalArea: '15000',
      location: 'الرياض',
      technicalFeatures: ['نظام إدارة المباني الذكي', 'أنظمة الطاقة الشمسية', 'نظام إطفاء حريق متطور'],
      images: []
    },
    { 
      id: 2, 
      name: 'مجمع سكني فاخر',
      sector: 'سكني',
      description: 'مجمع سكني راقي يضم 200 وحدة سكنية',
      client: 'مجموعة التطوير العقاري',
      executionYear: '2023',
      totalArea: '25000',
      location: 'جدة',
      technicalFeatures: ['أنظمة أمن متكاملة', 'مرافق ترفيهية حديثة'],
      images: []
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    sector: '',
    description: '',
    client: '',
    executionYear: new Date().getFullYear().toString(),
    totalArea: '',
    location: '',
    technicalFeatures: [''],
    images: []
  });

  const columns = [
    { key: 'id', label: '#', sortable: true },
    { key: 'name', label: 'اسم المشروع', sortable: true },
    { key: 'sector', label: 'نوع القطاع', sortable: true },
    { key: 'client', label: 'العميل' },
    { key: 'location', label: 'الموقع' },
    { key: 'executionYear', label: 'سنة التنفيذ', sortable: true },
    { 
      key: 'totalArea', 
      label: 'المساحة',
      render: (area) => `${area} م²`
    }
  ];

  const handleAdd = () => {
    setEditingProject(null);
    setFormData({
      name: '',
      sector: '',
      description: '',
      client: '',
      executionYear: new Date().getFullYear().toString(),
      totalArea: '',
      location: '',
      technicalFeatures: [''],
      images: []
    });
    setIsModalOpen(true);
  };

  const handleEdit = (project) => {
    setEditingProject(project);
    setFormData({
      ...project,
      technicalFeatures: project.technicalFeatures.length > 0 ? project.technicalFeatures : ['']
    });
    setIsModalOpen(true);
  };

  const handleDelete = (project) => {
    if (window.confirm(`هل أنت متأكد من حذف المشروع "${project.name}"؟`)) {
      setProjects(projects.filter(p => p.id !== project.id));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const cleanedFeatures = formData.technicalFeatures.filter(f => f.trim() !== '');
    const projectData = {
      ...formData,
      technicalFeatures: cleanedFeatures
    };

    if (editingProject) {
      setProjects(projects.map(p => 
        p.id === editingProject.id ? { ...projectData, id: p.id } : p
      ));
    } else {
      const newProject = {
        ...projectData,
        id: Math.max(...projects.map(p => p.id), 0) + 1
      };
      setProjects([...projects, newProject]);
    }
    
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFeatureChange = (index, value) => {
    const newFeatures = [...formData.technicalFeatures];
    newFeatures[index] = value;
    setFormData(prev => ({ ...prev, technicalFeatures: newFeatures }));
  };

  const addFeature = () => {
    setFormData(prev => ({
      ...prev,
      technicalFeatures: [...prev.technicalFeatures, '']
    }));
  };

  const removeFeature = (index) => {
    if (formData.technicalFeatures.length > 1) {
      const newFeatures = formData.technicalFeatures.filter((_, i) => i !== index);
      setFormData(prev => ({ ...prev, technicalFeatures: newFeatures }));
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-[#1a2332]">إدارة المشاريع</h2>
          <p className="text-gray-600 mt-1">إضافة وتعديل وحذف المشاريع</p>
        </div>
        <button
          onClick={handleAdd}
          className="dashboard-btn dashboard-btn-primary flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          إضافة مشروع جديد
        </button>
      </div>

      {/* Projects Table */}
      <DataTable
        columns={columns}
        data={projects}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {/* Add/Edit Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingProject ? 'تعديل المشروع' : 'إضافة مشروع جديد'}
        size="lg"
      >
        <form onSubmit={handleSubmit}>
          {/* Basic Info */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-[#1a2332] mb-4">المعلومات الأساسية</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormInput
                label="اسم المشروع"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="مثال: برج الأعمال التجاري"
                required
              />

              <FormInput
                label="نوع القطاع"
                name="sector"
                type="select"
                value={formData.sector}
                onChange={handleChange}
                options={[
                  { value: 'سكني', label: 'سكني' },
                  { value: 'تجاري', label: 'تجاري' },
                  { value: 'صناعي', label: 'صناعي' },
                  { value: 'حكومي', label: 'حكومي' },
                  { value: 'تعليمي', label: 'تعليمي' },
                  { value: 'صحي', label: 'صحي' }
                ]}
                required
              />
            </div>

            <FormInput
              label="وصف المشروع"
              name="description"
              type="textarea"
              value={formData.description}
              onChange={handleChange}
              placeholder="وصف تفصيلي للمشروع..."
              rows={4}
              required
            />
          </div>

          {/* Project Specifications */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-[#1a2332] mb-4">مواصفات المشروع</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormInput
                label="العميل المستفيد"
                name="client"
                value={formData.client}
                onChange={handleChange}
                placeholder="مثال: شركة الاستثمار العقاري"
                required
              />

              <FormInput
                label="سنة التنفيذ"
                name="executionYear"
                type="number"
                value={formData.executionYear}
                onChange={handleChange}
                required
              />

              <FormInput
                label="المساحة الإجمالية (م²)"
                name="totalArea"
                type="number"
                value={formData.totalArea}
                onChange={handleChange}
                placeholder="مثال: 15000"
                required
              />

              <FormInput
                label="الموقع"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="مثال: الرياض"
                required
              />
            </div>
          </div>

          {/* Technical Features */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-[#1a2332]">المميزات التقنية</h3>
              <button
                type="button"
                onClick={addFeature}
                className="text-sm text-[#ff6b35] hover:text-[#e55a2b] font-medium flex items-center gap-1"
              >
                <Plus className="w-4 h-4" />
                إضافة ميزة
              </button>
            </div>
            <div className="space-y-3">
              {formData.technicalFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={feature}
                    onChange={(e) => handleFeatureChange(index, e.target.value)}
                    placeholder="مثال: نظام إدارة المباني الذكي"
                    className="dashboard-input flex-1"
                  />
                  {formData.technicalFeatures.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeFeature(index)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Images Upload */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-[#1a2332] mb-4">صور المشروع</h3>
            <FormInput
              label="رفع الصور"
              name="images"
              type="file"
              accept="image/*"
              onChange={(e) => {
                // Handle multiple image upload
                console.log('Images:', e.target.files);
              }}
            />
            <p className="text-sm text-gray-500 mt-2">يمكنك رفع صور متعددة للمشروع</p>
          </div>

          <div className="flex items-center gap-3 mt-6 pt-6 border-t">
            <button
              type="submit"
              className="dashboard-btn dashboard-btn-primary flex-1"
            >
              {editingProject ? 'تحديث المشروع' : 'إضافة المشروع'}
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

export default ProjectsManagement;
