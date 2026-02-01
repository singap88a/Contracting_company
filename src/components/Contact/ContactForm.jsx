import React, { useState } from 'react';
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { API_URL } from '../../config';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus({ type: 'success', message: 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.' });
        setFormData({ fullName: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ type: 'error', message: 'حدث خطأ أثناء الإرسال. يرجى المحاولة لاحقاً.' });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus({ type: 'error', message: 'فشل الاتصال بالسيرفر.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-0">
       <h3 className="text-2xl font-black text-secondary-900 mb-6">أرسل لنا رسالة</h3>
       
       {status.message && (
        <div className={`mb-6 p-4 rounded-xl flex items-center gap-2 ${
          status.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
        }`}>
          {status.type === 'success' ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
          <p className="font-bold text-sm">{status.message}</p>
        </div>
       )}

       <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <input 
               type="text" 
               name="fullName"
               value={formData.fullName}
               onChange={handleChange}
               placeholder="الاسم بالكامل" 
               required
               className="w-full px-5 py-3 rounded-2xl border border-gray-100 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/5 outline-none bg-gray-50/50 transition-all font-medium" 
             />
             <input 
               type="email" 
               name="email"
               value={formData.email}
               onChange={handleChange}
               placeholder="البريد الإلكتروني" 
               required
               className="w-full px-5 py-3 rounded-2xl border border-gray-100 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/5 outline-none bg-gray-50/50 transition-all font-medium" 
             />
          </div>
          <input 
            type="text" 
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="الموضوع" 
            required
            className="w-full px-5 py-3 rounded-2xl border border-gray-100 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/5 outline-none bg-gray-50/50 transition-all font-medium" 
          />
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4" 
            placeholder="نص الرسالة..." 
            required
            className="w-full px-5 py-3 rounded-2xl border border-gray-100 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/5 outline-none bg-gray-50/50 transition-all font-medium resize-none"
          ></textarea>
          
          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-4 bg-secondary-900 text-white rounded-2xl font-black hover:bg-primary-500 hover:text-secondary-950 transition-all duration-300 flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              <>
                <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                <span>إرسال الرسالة</span>
              </>
            )}
          </button>
       </form>
    </div>
  );
};

export default ContactForm;
