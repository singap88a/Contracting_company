import React, { useState } from 'react';
import DataTable from '../components/DataTable';
import Modal from '../components/Modal';
import FormInput from '../components/FormInput';
import { Plus, Star } from 'lucide-react';

const TestimonialsManagement = () => {
  const [testimonials, setTestimonials] = useState([
    { id: 1, clientName: 'أحمد محمد', position: 'مدير تنفيذي', company: 'شركة النجاح', rating: 5, comment: 'خدمة ممتازة واحترافية عالية', featured: true },
    { id: 2, clientName: 'سارة أحمد', position: 'مهندسة', company: 'مؤسسة البناء', rating: 5, comment: 'تعامل راقي وجودة في التنفيذ', featured: false },
    { id: 3, clientName: 'خالد علي', position: 'مستثمر', company: 'مجموعة الاستثمار', rating: 4, comment: 'مشروع رائع ونتائج مميزة', featured: false }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState(null);
  const [formData, setFormData] = useState({
    clientName: '',
    position: '',
    company: '',
    rating: '5',
    comment: '',
    featured: false
  });

  const columns = [
    { key: 'id', label: '#', sortable: true },
    { key: 'clientName', label: 'اسم العميل', sortable: true },
    { key: 'position', label: 'المنصب' },
    { key: 'company', label: 'الشركة' },
    { 
      key: 'rating', 
      label: 'التقييم',
      render: (rating) => (
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
            />
          ))}
        </div>
      )
    },
    { 
      key: 'featured', 
      label: 'مميز',
      render: (featured) => (
        <span className={`dashboard-badge ${featured ? 'badge-warning' : 'badge-secondary'}`}>
          {featured ? 'مميز' : 'عادي'}
        </span>
      )
    }
  ];

  const handleAdd = () => {
    setEditingTestimonial(null);
    setFormData({
      clientName: '',
      position: '',
      company: '',
      rating: '5',
      comment: '',
      featured: false
    });
    setIsModalOpen(true);
  };

  const handleEdit = (testimonial) => {
    setEditingTestimonial(testimonial);
    setFormData({
      ...testimonial,
      rating: testimonial.rating.toString()
    });
    setIsModalOpen(true);
  };

  const handleDelete = (testimonial) => {
    if (window.confirm(`هل أنت متأكد من حذف رأي "${testimonial.clientName}"؟`)) {
      setTestimonials(testimonials.filter(t => t.id !== testimonial.id));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const data = {
      ...formData,
      rating: parseInt(formData.rating)
    };

    if (editingTestimonial) {
      setTestimonials(testimonials.map(t => 
        t.id === editingTestimonial.id ? { ...data, id: t.id } : t
      ));
    } else {
      const newTestimonial = {
        ...data,
        id: Math.max(...testimonials.map(t => t.id), 0) + 1
      };
      setTestimonials([...testimonials, newTestimonial]);
    }
    
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-[#1a2332]">آراء العملاء</h2>
          <p className="text-gray-600 mt-1">إدارة آراء وتقييمات العملاء</p>
        </div>
        <button
          onClick={handleAdd}
          className="dashboard-btn dashboard-btn-primary flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          إضافة رأي جديد
        </button>
      </div>

      {/* Testimonials Table */}
      <DataTable
        columns={columns}
        data={testimonials}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {/* Add/Edit Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingTestimonial ? 'تعديل الرأي' : 'إضافة رأي جديد'}
      >
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormInput
              label="اسم العميل"
              name="clientName"
              value={formData.clientName}
              onChange={handleChange}
              placeholder="مثال: أحمد محمد"
              required
            />

            <FormInput
              label="المنصب"
              name="position"
              value={formData.position}
              onChange={handleChange}
              placeholder="مثال: مدير تنفيذي"
              required
            />

            <FormInput
              label="الشركة"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="مثال: شركة النجاح"
              required
            />

            <FormInput
              label="التقييم"
              name="rating"
              type="select"
              value={formData.rating}
              onChange={handleChange}
              options={[
                { value: '5', label: '⭐⭐⭐⭐⭐ (5 نجوم)' },
                { value: '4', label: '⭐⭐⭐⭐ (4 نجوم)' },
                { value: '3', label: '⭐⭐⭐ (3 نجوم)' },
                { value: '2', label: '⭐⭐ (2 نجمتان)' },
                { value: '1', label: '⭐ (نجمة واحدة)' }
              ]}
              required
            />
          </div>

          <FormInput
            label="التعليق"
            name="comment"
            type="textarea"
            value={formData.comment}
            onChange={handleChange}
            placeholder="رأي العميل..."
            rows={4}
            required
          />

          <div className="mb-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="featured"
                checked={formData.featured}
                onChange={handleChange}
                className="w-4 h-4 text-[#ff6b35] border-gray-300 rounded focus:ring-[#ff6b35]"
              />
              <span className="text-sm font-medium text-gray-700">تمييز هذا الرأي</span>
            </label>
          </div>

          <div className="flex items-center gap-3 mt-6">
            <button
              type="submit"
              className="dashboard-btn dashboard-btn-primary flex-1"
            >
              {editingTestimonial ? 'تحديث' : 'إضافة'}
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

export default TestimonialsManagement;
