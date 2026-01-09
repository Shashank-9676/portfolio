import { motion } from 'framer-motion';

export const Card = ({ 
  children, 
  className = '',
  hover = true,
  ...props 
}) => {
  return (
    <motion.div
      whileHover={hover ? { y: -8, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)' } : {}}
      transition={{ duration: 0.3, type: 'spring', stiffness: 300, damping: 30 }}
      className={`
        bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg
        dark:shadow-slate-900/50 border border-slate-200 dark:border-slate-700
        transition-all duration-300 backdrop-blur-sm ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
};
