import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoMenu, IoClose, IoMoon, IoSunny } from 'react-icons/io5';
import { useTheme } from '../hooks/useTheme';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { Button } from '../bits/Button';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme, isLoaded } = useTheme();
  const activeSection = useScrollSpy(['home', 'about', 'skills', 'projects', 'contact']);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
      className={`fixed w-full top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/75 dark:bg-slate-900/75 backdrop-blur-xl shadow-xl border-b border-slate-200/50 dark:border-slate-700/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.a
            href="#home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-sky-500 bg-clip-text text-transparent hover:from-sky-700 hover:to-sky-600 transition-all cursor-pointer"
          >
            Portfolio
          </motion.a>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeSection === item.href.slice(1)
                    ? 'text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-900/30'
                    : 'text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400'
                }`}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isLoaded && (isDark ? <IoSunny size={20} /> : <IoMoon size={20} />)}
            </motion.button>

            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800"
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                      activeSection === item.href.slice(1)
                        ? 'text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-900/30'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
