import React, { useState } from 'react';
import { Save, User, Lock, Loader2, CheckCircle, Mail } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { API_URL } from '../../config';

const Settings = () => {
    // Account Settings State
    const [accountData, setAccountData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });
    
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const { token } = useAuth();

    const handleAccountSubmit = async (e) => {
        e.preventDefault();
        if (accountData.password && accountData.password !== accountData.confirmPassword) {
            return setError('كلمات المرور غير متطابقة');
        }

        setLoading(true);
        setError('');
        setSuccess(false);

        try {
            const response = await fetch(`${API_URL}/auth/settings`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': token
                },
                body: JSON.stringify({ 
                    email: accountData.email || undefined, 
                    password: accountData.password || undefined 
                })
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess(true);
                setAccountData({ email: '', password: '', confirmPassword: '' });
                setTimeout(() => setSuccess(false), 3000);
            } else {
                setError(data.msg || 'حدث خطأ أثناء التحديث');
            }
        } catch (err) {
            setError('حدث خطأ في الاتصال بالسيرفر');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto space-y-6 pb-12">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">إعدادات الحساب</h2>
                    <p className="text-gray-500 mt-1">تحديث بيانات البريد الإلكتروني وكلمة المرور الخاصة بالمدير</p>
                </div>
            </div>

            {success && (
                <div className="bg-green-50 border border-green-100 text-green-700 px-6 py-4 rounded-2xl flex items-center gap-3 animate-fade-in">
                    <CheckCircle className="w-6 h-6" />
                    <span className="font-bold">تم تحديث بيانات الحساب بنجاح!</span>
                </div>
            )}

            {error && (
                <div className="bg-red-50 border border-red-100 text-red-700 px-6 py-4 rounded-2xl flex items-center gap-3 font-bold">
                    <span>{error}</span>
                </div>
            )}

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <form onSubmit={handleAccountSubmit} className="p-8 space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-6">
                            <h3 className="text-lg font-bold text-gray-900 border-r-4 border-primary-500 pr-3">تحديث البريد الإلكتروني</h3>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">البريد الإلكتروني الجديد</label>
                                <div className="relative">
                                    <Mail className="absolute right-4 top-3.5 w-5 h-5 text-gray-400" />
                                    <input 
                                        type="email" 
                                        value={accountData.email}
                                        onChange={(e) => setAccountData({...accountData, email: e.target.value})}
                                        className="dashboard-input pr-12"
                                        placeholder="new-email@example.com"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-lg font-bold text-gray-900 border-r-4 border-primary-500 pr-3">تغيير كلمة المرور</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">كلمة المرور الجديدة</label>
                                    <div className="relative">
                                        <Lock className="absolute right-4 top-3.5 w-5 h-5 text-gray-400" />
                                        <input 
                                            type="password" 
                                            value={accountData.password}
                                            onChange={(e) => setAccountData({...accountData, password: e.target.value})}
                                            className="dashboard-input pr-12"
                                            placeholder="••••••••"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">تأكيد كلمة المرور</label>
                                    <div className="relative">
                                        <Lock className="absolute right-4 top-3.5 w-5 h-5 text-gray-400" />
                                        <input 
                                            type="password" 
                                            value={accountData.confirmPassword}
                                            onChange={(e) => setAccountData({...accountData, confirmPassword: e.target.value})}
                                            className="dashboard-input pr-12"
                                            placeholder="••••••••"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 border-t flex justify-end">
                        <button disabled={loading} type="submit" className="dashboard-btn dashboard-btn-primary px-12 h-14 flex items-center gap-3">
                            {loading ? <Loader2 className="animate-spin" /> : <><Save size={20} /> حفظ التغييرات</>}
                        </button>
                    </div>
                </form>
            </div>
            
            <div className="bg-primary-50 rounded-2xl p-6 border border-primary-100 flex gap-4">
                <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center shrink-0">
                    <Lock className="text-white w-6 h-6" />
                </div>
                <div>
                    <h4 className="text-primary-900 font-bold mb-1">نصيحة أمان</h4>
                    <p className="text-primary-700/80 text-sm">
                        تأكد من استخدام كلمة مرور قوية وفريدة. ننصح بتغيير كلمة المرور بشكل دوري لضمان أمان لوحة التحكم.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Settings;
