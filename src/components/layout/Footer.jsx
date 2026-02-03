import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, ArrowRight, MessageCircle } from 'lucide-react';
import { API_URL } from '../../config';

const Footer = () => {
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/settings`)
      .then(res => res.json())
      .then(data => setSettings(data))
      .catch(err => console.error('Error fetching settings:', err));
  }, []);

  const socialLinks = [
    { icon: Facebook, url: settings?.facebook, color: 'hover:bg-[#1877F2]' },
    { icon: Instagram, url: settings?.instagram, color: 'hover:bg-[#E4405F]' },
    { icon: Twitter, url: settings?.twitter, color: 'hover:bg-[#1DA1F2]' },
    { icon: Linkedin, url: settings?.linkedin, color: 'hover:bg-[#0A66C2]' },
    { icon: MessageCircle, url: settings?.whatsapp ? `https://wa.me/${settings.whatsapp}` : null, color: 'hover:bg-[#25D366]' },
  ].filter(link => link.url);

  return (
    <footer className="bg-secondary-900 text-white pt-16 pb-8 mt-auto relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img 
                src="/logo.jpg" 
                alt="Logo" 
                className="h-16 w-auto object-contain brightness-110 contrast-110" 
              />
            </div>
            <p className="text-gray-400 leading-relaxed">
              نحن شركة رائدة في مجال المقاولات والبناء، نسعى دائماً لتقديم أفضل الخدمات بجودة عالية واحترافية تامة لتحقيق رؤية عملائنا.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 ${social.color} hover:text-white transition-all duration-300 border border-white/5 hover:border-transparent hover:-translate-y-1`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
               <div className="w-1.5 h-6 bg-primary-500 rounded-full"></div>
               روابط سريعة
            </h3>
            <ul className="space-y-4">
              {[
                { name: 'الرئيسية', path: '/' },
                { name: 'من نحن', path: '/about' },
                { name: 'خدماتنا', path: '/services' },
                { name: 'المشاريع', path: '/projects' },
                { name: 'الوظائف', path: '/careers' },
                { name: 'تواصل معنا', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-gray-400 hover:text-primary-500 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight size={16} className="text-primary-500 opacity-0 group-hover:opacity-100 transition-all -mr-4 group-hover:mr-2" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
               <div className="w-1.5 h-6 bg-primary-500 rounded-full"></div>
               خدماتنا
            </h3>
            <ul className="space-y-4">
              {[
                'التصميم المعماري',
                'البناء والتشييد',
                'التصميم الداخلي',
                'ادارة المشاريع',
                'تنسيق الحدائق',
                'ترميم المباني'
              ].map((service, i) => (
                <li key={i}>
                  <Link to="/services" className="text-gray-400 hover:text-primary-500 transition-colors flex items-center gap-2 group">
                     <ArrowRight size={14} className="text-primary-500/50" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
               <div className="w-1.5 h-6 bg-primary-500 rounded-full"></div>
               معلومات التواصل
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-primary-500/10 flex items-center justify-center flex-shrink-0 text-primary-500 border border-primary-500/20 group-hover:bg-primary-500 group-hover:text-white transition-all">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-sm text-gray-200">العنوان</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{settings?.address || 'تحميل...'}</p>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-primary-500/10 flex items-center justify-center flex-shrink-0 text-primary-500 border border-primary-500/20 group-hover:bg-primary-500 group-hover:text-white transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-sm text-gray-200">الهاتف</h4>
                  <p className="text-gray-400 text-sm" dir="ltr">{settings?.phone || 'تحميل...'}</p>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-primary-500/10 flex items-center justify-center flex-shrink-0 text-primary-500 border border-primary-500/20 group-hover:bg-primary-500 group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-sm text-gray-200">البريد الإلكتروني</h4>
                  <p className="text-gray-400 text-sm truncate max-w-[180px]">{settings?.email || 'تحميل...'}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-sm font-medium">
            © {new Date().getFullYear()} جميع الحقوق محفوظة لشركة المقاولات
          </p>
          <div className="flex gap-8 text-sm text-gray-500 font-medium">
            <Link to="/privacy" className="hover:text-primary-500 transition-colors">سياسة الخصوصية</Link>
            <Link to="/terms" className="hover:text-primary-500 transition-colors">الشروط والأحكام</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
