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
  title: "AI & Automation Engineer",
  bio: "AI & Automation Engineer and M.Sc. Human & Artificial Intelligence student building LLM applications, automated data pipelines, and full-stack tools. My work spans local RAG, context engineering, computer vision, and geospatial visualization, with a focus on practical workflows, reliable integrations, and local deployment.",
  bioHighlights: [
    {
      label: "AI systems",
      text: "LLM applications, RAG, semantic retrieval, embeddings, prompt engineering, context engineering, and structured outputs.",
    },
    {
      label: "Automation",
      text: "Scheduled data pipelines, background jobs, API integrations, entity resolution, deduplication, and reliable publishing workflows.",
    },
    {
      label: "Product work",
      text: "Full-stack AI tools, internal dashboards, local-first applications, computer vision systems, and interactive 3D experiences.",
    },
    {
      label: "Engineering focus",
      text: "Practical delivery, privacy-aware architecture, observable workflows, dependable integrations, and deployment-ready software.",
    },
  ],
  email: "rahulprasathselvaraj@gmail.com",
  phone: "+49 15565 693892",
  location: "Nürnberg, Germany",
  github: "https://github.com/rahulprasath-s",
  linkedin: "https://linkedin.com/in/rahulprasath-s",
};

export const experiences: Experience[] = [
  {
    company: "Soccerkinetics",
    role: "AI & Automation Engineer",
    startDate: "Jul 2026",
    endDate: "Oct 2026",
    employmentType: "Working Student",
    location: "Ingolstadt, Bavaria, Germany",
    description: [
      "Develop AI applications and automated data workflows, translating operational requirements into backend services, API integrations, and usable dashboards.",
      "Built podcast summarization and financial-news monitoring tools with background processing, structured extraction, and persistent job and article storage.",
      "Contribute to an internal CRM that gives the sales team a central workspace for lead outreach, task coordination, and go-to-market execution.",
    ],
    technologies: ["Python", "FastAPI", "Next.js", "PostgreSQL", "Redis/RQ", "Ollama", "Docker"],
  },
];

export const education: Education[] = [
  {
    institution: "University of Technology Nuremberg (UTN)",
    degree: "M.Sc. Human & Artificial Intelligence",
    startDate: "Oct 2025",
    endDate: "Present",
    description: "Graduate study at the intersection of human intelligence, artificial intelligence, and practical AI systems.",
  },
  {
    institution: "Sri Eshwar College of Engineering",
    degree: "B.E. Computer Science Engineering",
    field: "Computer Science",
    startDate: "Sep 2021",
    endDate: "May 2025",
    description: "Final Grade: 8.17",
  },
];

export const skills: Skill[] = [
  // Programming
  { name: "Python", category: "Programming Languages" },
  { name: "JavaScript", category: "Programming Languages" },
  { name: "TypeScript", category: "Programming Languages" },
  { name: "SQL", category: "Programming Languages" },
  { name: "C", category: "Programming Languages" },
  { name: "Java", category: "Programming Languages" },

  // LLM applications
  { name: "Retrieval-Augmented Generation", category: "LLM Applications" },
  { name: "Semantic Retrieval", category: "LLM Applications" },
  { name: "Embeddings", category: "LLM Applications" },
  { name: "Prompt Engineering", category: "LLM Applications" },
  { name: "Context Engineering", category: "LLM Applications" },
  { name: "Prompt Caching", category: "LLM Applications" },
  { name: "Structured Outputs", category: "LLM Applications" },
  { name: "Model Fallback", category: "LLM Applications" },
  { name: "Ollama", category: "LLM Applications" },
  { name: "Anthropic API", category: "LLM Applications" },
  { name: "NVIDIA NIM", category: "LLM Applications" },

  // Automation and data
  { name: "n8n", category: "Automation & Data" },
  { name: "REST APIs", category: "Automation & Data" },
  { name: "Scheduled Pipelines", category: "Automation & Data" },
  { name: "RSS & HTML Extraction", category: "Automation & Data" },
  { name: "Entity Resolution", category: "Automation & Data" },
  { name: "Deduplication", category: "Automation & Data" },
  { name: "JSON Validation", category: "Automation & Data" },
  { name: "Background Jobs", category: "Automation & Data" },
  { name: "Redis/RQ", category: "Automation & Data" },
  { name: "GitHub Actions", category: "Automation & Data" },

  // Computer vision and 3D
  { name: "Ultralytics YOLO", category: "Computer Vision & 3D" },
  { name: "OpenCV", category: "Computer Vision & 3D" },
  { name: "Core ML", category: "Computer Vision & 3D" },
  { name: "Region-of-Interest Processing", category: "Computer Vision & 3D" },
  { name: "Three.js", category: "Computer Vision & 3D" },
  { name: "React Three Fiber", category: "Computer Vision & 3D" },
  { name: "Geospatial APIs", category: "Computer Vision & 3D" },
  { name: "Footprint Extrusion", category: "Computer Vision & 3D" },

  // Web and storage
  { name: "FastAPI", category: "Web & Storage" },
  { name: "Streamlit", category: "Web & Storage" },
  { name: "React", category: "Web & Storage" },
  { name: "Vue", category: "Web & Storage" },
  { name: "Next.js", category: "Web & Storage" },
  { name: "Node.js", category: "Web & Storage" },
  { name: "Express", category: "Web & Storage" },
  { name: "PostgreSQL", category: "Web & Storage" },
  { name: "SQLite", category: "Web & Storage" },
  { name: "MongoDB", category: "Web & Storage" },
  { name: "Qdrant", category: "Web & Storage" },
  { name: "SQLAlchemy", category: "Web & Storage" },

  // Tools and deployment
  { name: "Git", category: "Tools & Deployment" },
  { name: "Docker", category: "Tools & Deployment" },
  { name: "Docker Compose", category: "Tools & Deployment" },
  { name: "Cloudflare Workers & Pages", category: "Tools & Deployment" },
  { name: "Vercel", category: "Tools & Deployment" },
  { name: "Oracle Cloud", category: "Tools & Deployment" },
  { name: "Pandas", category: "Tools & Deployment" },
  { name: "NumPy", category: "Tools & Deployment" },
  { name: "scikit-learn", category: "Tools & Deployment" },
  { name: "Claude Code", category: "Tools & Deployment" },
  { name: "Codex", category: "Tools & Deployment" },
  { name: "Cursor", category: "Tools & Deployment" },
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
    id: "ai-daily-brief",
    title: "AI Daily Brief",
    description: "Automated cloud pipeline that collects, ranks, summarizes, and publishes high-signal AI research and news to Notion twice daily.",
    longDescription: "Built a scheduled Python pipeline that gathers papers and news from arXiv, Hacker News, Hugging Face, and Techmeme. NVIDIA NIM ranks and summarizes selected items before publishing them to Notion. Timezone-aware filtering, historical deduplication, Date + Rank guards, and reconciliation runs prevent duplicate content while filling missing entries.",
    technologies: ["Python", "GitHub Actions", "NVIDIA NIM", "Notion API", "Cloudflare Workers", "RSS"],
    category: "Workflow Automation",
    image: "/project-ai-daily-brief-v2.jpg",
    githubUrl: "https://github.com/rahulprasath-s/AI-Daily-Brief",
  },
  {
    id: "podcast-summarizer",
    title: "Podcast Summarizer",
    description: "Self-hosted application that resolves podcast sources, processes transcripts, builds chapters, and generates structured summaries in background jobs.",
    longDescription: "Developed at Soccerkinetics with PostgreSQL-backed job storage and Redis/RQ background processing. The application uses Whisper for transcription and local Qwen inference through Ollama, with configurable cloud-model fallback, retry handling, structured summaries, and validation for word budgets and timestamps.",
    technologies: ["Next.js", "FastAPI", "PostgreSQL", "Redis/RQ", "Ollama", "Whisper", "Docker"],
    category: "Professional Work",
    image: "/project-podcast-summarizer.jpg",
  },
  {
    id: "financial-news-monitoring",
    title: "Financial News Monitoring",
    description: "Locally hosted pipeline for collecting German financial news, resolving stock identifiers, and reviewing linked companies and instruments.",
    longDescription: "Developed at Soccerkinetics to collect news and press releases, extract stock identifiers, and resolve company names, tickers, WKNs, and ISINs. The system includes campaign-page discovery, promotion-warning signals, regulatory-source monitoring, and searchable dashboards for reviewing articles and linked instruments.",
    technologies: ["Python", "FastAPI", "SQLAlchemy", "SQLite", "Trafilatura", "RSS", "OpenFIGI"],
    category: "Professional Work",
    image: "/project-financial-news-monitoring.jpg",
  },
  {
    id: "local-workspace-context-optimizer",
    title: "Local Workspace Context Optimizer",
    description: "Privacy-first context lifecycle manager that turns workspace changes into reusable snapshots and structured context capsules.",
    longDescription: "Created a Python workspace scanner, polling watcher, CLI, and local web UI that convert repository files and changes into reusable context snapshots. The Anthropic integration adds ephemeral prompt caching, strict structured output, secret-file exclusions, external context sources, and a usage ledger for measuring cache reuse and token savings.",
    technologies: ["Python", "Anthropic API", "Prompt Caching", "Structured Outputs", "CLI", "Filesystem Watcher"],
    category: "Developer Tools",
    image: "/project-local-workspace-context-optimizer.jpg",
    githubUrl: "https://github.com/rahulprasath-s/Local-Workspace-Context-Optimizer",
  },
  {
    id: "archisight",
    title: "Archisight",
    description: "Full-stack app that converts map-derived, satellite-detected, or manually traced building footprints into interactive 3D massing models.",
    longDescription: "Built an interactive building visualization prototype with Google Maps search, manual footprint tracing, OpenStreetMap and Nominatim geometry, satellite contour extraction, configurable roof profiles, estimated height and area, adaptive camera controls, and fallback geometry for incomplete map data.",
    technologies: ["React", "Three.js", "React Three Fiber", "Node.js", "Express", "MongoDB", "Google Maps"],
    category: "3D Visualization",
    image: "/archi-sight-v2.jpg",
    githubUrl: "https://github.com/rahulprasath-s/3D-Visualization-of-Buildings",
  },
  {
    id: "mamba-vs-lstm",
    title: "Mamba vs LSTM Forecasting",
    description: "Reusable PyTorch benchmark comparing LSTM and lightweight Mamba-style models on Jena Climate time-series forecasting.",
    longDescription: "Refactored a notebook experiment into a reusable training package with a CLI, lazy sliding-window datasets, mixed precision, gradient accumulation, checkpointing, metrics, and plots. The completed T4 run achieved a 6.5% lower normalized test MSE for the Mamba-style model than the LSTM baseline.",
    technologies: ["Python", "PyTorch", "Time-Series Forecasting", "Mamba", "LSTM", "CUDA"],
    category: "AI & Machine Learning",
    image: "/project-mamba-vs-lstm.jpg",
    githubUrl: "https://github.com/rahulprasath-s/mamba-vs-lstm-forecasting",
  },
  {
    id: "crypto-dashboard-cli",
    title: "Crypto Dashboard CLI",
    description: "Interactive TypeScript terminal application for live cryptocurrency prices, market movers, and currency-aware coin details.",
    longDescription: "Built a command-based and interactive CLI backed by the CoinGecko API. It supports symbol lookups, top-market-cap tables, gainers and losers, currency switching, formatted detail cards, environment-based credentials, and friendly handling for invalid input and API limits.",
    technologies: ["TypeScript", "Node.js", "CoinGecko API", "Commander", "Axios", "cli-table3"],
    category: "Developer Tools",
    image: "/project-crypto-dashboard-cli.jpg",
    githubUrl: "https://github.com/rahulprasath-s/Crypto-Data-in-CLI",
  },
  {
    id: "quiz-ai",
    title: "Quiz AI",
    description: "Responsive, typed quiz interface with one-question flow, instant answer feedback, progress tracking, and score summaries.",
    longDescription: "Created a frontend-only quiz application with a maintainable typed question model. Users select one answer at a time, receive immediate visual feedback, track their score and progress, and can restart from the final results screen.",
    technologies: ["Vue 3", "TypeScript", "Tailwind CSS", "Vite"],
    category: "Web Applications",
    image: "/project-quiz-ai.jpg",
    githubUrl: "https://github.com/rahulprasath-s/Quiz-AI",
  },
  {
    id: "claude-code-warmup",
    title: "Claude Code Warmup",
    description: "Small Vercel cron application that schedules an authenticated Claude request before a planned development session.",
    longDescription: "Built a lightweight scheduled serverless endpoint with Vercel Cron and environment-based authentication. The project includes manual deployment instructions, configurable timing and message content, and a live deployment for testing the workflow.",
    technologies: ["HTML", "JavaScript", "Vercel", "Cron", "Anthropic API"],
    category: "Developer Tools",
    image: "/project-claude-code-warmup.jpg",
    githubUrl: "https://github.com/rahulprasath-s/claude-code-warmup",
    liveUrl: "https://claude-code-warmup-lemon.vercel.app",
  },
  {
    id: "careflow-intelligence",
    title: "Careflow Intelligence",
    description: "Privacy-first local RAG application for securely ingesting and querying medical PDFs without cloud data egress.",
    longDescription: "Built a Docker Compose application combining a Streamlit interface, FastAPI ingestion backend, Qdrant vector database, Sentence Transformer embeddings, and local Ollama inference. Overlapping chunks, cosine-similarity retrieval, and source metadata support grounded answers while keeping sensitive documents on-device.",
    technologies: ["Python", "FastAPI", "Streamlit", "Qdrant", "Ollama", "Docker", "RAG"],
    category: "AI & Machine Learning",
    image: "/project-careflow-intelligence-v2.jpg",
    githubUrl: "https://github.com/rahulprasath-s/Careflow_Intelligence",
  },
  {
    id: "fabriciris",
    title: "FabricIRIS - Textile Defect Detection",
    description: "Edge-AI textile inspection system using YOLO and Core ML for real-time detection of holes, knots, lines, and stains on Apple Silicon.",
    longDescription: "Developed live-camera and snapshot inspection interfaces with YOLO inference, region-of-interest cropping, confidence filtering, and annotated detection boxes. The project supports Core ML model loading for Apple Silicon and a PyTorch-weight fallback, plus a Streamlit camera interface for snapshot analysis.",
    technologies: ["Python", "Ultralytics YOLO", "OpenCV", "Core ML", "Streamlit", "Edge AI"],
    category: "Computer Vision",
    image: "/project-fabriciris-v2.jpg",
    githubUrl: "https://github.com/rahulprasath-s/FabricIRIS-Textile-Defect",
  },
  {
    id: "sign2say",
    title: "Sign2Say",
    description: "Real-time accessibility tool that recognizes single- and two-hand gestures and converts them into spoken responses.",
    longDescription: "Built a webcam-based gesture-to-speech application with MediaPipe hand landmarks, OpenCV video processing, a customizable gesture dictionary, multi-hand gesture support, and local text-to-speech output through pyttsx3.",
    technologies: ["Python", "OpenCV", "MediaPipe", "pyttsx3", "Computer Vision", "Text-to-Speech"],
    category: "Computer Vision",
    image: "/project-sign2say-v2.jpg",
    githubUrl: "https://github.com/rahulprasath-s/Sign2Say",
  },
];

export const publications: Publication[] = [
  {
    title: "AI in Healthcare: Simplifying Medical Reports for Enhanced Patient Comprehension",
    venue: "ETCC / IEEE Conference",
    date: "June 2025",
    description: "Research on OCR, retrieval-augmented generation, and NLP for making complex medical reports more accessible to patients.",
    link: "https://ieeexplore.ieee.org/abstract/document/11108371",
  },
];

export const achievements: Achievement[] = [
  {
    title: "RTSH 2025 Hackathon",
    organization: "Start Nuremberg × Zollhof",
    date: "November 21-23, 2025",
    result: "Third Prize",
    description: "Built and pitched an AI prototype within 48 hours, demonstrating rapid problem-solving, collaboration, and delivery under a tight deadline.",
  },
];

export const certifications: Certification[] = [
  { title: "Machine Learning & AI Fundamentals", issuer: "IBM" },
  { title: "Cloud & Technical Skills", issuer: "Google" },
  { title: "Applied AI Coursework", issuer: "Anthropic, Kaggle, Google Skills & DataCamp" },
  { title: "AWS & DevOps Winter Internship", issuer: "AWS" },
  { title: "Responsible AI Workshop", issuer: "Professional Training" },
  { title: "MERN, Blockchain & Cybersecurity Workshops", issuer: "Additional Training" },
];
