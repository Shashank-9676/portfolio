import { motion } from 'framer-motion';
import { IoArrowDown } from 'react-icons/io5';
import { Button } from '../bits/Button';

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800"
    >
      <div className="absolute inset-0 -z-10">
        <motion.div 
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 left-10 w-72 h-72 bg-sky-500/20 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" 
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center space-y-8"
      >
        <motion.div variants={itemVariants} className="space-y-4">
          <motion.h1
            className="text-5xl sm:text-7xl lg:text-8xl font-bold leading-tight"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block text-slate-900 dark:text-white mb-2">
              Hi, I'm
            </span>
            <span className="bg-gradient-to-r from-sky-600 via-sky-500 to-purple-600 bg-clip-text text-transparent">
              Shashank Chowdary Pagidi
            </span>
          </motion.h1>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-4">
          <h2 className="text-xl sm:text-3xl font-semibold text-slate-700 dark:text-slate-300">
            Full Stack Developer
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">I build scalable, user-focused web applications using React, Node.js,Express, MongoDB, and SQL. </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
        >
          <Button variant="primary" size="lg" className="w-full sm:w-auto" onClick={() => scrollToSection('#projects')}>
            View Projects
          </Button>
          <a href="https://drive.google.com/file/d/1HCZNqk-XH_yUqk4EPs79R2v5eyv4gzH9/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              View Resume
            </Button>
          </a>
        </motion.div>

        {/* <motion.div
          variants={itemVariants}
          className="flex gap-6 justify-center pt-8"
        >
          {['GitHub', 'LinkedIn', 'Twitter'].map((platform) => (
            <motion.a
              key={platform}
              href="#"
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 font-medium transition-colors"
            >
              {platform}
            </motion.a>
          ))}
        </motion.div> */}
      </motion.div>

      <motion.button
        onClick={() => scrollToSection('#about')}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 p-2 text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
        aria-label="Scroll down"
      >
        <IoArrowDown size={28} />
      </motion.button>
    </section>
  );
};
