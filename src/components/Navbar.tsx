import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-gray-900/90 backdrop-blur-sm z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#hero" className="text-2xl font-bold text-[#1E90FF]
">
            Shivam Shende
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            <div className="flex items-center space-x-4">
              <a href="https://github.com/ShivamShende2608" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/shivam-shende-a9828423a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:shivamshende2608@gmail.com" className="text-gray-300 hover:text-white">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-900/95 rounded-md mt-2">
            <div className="flex flex-col space-y-4 px-4 pt-4 pb-6">
              <a href="#about" className="text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>About</a>
              <a href="#skills" className="text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Skills</a>
              <a href="#projects" className="text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Projects</a>
              <a href="#contact" className="text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Contact</a>
              <div className="flex space-x-4 pt-2">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:your.email@example.com" className="text-gray-300 hover:text-white">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
