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

export interface TrainedModel {
  id: string;
  name: string;
  version: string;
  task: string;
  description: string;
  training: string;
  limitations: string;
  evaluationNote: string;
  environment: string[];
  githubUrl: string;
  weightsUrl: string;
  architectureUrl: string;
  resultsUrl: string;
  licensingUrl: string;
  results: {
    dataset: string;
    buildings: number;
    tolerance: number;
    cornerF1: number;
    edgeF1: number;
  }[];
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
  { name: "PDF Text Extraction", category: "Automation & Data" },
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
  { name: "Local Neural TTS", category: "Web & Storage" },
  { name: "KittenTTS Nano", category: "Web & Storage" },
  { name: "Audio Synchronization", category: "Web & Storage" },
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
  { name: "pdfplumber", category: "Tools & Deployment" },
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
    id: "narrator",
    title: "Narrator",
    description: "React and Python reading studio combining Claude document rewriting, Notion AI briefs, and offline CPU speech with KittenTTS Nano and synchronized highlighting.",
    longDescription: "Built a React studio with a Python server for reading and listening to demanding texts. Claude rewrites documents in resumable sections while preserving arguments and qualifications; results can be edited, copied, or downloaded. Local pdfplumber extraction retains source text and removed lines for review; scanned PDFs require OCR that this version does not provide. A date-based Notion browser reads ranked AI-Daily-Brief summaries and their statuses without sending them to Claude again. KittenTTS Nano, a 15-million-parameter local model, generates audio on the server CPU with Luna and Hugo voice previews. Users generate recordings on demand and listen consistently across Chrome and Safari. Playback supports pause/resume, seven-word highlighting, word-position seeking within one continuous recording, and speed changes without regenerating audio. Switching voices stops playback and retains the reading position; generating audio again uses the selected voice. Highlighting uses model-predicted phoneme timings mapped to words, not forced alignment. The approximately 25 MB model downloads once and stays cached; speech then runs offline without a speech API key, GPU, or PyTorch. Rewriting still uses Claude API credits. Documents, translations, and recordings remain temporarily in server memory rather than a permanent library.",
    technologies: ["React", "Python", "Anthropic API", "KittenTTS Nano", "pdfplumber", "Notion API", "JavaScript"],
    category: "AI & Machine Learning",
    image: "/project-narrator.png",
    githubUrl: "https://github.com/rahulprasath-s/Narrator",
  },
  {
    id: "ai-daily-brief",
    title: "AI Daily Brief",
    description: "Automated Python pipeline that uses NVIDIA NIM to rank and summarize AI news and model updates, publishing daily briefs to Notion with historical deduplication.",
    longDescription: "Built a Python pipeline that collects AI news and model updates from Hacker News, Hugging Face, and Techmeme. NVIDIA NIM ranks eligible stories by relevance and summarizes up to 10 items for structured publication to Notion, checking historical links, titles, and summary similarity to prevent duplicates. GitHub Actions runs daily at 08:00 Europe/Berlin with automatic daylight-saving adjustment, covering the previous calendar day. Manual retries, dated backfills, optional Cloudflare Worker debug endpoints, and 22 automated tests support reliable operation.",
    technologies: ["Python", "GitHub Actions", "NVIDIA NIM", "Notion API"],
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
export const trainedModels: TrainedModel[] = [
  {
    id: "koor",
    name: "Koor",
    version: "v1",
    task: "Roof wireframe reconstruction",
    description: "Trained a Point2Roof-based neural network that predicts roof corners, refines their positions, and connects them into a 3D wireframe from a single building's roof point cloud. Outputs are exported as JSON and OBJ; the model does not reconstruct walls, textures, addresses, or floor counts.",
    training: "Prepared synthetic training data, adapted custom CUDA operations for the university's NVIDIA B200 GPUs, and completed training, evaluation, inference scripts, and a Hugging Face weights release. The architecture builds on Point2Roof; this release was trained on synthetic data only.",
    limitations: "Performance drops sharply on real Building3D LiDAR without fine-tuning. Missing or extra connections still require inspection; 37 of 561 real buildings had no accepted edges. Strong synthetic scores do not establish reliable real-world reconstruction.",
    evaluationNote: "Micro-F1 is pooled across buildings. Corner tolerance is a fraction of each building's maximum bounding-box span; an edge requires both endpoints to match. A 5% tolerance can hide positioning errors. These results use Koor's evaluator and a custom spatial holdout, so they are not directly comparable to published benchmarks.",
    environment: ["Python 3.12", "PyTorch 2.14.1", "CUDA 13.2", "NVIDIA B200"],
    githubUrl: "https://github.com/rahulprasath-s/Koor",
    weightsUrl: "https://huggingface.co/Uruva/Koor-building-reconstruction-v1",
    architectureUrl: "https://github.com/Li-Li-Whu/Point2Roof",
    resultsUrl: "https://github.com/rahulprasath-s/Koor/blob/main/docs/results.md",
    licensingUrl: "https://github.com/rahulprasath-s/Koor/blob/main/LICENSING.md",
    results: [
      { dataset: "Synthetic held-out test", buildings: 1600, tolerance: 1, cornerF1: 0.5874, edgeF1: 0.4079 },
      { dataset: "Synthetic held-out test", buildings: 1600, tolerance: 2, cornerF1: 0.8891, edgeF1: 0.8372 },
      { dataset: "Synthetic held-out test", buildings: 1600, tolerance: 5, cornerF1: 0.9549, edgeF1: 0.9445 },
      { dataset: "Real Building3D, no fine-tuning", buildings: 561, tolerance: 1, cornerF1: 0.0032, edgeF1: 0.0000 },
      { dataset: "Real Building3D, no fine-tuning", buildings: 561, tolerance: 2, cornerF1: 0.0212, edgeF1: 0.0028 },
      { dataset: "Real Building3D, no fine-tuning", buildings: 561, tolerance: 5, cornerF1: 0.1770, edgeF1: 0.0482 },
    ],
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
