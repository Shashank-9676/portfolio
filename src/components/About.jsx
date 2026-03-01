import { motion } from 'framer-motion';
import { SectionWrapper } from '../bits/SectionWrapper';
import { Card } from '../bits/Card';

export const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  // const timeline = [
  //   {
  //     year: '2023',
  //     title: 'Senior Frontend Developer',
  //     company: 'Tech Company',
  //     description: 'Led development of multiple high-impact projects, mentored junior developers, and improved performance metrics.',
  //   },
  //   {
  //     year: '2022',
  //     title: 'Full Stack Developer',
  //     company: 'Startup XYZ',
  //     description: 'Built scalable web applications using React and Node.js, implementing real-time features and optimizations.',
  //   },
  //   {
  //     year: '2021',
  //     title: 'Junior Developer',
  //     company: 'First Company',
  //     description: 'Started career building responsive web applications, learning modern technologies and best practices.',
  //   },
  // ];

  return (
    <SectionWrapper id="about" className="bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-800/50 dark:to-slate-900">
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
              About Me
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-sky-600 to-sky-400 rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                Hello! My name is Shashank, and I’m a second-year Computer Science student with a strong interest in full-stack web development.
              </p>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                I enjoy building real-world web applications using React, Node.js, Express, MongoDB, and SQL. I focus on writing clean code, designing RESTful APIs, and creating responsive user interfaces.
              </p>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                Through hands-on projects, I’ve gained experience in authentication, database design, and role-based access systems. I’m continuously learning new technologies and improving my problem-solving skills by building and experimenting with projects.
              </p>
              <div className="pt-4">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  Education
                </h3>
                <div className="space-y-3">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-3 h-3 rounded-full bg-sky-600 mt-2" />
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">Bachelor of Science in Computer Science</p>
                      <p className="text-slate-600 dark:text-slate-400">Nxtwave Institute of Advanced Technologies</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex justify-center items-center"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-sky-600 to-sky-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-2xl bg-white dark:bg-slate-800">
                  <img draggable={false}
                    src="https://res.cloudinary.com/dnhc09agd/image/upload/v1767936823/Gemini_Generated_Image_7vgfsv7vgfsv7vgf_fayip4.png"
                    alt="Shashank"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>

            {/* <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Experience
              </h3>
              <div className="space-y-4">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                  >
                    <Card className="border-l-4 border-l-sky-600">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="font-bold text-slate-900 dark:text-white">
                            {item.title}
                          </h4>
                          <span className="text-sm font-semibold text-sky-600 dark:text-sky-400">
                            {item.year}
                          </span>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {item.company}
                        </p>
                        <p className="text-slate-700 dark:text-slate-300">
                          {item.description}
                        </p>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div> */}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
