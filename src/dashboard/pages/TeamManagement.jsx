import React, { useState, useEffect } from 'react';
import DataTable from '../components/DataTable';
import Modal from '../components/Modal';
import FormInput from '../components/FormInput';
import { Plus, Users, Facebook, Mail, MessageCircle, Loader2 } from 'lucide-react';
import { API_URL } from '../../config';

const TeamManagement = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingMember, setEditingMember] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    bio: '',
    image: '',
    socials: {
      facebook: '',
      whatsapp: '',
      email: ''
    },
    qualifications: ['']
  });

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [memberToDelete, setMemberToDelete] = useState(null);

  const fetchTeam = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/team`);
      if (response.ok) {
        const data = await response.json();
        setTeam(data);
      }
    } catch (err) {
      console.error('Error fetching team:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeam();
  }, []);

  const columns = [
    { 
      key: 'image', 
      label: 'الصورة',
      render: (image) => (
        <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200 bg-gray-50 flex items-center justify-center">
          {image ? (
            <img src={image} alt="" className="w-full h-full object-cover" />
          ) : (
            <Users className="w-6 h-6 text-gray-400" />
          )}
        </div>
      )
    },
    { key: 'name', label: 'الاسم', sortable: true },
    { key: 'role', label: 'المنصب', sortable: true },
    { 
      key: 'socials', 
      label: 'التواصل',
      render: (socials) => (
        <div className="flex items-center gap-2">
          {socials?.facebook && <Facebook className="w-4 h-4 text-blue-600" />}
          {socials?.whatsapp && <MessageCircle className="w-4 h-4 text-green-600" />}
          {socials?.email && <Mail className="w-4 h-4 text-gray-600" />}
        </div>
      )
    },
    { 
        key: 'createdAt', 
        label: 'تاريخ الإضافة',
        render: (date) => new Date(date).toLocaleDateString('ar-SA')
    }
  ];

  const handleAdd = () => {
    setEditingMember(null);
    setFormData({
      name: '',
      role: '',
      bio: '',
      image: '',
      socials: {
        facebook: '',
        whatsapp: '',
        email: ''
      },
      qualifications: ['']
    });
    setIsModalOpen(true);
  };

  const handleEdit = (member) => {
    setEditingMember(member);
    setFormData({
      name: member.name,
      role: member.role,
      bio: member.bio || '',
      image: member.image || '',
      socials: {
        facebook: member.socials?.facebook || '',
        whatsapp: member.socials?.whatsapp || '',
        email: member.socials?.email || ''
      },
      qualifications: member.qualifications && member.qualifications.length > 0 ? member.qualifications : ['']
    });
    setIsModalOpen(true);
  };

  const handleDelete = (member) => {
    setMemberToDelete(member);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    if (!memberToDelete) return;

    try {
      const response = await fetch(`${API_URL}/team/${memberToDelete._id}`, {
        method: 'DELETE',
        headers: {
          'x-auth-token': localStorage.getItem('adminToken')
        }
      });
      if (response.ok) {
        fetchTeam();
        setIsDeleteModalOpen(false);
        setMemberToDelete(null);
      }
    } catch (err) {
      console.error('Error deleting member:', err);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleQualificationChange = (index, value) => {
    const newQualifications = [...formData.qualifications];
    newQualifications[index] = value;
    setFormData(prev => ({ ...prev, qualifications: newQualifications }));
  };

  const addQualification = () => {
    setFormData(prev => ({ ...prev, qualifications: [...prev.qualifications, ''] }));
  };

  const removeQualification = (index) => {
    const newQualifications = formData.qualifications.filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, qualifications: newQualifications }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const cleanedQualifications = formData.qualifications.filter(q => q.trim() !== '');
    const dataToSend = { ...formData, qualifications: cleanedQualifications };

    try {
      const url = editingMember ? `${API_URL}/team/${editingMember._id}` : `${API_URL}/team`;
      const method = editingMember ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': localStorage.getItem('adminToken')
        },
        body: JSON.stringify(dataToSend)
      });

      if (response.ok) {
        setIsModalOpen(false);
        fetchTeam();
      } else if (response.status === 401) {
        alert('جلسة العمل انتهت، يرجى تسجيل الدخول مرة أخرى');
      }
    } catch (err) {
      console.error('Error saving member:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('social_')) {
        const socialKey = name.replace('social_', '');
        setFormData(prev => ({
            ...prev,
            socials: {
                ...prev.socials,
                [socialKey]: value
            }
        }));
    } else {
        setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-[#1a2332]">أعضاء الفريق</h2>
          <p className="text-gray-600 mt-1">إدارة أعضاء الفريق والخبراء</p>
        </div>
        <button
          onClick={handleAdd}
          className="dashboard-btn dashboard-btn-primary flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          إضافة عضو جديد
        </button>
      </div>

      {/* Team Table */}
      {loading ? (
        <div className="flex items-center justify-center py-20 bg-white rounded-2xl shadow-sm">
          <Loader2 className="w-10 h-10 text-primary-500 animate-spin" />
        </div>
      ) : (
        <DataTable
          columns={columns}
          data={team}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}

      {/* Add/Edit Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingMember ? 'تعديل بيانات العضو' : 'إضافة عضو جديد'}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex justify-center mb-6">
            <div className="relative group">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-100 bg-gray-50 flex items-center justify-center">
                {formData.image ? (
                  <img src={formData.image} alt="" className="w-full h-full object-cover" />
                ) : (
                  <Users className="w-12 h-12 text-gray-300" />
                )}
              </div>
              <label className="absolute bottom-0 right-0 bg-primary-500 text-white p-2 rounded-full cursor-pointer shadow-lg hover:bg-primary-600 transition-colors">
                <Plus className="w-5 h-5" />
                <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormInput
              label="الاسم"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="مثال: أحمد محمد"
              required
            />
            <FormInput
              label="المنصب"
              name="role"
              value={formData.role}
              onChange={handleChange}
              placeholder="مثال: مدير تنفيذي"
              required
            />
          </div>

          <FormInput
            label="نبذة بسيطة"
            name="bio"
            type="textarea"
            value={formData.bio}
            onChange={handleChange}
            placeholder="اكتب نبذة عن الخبرات..."
            rows={3}
          />

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium text-gray-700">الخبرات والمؤهلات</label>
              <button type="button" onClick={addQualification} className="text-primary-600 text-sm hover:underline">
                + إضافة خبرة/مؤهل
              </button>
            </div>
            {formData.qualifications.map((qual, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  value={qual}
                  onChange={(e) => handleQualificationChange(index, e.target.value)}
                  placeholder="مثال: بكالوريوس هندسة مدنية"
                  className="dashboard-input flex-1"
                />
                {formData.qualifications.length > 1 && (
                    <button type="button" onClick={() => removeQualification(index)} className="text-red-500 hover:text-red-700">
                         حذف
                    </button>
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Facebook className="absolute right-3 top-[38px] w-4 h-4 text-blue-600" />
              <FormInput
                label="فيسبوك"
                name="social_facebook"
                value={formData.socials.facebook}
                onChange={handleChange}
                placeholder="رابط الملف"
                className="pr-10"
              />
            </div>
            <div className="relative">
              <MessageCircle className="absolute right-3 top-[38px] w-4 h-4 text-green-600" />
              <FormInput
                label="واتساب"
                name="social_whatsapp"
                value={formData.socials.whatsapp}
                onChange={handleChange}
                placeholder="رقم الواتساب"
                className="pr-10"
              />
            </div>
            <div className="relative">
              <Mail className="absolute right-3 top-[38px] w-4 h-4 text-gray-600" />
              <FormInput
                label="الإيميل"
                name="social_email"
                value={formData.socials.email}
                onChange={handleChange}
                placeholder="البريد الإلكتروني"
                className="pr-10"
              />
            </div>
          </div>


          <div className="flex items-center gap-3 mt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className="dashboard-btn dashboard-btn-primary flex-1 flex items-center justify-center gap-2"
            >
              {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : null}
              {editingMember ? 'تحديث البيانات' : 'إضافة للفريق'}
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

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        title="تأكيد الحذف"
        size="md"
      >
        <div className="p-6 text-center">
          <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Users className="w-10 h-10" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">هل أنت متأكد من حذف هذا العضو؟</h3>
          <p className="text-gray-500 mb-8">
            سيتم حذف العضو <span className="font-bold text-gray-900">"{memberToDelete?.name}"</span> نهائياً من الفريق.
          </p>
          <div className="flex gap-4">
            <button
              onClick={confirmDelete}
              className="flex-1 py-3 bg-red-500 text-white rounded-xl font-bold hover:bg-red-600 transition-colors"
            >
              نعم، احذف
            </button>
            <button
              onClick={() => setIsDeleteModalOpen(false)}
              className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-colors"
            >
              إلغاء
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TeamManagement;
