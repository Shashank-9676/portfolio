import { motion, AnimatePresence } from 'framer-motion';
import { IoArrowUp } from 'react-icons/io5';
import { useScrollTop } from '../hooks/useScrollTop';

export const ScrollToTop = () => {
  const { isVisible, scrollToTop } = useScrollTop();

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-sky-600 hover:bg-sky-700 text-white shadow-lg z-40 transition-colors"
          aria-label="Scroll to top"
        >
          <IoArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
