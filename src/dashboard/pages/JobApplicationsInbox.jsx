import React, { useState, useEffect } from 'react';
import DataTable from '../components/DataTable';
import Modal from '../components/Modal';
import { Download, Loader2, Mail, Phone, Calendar, Briefcase } from 'lucide-react';
import { API_URL } from '../../config';
import { useAuth } from '../../context/AuthContext';

const JobApplicationsInbox = () => {
  const { token, logout } = useAuth();
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const response = await fetch(`${API_URL}/job-applications`, {
        headers: {
          'x-auth-token': token
        }
      });
      if (response.ok) {
        const data = await response.json();
        setApplications(data.map(a => ({ ...a, id: a._id })));
      } else if (response.status === 401) {
        logout();
      }
    } catch (err) {
      console.error('Error fetching applications:', err);
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    { key: 'fullName', label: 'الاسم الكامل', sortable: true },
    { key: 'email', label: 'البريد الإلكتروني' },
    { key: 'mobile', label: 'رقم الهاتف' },
    { 
      key: 'jobId', 
      label: 'المسمى الوظيفي',
      render: (job) => job?.title || 'غير محدد'
    },
    { 
      key: 'date', 
      label: 'التاريخ', 
      sortable: true,
      render: (date) => new Date(date).toLocaleDateString('ar-SA')
    },
    { 
      key: 'status', 
      label: 'الحالة',
      render: (status) => (
        <span className={`dashboard-badge ${
          status === 'جديد' ? 'badge-info' : 
          status === 'قيد المراجعة' ? 'badge-warning' : 
          status === 'مقبول' ? 'badge-success' :
          'badge-danger'
        }`}>
          {status}
        </span>
      )
    }
  ];

  const handleView = (application) => {
    setSelectedApplication(application);
    setIsModalOpen(true);
  };

  const handleStatusChange = async (newStatus) => {
    try {
      const response = await fetch(`${API_URL}/job-applications/${selectedApplication.id}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token
        },
        body: JSON.stringify({ status: newStatus })
      });

      if (response.ok) {
        setApplications(applications.map(a => 
          a.id === selectedApplication.id ? { ...a, status: newStatus } : a
        ));
        setSelectedApplication({ ...selectedApplication, status: newStatus });
      } else if (response.status === 401) {
        logout();
      }
    } catch (err) {
      console.error('Error updating status:', err);
    }
  };

  const handleDownloadCV = () => {
    if (!selectedApplication?.cv) return;
    
    // Handle base64 CV
    if (selectedApplication.cv.startsWith('data:')) {
      const link = document.createElement('a');
      link.href = selectedApplication.cv;
      link.download = `CV_${selectedApplication.fullName}.pdf`;
      link.click();
    } else {
      window.open(selectedApplication.cv, '_blank');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-[#1a2332]">طلبات التوظيف</h2>
          <p className="text-gray-600 mt-1">جميع طلبات التقديم على الوظائف الواردة</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="dashboard-card p-4">
          <p className="text-gray-600 text-sm">طلبات جديدة</p>
          <p className="text-2xl font-bold text-blue-600">
            {applications.filter(a => a.status === 'جديد').length}
          </p>
        </div>
        <div className="dashboard-card p-4">
          <p className="text-gray-600 text-sm">قيد المراجعة</p>
          <p className="text-2xl font-bold text-orange-600">
            {applications.filter(a => a.status === 'قيد المراجعة').length}
          </p>
        </div>
        <div className="dashboard-card p-4">
          <p className="text-gray-600 text-sm">مقبول</p>
          <p className="text-2xl font-bold text-green-600">
            {applications.filter(a => a.status === 'مقبول').length}
          </p>
        </div>
        <div className="dashboard-card p-4">
          <p className="text-gray-600 text-sm">مرفوض</p>
          <p className="text-2xl font-bold text-red-600">
            {applications.filter(a => a.status === 'مرفوض').length}
          </p>
        </div>
      </div>

      <div className="dashboard-card">
        {loading ? (
          <div className="flex items-center justify-center p-20">
            <Loader2 className="w-10 h-10 text-orange-500 animate-spin" />
          </div>
        ) : (
          <DataTable
            columns={columns}
            data={applications}
            onEdit={handleView}
          />
        )}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="تفاصيل طلب التوظيف"
        size="lg"
      >
        {selectedApplication && (
          <div className="space-y-6" dir="rtl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-900 border-b pb-2">بيانات المتقدم</h3>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">البريد الإلكتروني</p>
                    <p className="font-medium">{selectedApplication.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">رقم الهاتف</p>
                    <p className="font-medium">{selectedApplication.mobile}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500">
                    <Calendar size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">تاريخ التقديم</p>
                    <p className="font-medium">{new Date(selectedApplication.date).toLocaleDateString('ar-SA')}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-900 border-b pb-2">تفاصيل الوظيفة</h3>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-500">
                    <Briefcase size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">الوظيفة</p>
                    <p className="font-bold text-blue-600">{selectedApplication.jobId?.title || 'غير محدد'}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <button 
                    onClick={handleDownloadCV}
                    className="w-full flex items-center justify-center gap-2 py-3 bg-secondary-900 text-white rounded-xl font-bold hover:bg-secondary-800 transition-colors"
                  >
                    <Download size={20} />
                    تحميل السيرة الذاتية (CV)
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold text-gray-900 border-b pb-2">نص الرسالة التعريفية</h3>
              <div className="bg-gray-50 p-4 rounded-xl text-gray-700 leading-relaxed min-h-[100px]">
                {selectedApplication.coverLetter || 'لا يوجد رسالة تعريفية'}
              </div>
            </div>

            <div className="space-y-4 border-t pt-4">
              <h3 className="text-lg font-bold text-gray-900">تحديث حالة الطلب</h3>
              <div className="flex flex-wrap gap-2">
                {['جديد', 'قيد المراجعة', 'مقبول', 'مرفوض'].map(st => (
                  <button
                    key={st}
                    onClick={() => handleStatusChange(st)}
                    className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${
                      selectedApplication.status === st
                        ? st === 'مقبول' ? 'bg-green-600 text-white' :
                          st === 'مرفوض' ? 'bg-red-600 text-white' :
                          st === 'قيد المراجعة' ? 'bg-orange-600 text-white' :
                          'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default JobApplicationsInbox;
