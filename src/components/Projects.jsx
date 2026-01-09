import { useState } from 'react';
import { motion } from 'framer-motion';
import { IoArrowForward, IoLogoGithub } from 'react-icons/io5';
import { SectionWrapper } from '../bits/SectionWrapper';
import { Card } from '../bits/Card';
import { Button } from '../bits/Button';
import { Modal } from '../bits/Modal';
import { projects } from '../data/projects';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

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

  return (
    <SectionWrapper id="projects" className="bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-800/50 dark:via-slate-900/50 dark:to-slate-800/30">
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
              Featured Projects
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-sky-600 to-sky-400 rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full flex flex-col overflow-hidden group">
                  <div className="relative h-48 overflow-hidden bg-slate-200 dark:bg-slate-700">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white dark:bg-slate-800 rounded-full hover:bg-sky-600 hover:text-white dark:hover:bg-sky-600 transition-colors"
                        aria-label="View on GitHub"
                      >
                        <IoLogoGithub size={20} />
                      </motion.a>
                      <motion.a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white dark:bg-slate-800 rounded-full hover:bg-sky-600 hover:text-white dark:hover:bg-sky-600 transition-colors"
                        aria-label="View live demo"
                      >
                        <IoArrowForward size={20} />
                      </motion.a>
                    </div>
                  </div>

                  <div className="flex-grow flex flex-col justify-between p-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-medium bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-3 py-1 text-xs font-medium bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-full">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      <Button
                        variant="secondary"
                        size="sm"
                        className="w-full"
                        onClick={() => setSelectedProject(project)}
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title}
      >
        {selectedProject && (
          <div className="space-y-6">
            <motion.img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-80 object-cover rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            />

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Description
              </h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {selectedProject.details}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 rounded-lg font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <motion.a
                href={selectedProject.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-2.5 text-base font-semibold rounded-lg bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 text-white shadow-lg hover:shadow-sky-600/50 hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center"
              >
                Visit Live Demo
              </motion.a>
              <motion.a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-2.5 text-base font-semibold rounded-lg border-2 border-sky-600 text-sky-600 hover:bg-sky-50 dark:hover:bg-slate-800 dark:border-sky-500 dark:text-sky-400 transition-all duration-300 inline-flex items-center justify-center"
              >
                View Code
              </motion.a>
            </div>
          </div>
        )}
      </Modal>
    </SectionWrapper>
  );
};
