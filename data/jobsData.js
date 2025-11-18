// src/data/jobsData.js
const jobs = [
  // ------------------------------------------------------------
  // 1) FRONTEND DEVELOPMENT
  // ------------------------------------------------------------
  {
    category: "Frontend Developer",
    cards: [
      {
        id: "react-ui-enginer",
        title: "React UI Engineer",
        preview: "Build beautiful, responsive UIs using React + Tailwind...",
        desc:
          "As a React UI Engineer you'll build reusable components, optimize rendering performance and create delightful UX.",
        about:
          "You will shape the front-end experience used by thousands. Work closely with designers and backend engineers.",
        responsibilities: [
          "Build reusable React components",
          "Translate Figma designs to UI",
          "Optimize performance and load times",
          "Maintain design consistency across product",
        ],
        requirements: [
          "2+ years React.js",
          "Strong JS fundamentals",
          "Tailwind experience",
        ],
        skills: ["React", "JavaScript", "Tailwind", "Framer Motion"],
        tools: ["VS Code", "GitHub", "Figma"],
        experience: "2–4 years",
        salary: "₹4,00,000 – ₹8,00,000 LPA",
        location: "Hyderabad / Remote",
        mode: "Hybrid",
        type: "Full-Time",
        positions: 3,
        daysLeft: 12,
        niceToHave: ["TypeScript", "Next.js"],
        applyNote: "Quick Apply sends a basic application.",
      },

      {
        id: "frontend-animations-specialist",
        title: "Frontend Animations Specialist",
        preview: "Craft motion-rich UI animations...",
        desc:
          "Design motion systems with Framer Motion / GSAP while maintaining performance.",
        about:
          "Create animated pages, transitions and micro-interactions.",
        responsibilities: [
          "Implement UI animations",
          "Create motion libraries",
          "Performance optimization for animations",
        ],
        requirements: ["Framer Motion or GSAP", "React basics"],
        skills: ["Framer Motion", "GSAP", "CSS"],
        tools: ["Figma", "After Effects"],
        experience: "1–3 years",
        salary: "₹3,20,000 – ₹6,00,000 LPA",
        location: "Remote",
        mode: "Remote",
        type: "Contract",
        positions: 1,
        daysLeft: 8,
        niceToHave: ["Motion design portfolio"],
        applyNote: "Share links to demos.",
      },

      {
        id: "frontend-performance-engineer",
        title: "Frontend Performance Engineer",
        preview: "Reduce load times and improve Core Web Vitals...",
        desc:
          "Optimize website performance using code-splitting, lazy-loading and advanced profiling.",
        about: "Own Core Web Vitals score improvements.",
        responsibilities: [
          "Analyze and improve LCP/CLS/FID",
          "Optimize bundle size",
          "Implement code-splitting",
        ],
        requirements: ["React", "Profiling tools"],
        skills: ["Performance", "Lazy Loading"],
        tools: ["Lighthouse", "Web Vitals"],
        experience: "2–5 years",
        salary: "₹4,50,000 – ₹9,00,000 LPA",
        location: "Bengaluru",
        mode: "Hybrid",
        type: "Full-Time",
        positions: 2,
        daysLeft: 20,
        niceToHave: ["CDN optimization"],
        applyNote: "Share before/after metrics.",
      },

      // NEW FRONTEND ROLES
      {
        id: "angular-engineer",
        title: "Angular Developer",
        preview: "Build enterprise-grade dashboards with Angular...",
        desc:
          "Develop scalable and secure Angular applications for enterprise products.",
        about: "Work in a fast-paced enterprise environment.",
        responsibilities: [
          "Develop Angular components",
          "Create modular architecture",
          "Integrate REST APIs",
        ],
        requirements: ["1-3 years Angular", "RxJS"],
        skills: ["Angular", "TypeScript", "RxJS"],
        tools: ["VS Code", "Postman"],
        experience: "1–3 years",
        salary: "₹3,00,000 – ₹7,00,000 LPA",
        location: "Pune",
        mode: "Hybrid",
        type: "Full-Time",
        positions: 2,
        daysLeft: 14,
        niceToHave: ["NgRx"],
        applyNote: "Attach Angular project links.",
      }
    ],
  },

  // ------------------------------------------------------------
  // 2) BACKEND DEVELOPMENT
  // ------------------------------------------------------------
  {
    category: "Backend Developer",
    cards: [
      {
        id: "api-engineer",
        title: "API Engineer",
        preview: "Design scalable REST/GraphQL APIs...",
        desc:
          "Build fault-tolerant, secure APIs and manage database interactions.",
        about:
          "Work on backend systems powering mobile & web apps.",
        responsibilities: [
          "Create REST/GraphQL APIs",
          "Optimize database performance",
          "Implement authentication",
        ],
        requirements: ["Node.js", "SQL/NoSQL"],
        skills: ["Node", "Express", "MongoDB"],
        tools: ["Postman", "Docker"],
        experience: "2–5 years",
        salary: "₹5,00,000 – ₹10,00,000",
        location: "Bangalore",
        mode: "On-site",
        type: "Full-Time",
        positions: 4,
        daysLeft: 10,
        niceToHave: ["Kafka"],
        applyNote: "Attach API samples.",
      },

      {
        id: "node-microservices-engineer",
        title: "Node.js Microservices Engineer",
        preview: "Build cloud-scale microservices...",
        desc:
          "Develop distributed microservices with event-driven architecture.",
        about:
          "Handle high-traffic backend systems.",
        responsibilities: [
          "Build microservices",
          "Implement message queues",
          "Ensure scalability & fault tolerance",
        ],
        requirements: ["Node.js", "Redis", "Docker"],
        skills: ["Microservices", "Event streaming"],
        tools: ["Grafana", "Kubernetes"],
        experience: "3–6 years",
        salary: "₹6,00,000 – ₹12,00,000",
        location: "Hyderabad",
        mode: "Hybrid",
        type: "Full-Time",
        positions: 3,
        daysLeft: 15,
        niceToHave: ["Kafka", "NATS"],
        applyNote: "Provide microservice case studies.",
      }
    ],
  },

  // ------------------------------------------------------------
  // 3) DESIGN & CREATIVE
  // ------------------------------------------------------------
  {
    category: "UI/UX & Product Design",
    cards: [
      {
        id: "ui-designer",
        title: "UI Designer",
        preview: "Design modern, beautiful interfaces...",
        desc: "Develop UI layouts, visual systems and high-fidelity designs.",
        about: "Work with product, frontend & marketing teams.",
        responsibilities: [
          "Design dashboards & landing pages",
          "Create component libraries",
          "Ensure color & typography consistency",
        ],
        requirements: ["Figma", "Prototyping"],
        skills: ["UI Design", "Branding"],
        tools: ["Figma", "Illustrator"],
        experience: "1–4 years",
        salary: "₹3,50,000 – ₹8,00,000",
        location: "Remote",
        mode: "Remote",
        type: "Full-Time",
        positions: 2,
        daysLeft: 10,
        niceToHave: ["Animation skills"],
        applyNote: "Share design portfolio link.",
      },

      {
        id: "ux-researcher",
        title: "UX Researcher",
        preview: "Understand user needs & behaviors...",
        desc: "Conduct user interviews, usability tests & insights reporting.",
        about: "Improve decision-making through data-driven UX insights.",
        responsibilities: [
          "User research & surveys",
          "Usability testing",
          "Create research reports",
        ],
        requirements: ["UX research experience"],
        skills: ["Research", "Persona creation"],
        tools: ["Maze", "Figma"],
        experience: "1–3 years",
        salary: "₹4,00,000 – ₹7,00,000",
        location: "Mumbai",
        mode: "Hybrid",
        type: "Full-Time",
        positions: 1,
        daysLeft: 9,
        niceToHave: ["Psychology background"],
        applyNote: "Include research case studies.",
      }
    ],
  },

  // ------------------------------------------------------------
  // 4) MOBILE DEVELOPMENT
  // ------------------------------------------------------------
  {
    category: "Mobile App Development",
    cards: [
      {
        id: "react-native-engineer",
        title: "React Native Engineer",
        preview: "Build cross-platform mobile apps...",
        desc: "Develop high-performance iOS & Android apps.",
        about: "Work with backend & UI teams.",
        responsibilities: [
          "Build React Native screens",
          "Implement offline features",
          "Optimize app performance",
        ],
        requirements: ["React Native", "JS/TS"],
        skills: ["React Native", "REST APIs"],
        tools: ["Android Studio", "Xcode"],
        experience: "1–3 years",
        salary: "₹4,50,000 – ₹8,00,000",
        location: "Chennai",
        mode: "Hybrid",
        type: "Full-Time",
        positions: 2,
        daysLeft: 7,
        niceToHave: ["Push notifications"],
        applyNote: "Attach app store links.",
      },

      {
        id: "flutter-developer",
        title: "Flutter Developer",
        preview: "Create sleek mobile apps using Flutter...",
        desc: "Work with Dart to ship Android & iOS apps quickly.",
        about: "Join the mobile innovation team.",
        responsibilities: [
          "Build Flutter widgets",
          "Integrate APIs",
          "Write unit tests",
        ],
        requirements: ["Flutter & Dart"],
        skills: ["Flutter", "Firebase"],
        tools: ["VS Code", "Figma"],
        experience: "1–3 years",
        salary: "₹3,80,000 – ₹7,00,000",
        location: "Remote",
        mode: "Remote",
        type: "Full-Time",
        positions: 3,
        daysLeft: 18,
        niceToHave: ["Animations"],
        applyNote: "Share GitHub repos.",
      }
    ],
  },

  // ------------------------------------------------------------
  // 5) DATA SCIENCE & AI
  // ------------------------------------------------------------
  {
    category: "AI, Data & Machine Learning",
    cards: [
      {
        id: "ml-engineer",
        title: "Machine Learning Engineer",
        preview: "Build predictive ML models...",
        desc: "Develop scalable ML services and pipelines.",
        about: "Work with data, backend & product teams.",
        responsibilities: [
          "Train ML models",
          "Deploy ML pipelines",
          "Evaluate accuracy",
        ],
        requirements: ["Python", "ML frameworks"],
        skills: ["TensorFlow", "PyTorch", "NLP"],
        tools: ["Jupyter", "Kubernetes"],
        experience: "2–4 years",
        salary: "₹6,00,000 – ₹12,00,000",
        location: "Bangalore",
        mode: "Hybrid",
        type: "Full-Time",
        positions: 2,
        daysLeft: 11,
        niceToHave: ["MLOps"],
        applyNote: "Attach ML models portfolio.",
      },

      {
        id: "data-analyst",
        title: "Data Analyst",
        preview: "Analyze data & build dashboards...",
        desc: "Transform raw data into insights.",
        about: "Work closely with business & engineering.",
        responsibilities: [
          "Create dashboards",
          "Analyze datasets",
          "Build reports",
        ],
        requirements: ["SQL", "Excel", "BI tools"],
        skills: ["Power BI", "SQL"],
        tools: ["Tableau", "Python"],
        experience: "1–2 years",
        salary: "₹3,00,000 – ₹6,00,000",
        location: "Delhi",
        mode: "On-site",
        type: "Full-Time",
        positions: 1,
        daysLeft: 6,
        niceToHave: ["Automation scripts"],
        applyNote: "Add portfolio dashboards.",
      }
    ],
  },
];

export default jobs;
