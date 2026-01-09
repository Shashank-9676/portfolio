import { motion } from 'framer-motion';
import { SectionWrapper } from '../bits/SectionWrapper';
import { ProgressBar } from '../bits/ProgressBar';
import { Card } from '../bits/Card';

export const Skills = () => {
  const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML5', value: 92 },
      { name: 'CSS3', value: 88 },
      // { name: 'JavaScript (ES6+)', value: 85 },
      { name: 'React.js', value: 88 },
      { name: 'Tailwind CSS', value: 84 },
      { name: 'Bootstrap', value: 85 },
      // { name: 'Next.js', value: 80 },
      // { name: 'TypeScript', value: 80 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', value: 92 },
      { name: 'Express.js', value: 95 },
      { name: 'MongoDB', value: 90 },
      { name: 'Sqlite', value: 86 },
      // { name: 'PostgreSQL', value: 80 },
    ],
  },
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Python', value: 90 },
      { name: 'C++', value: 82 },
      { name: 'JavaScript', value: 88 },
      { name: 'PHP', value: 80 },
    ],
  },
    // {
    //   category: 'Tools & Others',
    //   skills: [
    //     { name: 'Git & GitHub', value: 90 },
    //     { name: 'REST APIs', value: 92 },
    //     { name: 'Firebase', value: 75 },
    //     { name: 'Docker', value: 70 },
    //   ],
    // },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <SectionWrapper id="skills" className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800/50 dark:to-slate-900/50">
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
              Skills & Expertise
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-sky-600 to-sky-400 rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
              >
                <Card className="h-full">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                    {category.category}
                  </h3>
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.1 }}
                      >
                        <ProgressBar
                          label={skill.name}
                          value={skill.value}
                        />
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-12"
          >
            {/* <Card className="bg-gradient-to-r from-sky-600/10 to-purple-600/10 border-sky-200 dark:border-sky-900">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Additional Competencies
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['UI/UX Design', 'Responsive Design', 'Performance Optimization', 'Testing', 'API Integration', 'Database Design', 'Agile', 'DevOps'].map((skill, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 p-3 rounded-lg bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700"
                    >
                      <div className="w-2 h-2 rounded-full bg-sky-600" />
                      <span className="font-medium text-slate-900 dark:text-white text-sm">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card> */}
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
