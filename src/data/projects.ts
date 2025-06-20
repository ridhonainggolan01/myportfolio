export interface ProjectStage {
  title: string;
  description: string;
  image: string;
  keyPoints: string[];
  
}

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  summary: string;
  year: string;
  role: string;
  coverImage: string;
  overview: string;
  tools: string[];
  challenge: string[];
  solution: string[];
  process: ProjectStage[];
  results: string;
  metrics?: ProjectMetric[];
  reflection?: string;
  link?: string;
}

export const projects: Project[] = [
  {
    id: 'gamatara',
    title: 'Gamatara',
    category: 'Employee Attendance System',
    summary:
      'A modern employee attendance system designed to streamline workplace check-ins and improve attendance tracking for organizations.',
    year: '2023',
    role: 'UI/UX Designer',
    coverImage: '/IMG/gamatara_overview.png',
    overview:
      'Gamatara is an employee attendance system designed to modernize and simplify the attendance tracking process for companies of all sizes. The project aims to replace outdated manual attendance systems with a digital solution that offers fraud protection through a system connected to a gate, and facilitates employee management for HR.',
    tools: ['Figma', 'Whimsical', 'Prototype'],
    challenge: [
      'The attendance system is inefficient and irregular.',
      'Users have difficulty viewing real-time attendance summaries.',
    ],
    solution: [
      'Face Recognition for automatic attendance and using Gate.',
      'Real-time dashboard for employee management.',
    ],
    process: [
      {
        title: 'User Persona',
        description:
          'We collect persona data through direct interviews asking about their habits, as well as seeing the frustrations felt in each persona, and the expected solutions. then we pour ideas from the problems that exist in this system, here are some steps that I did in this user research process:',
        image: '/IMG/user_persona_gamatara.png',
        keyPoints: [
          'Conducted interviews with HR, Security and Employees',
          'Analyzed existing attendance systems and their limitations',
          'Defined key features and priorities',
        ],
      },
      {
        title: 'Expereience map',
        description:
        'Conducted interviews with HR, Security and Employees, we collect data on key',
        image: '/IMG/experience_map.png',
        keyPoints: [
          'Motivations', 
          'User Habits', 
          'Problems', 
          'Opportunities from personas',
        ],
      },
      {
        title: 'User Journey Map',
        description:
        'The main objective of this mapping is to precisely identify pain points that cause frustration and anxiety, as well as to find opportunities where Gamataras solutions can provide the most impactful improvements. This journey map serves as our foundation to ensure that the solutions we design are truly centered on the needs and emotions of users.',
        image: '/IMG/Gamatara_UserJourneyMap.png',
        keyPoints: [
          'Long queues at the gate cause frustration for users before the attendance process begins.', 
          'Failure of facial recognition by the camera causes anxiety and undermines user trust.', 
          'Slow verification processes create an inefficient and uncertain waiting experience.', 
          'Access denial without clear feedback leaves users confused and unsure of the next steps.',
          'The absence of final confirmation leaves users uncertain whether their attendance has been successfully recorded.',
        ],
      },
      {
        title: 'How Might We?',
        description:
        'Find solutions to each problem faced by personas in the work area.',
        image: '/IMG/how_might_we.png',
        keyPoints: [
          'Make it easy for the admin process to manage employee attendance data with several types of employees?', 
          'Speed up the verification process, increase the accuracy of face recognition and avoid long queues at the entrance and exit?', 
          'Improve face recognition accuracy even if the face changes?', 
          'Ensure attendance history is always recorded?',
        ],
      },
      {
        title: 'Solution Sketch',
        description:
        'Finding solutions from how might we, both for Admin, Security, and workers.',
        image: '/IMG/solution_sketch.png',
        keyPoints: [
          'More complete information on the dashboard display, to speed up checking all worker attendance activities, gate usage, card usage and security guard access.', 
          'Face recognition system with more accurate and multi-verification technology to avoid long queues.', 
          'A tool with good verification accuracy for face recognition that synchronizes with the attendance history in the employee attendance recording system.', 
        ],
      },
      {
        title: 'User Flow',
        description:
        'Create worker and guest flows to simulate recording worker attendance and guest visits.',
        image: '/IMG/user_flow.png',
        keyPoints: [
          'Face registration for workers first on the tool, if the face is recognized the gate is successfully opened, while for guests using a security guard access card. ', 
        ],
      },
      {
        title: 'Wireframing',
        description:
          'Based on our research findings, we created low-fidelity wireframes to establish the core functionality and user flows.',
        image:
          '/IMG/wireframing.png',
        keyPoints: [
          'Designed user flows for check-in/check-out processes',
          'Created wireframes for security and admin interfaces',
        ],
      },
      {
        title: 'Design System',
        description:
          "To create a consistent website, I created several components that can be used repeatedly. Components include:",
        image:
          '/IMG/design_system.png',
        keyPoints: [
          'Buttons',
          'Colors',
          'Typography',
          'Icons',
        ],
      },
      {
        title: 'UI Design & Visual Identity',
        description:
          "We developed a clean, professional visual design that emphasized usability while reflecting the client's brand.",
        image:
          '/IMG/hifi_gamatara.png',
        keyPoints: [
          'Created a cohesive design system',
          'Designed high-fidelity mockups',
          'Ensured accessibility compliance',
        ],
      },
      {
        title: 'Prototyping',
        description:
          "During the prototyping phase of the Gamatara project, I developed an interactive prototype of a facial recognition-based attendance system for internal company use. This prototype illustrates the user flow based on each role (admin and security guard) and displays a real-time attendance table that can be accessed via a website. The prototyping process helped test the usability of the UI/UX, the efficiency of the navigation flow, and the user experience in accessing daily attendance data.",
        image:
          '/IMG/prototyping_gamatara.png',
        keyPoints: [
          'Design and build high-fidelity prototypes using Figma with real-time data simulation.',
          'Differentiate between user roles (Admin and Security Guard) in terms of appearance and access rights.',
          'Create an intuitive dashboard layout for quick access to attendance data.',
          'Simulate a TV screen display to show employee entry/exit data.',
        ],
      },
      
      // {
      //   title: 'Prototyping & User Testing',
      //   description:
      //     'Interactive prototypes were created to validate the design and gather feedback from real users before development.',
      //   image:
      //     'https://images.pexels.com/photos/8964098/pexels-photo-8964098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      //   keyPoints: [
      //     'Built interactive prototypes for key user flows',
      //     'Conducted usability testing with HR personnel and employees',
      //     'Iterated on designs based on feedback',
      //     'Documented edge cases and accessibility improvements',
      //   ],
      // },
    ],
    results:
      'Gamatara has been successfully launched and adopted internally by Gamatara. The system has significantly reduced the administrative burden on the HR department and improved attendance accuracy. Employees report high levels of satisfaction with the intuitive interface and flexible check-in options.',
    metrics: [
      {
        value: '95%',
        label: 'User Satisfaction',
      },
      {
        value: '75%',
        label: 'Reduction in Administrative Time',
      },
      {
        value: '99.8%',
        label: 'Attendance Accuracy',
      },
    ],
    reflection:
      'This project reinforced the importance of designing with both administrators and end-users in mind. The challenge of creating an interface that was powerful enough for HR needs while remaining simple for employees required careful balance and extensive testing. If I were to approach this project again, I would allocate more time for exploring integration capabilities with other HR systems based on client feedback received after launch.',
  },
  {
    id: 'ICI Feature Enhancement',
    title: 'ICI Mobile Apps',
    category: 'Prayer Request & Consultation Feature',
    summary:
      'This project is a new feature development for the ICI app, which aims to support church communities in managing prayer requests and consultations digitally. The main focus of this development is to facilitate communication between congregations, prayer warriors, patients, and counselors.',
    year: '2022',
    role: 'UI/UX Designer',
    coverImage:
      '/IMG/ici_coverimage.png',
    overview:
      'ICI Recovery is a mobile application designed to support patients through their physical therapy journey. The app bridges the gap between in-clinic sessions and at-home exercises, providing patients with guidance, progress tracking, and communication channels with their healthcare providers.',
    tools: ['Figma', 'Whimsical', 'Prototype'],
    challenge: [
      'Users struggle to maintain a consistent routine of daily prayers amidst busy schedules.',
      'Lack of an easy and trusted platform for consulting on spiritual and everyday life issues.',
      'User problems are diverse, covering spiritual, health, career, financial, family, and social matters.',
      'Absence of integration between spiritual needs and holistic life guidance.',
      'Users need quick, personal, and easy access to consultation services.',
    ],
    solution: [
      'Prayer reminder feature to help users build and maintain consistent spiritual habits.',
      'Prayer request feature with personal support from a pastor.',
      'Multi-topic consultation services (life counselor) all integrated into one platform.',
      'Simple and user-friendly interface suitable for diverse church members.',
      'Support from a responsive and reliable team of experts based on the appropriate consultation category',
    ],
    process: [
      {
        title: 'User Interview',
        description:
          'We conducted research by conducting brief interviews to understand the main issues and opportunities and provide several points of inquiry.',
        image:
          '/IMG/(ICI)UserInterview.png',
        keyPoints: [
          'About worship and prayer activities',
          'About prayer requests',
          'About life counseling',
          'About the role of technology/applications',
        ],
      },
      {
        title: 'Emphaty Map',
        description:
          'Collect information from users about their usual behavior and identify problems and benefits that can be obtained by:',
        image:
          '/IMG/(ICI)Emphatymap.png',
        keyPoints: [
          'Listening.',
          'Observing (See)',
          'What they say and do',
          'What they think and feel',
        ],
      },
      {
        title: 'Affinity Diagram',
        description:
          'By mapping out the problems that frequently arise and grouping them together based on the difficulties they encounter, we can identify the issues that actually need to be addressed.',
        image:
          '/IMG/Affinitydiagram.png',
        keyPoints: [
          'Challenges: Such as not knowing the order of worship, difficulty praying alone, and laziness due to inconsistency. Needs: Such as reminders for worship (especially prayer). Habits: Such as praying in the morning and evening as part of worship and prayer activities. ',
          'Understanding who they usually pray with, the obstacles they face when they want to start praying, and what makes them not afraid to pray.',
          'Understanding the differences between congregations that find it difficult to open up and sometimes do not know who to talk to, they need expert counselors for better mental health.',
          'Determine features based on the problems they face, whether they have never used a similar application or have used one, and make the flow clearer and understandable to many age groups.',
        ],
      },
      {
        title: 'User Persona',
        description:
          'Create user personas with clear problems and goals from the data obtained previously.',
        image:
          '/IMG/Userpersona.png',
        keyPoints: [
          'User personas provide a realistic picture of what users experience and need to be addressed.',
        ],
      },
      {
        title: 'Problem Statement',
        description:
          'Simply put, the problem statement can be summarized as follows:',
        image:
          '/IMG/Problemstatement.png',
        keyPoints:[
          '“Christian congregations face difficulties in worshipping consistently, feeling unsure of whom to turn to for spiritual support, and lacking a safe space to consult and share prayers with trusted individuals.”',
        ],
      },
      {
        title: 'How Might We?',
        description:
          'What can we do?',
        image:
          '/IMG/(ICI)Howmightwe.png',
        keyPoints: [
          'Help congregations be more consistent in their daily worship activities? ',
          'Provide a safe space to share prayers and life issues?',
          'Create a light and relevant spiritual app for all ages?',
        ],
      },
      {
        title: 'Wireframe',
        description:
          'Designing wireframes and creating flowcharts for the display.',
        image:
          '/IMG/ICIWireframe.png',
        keyPoints: [
          'Designing the flow of prayer and consultation features and creating separate flows between prayer requesters and priests, as well as consultation patients and their counselors.',
        ],
      },
      {
        title: 'Visual Design',
        description:
          'Create visual designs based on the wireframe display and ensure that all displays have a good layout and are easy to use. It has two features:',
        image:
          '/IMG/ICIVisualdesign.png',
        keyPoints: [
          'Visual design Prayer request feature.',
          'Visual  design Consultation feature',
        ],
      },
    ],
    results:
      'ICI Recovery has been successfully implemented in several physical therapy clinics, with positive feedback from both patients and healthcare providers. Early data shows improved patient adherence to exercise regimens and more consistent progress tracking. The app has helped bridge the communication gap between clinic visits and provided valuable data for providers to optimize treatment plans.',
    metrics: [
      {
        value: '68%',
        label: 'Increase in Exercise Adherence',
      },
      {
        value: '4.8/5',
        label: 'User Rating',
      },
      {
        value: '35%',
        label: 'Faster Recovery Times',
      },
    ],
    reflection:
      'Working on ICI Recovery highlighted the importance of designing for diverse user capabilities, especially in healthcare applications. The project required careful balance between creating an engaging user experience while maintaining clinical credibility and accuracy. In future healthcare projects, I would prioritize even more extensive testing with users who have various accessibility needs to ensure truly inclusive design.',
  },
  {
    id: 'samakaki',
    title: 'Samakaki',
    category: 'Social Media for Families',
    summary:
      'A family-focused social media platform designed to strengthen connections between family members across generations and distances.',
    year: '2023',
    role: 'UI/UX Designer',
    coverImage:
      '/IMG/Coverimagesamakaki.png',
    overview:
      "Samakaki is a social media platform specifically designed for families, providing a private, secure space for family members to connect, share memories, and stay updated on each other's lives. The platform aims to strengthen family bonds across generations and geographical distances with features tailored to family communication needs.",
    tools: ['Figma',],
    challenge: [
      "How can we create a safe and engaging digital space where families can connect, build family trees, and share memories, especially for multiple age groups?",
    ],
    solution: [
      'Building a safe and child-friendly family website and social media application.',
    ],
    process: [
      {
        title: 'Problem Statement & Solution',
        description:
          'After conducting research to understand user needs and challenges, we synthesized our findings into three key problem statements. This stage is crucial to ensure that the team has a shared understanding of the core issues that need to be addressed. Each problem is then addressed with initial solution ideas that guide the direction of the subsequent design process.',
        image:
          '/IMG/SamakakiProblemStatement&Solution.png',
        keyPoints: [
          'Simplify registration for non-tech savvy users with email or phone number options.',
          'Overcome complex navigation by simplifying the flow and enlarging visual elements.',
          'Ensure content safety for children through moderation and parental control features.',
        ],
      },
      {
        title: 'User Flows',
        description:
          'Based on the solutions that have been formulated, we map out the User Flow comprehensively. The goal is to design each step and interaction that users will perform in the application logically and efficiently.',
        image:
          '/IMG/SamakakiUserflow.png',
        keyPoints: [
          'Mapping out all the steps that users can take within the app in detail.',
          'Covering the main flow from registration, social media, family tree, event management, to profile settings.',
          'Ensuring that every interaction has a logical and efficient flow before being visualized.',
          'Serving as the main blueprint for wireframe and prototype creation.',
        ],
      },
      {
        title: 'Wireframe',
        description:
          'A wireframe is the first visualization of the application structure created based on the user flow. At this stage, we focus on the basic framework (skeleton), layout, and information hierarchy on each page without being fixated on visual elements such as color or typography. This allows us to test and iterate on functionality and flow quickly and effectively.',
        image:
          '/IMG/SamakakiWireframe.png',
        keyPoints: [
          'This is an initial visualization in the form of a basic framework (skeleton) for each page.',
          'Focus on layout, content structure, and functionality flow.',
          'Created based on User Flow to ensure that all important elements are included.',
          'Validate the structure and usability before moving on to the visual design (UI) stage.',
        ],
      },
      {
        title: 'Design System',
        description:
          'To maintain visual consistency and speed up the work process, we built a Design System. This is a collection of style guides, components, and rules that serve as the single source of truth for product design. With the Design System in place, we ensure that every element, from colors to icons, is consistent across all platforms, creating a cohesive user experience.',
        image:
          '/IMG/SamakakiDesignsystem.png',
        keyPoints: [
          'Establish a consistent color palette with green as the primary color for the brand identity.',
          'Selecting easy-to-read typography (Poppins & Montserrat) for clarity of information.',
          'Developing a standard set of iconography to create an intuitive visual language.',
          'Ensuring design consistency across platforms and efficiency in development.',
        ],
      },
      {
        title: 'High Fidelity (Mockup)',
        description:
          'The final stage of the design process is the creation of a High-Fidelity Mockup. Here, we apply the Design System (colors, typography, icons) to the Wireframe structure to create a realistic visual representation of the final product.',
        image:
          '/IMG/SamakakiMockup.png',
        keyPoints: [
          'It is the final visual representation of the product that applies all elements of the Design System.',
          'It combines the structure of the wireframe with detailed user interface (UI) design.',
          'It provides a realistic picture of the look and feel of the application.',
          'It serves as the basis for creating interactive prototypes for user testing.',
        ],
      },
    ],
    results:
      'Samakaki successfully launched as a beta platform and has received positive feedback from initial family users. The platform has demonstrated particular success in connecting distant family members and engaging older generations who previously felt excluded from digital family interactions. User retention rates have exceeded expectations, with families reporting greater satisfaction with their online communication.',
    metrics: [
      {
        value: '92%',
        label: 'Family Member Adoption',
      },
      {
        value: '78%',
        label: 'Weekly Active Users',
      },
      {
        value: '3.5x',
        label: 'More Intergenerational Interaction',
      },
    ],
    reflection:
      'Designing Samakaki highlighted the importance of inclusive design that works for users of all ages and technical abilities. The project required thoughtful balance between simplicity and functionality, with special attention to privacy and security concerns. If continuing this project, I would focus on developing more features to support meaningful family traditions and storytelling, areas that emerged as particularly valuable during user testing.',
  },
];
