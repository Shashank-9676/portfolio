import { motion } from 'framer-motion';

export const ProgressBar = ({ 
  label, 
  value, 
  max = 100,
  className = '',
  ...props 
}) => {
  const percentage = (value / max) * 100;

  return (
    <div className={`w-full ${className}`} {...props}>
      <div className="flex justify-between items-center mb-2">
        <label className="text-sm font-semibold text-slate-900 dark:text-slate-200">
          {label}
        </label>
        <span className="text-xs font-medium text-sky-600 dark:text-sky-400 font-bold">
          {value}%
        </span>
      </div>
      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden shadow-sm">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut', type: 'spring', stiffness: 100 }}
          className="h-full bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 rounded-full shadow-lg shadow-sky-500/50"
        />
      </div>
    </div>
  );
};
