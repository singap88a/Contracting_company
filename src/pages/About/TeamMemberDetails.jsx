import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Mail, Phone, MapPin, Calendar, Share2, ChevronLeft, MessageCircle, Loader2 } from 'lucide-react';
import { API_URL } from '../../config';

const TeamMemberDetails = () => {
  const { id } = useParams();
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMember = async () => {
      try {
        const response = await fetch(`${API_URL}/team/${id}`);
        if (response.ok) {
          const data = await response.json();
          setMember(data);
        }
      } catch (err) {
        console.error('Error fetching member:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMember();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-12 h-12 text-primary-500 animate-spin" />
      </div>
    );
  }

  if (!member) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">عذراً، هذا العضو غير موجود</h2>
        <Link to="/team" className="text-primary-600 hover:text-primary-700 font-medium">
          العودة لفريق العمل
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen" dir="rtl">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Image Side */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="sticky top-32"
            >
              <div className="relative rounded-[3rem] overflow-hidden bg-gray-50 aspect-[4/5] shadow-2xl border-8 border-white">
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-200">
                    <span className="text-8xl text-gray-400">👤</span>
                  </div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Details Side */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="px-6 py-2 bg-primary-50 text-primary-600 rounded-full text-sm font-bold tracking-wider uppercase border border-primary-100">
                  {member.role}
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-black text-secondary-900 mb-8 leading-tight">
                {member.name}
              </h1>

              <div className="prose prose-lg max-w-none text-gray-500 leading-loose">
                <p className="whitespace-pre-line mb-8 text-lg">
                  {member.bio || 'لا توجد نبذة متاحة حالياً.'}
                </p>

                {member.qualifications && member.qualifications.length > 0 && (
                  <>
                    <h3 className="text-2xl font-bold text-secondary-900 mb-4">الخبرات والمؤهلات</h3>
                    <ul className="space-y-4 list-none p-0">
                      {member.qualifications.map((qual, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary-500 mt-2.5 flex-shrink-0" />
                          <span>{qual}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              <div className="mt-12 pt-12 border-t border-gray-100">
                <h3 className="text-xl font-bold text-secondary-900 mb-6 flex items-center gap-2">
                  <Share2 className="w-5 h-5 text-primary-500" />
                  تواصل مع {member.name.split(' ')[0]}
                </h3>
                <div className="flex gap-4">
                  {member.socials?.facebook && (
                    <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300">
                      <Facebook className="w-5 h-5" />
                      <span className="font-bold">فيسبوك</span>
                    </a>
                  )}
                  {member.socials?.whatsapp && (
                    <a href={`https://wa.me/${member.socials.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 bg-green-50 text-green-600 rounded-xl hover:bg-green-600 hover:text-white transition-all duration-300">
                       <MessageCircle className="w-5 h-5" />
                       <span className="font-bold">واتساب</span>
                    </a>
                  )}
                  {member.socials?.email && (
                    <a href={`mailto:${member.socials.email}`} className="flex items-center gap-3 px-6 py-3 bg-gray-50 text-gray-600 rounded-xl hover:bg-gray-600 hover:text-white transition-all duration-300">
                      <Mail className="w-5 h-5" />
                      <span className="font-bold">إيميل</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberDetails;
