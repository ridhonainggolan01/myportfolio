import React from 'react';
import { motion } from 'framer-motion';
import { Download, Briefcase, GraduationCap, Award, FileText } from 'lucide-react';

const Resume: React.FC = () => {
  // Sample resume data
  const experience = [
    {
      title: 'Senior UI/UX Designer',
      company: 'Design Agency X',
      period: '2020 - Present',
      description: 'Lead the design team in creating user-centered interfaces for mobile and web applications. Collaborate with clients to understand requirements and deliver solutions that meet business objectives.',
      achievements: [
        'Redesigned the client portal resulting in a 40% increase in user engagement',
        'Led the design system initiative that increased design efficiency by 30%',
        'Mentored junior designers and conducted design workshops'
      ]
    },
    {
      title: 'UI/UX Designer',
      company: 'Tech Startup Y',
      period: '2018 - 2020',
      description: 'Responsible for the entire design process from user research to high-fidelity prototypes. Worked closely with developers to ensure seamless implementation.',
      achievements: [
        'Created the design language for a product with 100K+ monthly active users',
        'Improved user onboarding flow, reducing drop-off by 25%',
        'Conducted extensive user testing to validate design decisions'
      ]
    },
    {
      title: 'UI Designer',
      company: 'Creative Studio Z',
      period: '2016 - 2018',
      description: 'Created visual designs for websites and digital products. Collaborated with UX researchers to implement user-centered design principles.',
      achievements: [
        'Designed interfaces for 15+ client websites and applications',
        'Contributed to the studio\'s design system library',
        'Assisted in client presentations and design pitches'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Design',
      institution: 'University of Design Arts',
      period: '2012 - 2016',
      description: 'Specialized in Digital Design and User Experience'
    }
  ];

  const certifications = [
    {
      title: 'UX Design Professional Certification',
      issuer: 'Design Institute',
      year: '2019'
    },
    {
      title: 'Advanced Figma Masterclass',
      issuer: 'Design Academy',
      year: '2020'
    },
    {
      title: 'UI Design Patterns',
      issuer: 'Interface Masters',
      year: '2018'
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
              Resume
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                My professional experience, education, and skills
              </p>
              <a href="/resume.pdf" download className="btn btn-primary inline-flex items-center">
                <Download className="h-5 w-5 mr-2" />
                Download PDF Resume
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resume Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Experience Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center mb-8">
                <Briefcase className="h-6 w-6 mr-3 text-primary" />
                <h2 className="text-3xl font-bold">Work Experience</h2>
              </div>
              
              <div className="space-y-12">
                {experience.map((job, index) => (
                  <div key={index} className="border-l-4 border-primary pl-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                      <h3 className="text-xl font-semibold">{job.title}</h3>
                      <span className="text-gray-500 mt-1 md:mt-0 md:ml-4">{job.period}</span>
                    </div>
                    <p className="text-lg text-primary font-medium mb-3">{job.company}</p>
                    <p className="text-gray-600 mb-4 leading-relaxed">{job.description}</p>
                    
                    <h4 className="font-semibold mb-2">Key Achievements:</h4>
                    <ul className="space-y-2 mb-4">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                          <span className="text-gray-600">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Education Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center mb-8">
                <GraduationCap className="h-6 w-6 mr-3 text-primary" />
                <h2 className="text-3xl font-bold">Education</h2>
              </div>
              
              <div className="space-y-12">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-primary pl-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                      <h3 className="text-xl font-semibold">{edu.degree}</h3>
                      <span className="text-gray-500 mt-1 md:mt-0 md:ml-4">{edu.period}</span>
                    </div>
                    <p className="text-lg text-primary font-medium mb-3">{edu.institution}</p>
                    <p className="text-gray-600 mb-4 leading-relaxed">{edu.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center mb-8">
                <FileText className="h-6 w-6 mr-3 text-primary" />
                <h2 className="text-3xl font-bold">Skills</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Design</h3>
                  <ul className="space-y-3">
                    {['UI Design', 'UX Research', 'Wireframing', 'Prototyping', 'Visual Design', 'Design Systems'].map((skill, index) => (
                      <li key={index} className="flex items-center">
                        <span className="inline-block w-2 h-2 bg-primary rounded-full mr-3"></span>
                        <span className="text-gray-600">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Tools & Technologies</h3>
                  <ul className="space-y-3">
                    {['Figma', 'Adobe XD', 'Illustrator', 'Miro', 'Trello', 'HTML/CSS', 'Prototyping Tools', 'User Testing Platforms'].map((tool, index) => (
                      <li key={index} className="flex items-center">
                        <span className="inline-block w-2 h-2 bg-primary rounded-full mr-3"></span>
                        <span className="text-gray-600">{tool}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Certifications Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-8">
                <Award className="h-6 w-6 mr-3 text-primary" />
                <h2 className="text-3xl font-bold">Certifications</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-accent-light p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                    <p className="text-gray-600">{cert.issuer} • {cert.year}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PDF Download Reminder */}
      <section className="py-16 bg-primary text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Need a Copy of My Resume?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Download a PDF version of my resume for your records or to share with your team.
            </p>
            <a href="/resume.pdf" download className="btn bg-white text-primary hover:bg-gray-100 inline-flex items-center">
              <Download className="h-5 w-5 mr-2" />
              Download PDF Resume
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Resume;