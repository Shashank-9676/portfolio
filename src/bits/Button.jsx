import { motion } from 'framer-motion';

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  ...props 
}) => {
  const variants = {
    primary: 'bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 text-white shadow-lg hover:shadow-sky-600/50 hover:shadow-xl',
    secondary: 'bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-900 dark:text-white',
    outline: 'border-2 border-sky-600 text-sky-600 hover:bg-sky-50 dark:hover:bg-slate-800 dark:border-sky-500 dark:text-sky-400',
    ghost: 'text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg font-semibold',
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="inline-block"
    >
      <button
        className={`
          inline-flex items-center justify-center font-semibold rounded-lg
          transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 
          focus:ring-offset-2 focus:ring-sky-600 dark:focus:ring-offset-slate-900
          ${sizes[size]}
          ${variants[variant]}
          ${className}
        `}
        {...props}
      >
        {children}
      </button>
    </motion.div>
  );
};
