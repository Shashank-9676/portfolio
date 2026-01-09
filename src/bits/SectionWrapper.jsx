import { motion } from 'framer-motion';

export const SectionWrapper = ({ 
  id,
  children, 
  className = '',
  ...props 
}) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={containerVariants}
      className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}
      {...props}
    >
      {children}
    </motion.section>
  );
};
