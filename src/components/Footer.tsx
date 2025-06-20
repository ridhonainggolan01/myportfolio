import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-white">
              <Logo />
            </div>
            <p className="mt-4 text-gray-300 max-w-md">
              A dedicated UI/UX Designer creating intuitive and engaging user experiences with a user-centered approach.
            </p>
            <div className="flex mt-6 space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="mailto:contact@example.com" className="text-gray-300 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
              <Link to="/projects" className="text-gray-300 hover:text-white transition-colors">Projects</Link>
              <Link to="/process" className="text-gray-300 hover:text-white transition-colors">Design Process</Link>
            </nav>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Get in Touch</Link>
              <Link to="/resume" className="text-gray-300 hover:text-white transition-colors">Resume</Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Ridho Anshory Nainggolan. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-gray-400 text-sm">
              Designed & Developed with ♥
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;