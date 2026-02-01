import React, { useState } from 'react';
import DataTable from '../components/DataTable';
import Modal from '../components/Modal';

const ContactMessagesInbox = () => {
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      fullName: 'عمر محمود السعيد', 
      email: 'omar@example.com', 
      subject: 'استفسار عن الخدمات',
      message: 'أود الاستفسار عن خدمات البناء والتشييد المتوفرة لديكم وأسعارها التقريبية',
      isRead: false,
      date: '2024-02-01'
    },
    { 
      id: 2, 
      fullName: 'نورة سعيد العتيبي', 
      email: 'noura@example.com', 
      subject: 'طلب عرض سعر',
      message: 'أرغب في الحصول على عرض سعر لمشروع ترميم فيلا سكنية',
      isRead: true,
      date: '2024-01-31'
    },
    { 
      id: 3, 
      fullName: 'يوسف عبدالله المطيري', 
      email: 'youssef@example.com', 
      subject: 'شكر وتقدير',
      message: 'أشكركم على الخدمة الممتازة والاحترافية العالية في تنفيذ مشروعنا',
      isRead: true,
      date: '2024-01-30'
    }
  ]);

  const [selectedMessage, setSelectedMessage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns = [
    { key: 'id', label: '#', sortable: true },
    { 
      key: 'isRead', 
      label: '',
      render: (isRead) => (
        !isRead && <div className="w-2 h-2 bg-[#ff6b35] rounded-full"></div>
      )
    },
    { key: 'fullName', label: 'الاسم الكامل', sortable: true },
    { key: 'email', label: 'البريد الإلكتروني' },
    { key: 'subject', label: 'الموضوع' },
    { key: 'date', label: 'التاريخ', sortable: true },
    { 
      key: 'isRead', 
      label: 'الحالة',
      render: (isRead) => (
        <span className={`dashboard-badge ${isRead ? 'badge-secondary' : 'badge-info'}`}>
          {isRead ? 'مقروءة' : 'جديدة'}
        </span>
      )
    }
  ];

  const handleView = (message) => {
    setSelectedMessage(message);
    setIsModalOpen(true);
    
    // Mark as read
    if (!message.isRead) {
      setMessages(messages.map(m => 
        m.id === message.id ? { ...m, isRead: true } : m
      ));
    }
  };

  const handleToggleRead = () => {
    const newReadStatus = !selectedMessage.isRead;
    setMessages(messages.map(m => 
      m.id === selectedMessage.id ? { ...m, isRead: newReadStatus } : m
    ));
    setSelectedMessage({ ...selectedMessage, isRead: newReadStatus });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-[#1a2332]">رسائل اتصل بنا</h2>
        <p className="text-gray-600 mt-1">جميع الرسائل الواردة من نموذج اتصل بنا</p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="dashboard-card p-4">
          <p className="text-gray-600 text-sm">رسائل جديدة</p>
          <p className="text-2xl font-bold text-blue-600">
            {messages.filter(m => !m.isRead).length}
          </p>
        </div>
        <div className="dashboard-card p-4">
          <p className="text-gray-600 text-sm">إجمالي الرسائل</p>
          <p className="text-2xl font-bold text-gray-600">
            {messages.length}
          </p>
        </div>
      </div>

      {/* Messages Table */}
      <div className="dashboard-card">
        <DataTable
          columns={columns}
          data={messages}
          onEdit={handleView}
        />
      </div>

      {/* View Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="تفاصيل الرسالة"
      >
        {selectedMessage && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">الاسم الكامل</p>
                <p className="font-semibold">{selectedMessage.fullName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">البريد الإلكتروني</p>
                <p className="font-semibold">{selectedMessage.email}</p>
              </div>
              <div className="col-span-2">
                <p className="text-sm text-gray-600">التاريخ</p>
                <p className="font-semibold">{selectedMessage.date}</p>
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-600 mb-2">الموضوع</p>
              <p className="font-semibold bg-gray-100 p-3 rounded-lg">{selectedMessage.subject}</p>
            </div>

            <div>
              <p className="text-sm text-gray-600 mb-2">نص الرسالة</p>
              <p className="bg-gray-100 p-4 rounded-lg whitespace-pre-wrap">{selectedMessage.message}</p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t">
              <button
                onClick={handleToggleRead}
                className="dashboard-btn dashboard-btn-outline"
              >
                {selectedMessage.isRead ? 'وضع علامة كغير مقروءة' : 'وضع علامة كمقروءة'}
              </button>
              <button className="dashboard-btn dashboard-btn-primary">
                الرد على الرسالة
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ContactMessagesInbox;
