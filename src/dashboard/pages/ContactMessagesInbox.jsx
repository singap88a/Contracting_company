import React, { useState, useEffect } from 'react';
import DataTable from '../components/DataTable';
import Modal from '../components/Modal';
import { Mail, Loader2, Trash2, AlertTriangle, User, MessageCircle, Calendar, CheckCircle2 } from 'lucide-react';
import { API_URL } from '../../config';
import { useAuth } from '../../context/AuthContext';

const ContactMessagesInbox = () => {
  const { token, logout } = useAuth();
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [messageToDelete, setMessageToDelete] = useState(null);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch(`${API_URL}/contact`, {
        headers: {
          'x-auth-token': token
        }
      });
      if (response.ok) {
        const data = await response.json();
        setMessages(data.map(m => ({ ...m, id: m._id })));
      } else if (response.status === 401) {
        logout();
      }
    } catch (err) {
      console.error('Error fetching messages:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateStatus = async (id, newStatus) => {
    try {
      const response = await fetch(`${API_URL}/contact/${id}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token
        },
        body: JSON.stringify({ status: newStatus })
      });
      if (response.ok) {
        setMessages(messages.map(m => m.id === id ? { ...m, status: newStatus } : m));
        if (selectedMessage && selectedMessage.id === id) {
          setSelectedMessage({ ...selectedMessage, status: newStatus });
        }
      } else if (response.status === 401) {
        logout();
      }
    } catch (err) {
      console.error('Error updating status:', err);
    }
  };

  const handleDelete = async () => {
    if (!messageToDelete) return;
    try {
      const response = await fetch(`${API_URL}/contact/${messageToDelete.id}`, {
        method: 'DELETE',
        headers: {
          'x-auth-token': token
        }
      });
      if (response.ok) {
        setMessages(messages.filter(m => m.id !== messageToDelete.id));
        setIsDeleteModalOpen(false);
        setMessageToDelete(null);
      } else if (response.status === 401) {
        logout();
      }
    } catch (err) {
      console.error('Error deleting message:', err);
    }
  };

  const columns = [
    { key: 'fullName', label: 'المرسل', sortable: true },
    { key: 'email', label: 'البريد الإلكتروني' },
    { key: 'subject', label: 'الموضوع', sortable: true },
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
          status === 'تمت القراءة' ? 'badge-warning' : 
          'badge-success'
        }`}>
          {status}
        </span>
      )
    }
  ];

  const handleViewMessage = (message) => {
    setSelectedMessage(message);
    setIsModalOpen(true);
    if (message.status === 'جديد') {
      handleUpdateStatus(message.id, 'تمت القراءة');
    }
  };

  const handleDeleteClick = (message) => {
    setMessageToDelete(message);
    setIsDeleteModalOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-[#1a2332]">رسائل اتصل بنا</h2>
          <p className="text-gray-600 mt-1">إدارة ومتابعة رسائل العملاء الواردة</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="dashboard-card p-6 flex items-center gap-4 border-r-4 border-blue-500">
          <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500">
            <Mail size={24} />
          </div>
          <div>
            <p className="text-gray-500 text-sm font-medium">إجمالي الرسائل</p>
            <p className="text-2xl font-bold text-secondary-900">{messages.length}</p>
          </div>
        </div>
        <div className="dashboard-card p-6 flex items-center gap-4 border-r-4 border-orange-500">
          <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500">
            <Loader2 size={24} />
          </div>
          <div>
            <p className="text-gray-500 text-sm font-medium">رسائل جديدة</p>
            <p className="text-2xl font-bold text-secondary-900">
              {messages.filter(m => m.status === 'جديد').length}
            </p>
          </div>
        </div>
        <div className="dashboard-card p-6 flex items-center gap-4 border-r-4 border-green-500">
          <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-500">
            <CheckCircle2 size={24} />
          </div>
          <div>
            <p className="text-gray-500 text-sm font-medium">تمت المراجعة</p>
            <p className="text-2xl font-bold text-secondary-900">
              {messages.filter(m => m.status !== 'جديد').length}
            </p>
          </div>
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
            data={messages}
            onEdit={handleViewMessage}
            onDelete={handleDeleteClick}
          />
        )}
      </div>

      {/* Message View Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="عرض الرسالة"
        size="lg"
      >
        {selectedMessage && (
          <div className="space-y-6" dir="rtl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-2xl space-y-3">
                  <div className="flex items-center gap-3">
                    <User className="text-primary-500" size={18} />
                    <span className="font-bold text-gray-900">{selectedMessage.fullName}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Mail size={16} />
                    <span>{selectedMessage.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Calendar size={16} />
                    <span>{new Date(selectedMessage.date).toLocaleString('ar-SA')}</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-primary-50 rounded-2xl">
                  <p className="text-xs text-primary-600 font-bold mb-1">الموضوع</p>
                  <p className="font-bold text-secondary-900">{selectedMessage.subject}</p>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => handleUpdateStatus(selectedMessage.id, 'تم الرد')}
                    className={`flex-1 py-2 rounded-xl text-sm font-bold transition-colors ${
                      selectedMessage.status === 'تم الرد' 
                        ? 'bg-green-600 text-white' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    تم الرد
                  </button>
                  <button 
                    onClick={() => {
                        window.location.href = `mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.subject}`;
                    }}
                    className="flex-1 py-2 bg-secondary-900 text-white rounded-xl text-sm font-bold hover:bg-secondary-800 transition-colors"
                  >
                    إرسال إيميل
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-900 font-bold">
                <MessageCircle size={20} className="text-primary-500" />
                <h3>محتوى الرسالة</h3>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl text-gray-700 leading-relaxed min-h-[150px]">
                {selectedMessage.message}
              </div>
            </div>
          </div>
        )}
      </Modal>

      {/* Delete Modal */}
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        title="تأكيد الحذف"
      >
        <div className="text-center py-6" dir="rtl">
          <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertTriangle size={40} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">هل أنت متأكد؟</h3>
          <p className="text-gray-600 mb-8 px-4">
            أنت على وشك حذف رسالة المرسل <span className="font-bold text-red-600">"{messageToDelete?.fullName}"</span>. هدا الإجراء لا يمكن التراجع عنه.
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={handleDelete}
              className="px-6 py-3 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-colors flex-1 flex items-center justify-center gap-2"
            >
              <Trash2 size={18} />
              حذف الآن
            </button>
            <button
              onClick={() => setIsDeleteModalOpen(false)}
              className="px-6 py-3 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-colors flex-1"
            >
              إلغاء
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ContactMessagesInbox;
