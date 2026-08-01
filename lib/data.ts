export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  bioHighlights: {
    label: string;
    text: string;
  }[];
  email: string;
  phone?: string;
  location?: string;
  github?: string;
  linkedin?: string;
  website?: string;
}

export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string | "Present";
  employmentType?: string;
  location?: string;
  description: string[];
  technologies?: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field?: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface Skill {
  name: string;
  category: string;
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  category?: string;
}

export const personalInfo: PersonalInfo = {
  name: "Rahulprasath Selvaraj",
  title: "M.Sc. Human and Artificial Intelligence Student",
  bio: "M.Sc. Human and Artificial Intelligence student at the University of Technology Nuremberg and Working Student - AI & Automation Engineer at Soccerkinetics, with a Computer Science background and a strong focus on building practical AI systems that drive human efficiency. At Soccerkinetics, I build AI and automation workflows that connect data, tools, and AI systems to improve operational efficiency.",
  bioHighlights: [
    {
      label: "Expertise",
      text: "RAG, LLM applications, prompt engineering, structured outputs, prompt caching, and privacy-first local AI workflows.",
    },
    {
      label: "What I build",
      text: "I turn complex ideas into usable products, from secure medical document assistants and autonomous research workflows to local developer tools and 3D visualization apps.",
    },
    {
      label: "AI focus",
      text: "Useful, reliable, and efficient AI systems designed for real-world settings.",
    },
    {
      label: "How I work",
      text: "I work at the intersection of engineering, automation, and human-centered AI, always looking for ways to learn faster, build cleaner, and solve problems with practical impact.",
    },
  ],
  email: "rahulprasath17@gmail.com",
  phone: "+49 15565 693892",
  location: "Nürnberg, Germany",
  github: "https://github.com/rahulprasath-s",
  linkedin: "https://linkedin.com/in/rahulprasath-s",
};

export const experiences: Experience[] = [
  {
    company: "Soccerkinetics",
    role: "Working Student - AI & Automation Engineer",
    startDate: "Jul 2026",
    endDate: "Present",
    employmentType: "Part-time",
    location: "Ingolstadt, Bavaria, Germany",
    description: [
      "Working on AI and automation workflows that improve operational efficiency and support practical product use cases.",
      "Building reliable automations that connect data, tools, and AI systems into cleaner day-to-day workflows.",
    ],
    technologies: ["AI Automation", "Workflow Automation", "Python", "LLMs", "Process Optimization"],
  },
];

export const education: Education[] = [
  {
    institution: "University of Technology Nuremberg (UTN)",
    degree: "M.Sc. Human & Artificial Intelligence",
    startDate: "2025",
    endDate: "Present",
    description: "Ongoing studies in Human and Artificial Intelligence, focusing on AI solutions, RAG systems, and LLMs.",
  },
  {
    institution: "Sri Eshwar College of Engineering",
    degree: "B.E. Computer Science Engineering",
    field: "Computer Science",
    startDate: "2021",
    endDate: "2025",
    description: "Final Grade: 8.17",
  },
];

export const skills: Skill[] = [
  // AI & Generative AI
  { name: "Large Language Models (LLMs)", category: "AI & Generative AI" },
  { name: "RAG (Retrieval-Augmented-Generation)", category: "AI & Generative AI" },
  { name: "Natural Language Processing (NLP)", category: "AI & Generative AI" },
  { name: "Prompt Engineering", category: "AI & Generative AI" },
  { name: "Deep Learning", category: "AI & Generative AI" },
  { name: "Vector Database", category: "AI & Generative AI" },
  { name: "Qdrant", category: "AI & Generative AI" },
  { name: "Ollama", category: "AI & Generative AI" },
  { name: "Optical Character Recognition", category: "AI & Generative AI" },
  { name: "Anthropic API", category: "AI & Generative AI" },
  { name: "Prompt Caching", category: "AI & Generative AI" },
  { name: "Structured Output", category: "AI & Generative AI" },
  
  // Workflow Automation
  { name: "Agentic Workflows", category: "Workflow Automation" },
  { name: "Chain-of-Thought Prompting", category: "Workflow Automation" },
  { name: "LLM Ops", category: "Workflow Automation" },
  { name: "N8N", category: "Workflow Automation" },
  { name: "Context Compression", category: "Workflow Automation" },
  { name: "Filesystem Watchers", category: "Workflow Automation" },
  { name: "Usage Analytics", category: "Workflow Automation" },
  
  // Programming Languages
  { name: "Python", category: "Programming Languages" },
  { name: "C", category: "Programming Languages" },
  { name: "Java", category: "Programming Languages" },
  { name: "JavaScript", category: "Programming Languages" },
  { name: "RestAPI", category: "Programming Languages" },
  { name: "JSON Manipulation", category: "Programming Languages" },
  
  // Frameworks & Libraries
  { name: "PyTorch", category: "Frameworks & Libraries" },
  { name: "LangChain", category: "Frameworks & Libraries" },
  { name: "OpenCV", category: "Frameworks & Libraries" },
  { name: "Streamlit", category: "Frameworks & Libraries" },
  { name: "React", category: "Frameworks & Libraries" },
  { name: "Vite", category: "Frameworks & Libraries" },
  { name: "Three.js", category: "Frameworks & Libraries" },
  { name: "React Three Fiber", category: "Frameworks & Libraries" },
  { name: "Drei", category: "Frameworks & Libraries" },
  { name: "Pandas", category: "Frameworks & Libraries" },
  { name: "NumPy", category: "Frameworks & Libraries" },
  { name: "Matplotlib", category: "Frameworks & Libraries" },
  { name: "Scikit-Learn", category: "Frameworks & Libraries" },
  { name: "Google Gemini API", category: "Frameworks & Libraries" },
  
  // Software Development / Backend
  { name: "FastAPI", category: "Backend Development" },
  { name: "Express.js", category: "Backend Development" },
  { name: "MongoDB", category: "Backend Development" },
  { name: "Mongoose", category: "Backend Development" },
  { name: "Node.js", category: "Backend Development" },
  { name: "SQL", category: "Backend Development" },
  { name: "PostgreSQL", category: "Backend Development" },
  { name: "HTML", category: "Backend Development" },
  { name: "CSS", category: "Backend Development" },
  { name: "API Integration", category: "Backend Development" },
  { name: "Backend Automation", category: "Backend Development" },
  { name: "Microservices Architecture", category: "Backend Development" },
  { name: "Docker Compose", category: "Backend Development" },
  { name: "REST API Design", category: "Backend Development" },
  { name: "Geospatial Data Processing", category: "Backend Development" },
  
  // Tools
  { name: "Docker", category: "Tools" },
  { name: "Docker Compose", category: "Tools" },
  { name: "Containerization", category: "Tools" },
  { name: "Git", category: "Tools" },
  { name: "Amazon Web Services", category: "Tools" },
  { name: "VS Code", category: "Tools" },
  { name: "MS Office 365", category: "Tools" },
  { name: "CLI Tooling", category: "Tools" },
  { name: "Google Maps Platform", category: "Tools" },
  { name: "OpenStreetMap", category: "Tools" },
  { name: "GLB Export", category: "Tools" },
  { name: "3D Building Visualization", category: "Tools" },
];

export interface Publication {
  title: string;
  venue: string;
  date: string;
  description?: string;
  link?: string;
}

export interface Achievement {
  title: string;
  organization?: string;
  date: string;
  result?: string;
  description: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date?: string;
}

export const projects: Project[] = [
  {
    id: "local-workspace-context-optimizer",
    title: "Local Workspace Context Optimizer",
    description: "Privacy-first developer tool that compresses local workspace state into reusable context capsules, cutting repeated LLM token usage with prompt caching and structured outputs.",
    longDescription: "Built a privacy-first context lifecycle manager for local development workflows using Python, Anthropic prompt caching, and strict structured outputs. The system scans repositories, filters sensitive files, generates deterministic context capsules, tracks token savings, and exposes both a CLI and local web UI for warming cache, querying Claude, and monitoring workspace changes in real time.",
    technologies: ["Python", "Anthropic API", "Prompt Caching", "Structured Output", "CLI Tooling", "Filesystem Watchers"],
    category: "Developer Tools",
    image: "/local-workspace-context-optimizer.png",
  },
  {
    id: "archisight",
    title: "Archisight",
    description: "Full-stack 3D building visualization app that turns searched or manually traced footprints into exportable massing models with roof controls and geospatial fallbacks.",
    longDescription: "Developed a full-stack geospatial visualization app for searching buildings, tracing footprints on satellite maps, and generating realistic 3D massing models. Combined React, Three.js, Google Maps, Express, and MongoDB to support footprint inference, roof-style controls, estimated building height, and GLB export for interactive architectural exploration.",
    technologies: ["React", "Three.js", "Google Maps Platform", "Express.js", "MongoDB", "GLB Export"],
    category: "3D Visualization",
    image: "/archi-sight.jpg",
  },
  {
    id: "careflow-intelligence",
    title: "Careflow Intelligence: A Secure Local RAG System",
    description: "Architected a fully offline, privacy-first Retrieval-Augmented Generation (RAG) system to enable secure querying of sensitive medical PDF documents with zero cloud data egress.",
    longDescription: "Architected a fully offline, privacy-first Retrieval-Augmented Generation (RAG) system to enable secure querying of sensitive medical PDF documents with zero cloud data egress. Orchestrated a containerized microservices architecture using Docker and Docker Compose to integrate a Streamlit frontend, FastAPI ingestion backend, and Qdrant vector database. Optimized inference performance for edge computing by deploying lightweight, quantized LLMs (Qwen2-0.5B) via Ollama, achieving real-time reasoning on standard consumer hardware.",
    technologies: ["Docker", "Ollama", "Qdrant", "FastAPI", "Streamlit", "n8n", "RAG", "Python", "LLM"],
    category: "AI & Machine Learning",
    image: "/project-careflow-intelligence.jpg",
  },
  {
    id: "medical-report-summariser",
    title: "Medical Report Summariser",
    description: "Generative AI system using OCR to extract data and a RAG-enabled LLM to summarize complicated medical texts.",
    longDescription: "Developed a Generative AI system using OCR to extract data and a RAG-enabled LLM to summarize complicated medical texts. Converts structured and unstructured inputs into clean, patient-friendly summaries. Optimized workflows to reduce manual effort by automating the extraction of key insights from complex documents.",
    technologies: ["LLAMA", "RAG", "OCR", "Python", "Prompt Engineering", "NLP"],
    category: "AI & Machine Learning",
    image: "/project-medical-report.jpg",
  },
  {
    id: "ai-daily-brief",
    title: "AI-Daily-Brief",
    description: "Multi-agent workflow that autonomously scouts, ranks, and summarizes AI research papers using Prompt Engineering.",
    longDescription: "Architected a multi-agent workflow that autonomously scouts, ranks, and summarizes AI research papers, using Prompt Engineering to enforce structured JSON outputs. Switched to Gemini 1.5 Flash to optimize token usage, achieving high-accuracy summarization and technical ranking with zero-marginal-cost operation. Built a self-healing data feed connecting unstructured external APIs (ArXiv, Hugging Face) to a rigid Notion database, using Regex-based fallback parsers to handle hallucinations.",
    technologies: ["N8N", "Gemini 2.5 Flash", "Notion API", "Python", "Prompt Engineering", "JSON"],
    category: "Workflow Automation",
    image: "/project-ai-daily-brief.jpg",
  },
  {
    id: "fabriciris",
    title: "FabricIRIS",
    description: "Real-time Computer Vision model for industrial pattern recognition to detect defects in textile time-series production lines.",
    longDescription: "Developed a real-time Computer Vision model for industrial pattern recognition to detect defects in textile time-series production lines. Implemented OpenCV algorithms to analyze visual data streams and automate quality control decisions. Gained experience translating chaotic visual inputs into structured data logs.",
    technologies: ["Computer Vision", "OpenCV", "Python", "One Ware AI", "Image Processing"],
    category: "Computer Vision",
    image: "/project-fabriciris.jpg",
  },
  {
    id: "sign2say",
    title: "Sign2Say",
    description: "Real-time, low-latency computer vision system to recognize hand gestures and convert them into text and speech.",
    longDescription: "Built a real-time, low-latency computer vision system to recognize hand gestures and convert them into text and speech. Demonstrated proficiency in signal processing and enhancing human-computer interaction accessibility.",
    technologies: ["OpenCV", "Mediapipe", "NLP", "Python", "Computer Vision", "Signal Processing"],
    category: "Computer Vision",
    image: "/project-sign2say.jpg",
  },
];

export const publications: Publication[] = [
  {
    title: "AI in Healthcare: Simplifying Medical Reports for Enhanced Patient Comprehension",
    venue: "ETCC June 2025 (IEEE Conference)",
    date: "June 2025",
    description: "Conducted research on AI, focusing on Optical Character Recognition (OCR), Retrieval-Augmented Generation (RAG), and Natural Language Processing (NLP). Published in an IEEE Conference.",
    link: "https://ieeexplore.ieee.org/abstract/document/11108371",
  },
];

export const achievements: Achievement[] = [
  {
    title: "RTSH 2025 Hackathon",
    organization: "Start Nuremberg Zollhof",
    date: "November 21-23, 2025",
    result: "3rd Prize",
    description: "Built and pitched a workable AI model within 48 hours, demonstrating rapid problem-solving, collaboration, and delivery under tight deadlines.",
  },
];

export const certifications: Certification[] = [
  { title: "Machine Learning", issuer: "IBM" },
  { title: "AI Fundamentals", issuer: "IBM" },
  { title: "Cloud", issuer: "Google" },
  { title: "AWS & DevOps Winter Internship", issuer: "AWS" },
  { title: "Responsible AI Workshop", issuer: "Various" },
  { title: "MERN Bootcamp", issuer: "Various" },
  { title: "Blockchain Workshop", issuer: "Various" },
  { title: "Expert's session in Cyber Security", issuer: "Various" },
];
