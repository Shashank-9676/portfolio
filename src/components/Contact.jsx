import { useState } from 'react';
import { motion } from 'framer-motion';
import { IoCheckmarkCircle } from 'react-icons/io5';
import { SectionWrapper } from '../bits/SectionWrapper';
import { Button } from '../bits/Button';
import { Card } from '../bits/Card';
import { useForm, ValidationError } from '@formspree/react';


export const Contact = () => {
  const [state, handleSubmit] = useForm('mykgvbya');
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    handleSubmit(e).then(() => {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    });
    e.target.reset();
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const contactInfo = [
    { label: 'Email', value: 'shashankchowdary09@gmail.com', href: 'mailto:shashankchowdary09@gmail.com' },
    { label: 'Location', value: 'Andhra Pradesh, India', href: '' },
    { label: 'Phone', value: '+91 9676020532', href: 'tel:+919676020532' },
  ];

  return (
    <SectionWrapper id="contact" className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800/50 dark:to-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
              Get In Touch
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-sky-600 to-sky-400 rounded-full" />
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
              Have a project in mind or just want to chat? Feel free to reach out. I'm always interested in hearing about new projects and opportunities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                variants={itemVariants}
                href={info.href}
                className="block"
              >
                <Card className="text-center hover:border-sky-400 dark:hover:border-sky-600 cursor-pointer">
                  <h3 className="font-semibold text-slate-600 dark:text-slate-400 mb-2">
                    {info.label}
                  </h3>
                  <p className="text-slate-900 dark:text-white font-semibold text-lg hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
                    {info.value}
                  </p>
                </Card>
              </motion.a>
            ))}
          </div>

          <motion.div variants={itemVariants}>
            <Card className="max-w-2xl mx-auto">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 transition-all focus:outline-none focus:ring-2 focus:ring-sky-600"
                    placeholder="Your name"
                    required
                  />
                  <ValidationError field="name" errors={state.errors} />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 transition-all focus:outline-none focus:ring-2 focus:ring-sky-600"
                    placeholder="your.email@example.com"
                    required
                  />
                  <ValidationError field="email" errors={state.errors} />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 transition-all focus:outline-none focus:ring-2 focus:ring-sky-600"
                    placeholder="What is this about?"
                    required
                  />
                  <ValidationError field="subject" errors={state.errors} />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 transition-all focus:outline-none focus:ring-2 focus:ring-sky-600 resize-none"
                    placeholder="Your message here..."
                    required
                  />
                  <ValidationError field="message" errors={state.errors} />
                </div>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg flex items-center gap-3"
                  >
                    <IoCheckmarkCircle className="text-green-600 dark:text-green-400" size={20} />
                    <p className="text-green-600 dark:text-green-400 font-medium">
                      Message sent successfully! I'll get back to you soon.
                    </p>
                  </motion.div>
                )}

                <Button type="submit" variant="primary" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
