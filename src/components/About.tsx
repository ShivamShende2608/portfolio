import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { fadeInUp, staggerContainer } from "../utils/animations";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 bg-[#0c1222] text-white overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Centered Heading Wrapper */}
        <motion.div
          className="flex justify-center mb-16 relative"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="relative text-3xl md:text-4xl font-bold text-center after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:h-[3px] after:w-24 after:rounded-full after:bg-gradient-to-r after:from-[#1E90FF] after:via-[#00BFFF] after:to-[#1E90FF]">
            About Me
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Tilt Image */}
          <motion.div className="rounded-2xl" variants={fadeInUp}>
            <Tilt
              scale={1.02}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              transitionSpeed={1000}
              glareEnable={false}
              className="rounded-2xl"
            >
              <div className="p-[3px] bg-[length:200%_200%] bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 animate-border-flow rounded-2xl">
                <img
                  src="/shivam.jpg"
                  alt="Shivam Shende"
                  className="rounded-2xl object-cover w-full h-full"
                />
              </div>
            </Tilt>
          </motion.div>

          {/* Text Content */}
          <motion.div className="space-y-6" variants={staggerContainer}>
            <motion.p className="text-lg text-gray-300" variants={fadeInUp}>
              Hi, I’m <strong className="text-white">Shivam Shende</strong> — a Full Stack Developer and AI Enthusiast, focused on building clean, scalable, and impactful products. I love solving real-world problems with code and transforming complex challenges into elegant solutions. Whether it’s crafting sleek UI/UX or architecting robust backend systems, I strive to deliver meaningful digital experiences.
            </motion.p>

            <motion.p className="text-lg text-gray-300" variants={fadeInUp}>
              Beyond development, I’m passionate about growth — both personal and shared. I believe in consistent learning, sharing knowledge, and helping others level up through mentorship and collaboration. My goal is to not just write code, but to create value, inspire innovation, and keep evolving as a developer and as a person.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
