import { motion } from 'framer-motion';
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter, IoArrowUp } from 'react-icons/io5';

export const Footer = () => {

  const socialLinks = [
    { icon: IoLogoGithub, href: 'https://github.com/shashank-9676', label: 'GitHub' },
    { icon: IoLogoLinkedin, href: 'https://www.linkedin.com/in/shashankchowdary', label: 'LinkedIn' },
    // { icon: IoLogoTwitter, href: 'https://twitter.com', label: 'Twitter' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-950 dark:from-slate-950 dark:to-black text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-8"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-lg font-bold">Portfolio</h3>
              <p className="text-slate-400">
                Building beautiful and functional web experiences.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-lg font-bold">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-slate-400 hover:text-sky-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-lg font-bold">Social</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 rounded-full bg-slate-800 hover:bg-sky-600 transition-colors"
                      aria-label={social.label}
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <motion.p variants={itemVariants} className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Shashank. All rights reserved.
            </motion.p>
            {/* <motion.button
              variants={itemVariants}
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-sky-600 hover:bg-sky-700 transition-colors"
              aria-label="Back to top"
            >
              <IoArrowUp size={20} />
            </motion.button> */}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
