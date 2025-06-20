import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Tag, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="container py-40 text-center">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <p className="mb-8">
          Sorry, the project you're looking for doesn't exist.
        </p>
        <Link to="/projects" className="btn btn-primary">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-accent-light">
        <div className="container">
          <Link
            to="/projects"
            className="inline-flex items-center text-gray-600 hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Projects
          </Link>

          <div className="max-w-4xl">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {project.title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {project.summary}
              </p>

              {/* Project Metadata */}
              <div className="flex flex-wrap gap-6 text-gray-600">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  <span>{project.year}</span>
                </div>
                <div className="flex items-center">
                  <User className="mr-2 h-5 w-5" />
                  <span>Role: {project.role}</span>
                </div>
                <div className="flex items-center">
                  <Tag className="mr-2 h-5 w-5" />
                  <span>{project.category}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Cover Image */}
      <section className="py-12">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-xl"
          >
            <img
              src={project.coverImage}
              alt={project.title}
              className="aspect-3/2 object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6 text-gray-700 leading-relaxed"
            >
              <p>{project.overview}</p>

              {/* Tools & Technologies */}
              <div className="pt-6">
                <h3 className="text-xl font-semibold mb-4">
                  Tools & Technologies
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-accent-light rounded-full text-sm font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-16 md:py-24 bg-accent-light">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-bold mb-6">Chalenge</h2>
              <ul className="list-disc">
                {project.challenge.map(function (e) {
                  return (
                    <li>
                      <p className="text-gray-700 leading-relaxed">{e}</p>
                    </li>
                  );
                })}
              </ul>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-bold mb-6">The Solution</h2>
              <ul className="list-disc">
                {project.solution.map(function (e) {
                  return (
                    <li>
                      <p className="text-gray-700 leading-relaxed">{e}</p>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="section-title">Design Process</h2>
            <p className="text-lg text-gray-600">
              My approach to solving this design challenge
            </p>
          </motion.div>

          <div className="space-y-24">
            {project.process.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={stage.image}
                      alt={stage.title}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500 block mb-2">
                    Stage {index + 1}
                  </span>
                  <h3 className="text-2xl font-bold mb-4">{stage.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {stage.description}
                  </p>
                  <ul className="space-y-2">
                    {stage.keyPoints.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Outcomes */}
      <section className="py-16 md:py-24 bg-accent-light">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h2 className="text-2xl font-bold mb-6">Results & Impact</h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>{project.results}</p>

                {project.metrics && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
                    {project.metrics.map((metric, index) => (
                      <div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow-md text-center"
                      >
                        <span className="block text-3xl font-bold text-primary mb-2">
                          {metric.value}
                        </span>
                        <span className="text-gray-600">{metric.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reflection */}
      {project.reflection && (
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="lg:col-span-1"
              >
                <h2 className="text-2xl font-bold mb-6">Reflection</h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="lg:col-span-2 space-y-6 text-gray-700 leading-relaxed"
              >
                <p>{project.reflection}</p>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Next Project */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-8">Explore More Projects</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/projects"
                className="btn bg-white text-primary hover:bg-gray-100"
              >
                View All Projects
              </Link>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn border border-white text-white hover:bg-white hover:text-primary inline-flex items-center"
                >
                  View Live Project
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetail;
