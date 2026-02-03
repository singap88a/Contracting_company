import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowLeft, Building2, ChevronRight, Home, Info, Briefcase, Users, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const links = [
    { name: 'الرئيسية', path: '/', icon: Home },
    { name: 'من نحن', path: '/about', icon: Info },
    { name: 'خدماتنا', path: '/services', icon: Briefcase },
    { name: 'مشاريعنا', path: '/projects', icon: Building2 },
    { name: 'الوظائف', path: '/careers', icon: Users },
    { name: 'اتصل بنا', path: '/contact', icon: Phone },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20 flex items-center ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100/50' 
            : 'bg-white/90 backdrop-blur-md border-b border-transparent'
        }`}
      >
        <div className="container mx-auto px-4 max-w-7xl h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link to="/" className="flex items-center group h-full py-2">
              <img 
                src="/logo.png" 
                alt="Logo" 
                className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2 h-full ">
              {links.map((link) => {
                const Icon = link.icon;
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="relative group h-9 px-3 flex items-center gap-2 rounded-lg transition-all duration-300 overflow-hidden "
                  >
                    {/* Background Hover/Active */}
                    <div className={`absolute inset-0 transition-colors duration-300 ${active ? 'bg-primary-50' : 'bg-transparent group-hover:bg-gray-50'}`} />
                    
                    {/* Active Indicator Line */}
                    {active && (
                      <motion.div
                        layoutId="activeTabIndicatorDesktop"
                        className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary-600 rounded-t-full shadow-[0_-2px_6px_rgba(234,88,12,0.4)]"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}

                    {/* Content */}
                    <Icon 
                      size={18} 
                      strokeWidth={active ? 2.5 : 2} 
                      className={`relative z-10 transition-colors duration-300 ${active ? 'text-primary-600' : 'text-gray-400 group-hover:text-secondary-900'}`} 
                    />
                    <span className={`relative z-10 text-sm font-bold transition-colors duration-300 ${active ? 'text-secondary-900' : 'text-gray-600 group-hover:text-secondary-900'}`}>
                      {link.name}
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-4">
               <Link 
                to="/request-service"
                className="group relative px-6 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-bold shadow-lg shadow-primary-600/25 transition-all overflow-hidden active:scale-95 flex items-center gap-2 text-sm"
              >
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                 <span className="relative z-10">طلب عرض سعر</span>
                 <ArrowLeft size={16} className="relative z-10 transition-transform group-hover:-translate-x-1" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden p-2.5 text-secondary-900 hover:bg-gray-100 rounded-xl transition-colors active:scale-95"
            >
              <Menu size={26} strokeWidth={2} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer & Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-md bg-white z-[70] shadow-2xl lg:hidden flex flex-col"
            >
              <div className="h-20 px-6 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
                <span className="text-lg font-black text-secondary-900">القائمة الرئيسية</span>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 bg-white text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg border border-gray-100 transition-all"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-6 px-6">
                <div className="flex flex-col gap-3">
                  {links.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <motion.div
                        key={link.path}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 + 0.1 }}
                      >
                        <Link
                          to={link.path}
                          onClick={() => setIsOpen(false)}
                          className={`
                            group flex items-center justify-between p-4 rounded-xl transition-all duration-300 border
                            ${isActive(link.path)
                              ? 'bg-primary-50 text-secondary-900 border-primary-100 shadow-sm'
                              : 'bg-white border-transparent hover:border-gray-100 hover:shadow-sm text-gray-600'
                            }
                          `}
                        >
                          <div className="flex items-center gap-4">
                            <div className={`
                              w-10 h-10 rounded-lg flex items-center justify-center transition-colors
                              ${isActive(link.path) ? 'bg-primary-100 text-primary-600' : 'bg-gray-50 text-gray-400 group-hover:bg-primary-50 group-hover:text-primary-600'}
                            `}>
                              <Icon size={20} strokeWidth={2} />
                            </div>
                            <span className="font-bold text-base">{link.name}</span>
                          </div>
                          {isActive(link.path) ? (
                            <div className="w-1.5 h-1.5 rounded-full bg-primary-600" />
                          ) : (
                            <ChevronRight size={18} className="text-gray-300 group-hover:text-primary-400 transition-colors" />
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <div className="p-6 border-t border-gray-100 bg-gray-50/50">
                <Link
                  to="/request-service"
                  onClick={() => setIsOpen(false)}
                  className="group w-full py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-bold shadow-lg shadow-primary-600/20 flex items-center justify-center gap-3 transition-all active:scale-[0.98] overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  <span className="relative">طلب عرض سعر</span>
                  <ArrowLeft size={20} className="relative transition-transform group-hover:-translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
