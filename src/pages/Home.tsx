import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Eye } from 'lucide-react';

// Animation variants
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
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-accent-light to-white"></div>
        <div className="container relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              variants={itemVariants}
            >
              Ridho Anshory <span className="block">Nainggolan</span>
            </motion.h1>
            <motion.h2
              className="text-2xl md:text-3xl font-medium text-gray-700 mb-8"
              variants={itemVariants}
            >
              UI/UX Designer
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed"
              variants={itemVariants}
            >
              Creating intuitive and engaging user experiences with a
              user-centered approach
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={itemVariants}
            >
              <Link to="/projects" className="btn btn-primary">
                View Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowRight className="h-8 w-8 text-primary rotate-90" />
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="section-title">Featured Projects</h2>
            <p className="text-lg text-gray-600">
              Explore some of my recent work in UI/UX design
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg shadow-md bg-gray-100 mb-4">
                <img
                  src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Gamatara Project"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link
                    to="/projects/gamatara"
                    className="btn bg-white text-primary font-medium px-6 py-2 rounded-full hover:bg-primary hover:text-white transition-colors"
                  >
                    <Eye className="h-5 w-5 mr-2" />
                    View Project
                  </Link>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Gamatara</h3>
              <p className="text-gray-600 mb-4">Employee Attendance System</p>
              <Link
                to="/projects/gamatara"
                className="text-primary font-medium inline-flex items-center"
              >
                View Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg shadow-md bg-gray-100 mb-4">
                <img
                  src="https://images.pexels.com/photos/3184170/pexels-photo-3184170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="ICI Recovery Project"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link
                    to="/projects/ici-recovery"
                    className="btn bg-white text-primary font-medium px-6 py-2 rounded-full hover:bg-primary hover:text-white transition-colors"
                  >
                    <Eye className="h-5 w-5 mr-2" />
                    View Project
                  </Link>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">ICI Mobile Apps</h3>
              <p className="text-gray-600 mb-4">
                Consultation and Prayer Request
              </p>
              <Link
                to="/projects/ici-recovery"
                className="text-primary font-medium inline-flex items-center"
              >
                View Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>

            {/* Project 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg shadow-md bg-gray-100 mb-4">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Samakaki Project"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link
                    to="/projects/samakaki"
                    className="btn bg-white text-primary font-medium px-6 py-2 rounded-full hover:bg-primary hover:text-white transition-colors"
                  >
                    <Eye className="h-5 w-5 mr-2" />
                    View Project
                  </Link>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Samakaki</h3>
              <p className="text-gray-600 mb-4">Social Media for Families</p>
              <Link
                to="/projects/samakaki"
                className="text-primary font-medium inline-flex items-center"
              >
                View Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/projects" className="btn btn-primary">
              View All Projects
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="section bg-accent-light">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">About Me</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                A dedicated UI/UX Designer with expertise in creating intuitive
                and engaging user experiences. Passionate about solving complex
                problems through human-centered design.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/about" className="btn btn-primary">
                  Learn More
                </Link>
                <Link to="/resume" className="btn btn-secondary">
                  <Download className="h-5 w-5 mr-2" />
                  Resume
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-lg shadow-lg bg-white p-6"
            >
              <h3 className="text-2xl font-semibold mb-6">My Design Toolbox</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  'Figma',
                  'Adobe XD',
                  'Maze',
                  'Wimsical',
                  'Gitlabs',
                  'Canva',
                ].map((tool, index) => (
                  <div
                    key={index}
                    className="bg-accent-light p-3 rounded-md text-center"
                  >
                    <span className="font-medium">{tool}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Work Together
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Interested in collaborating or have a project in mind? Let's
              discuss how we can create an exceptional user experience together.
            </p>
            <Link
              to="/contact"
              className="btn bg-white text-primary hover:bg-gray-100"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
