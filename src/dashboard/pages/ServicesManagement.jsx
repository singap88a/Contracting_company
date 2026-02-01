import React, { useState } from 'react';
import DataTable from '../components/DataTable';
import Modal from '../components/Modal';
import FormInput from '../components/FormInput';
import { Plus } from 'lucide-react';

const ServicesManagement = () => {
  const [services, setServices] = useState([
    { 
      id: 1, 
      name: 'البناء والتشييد', 
      description: 'خدمات بناء وتشييد المباني السكنية والتجارية بأعلى معايير الجودة', 
      icon: '🏗️',
      image: null
    },
    { 
      id: 2, 
      name: 'التصميم المعماري', 
      description: 'تصميم معماري احترافي للمشاريع السكنية والتجارية', 
      icon: '📐',
      image: null
    },
    { 
      id: 3, 
      name: 'الصيانة والترميم', 
      description: 'صيانة وترميم المباني القديمة وإعادة تأهيلها', 
      icon: '🔧',
      image: null
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    icon: '',
    image: null
  });

  const columns = [
    { key: 'id', label: '#', sortable: true },
    { 
      key: 'icon', 
      label: 'الأيقونة',
      render: (icon) => <span className="text-2xl">{icon}</span>
    },
    { key: 'name', label: 'اسم الخدمة', sortable: true },
    { key: 'description', label: 'الوصف' }
  ];

  const handleAdd = () => {
    setEditingService(null);
    setFormData({ name: '', description: '', icon: '', image: null });
    setIsModalOpen(true);
  };

  const handleEdit = (service) => {
    setEditingService(service);
    setFormData(service);
    setIsModalOpen(true);
  };

  const handleDelete = (service) => {
    if (window.confirm(`هل أنت متأكد من حذف الخدمة "${service.name}"؟`)) {
      setServices(services.filter(s => s.id !== service.id));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editingService) {
      // Update existing service
      setServices(services.map(s => 
        s.id === editingService.id ? { ...formData, id: s.id } : s
      ));
    } else {
      // Add new service
      const newService = {
        ...formData,
        id: Math.max(...services.map(s => s.id), 0) + 1
      };
      setServices([...services, newService]);
    }
    
    setIsModalOpen(false);
    setFormData({ name: '', description: '', icon: '', image: null });
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image' && files && files[0]) {
      setFormData(prev => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-[#1a2332]">إدارة الخدمات</h2>
          <p className="text-gray-600 mt-1">إضافة وتعديل وحذف الخدمات</p>
        </div>
        <button
          onClick={handleAdd}
          className="dashboard-btn dashboard-btn-primary flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          إضافة خدمة جديدة
        </button>
      </div>

      {/* Services Table */}
      <DataTable
        columns={columns}
        data={services}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {/* Add/Edit Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingService ? 'تعديل الخدمة' : 'إضافة خدمة جديدة'}
      >
        <form onSubmit={handleSubmit}>
          <FormInput
            label="اسم الخدمة"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="مثال: البناء والتشييد"
            required
          />

          <FormInput
            label="وصف الخدمة"
            name="description"
            type="textarea"
            value={formData.description}
            onChange={handleChange}
            placeholder="وصف تفصيلي للخدمة..."
            rows={4}
            required
          />

          <FormInput
            label="الأيقونة (Emoji)"
            name="icon"
            value={formData.icon}
            onChange={handleChange}
            placeholder="🏗️"
            required
          />

          <FormInput
            label="صورة الخدمة"
            name="image"
            type="file"
            accept="image/*"
            onChange={handleChange}
          />

          <div className="flex items-center gap-3 mt-6">
            <button
              type="submit"
              className="dashboard-btn dashboard-btn-primary flex-1"
            >
              {editingService ? 'تحديث الخدمة' : 'إضافة الخدمة'}
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

export default ServicesManagement;
