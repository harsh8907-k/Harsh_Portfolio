// Centralized portfolio data - strictly derived from resume & user specifications
export const personalInfo = {
  name: 'Harsh Sanchaniya',
  shortName: 'Harsh',
  initials: 'HS',
  title: 'MSc Data Science Student | AI & Data Enthusiast | Developer',
  supportingLine: 'Building intelligent, data-driven and practical digital experiences.',
  badge: 'MSc Data Science @ REVA University (2026)',
  heroHeading: 'Turning Data Into Intelligent Solutions.',
  heroHeadline: 'Data Science • AI • Development',
  bio: "Hi, I'm Harsh — an MSc Data Science student with a BCA background (2023 - 2026), building skills in Python, data analysis, AI and computer vision.",
  aboutIntro: "I'm a BCA graduate (2023 - 2026) and currently pursuing MSc Data Science at REVA University, Bengaluru (Admitted 2026). I'm developing my skills in Python, Pandas, NumPy, SQL and AI, with hands-on experience building a face-recognition attendance monitoring system.",
  aboutCreative: "Beyond data, I bring creative experience in graphic design, video editing, content creation, and digital branding — giving me a practical edge in building user-centric, intelligent digital solutions.",
  email: 'harshsanchaniya2@gmail.com',
  phone: '+91 99984 05116',
  location: 'Bengaluru, Karnataka',
  hometown: 'Rajkot, Gujarat',
  status: 'Open to data-focused internships, freelance projects and full-time roles',
  social: {
    github: 'https://github.com/harsh8907-k',
    githubNote: 'GitHub Profile',
    linkedin: 'https://www.linkedin.com',
    linkedinNote: 'Connect on LinkedIn',
    email: 'mailto:harshsanchaniya2@gmail.com',
    phone: 'tel:+919998405116'
  }
};

export const stats = [
  {
    value: '2026',
    label: 'BCA Graduate',
    detail: 'Atmiya University (2023 - 2026) • 74.56%'
  },
  {
    value: 'MSc',
    label: 'Data Science',
    detail: 'REVA University (2026 - Present)'
  },
  {
    value: '1',
    label: 'Major Academic Project',
    detail: 'Face Recognition Attendance System'
  },
  {
    value: '3+',
    label: 'Core Data Skills',
    detail: 'Python, SQL, Pandas & NumPy'
  }
];

export const currentlyLearning = [
  'Data Analysis',
  'Machine Learning',
  'SQL',
  'Pandas',
  'NumPy'
];

export const skillCategories = [
  {
    category: 'Programming',
    icon: 'Code2',
    description: 'Core languages for algorithm implementation and application logic',
    skills: [
      { name: 'Python', level: 'Intermediate', highlight: true },
      { name: 'Java', level: 'Academic Foundations' },
      { name: 'JavaScript', level: 'Frontend Logic' }
    ]
  },
  {
    category: 'Data Science',
    icon: 'Database',
    description: 'Manipulating, querying and extracting patterns from datasets',
    skills: [
      { name: 'Pandas', status: 'Currently Learning', highlight: true },
      { name: 'NumPy', status: 'Currently Learning', highlight: true },
      { name: 'SQL', status: 'Currently Learning', highlight: true }
    ]
  },
  {
    category: 'AI / Computer Vision',
    icon: 'Cpu',
    description: 'Applying vision algorithms and facial landmark detection',
    skills: [
      { name: 'Face Recognition', status: 'Project Experience', highlight: true },
      { name: 'Computer Vision', status: 'Hands-on Concepts' }
    ]
  },
  {
    category: 'Web',
    icon: 'Globe',
    description: 'Modern front-end fundamentals for data dashboards and interfaces',
    skills: [
      { name: 'HTML', level: 'Proficient' },
      { name: 'CSS', level: 'Proficient' },
      { name: 'JavaScript', level: 'Functional' }
    ]
  },
  {
    category: 'Creative',
    icon: 'Palette',
    description: 'Visual asset design, post-production and digital graphics',
    skills: [
      { name: 'Canva', level: 'Visual Design' },
      { name: 'DaVinci Resolve', level: 'Video Editing' },
      { name: 'Graphic Design', level: 'Composition' },
      { name: 'Video Editing', level: 'Post-Production' }
    ]
  },
  {
    category: 'Marketing',
    icon: 'Megaphone',
    description: 'Digital presence, brand identity and social reach',
    skills: [
      { name: 'Social Media Marketing', level: 'Strategy' },
      { name: 'Content Creation', level: 'Media' },
      { name: 'Digital Branding', level: 'Identity' }
    ]
  }
];

export const featuredProject = {
  title: 'Attendance Monitoring System',
  type: 'Final Year Academic Project (BCA)',
  tags: ['Python', 'Java', 'HTML', 'CSS', 'JavaScript', 'Computer Vision'],
  description: 'Built a face-recognition attendance system that identifies students and records attendance automatically.',
  highlight: 'Replaced manual attendance with real-time AI-based detection.',
  repoUrl: 'https://github.com/harsh8907-k/attendance-monitoring-system',
  pipeline: [
    {
      step: '01',
      title: 'Camera Input',
      desc: 'Real-time video feed captured via optical webcam sensor',
      tech: 'OpenCV / VideoCapture'
    },
    {
      step: '02',
      title: 'Face Detection',
      desc: 'Locates faces, extracts biometric facial landmark coordinates',
      tech: 'Haar Cascade / FaceNet'
    },
    {
      step: '03',
      title: 'Student Identification',
      desc: 'Matches facial encodings against registered student database',
      tech: 'Euclidean Vector Matching'
    },
    {
      step: '04',
      title: 'Attendance Recorded',
      desc: 'Automates timestamped entry in attendance database with anti-duplicate logic',
      tech: 'Automated DB Logging'
    }
  ],
  keyPoints: [
    'Automated manual roll-call process into a contactless real-time recognition pipeline.',
    'Integrated front-end interface with backend recognition script for seamless record management.',
    'Engineered robust feature detection to identify registered students with high precision.'
  ],
  links: {
    demo: '#',
    github: 'https://github.com/harsh8907-k/attendance-monitoring-system'
  }
};

export const educationHistory = [
  {
    degree: 'MSc Data Science',
    institution: 'REVA University',
    location: 'Bengaluru, Karnataka',
    status: 'Currently Pursuing',
    admittedStatus: 'Admitted (2026)',
    period: '2026 - Present',
    focus: [
      'Advanced Data Science Methodologies',
      'Python Data Ecosystem (Pandas, NumPy, Scikit-learn)',
      'Machine Learning & Artificial Intelligence Foundations',
      'Database Architecture & Big Data Analytics'
    ]
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Atmiya University',
    location: 'Rajkot, Gujarat',
    status: 'Graduated 2026',
    score: '74.56%',
    period: '2023 - 2026',
    focus: [
      'Core Computer Science & Programming (Python, Java, Web)',
      'Data Structures & Database Management Systems',
      'Software Engineering & Application Development',
      'Final Year Project: Face Recognition Attendance System'
    ]
  }
];

export const creativeSkills = [
  {
    title: 'Graphic Design',
    tool: 'Canva & Design Principles',
    desc: 'Creating structured visual assets, promotional banners, presentation decks, and user interfaces.'
  },
  {
    title: 'Video Editing',
    tool: 'DaVinci Resolve',
    desc: 'Audio sync, pacing, color grading, and dynamic post-production for high-retention video content.'
  },
  {
    title: 'Content Creation',
    tool: 'Multimedia Storytelling',
    desc: 'Developing technical and educational visual materials that make complex subjects intuitive.'
  },
  {
    title: 'Digital Branding',
    tool: 'Brand Visual Identity',
    desc: 'Establishing coherent aesthetic systems, typography pairs, and digital footprints across channels.'
  },
  {
    title: 'Social Media Marketing',
    tool: 'Audience Engagement',
    desc: 'Analyzing reach trends and structuring campaigns to build organic audience communities.'
  }
];

export const languages = [
  { name: 'English', level: 'Professional Working Proficiency', flag: 'EN' },
  { name: 'Hindi', level: 'Fluent', flag: 'HI' },
  { name: 'Gujarati', level: 'Native / Mother Tongue', flag: 'GU' }
];
