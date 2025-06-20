import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Download, Star } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { name: 'UI Design', level: 90 },
    { name: 'UX Research', level: 85 },
    { name: 'Wireframing', level: 95 },
    { name: 'Prototyping', level: 90 },
    { name: 'User Testing', level: 80 },
    { name: 'Canva', level: 90 },
  ];

  const tools = [
    { name: 'Figma', expertise: 'Expert' },
    { name: 'Adobe XD', expertise: 'Advanced' },
    { name: 'Gitlab', expertise: 'Intermediate' },
    { name: 'Maze', expertise: 'Advanced' },
    { name: 'Canva', expertise: 'Expert' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:py-40 bg-accent-light">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              About Me
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Get to know more about my background, skills, and approach to
                design
              </p>
              <Link
                to="/resume"
                className="btn btn-primary inline-flex items-center"
              >
                <Download className="h-5 w-5 mr-2" />
                Download Resume
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Ridho Anshory Nainggolan"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <p className="font-bold text-lg">5+ Years Experience</p>
                <p className="text-gray-600">UI/UX Design</p>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Ridho Anshory Nainggolan
              </h2>
              <h3 className="text-xl text-gray-600 mb-6">UI/UX Designer</h3>
              <div className="space-y-6 text-gray-600">
                <p className="leading-relaxed">
                  A dedicated UI/UX Designer with a passion for creating
                  intuitive and engaging user experiences. With expertise in
                  designing digital interfaces that are both functional and
                  aesthetically pleasing, I approach each project with a
                  user-centered mindset.
                </p>
                <p className="leading-relaxed">
                  My design philosophy revolves around understanding user needs,
                  solving complex problems through thoughtful design, and
                  creating experiences that delight users while meeting business
                  objectives.
                </p>
                <p className="leading-relaxed">
                  Whether working on mobile applications, web platforms, or
                  design systems, I strive to create solutions that are
                  accessible, inclusive, and thoughtfully crafted down to the
                  smallest detail.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills & Tools */}
      <section className="py-16 md:py-24 bg-accent-light">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="section-title">Skills & Expertise</h2>
            <p className="text-lg text-gray-600">
              The tools and skills I use to bring ideas to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-semibold mb-8">My Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <motion.div
                        className="bg-primary h-2.5 rounded-full"
                        style={{ width: `${skill.level}%` }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.1 * index }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-semibold mb-8">Design Toolbox</h3>
              <div className="grid grid-cols-2 gap-6">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-4"
                  >
                    <h4 className="font-semibold text-lg mb-2">{tool.name}</h4>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-600 mr-2">
                        {tool.expertise}
                      </span>
                      <div className="flex">
                        {[...Array(getStarCount(tool.expertise))].map(
                          (_, i) => (
                            <Star
                              key={i}
                              size={14}
                              className="text-primary fill-primary"
                            />
                          )
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h2 className="section-title">My Design Philosophy</h2>
              <p className="text-lg text-gray-600">
                The principles that guide my approach to design
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-3 space-y-8"
            >
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-3">
                  User-Centered Approach
                </h3>
                <p className="text-gray-600">
                  I believe in designing with empathy, putting users at the
                  center of every decision to create experiences that truly
                  serve their needs.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-3">
                  Balance Form & Function
                </h3>
                <p className="text-gray-600">
                  Great design finds the perfect harmony between aesthetics and
                  usability, creating solutions that are both beautiful and
                  functional.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-3">
                  Attention to Detail
                </h3>
                <p className="text-gray-600">
                  The smallest details often make the biggest difference. I
                  focus on perfecting every element to create polished,
                  professional designs.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-3">
                  Continuous Improvement
                </h3>
                <p className="text-gray-600">
                  Design is never truly finished. I believe in iterative
                  improvement through testing, feedback, and refinement to
                  create the best possible solutions.
                </p>
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
              Interested in Working Together?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Have a project in mind or want to learn more about my design
              process?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn bg-white text-primary hover:bg-gray-100"
              >
                Get in Touch
              </Link>
              <Link
                to="/projects"
                className="btn border border-white text-white hover:bg-white hover:text-primary"
              >
                View My Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

// Helper function to get star count based on expertise level
function getStarCount(expertise: string): number {
  switch (expertise) {
    case 'Expert':
      return 5;
    case 'Advanced':
      return 4;
    case 'Intermediate':
      return 3;
    case 'Beginner':
      return 2;
    default:
      return 1;
  }
}

export default About;
