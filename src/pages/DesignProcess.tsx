import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Layout, MousePointerClick, TestTube } from 'lucide-react';

const DesignProcess: React.FC = () => {
  const processes = [
    {
      title: 'Research & Discovery',
      icon: <Search className="h-12 w-12 text-primary" />,
      description: 'Understanding the problem space, user needs, business goals, and technical constraints',
      steps: [
        'User interviews and surveys',
        'Competitive analysis',
        'Stakeholder interviews',
        'User personas and journey mapping',
        'Problem definition and success metrics'
      ]
    },
    {
      title: 'Wireframing',
      icon: <Layout className="h-12 w-12 text-primary" />,
      description: 'Creating low-fidelity representations to establish information hierarchy and layout',
      steps: [
        'Information architecture development',
        'User flow mapping',
        'Low-fidelity wireframes',
        'Layout exploration',
        'Navigation and interaction patterns'
      ]
    },
    {
      title: 'UI Design',
      icon: <MousePointerClick className="h-12 w-12 text-primary" />,
      description: 'Transforming wireframes into visually engaging, on-brand interfaces',
      steps: [
        'Visual design system creation',
        'High-fidelity mockups',
        'Component library development',
        'Responsive design considerations',
        'Accessibility compliance'
      ]
    },
    {
      title: 'Prototyping & Testing',
      icon: <TestTube className="h-12 w-12 text-primary" />,
      description: 'Creating interactive prototypes and validating solutions with users',
      steps: [
        'Interactive prototype creation',
        'Usability testing',
        'Design iteration based on feedback',
        'Edge case validation',
        'Handoff to development team'
      ]
    }
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
              My Design Process
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              How I approach design challenges to create meaningful user experiences
            </motion.p>
          </div>
        </div>
      </section>

      {/* Design Process Overview */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="section-title">My Approach</h2>
            <p className="text-lg text-gray-600">
              I follow a systematic yet flexible design process that puts users at the center 
              while aligning with business goals. Each phase informs the next, creating a 
              holistic approach to problem-solving.
            </p>
          </motion.div>

          {/* Process Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
            
            {/* Process Steps */}
            <div className="space-y-24 relative">
              {processes.map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-12 relative"
                >
                  {/* Timeline Circle */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-6 w-12 h-12 rounded-full bg-primary border-4 border-white z-10"></div>
                  
                  <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="bg-white p-8 rounded-lg shadow-md">
                      <div className="flex justify-center md:justify-start mb-6">
                        {process.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{process.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {process.description}
                      </p>
                      <h4 className="font-semibold mb-3">Key Activities:</h4>
                      <ul className="space-y-2">
                        {process.steps.map((step, i) => (
                          <li key={i} className="flex items-start">
                            <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className={`${index % 2 === 1 ? 'md:order-1' : ''} flex md:items-center`}>
                    <div className="h-full w-full flex items-center justify-center">
                      <div className="text-6xl md:text-8xl font-bold text-primary opacity-20">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-16 md:py-24 bg-accent-light">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Design Philosophy</h2>
              <div className="space-y-6 text-gray-600">
                <p className="leading-relaxed">
                  I believe that great design goes beyond aesthetics—it's about solving real problems for 
                  real people. Every pixel, interaction, and decision in my design process serves a purpose: 
                  to create experiences that are intuitive, accessible, and enjoyable.
                </p>
                <p className="leading-relaxed">
                  My approach is rooted in empathy and curiosity. I'm driven to understand not just what 
                  users want, but why they want it, and how we can best meet their needs while achieving 
                  business objectives.
                </p>
                <p className="leading-relaxed">
                  Design is never "done"—it's an iterative process of learning, building, measuring, and 
                  refining. I embrace feedback and data to continuously improve my solutions, always with 
                  the end user in mind.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3">User-Centric</h3>
                <p className="text-gray-600">
                  Putting users at the center of every design decision
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3">Data-Informed</h3>
                <p className="text-gray-600">
                  Using research and analytics to guide design choices
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3">Iterative</h3>
                <p className="text-gray-600">
                  Continuously refining solutions based on feedback
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3">Collaborative</h3>
                <p className="text-gray-600">
                  Working closely with stakeholders and development teams
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="section-title">My Design Toolbox</h2>
            <p className="text-lg text-gray-600">
              The tools and technologies I use throughout my design process
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-6">Research & Planning</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <span>Miro for user journey mapping</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <span>Notion for documentation</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <span>Trello for project management</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <span>User interview tools</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <span>Analytics platforms</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-6">Design & Prototyping</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <span>Figma for UI design</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <span>Adobe XD for prototyping</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <span>Adobe Illustrator for graphics</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <span>Sketch for mockups</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <span>InVision for interactive prototypes</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-6">Testing & Implementation</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <span>Usability testing platforms</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <span>HTML/CSS for implementation</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <span>Zeplin for design handoff</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <span>A/B testing tools</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <span>Accessibility checkers</span>
                </li>
              </ul>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">See My Process in Action</h2>
            <p className="text-lg text-gray-300 mb-8">
              Check out my project case studies to see how I apply my process to real-world design challenges.
            </p>
            <Link to="/projects" className="btn bg-white text-primary hover:bg-gray-100">
              View Projects
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default DesignProcess;