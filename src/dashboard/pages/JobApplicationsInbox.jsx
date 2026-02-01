import React, { useState } from 'react';
import DataTable from '../components/DataTable';
import Modal from '../components/Modal';
import { Download } from 'lucide-react';

const JobApplicationsInbox = () => {
  const [applications, setApplications] = useState([
    { 
      id: 1, 
      fullName: 'محمد أحمد السعيد', 
      email: 'mohamed@example.com', 
      phone: '0501234567',
      jobTitle: 'مهندس مدني',
      cv: 'mohamed_cv.pdf',
      coverLetter: 'أنا مهندس مدني ذو خبرة 5 سنوات في مجال البناء والتشييد. عملت على العديد من المشاريع الكبرى في المملكة وأتطلع للانضمام لفريقكم المتميز.',
      status: 'جديد',
      date: '2024-02-01'
    },
    { 
      id: 2, 
      fullName: 'فاطمة علي الزهراني', 
      email: 'fatima@example.com', 
      phone: '0507654321',
      jobTitle: 'مهندس معماري',
      cv: 'fatima_cv.pdf',
      coverLetter: 'مهندسة معمارية شغوفة بالتصميم الحديث والمستدام. لدي خبرة 3 سنوات في تصميم المشاريع السكنية والتجارية.',
      status: 'تمت المراجعة',
      date: '2024-01-31'
    },
    { 
      id: 3, 
      fullName: 'عبدالله خالد المطيري', 
      email: 'abdullah@example.com', 
      phone: '0509876543',
      jobTitle: 'مدير مشاريع',
      cv: 'abdullah_cv.pdf',
      coverLetter: 'لدي خبرة واسعة في إدارة المشاريع الكبرى تمتد لأكثر من 8 سنوات. نجحت في إدارة مشاريع بقيمة تتجاوز 100 مليون ريال.',
      status: 'مقبول',
      date: '2024-01-30'
    }
  ]);

  const [selectedApplication, setSelectedApplication] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns = [
    { key: 'id', label: '#', sortable: true },
    { key: 'fullName', label: 'الاسم الكامل', sortable: true },
    { key: 'email', label: 'البريد الإلكتروني' },
    { key: 'phone', label: 'رقم الهاتف' },
    { key: 'jobTitle', label: 'المسمى الوظيفي' },
    { key: 'date', label: 'التاريخ', sortable: true },
    { 
      key: 'status', 
      label: 'الحالة',
      render: (status) => (
        <span className={`dashboard-badge ${
          status === 'جديد' ? 'badge-info' : 
          status === 'تمت المراجعة' ? 'badge-warning' : 
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

  const handleStatusChange = (newStatus) => {
    setApplications(applications.map(a => 
      a.id === selectedApplication.id ? { ...a, status: newStatus } : a
    ));
    setSelectedApplication({ ...selectedApplication, status: newStatus });
  };

  const handleDownloadCV = () => {
    alert(`تحميل السيرة الذاتية: ${selectedApplication.cv}`);
    // In production, this would trigger actual file download
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-[#1a2332]">طلبات التوظيف</h2>
        <p className="text-gray-600 mt-1">جميع طلبات التقديم على الوظائف</p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="dashboard-card p-4">
          <p className="text-gray-600 text-sm">طلبات جديدة</p>
          <p className="text-2xl font-bold text-blue-600">
            {applications.filter(a => a.status === 'جديد').length}
          </p>
        </div>
        <div className="dashboard-card p-4">
          <p className="text-gray-600 text-sm">تمت المراجعة</p>
          <p className="text-2xl font-bold text-orange-600">
            {applications.filter(a => a.status === 'تمت المراجعة').length}
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

      {/* Applications Table */}
      <div className="dashboard-card">
        <DataTable
          columns={columns}
          data={applications}
          onEdit={handleView}
        />
      </div>

      {/* View Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="تفاصيل طلب التوظيف"
        size="lg"
      >
        {selectedApplication && (
          <div className="space-y-6">
            {/* Applicant Information */}
            <div>
              <h3 className="text-lg font-semibold text-[#1a2332] mb-3">بيانات المتقدم</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">الاسم الكامل</p>
                  <p className="font-semibold">{selectedApplication.fullName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">البريد الإلكتروني</p>
                  <p className="font-semibold">{selectedApplication.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">رقم الهاتف</p>
                  <p className="font-semibold">{selectedApplication.phone}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">التاريخ</p>
                  <p className="font-semibold">{selectedApplication.date}</p>
                </div>
              </div>
            </div>

            {/* Job Title */}
            <div className="border-t pt-4">
              <p className="text-sm text-gray-600 mb-2">المسمى الوظيفي المتقدم له</p>
              <p className="font-semibold bg-blue-50 text-blue-700 px-4 py-3 rounded-lg inline-block text-lg">
                {selectedApplication.jobTitle}
              </p>
            </div>

            {/* Cover Letter */}
            <div className="border-t pt-4">
              <p className="text-sm text-gray-600 mb-2">رسالة التعريف</p>
              <p className="bg-gray-100 p-4 rounded-lg leading-relaxed">{selectedApplication.coverLetter}</p>
            </div>

            {/* CV Download */}
            <div className="border-t pt-4">
              <p className="text-sm text-gray-600 mb-3">السيرة الذاتية</p>
              <button 
                onClick={handleDownloadCV}
                className="dashboard-btn dashboard-btn-secondary flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                تحميل السيرة الذاتية ({selectedApplication.cv})
              </button>
            </div>

            {/* Status Management */}
            <div className="border-t pt-4">
              <p className="text-sm text-gray-600 mb-3">تغيير الحالة</p>
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={() => handleStatusChange('جديد')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedApplication.status === 'جديد'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  جديد
                </button>
                <button
                  onClick={() => handleStatusChange('تمت المراجعة')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedApplication.status === 'تمت المراجعة'
                      ? 'bg-orange-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  تمت المراجعة
                </button>
                <button
                  onClick={() => handleStatusChange('مقبول')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedApplication.status === 'مقبول'
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  مقبول
                </button>
                <button
                  onClick={() => handleStatusChange('مرفوض')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedApplication.status === 'مرفوض'
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  مرفوض
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default JobApplicationsInbox;
