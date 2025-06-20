import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import Logo from './Logo';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex justify-between items-center">
        <NavLink to="/" className="inline-flex items-center">
          <Logo />
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `nav-link ${isActive ? 'active' : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `nav-link ${isActive ? 'active' : ''}`
            }
          >
            About
          </NavLink>
          <NavLink 
            to="/projects" 
            className={({ isActive }) => 
              `nav-link ${isActive ? 'active' : ''}`
            }
          >
            Projects
          </NavLink>
          <NavLink 
            to="/process" 
            className={({ isActive }) => 
              `nav-link ${isActive ? 'active' : ''}`
            }
          >
            Design Process
          </NavLink>
          <NavLink 
            to="/resume" 
            className={({ isActive }) => 
              `nav-link ${isActive ? 'active' : ''}`
            }
          >
            Resume
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `nav-link ${isActive ? 'active' : ''}`
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="container py-4 flex flex-col space-y-4">
            <NavLink
              to="/"
              className={({ isActive }) => 
                `block py-2 ${isActive ? 'font-semibold' : ''}`
              }
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => 
                `block py-2 ${isActive ? 'font-semibold' : ''}`
              }
              onClick={toggleMenu}
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) => 
                `block py-2 ${isActive ? 'font-semibold' : ''}`
              }
              onClick={toggleMenu}
            >
              Projects
            </NavLink>
            <NavLink
              to="/process"
              className={({ isActive }) => 
                `block py-2 ${isActive ? 'font-semibold' : ''}`
              }
              onClick={toggleMenu}
            >
              Design Process
            </NavLink>
            <NavLink
              to="/resume"
              className={({ isActive }) => 
                `block py-2 ${isActive ? 'font-semibold' : ''}`
              }
              onClick={toggleMenu}
            >
              Resume
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => 
                `block py-2 ${isActive ? 'font-semibold' : ''}`
              }
              onClick={toggleMenu}
            >
              Contact
            </NavLink>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;