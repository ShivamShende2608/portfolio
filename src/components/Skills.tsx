import { Code, Database, Globe, Palette, Server, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';

const skills = [
  {
    category: 'Frontend Development',
    icon: Globe,
    skills: [
      { name: 'HTML', icon: '/icons/html.png' },
      { name: 'CSS', icon: '/icons/css.png' },
      { name: 'React', icon: '/icons/react.png' },
      { name: 'Tailwind CSS', icon: '/icons/tailwind.png' },
    ],
  },
  {
    category: 'Backend Development',
    icon: Server,
    skills: [
      { name: 'Node.js', icon: '/icons/node.png' },
      { name: 'Express.js', icon: '/icons/express.png' },
      { name: 'Next.js', icon: '/icons/next.png' },
      { name: 'Django', icon: '/icons/django.png' },
      { name: 'REST API', icon: '/icons/api.png' },
      
    ],
  },
  {
    category: 'Database',
    icon: Database,
    skills: [
      { name: 'MongoDB', icon: '/icons/mongodb.png' },
      { name: 'Firebase', icon: '/icons/firebase.png' },
      { name: 'Convex', icon: '/icons/convex.png' },
    ],
  },
  {
    category: 'DevOps & Tools',
    icon: Terminal,
    skills: [
      { name: 'Git', icon: '/icons/git.png' },
      { name: 'GitHub', icon: '/icons/github.png' },
      { name: 'Netlify', icon: '/icons/netlify.png' },
      { name: 'Vercel', icon: '/icons/Vercel.png' },
    ],
  },
  {
    category: 'Programming Languages',
    icon: Code,
    skills: [
      { name: 'C++', icon: '/icons/cpp.png' },
      { name: 'Python', icon: '/icons/python.png' },
      { name: 'JavaScript', icon: '/icons/js.png' },
    ],
  },
  {
    category: 'Soft Skills',
    icon: Palette,
    skills: [
      { name: 'Team Collaboration' },
      { name: 'Problem Solving' },
      { name: 'Communication' },
      { name: 'Leadership' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#0c1222] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Title with Gradient Underline */}
        <motion.div
          className="flex justify-center mb-16 relative"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="relative text-3xl md:text-4xl font-bold text-center after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:h-[3px] after:w-40 after:rounded-full after:bg-gradient-to-r after:from-[#1E90FF] after:via-[#00BFFF] after:to-[#1E90FF]">
  Skills & Expertise
</h2>

        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {skills.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                className="bg-[#101a33] p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                variants={fadeInUp}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.category}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="flex items-center gap-2 bg-indigo-500/10 text-white px-3 py-2 rounded-full text-sm"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {skill.icon && (
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-4 h-4"
                        />
                      )}
                      <span>{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
