import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Ruler, CheckCircle } from 'lucide-react';

const ProjectDetails = () => {
  const { id } = useParams();

  // Mock data - normally would fetch based on ID
  const project = {
    title: 'برج الأفق التجاري',
    category: 'تجاري',
    location: 'الرياض، العليا',
    client: 'شركة الاستثمار العقاري',
    area: '25,000 م²',
    year: '2025',
    description: 'يعد هذا المشروع من أبرز المعالم المعمارية الحديثة في مدينة الرياض. يتميز البرج بتصميمه الفريد الذي يجمع بين الأصالة والحداثة، مع استخدام أحدث تقنيات البناء الذكي وتوفير الطاقة.',
    features: [
      'نظام تكييف مركزي ذكي',
      'واجهات زجاجية عازلة للحرارة',
      'مواقف سيارات ذكية متعددة الطوابق',
      'أنظمة أمان وحماية متطورة'
    ],
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop'
    ]
  };

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Navigation */}
        <Link to="/projects" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary-600 mb-8 transition-colors">
          <ArrowLeft size={20} className="rotate-0" /> {/* RTL arrow points left naturally for 'back'? In Arabic back is usually Right arrow? No, actually right arrow is Next. Left is Back. But in RTL, arrow-left points left. Arrow right points right. Users expect back to be 'right arrow'. Let's check lucide. ArrowRight -> points right. ArrowLeft -> points left. In RTL, back is usually pointing right. */}
          {/* Let's fix Arrow direction for RTL */}
          <ArrowLeft size={20} className="rotate-180" /> 
          العودة للمشاريع
        </Link>
        
        {/* Header */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="text-primary-600 font-bold bg-primary-50 px-3 py-1 rounded-full mb-4 inline-block">{project.category}</span>
              <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">{project.title}</h1>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">{project.description}</p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600"><MapPin size={20} /></div>
                  <div>
                    <span className="block text-sm text-gray-400">الموقع</span>
                    <span className="font-bold text-secondary-900">{project.location}</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600"><Ruler size={20} /></div>
                  <div>
                    <span className="block text-sm text-gray-400">المساحة</span>
                    <span className="font-bold text-secondary-900">{project.area}</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600"><Calendar size={20} /></div>
                  <div>
                    <span className="block text-sm text-gray-400">سنة الإنجاز</span>
                    <span className="font-bold text-secondary-900">{project.year}</span>
                  </div>
                </div>
              </div>

              <h3 className="font-bold text-xl mb-4 text-secondary-900">مميزات المشروع</h3>
              <ul className="space-y-3">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <CheckCircle size={18} className="text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="rounded-2xl overflow-hidden h-[400px] shadow-lg mb-6">
                <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                 <img src={project.images[1]} alt="Detail 1" className="w-full h-40 object-cover rounded-xl" />
                 <img src={project.images[2]} alt="Detail 2" className="w-full h-40 object-cover rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
