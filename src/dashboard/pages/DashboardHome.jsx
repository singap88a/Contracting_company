import React from 'react';
import StatCard from '../components/StatCard';
import { Briefcase, FolderKanban, Users, MessageSquare, TrendingUp, Clock } from 'lucide-react';

const DashboardHome = () => {
  // Mock statistics data
  const stats = [
    {
      icon: Briefcase,
      title: 'إجمالي الخدمات',
      value: '12',
      change: '+8',
      changeType: 'increase',
      gradient: 'primary'
    },
    {
      icon: FolderKanban,
      title: 'المشاريع المنجزة',
      value: '48',
      change: '+12',
      changeType: 'increase',
      gradient: 'secondary'
    },
    {
      icon: Users,
      title: 'الوظائف المتاحة',
      value: '6',
      change: '+2',
      changeType: 'increase',
      gradient: 'success'
    },
    {
      icon: MessageSquare,
      title: 'الرسائل الجديدة',
      value: '23',
      change: '+15',
      changeType: 'increase',
      gradient: 'info'
    }
  ];

  // Mock recent activity
  const recentActivity = [
    { id: 1, type: 'service_request', message: 'طلب خدمة جديد من أحمد محمد', time: 'منذ 5 دقائق', icon: MessageSquare, color: 'text-blue-600' },
    { id: 2, type: 'job_application', message: 'تقديم جديد على وظيفة مهندس مدني', time: 'منذ 15 دقيقة', icon: Users, color: 'text-green-600' },
    { id: 3, type: 'contact', message: 'رسالة جديدة في اتصل بنا', time: 'منذ ساعة', icon: MessageSquare, color: 'text-orange-600' },
    { id: 4, type: 'project', message: 'تم إضافة مشروع جديد', time: 'منذ ساعتين', icon: FolderKanban, color: 'text-purple-600' },
    { id: 5, type: 'service', message: 'تم تحديث خدمة البناء والتشييد', time: 'منذ 3 ساعات', icon: Briefcase, color: 'text-indigo-600' }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-[#1a2332] to-[#2a3442] rounded-xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-2">مرحباً بك في لوحة التحكم! 👋</h2>
        <p className="text-gray-300">إليك نظرة عامة على نشاط موقعك اليوم</p>
      </div>

      {/* Statistics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <StatCard key={idx} {...stat} />
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="dashboard-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-[#1a2332]">النشاط الأخير</h3>
            <Clock className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className={`p-2 rounded-lg bg-gray-100 ${activity.color}`}>
                  <activity.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="dashboard-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-[#1a2332]">إجراءات سريعة</h3>
            <TrendingUp className="w-5 h-5 text-gray-400" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 bg-gradient-to-br from-[#ff6b35] to-[#e55a2b] text-white rounded-xl hover:shadow-lg transition-all hover:scale-105">
              <Briefcase className="w-8 h-8 mb-2" />
              <p className="font-semibold">إضافة خدمة</p>
            </button>
            <button className="p-4 bg-gradient-to-br from-[#1a2332] to-[#2a3442] text-white rounded-xl hover:shadow-lg transition-all hover:scale-105">
              <FolderKanban className="w-8 h-8 mb-2" />
              <p className="font-semibold">إضافة مشروع</p>
            </button>
            <button className="p-4 bg-gradient-to-br from-[#10b981] to-[#059669] text-white rounded-xl hover:shadow-lg transition-all hover:scale-105">
              <Users className="w-8 h-8 mb-2" />
              <p className="font-semibold">إضافة وظيفة</p>
            </button>
            <button className="p-4 bg-gradient-to-br from-[#3b82f6] to-[#2563eb] text-white rounded-xl hover:shadow-lg transition-all hover:scale-105">
              <MessageSquare className="w-8 h-8 mb-2" />
              <p className="font-semibold">عرض الرسائل</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
