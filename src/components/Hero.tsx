import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { fadeInUp, staggerContainer } from '../utils/animations';

const gradientText = "bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent";
const gradientBg = "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700";
const gradientHover = "hover:from-blue-600 hover:via-blue-700 hover:to-blue-800";

export default function Hero() {
  const [text] = useTypewriter({
    words: ['Full Stack Developer', 'AI Enthusiast'],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gray-900">
      {/* Background Gradient Orbs */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute -top-48 -left-48 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-48 -right-48 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </motion.div>

      {/* Main Text */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center relative z-10"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <div className="space-y-8">
          {/* Title Line 1 */}
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight text-white"
            variants={fadeInUp}
          >
            Turning Complex Problems
          </motion.h1>

          {/* Title Line 2 */}
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight"
            variants={fadeInUp}
          >
            <span className="text-blue-500">into </span>
            <span className="text-blue-500">Elegant </span>
            <span className="text-blue-500">Solutions </span>
            <span className="text-blue-500">with</span>
          </motion.h1>

          {/* Title Line 3 */}
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight text-white"
            variants={fadeInUp}
          >
            Code that Matters
          </motion.h1>

          {/* Typing Subheading */}
          <motion.p
            className="text-lg md:text-xl font-semibold h-10 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            <span>{text}<Cursor cursorColor="#3b82f6" /></span>
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={fadeInUp}
          >
            <motion.a
              href="#projects"
              className={`px-8 py-3 rounded-full text-white ${gradientBg} ${gradientHover} transition-all duration-300 shadow-lg shadow-blue-500/25`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-3 rounded-full text-white border-2 border-white/20 hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-6 h-6 text-white/70" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50" />
    </section>
  );
}
