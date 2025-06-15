import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const educationData = [
  {
    year: 'Nov 2022 - June 2026',
    title: 'Bachelor of Technology in Artificial Intelligence',
    institution: 'G H Raisoni College of Engineering, Nagpur, India',
    description: 'Current CGPA: 8.45',
  },
  {
    year: 'July 2021 - May 2022',
    title: '12th Std',
    institution: 'Macaroon Student’s Academy, Chandrapur, India',
    description: 'Percentage: 73.67%',
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 bg-[#0c1222] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="relative text-3xl md:text-4xl font-bold text-center mb-16 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:h-[3px] after:w-40 after:rounded-full after:bg-gradient-to-r after:from-[#1E90FF] after:via-[#00BFFF] after:to-[#1E90FF]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-700 to-blue-500/50" />

          <div className="space-y-12">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className="w-1/2 pr-8 pl-8">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`bg-[#101a33] p-6 rounded-lg shadow-md ${
                      index % 2 === 0 ? 'text-right' : 'text-left'
                    }`}
                  >
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-800 to-blue-600/30 text-blue-300 rounded-full text-sm font-medium mb-2">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-blue-400 font-medium">{item.institution}</p>
                    <p className="text-gray-300 mt-2">{item.description}</p>
                  </motion.div>
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-700 to-blue-500 flex items-center justify-center z-10 shadow-md"
                >
                  <GraduationCap className="w-6 h-6 text-white" />
                </motion.div>

                {/* Empty space for opposite side */}
                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
