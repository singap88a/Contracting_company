import React, { useState, useEffect } from 'react';
import { Save, Globe, Phone, Mail, MapPin, Award, Users, Building2, Facebook, Instagram, Twitter, Linkedin, MessageCircle, Clock, Loader2, CheckCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { API_URL } from '../../config';

const SiteSettings = () => {
    const [siteData, setSiteData] = useState({
        address: '',
        phone: '',
        email: '',
        workingHours: '',
        facebook: '',
        instagram: '',
        twitter: '',
        linkedin: '',
        whatsapp: '',
        statsYears: '',
        statsProjects: '',
        statsAwards: '',
        statsEngineers: ''
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const { token } = useAuth();

    useEffect(() => {
        fetchSiteSettings();
    }, []);

    const fetchSiteSettings = async () => {
        try {
            const response = await fetch(`${API_URL}/settings`);
            if (response.ok) {
                const data = await response.json();
                setSiteData(data);
            }
        } catch (err) {
            console.error('Error fetching settings:', err);
        }
    };

    const handleSiteSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess(false);

        try {
            const response = await fetch(`${API_URL}/settings`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': token
                },
                body: JSON.stringify(siteData)
            });

            if (response.ok) {
                setSuccess(true);
                setTimeout(() => setSuccess(false), 3000);
            } else {
                setError('حدث خطأ أثناء حفظ الإعدادات');
            }
        } catch (err) {
            setError('حدث خطأ في الاتصال بالسيرفر');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-6xl mx-auto space-y-6 pb-12">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">إدارة بيانات الموقع</h2>
                    <p className="text-gray-500 mt-1">تحديث بيانات التواصل، روابط التواصل الاجتماعي، وإحصائيات الشركة</p>
                </div>
            </div>

            {success && (
                <div className="bg-green-50 border border-green-100 text-green-700 px-6 py-4 rounded-2xl flex items-center gap-3 animate-fade-in">
                    <CheckCircle className="w-6 h-6" />
                    <span className="font-bold">تم حفظ التغييرات بنجاح!</span>
                </div>
            )}

            {error && (
                <div className="bg-red-50 border border-red-100 text-red-700 px-6 py-4 rounded-2xl flex items-center gap-3 font-bold">
                    <span>{error}</span>
                </div>
            )}

            <form onSubmit={handleSiteSubmit} className="space-y-6">
                {/* Contact Info Section */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                    <h3 className="text-xl font-bold text-secondary-900 mb-8 flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center">
                            <Phone size={20} />
                        </div>
                        بيانات التواصل الأساسية
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">رقم الهاتف</label>
                            <input 
                                value={siteData.phone}
                                onChange={(e) => setSiteData({...siteData, phone: e.target.value})}
                                className="dashboard-input" dir="ltr" placeholder="+966 --- --- ---"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">البريد الإلكتروني</label>
                            <input 
                                value={siteData.email}
                                onChange={(e) => setSiteData({...siteData, email: e.target.value})}
                                className="dashboard-input" placeholder="info@company.com"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-bold text-gray-700 mb-2">العنوان</label>
                            <input 
                                value={siteData.address}
                                onChange={(e) => setSiteData({...siteData, address: e.target.value})}
                                className="dashboard-input" placeholder="الرياض، حي الملقا، شارع..."
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-bold text-gray-700 mb-2">ساعات العمل</label>
                            <input 
                                value={siteData.workingHours}
                                onChange={(e) => setSiteData({...siteData, workingHours: e.target.value})}
                                className="dashboard-input" placeholder="يومياً من 8 صباحاً حتى 5 مساءً"
                            />
                        </div>
                    </div>
                </div>

                {/* Social Media Section */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                    <h3 className="text-xl font-bold text-secondary-900 mb-8 flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                            <Globe size={20} />
                        </div>
                        روابط السوشيال ميديا
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative">
                            <Facebook className="absolute right-4 top-10 w-5 h-5 text-[#1877F2]" />
                            <label className="block text-sm font-bold text-gray-700 mb-2">فيسبوك</label>
                            <input 
                                value={siteData.facebook}
                                onChange={(e) => setSiteData({...siteData, facebook: e.target.value})}
                                className="dashboard-input pr-12" placeholder="https://facebook.com/..."
                            />
                        </div>
                        <div className="relative">
                            <Instagram className="absolute right-4 top-10 w-5 h-5 text-[#E4405F]" />
                            <label className="block text-sm font-bold text-gray-700 mb-2">انستقرام</label>
                            <input 
                                value={siteData.instagram}
                                onChange={(e) => setSiteData({...siteData, instagram: e.target.value})}
                                className="dashboard-input pr-12" placeholder="https://instagram.com/..."
                            />
                        </div>
                        <div className="relative">
                            <Twitter className="absolute right-4 top-10 w-5 h-5 text-[#1DA1F2]" />
                            <label className="block text-sm font-bold text-gray-700 mb-2">تويتر (X)</label>
                            <input 
                                value={siteData.twitter}
                                onChange={(e) => setSiteData({...siteData, twitter: e.target.value})}
                                className="dashboard-input pr-12" placeholder="https://twitter.com/..."
                            />
                        </div>
                        <div className="relative">
                            <Linkedin className="absolute right-4 top-10 w-5 h-5 text-[#0A66C2]" />
                            <label className="block text-sm font-bold text-gray-700 mb-2">لينكد إن</label>
                            <input 
                                value={siteData.linkedin}
                                onChange={(e) => setSiteData({...siteData, linkedin: e.target.value})}
                                className="dashboard-input pr-12" placeholder="https://linkedin.com/..."
                            />
                        </div>
                        <div className="relative md:col-span-2">
                            <MessageCircle className="absolute right-4 top-10 w-5 h-5 text-[#25D366]" />
                            <label className="block text-sm font-bold text-gray-700 mb-2">واتساب (رقم الهاتف مع كود الدولة)</label>
                            <input 
                                value={siteData.whatsapp}
                                onChange={(e) => setSiteData({...siteData, whatsapp: e.target.value})}
                                className="dashboard-input pr-12" placeholder="9665xxxxxxxx"
                            />
                        </div>
                    </div>
                </div>

        

                <div className="pt-4 flex justify-end">
                    <button disabled={loading} type="submit" className="dashboard-btn dashboard-btn-primary px-16 h-16 text-lg font-black shadow-2xl shadow-primary-500/20 flex items-center gap-4">
                        {loading ? <Loader2 className="animate-spin" /> : <><Save size={24} /> حفظ كافة الإعدادات</>}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SiteSettings;
