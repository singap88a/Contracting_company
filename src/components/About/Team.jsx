import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const Team = () => {
  const team = [
    {
      name: 'أحمد محمد',
      role: 'المدير التنفيذي',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop',
      bio: 'خبرة تزيد عن 20 عاماً في إدارة المشاريع الكبرى وتطوير استراتيجيات النمو.'
    },
    {
      name: 'سارة علي',
      role: 'مهندسة معمارية',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
      bio: 'متخصصة في التصميم المستدام وحاصلة على عدة جوائز في التصميم المعماري الحديث.'
    },
    {
      name: 'خالد عمر',
      role: 'مدير المشاريع',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop',
      bio: 'سجل حافل في تسليم المشاريع المعقدة في الوقت المحدد وضمن الميزانية المحددة.'
    },
    {
      name: 'منى عبدالله',
      role: 'مصممة داخلية',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop',
      bio: 'تبدع في خلق مساحات داخلية تجمع بين الجمال والوظيفة بلمسة عصرية فريدة.'
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <span className="text-primary-600 font-bold tracking-wider uppercase bg-primary-50 px-4 py-2 rounded-full inline-block mb-4">فريق العمل</span>
          <h2 className="text-4xl font-bold text-secondary-900 mb-4">نخبة من الخبراء</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            نفتخر بفريقنا المتميز الذي يضم أفضل الكفاءات والخبرات في مجال المقاولات والهندسة، يعملون بشغف لتحقيق رؤيتكم.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-secondary-900/40 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-6">
                   <p className="text-gray-300 text-sm mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                     {member.bio}
                   </p>
                   <div className="flex gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                      <a href="#" className="w-10 h-10 bg-white/20 hover:bg-white hover:text-secondary-900 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors">
                        <Linkedin size={18} />
                      </a>
                      <a href="#" className="w-10 h-10 bg-white/20 hover:bg-white hover:text-secondary-900 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors">
                        <Twitter size={18} />
                      </a>
                      <a href="#" className="w-10 h-10 bg-white/20 hover:bg-white hover:text-primary-500 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors">
                        <Mail size={18} />
                      </a>
                   </div>
                </div>
              </div>
              
              {/* Info */}
              <div className="p-6 text-center relative bg-white">
                <h3 className="text-xl font-bold text-secondary-900 mb-1 group-hover:text-primary-600 transition-colors">{member.name}</h3>
                <p className="text-gray-500 font-medium text-sm uppercase tracking-wider">{member.role}</p>
                <div className="w-12 h-1 bg-gray-100 mx-auto mt-4 group-hover:bg-primary-500 transition-colors duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
