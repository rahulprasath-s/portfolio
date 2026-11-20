# Rahulprasath Selvaraj — Portfolio

Personal portfolio for **Rahulprasath Selvaraj**, an AI & Automation Engineer and M.Sc. Human & Artificial Intelligence student based in Nürnberg, Germany.

The site presents my experience, technical skills, research, trained models, and selected work across LLM applications, workflow automation, local AI, computer vision, data engineering, and interactive 3D tools.

> Building AI that drives human efficiency.

[GitHub](https://github.com/rahulprasath-s) · [LinkedIn](https://linkedin.com/in/rahulprasath-s) · [Email](mailto:rahulprasathselvaraj@gmail.com)

## Website Features

- Responsive single-page layout with smooth section navigation
- Light and dark themes with saved user preference
- Filterable project gallery with detailed project modals
- Nine project case studies with detailed descriptions
- A trained-model section with evaluation results, source code, and published weights
- Experience, education, skills, publication, and achievement sections
- Contact form powered by a Next.js API route and Resend
- Accessible semantic structure and mobile-friendly interactions

## Experience

**AI & Automation Engineer — Working Student**

Soccerkinetics · July 2026–October 2026 · Ingolstadt, Bavaria, Germany

- Developed AI applications and automated data workflows as backend services, API integrations, and internal dashboards.
- Built podcast summarization and financial-news monitoring tools with background processing, structured extraction, and persistent storage.
- Contributed to an internal CRM for lead outreach, task coordination, and go-to-market execution.

## Core Skills

- **Languages:** Python, JavaScript, TypeScript, SQL, Java, C
- **AI engineering:** RAG, semantic retrieval, embeddings, prompt engineering, context engineering, structured outputs, Ollama, Anthropic API, NVIDIA NIM
- **Model training and evaluation:** PyTorch, CUDA, point-cloud processing, synthetic-to-real evaluation, and Hugging Face model releases
- **Automation and data:** Scheduled pipelines, REST APIs, n8n, background jobs, Redis/RQ, entity resolution, deduplication, GitHub Actions
- **Computer vision and 3D:** YOLO, OpenCV, Core ML, MediaPipe, Three.js, React Three Fiber, geospatial APIs
- **Web and storage:** Next.js, React, Vue, FastAPI, Node.js, PostgreSQL, SQLite, MongoDB, Qdrant
- **Document and speech processing:** pdfplumber, local PDF text extraction, CPU-based neural speech with KittenTTS Nano, and synchronized text highlighting
- **Delivery:** Docker, Cloudflare Workers and Pages, Vercel, Oracle Cloud, Git

## Selected Projects

Currently working on **Narrator**, **Backtester**, and an **ML trading system**.

| Project | Focus | Primary technologies |
| --- | --- | --- |
| [Narrator](https://github.com/rahulprasath-s/Narrator) | Reading and listening studio with resumable Claude rewriting, Notion AI briefs, and local neural speech | React, Python, Anthropic API, KittenTTS Nano, pdfplumber, Notion API, JavaScript |
| [AI Daily Brief](https://github.com/rahulprasath-s/AI-Daily-Brief) | Daily AI news and model-update briefs with AI ranking and historical deduplication | Python, GitHub Actions, NVIDIA NIM, Notion API |
| Podcast Summarizer | Background transcription, chapters, and structured podcast summaries | Next.js, FastAPI, PostgreSQL, Redis/RQ, Ollama |
| Financial News Monitoring | German financial-news collection and stock-identifier resolution | Python, FastAPI, SQLAlchemy, SQLite, OpenFIGI |
| [Local Workspace Context Optimizer](https://github.com/rahulprasath-s/Local-Workspace-Context-Optimizer) | Privacy-first workspace snapshots and reusable context capsules | Python, Anthropic API, prompt caching |
| [Archisight](https://github.com/rahulprasath-s/3D-Visualization-of-Buildings) | Map and satellite footprints converted into interactive 3D models | React, Three.js, Node.js, MongoDB |
| [Careflow Intelligence](https://github.com/rahulprasath-s/Careflow_Intelligence) | Private local RAG for medical PDFs | FastAPI, Streamlit, Qdrant, Ollama, Docker |
| [FabricIRIS](https://github.com/rahulprasath-s/FabricIRIS-Textile-Defect) | Edge-AI textile defect inspection | YOLO, OpenCV, Core ML, Streamlit |
| [Sign2Say](https://github.com/rahulprasath-s/Sign2Say) | Real-time gesture recognition and speech output | Python, OpenCV, MediaPipe, pyttsx3 |

### Narrator Speech Runtime

Narrator uses the Luna and Hugo voices from [KittenTTS Nano](https://huggingface.co/KittenML/kitten-tts-nano-0.8-int8), a 15-million-parameter model running on the Python server's CPU. Its approximately 25 MB download is cached locally; speech inference then runs offline without a speech API key, GPU, or PyTorch. Audio is generated on demand and played as one continuous recording in Chrome or Safari. Seven-word highlighting uses predicted phoneme timings mapped to words, rather than forced alignment. Voice changes retain the reading position and require generating audio for the selected voice again.

Claude document rewriting still consumes API credits. Documents, translations, and recordings are temporary in-memory session data; only the downloaded model remains cached between sessions.

## Trained Models

**Koor v1 — Roof wireframe reconstruction**

Trained a Point2Roof-based model to predict and refine roof corners and edges from a single building's point cloud, exporting a 3D wireframe as JSON and OBJ. The work covered synthetic-data preparation, CUDA compatibility on university NVIDIA B200 GPUs, training, evaluation, and a Hugging Face weights release. The verified environment was Python 3.12, PyTorch 2.14.1, and CUDA 13.2.

| Evaluation at 2% corner tolerance | Buildings | Corner micro-F1 | Edge micro-F1 |
| --- | --- | --- | --- |
| Synthetic held-out test | 1,600 | 0.8891 | 0.8372 |
| Real Building3D holdout, no fine-tuning | 561 | 0.0212 | 0.0028 |

Training used synthetic data only, and the real-data results show a substantial transfer gap. Tolerance is measured against each building's maximum bounding-box span. These scores use Koor's evaluator and a custom spatial holdout, not a directly comparable published benchmark. The output is a roof wireframe, not a complete building model, and needs inspection.

[GitHub](https://github.com/rahulprasath-s/Koor) · [Model weights](https://huggingface.co/Uruva/Koor-building-reconstruction-v1) · [Evaluation details](https://github.com/rahulprasath-s/Koor/blob/main/docs/results.md) · [Point2Roof architecture](https://github.com/Li-Li-Whu/Point2Roof)

Koor code and weights do not yet have an assigned license, and training-data terms remain to be confirmed. See [licensing notes](https://github.com/rahulprasath-s/Koor/blob/main/LICENSING.md).

## Education

- **M.Sc. Human & Artificial Intelligence**, University of Technology Nuremberg — 2025–Present
- **B.E. Computer Science Engineering**, Sri Eshwar College of Engineering — 2021–2025

## Highlights

- **3rd Prize, RTSH 2025 Hackathon** — built and pitched an AI prototype within 48 hours.
- Published **[AI in Healthcare: Simplifying Medical Reports for Enhanced Patient Comprehension](https://ieeexplore.ieee.org/abstract/document/11108371)** at ETCC 2025.

## Run Locally

```bash
git clone https://github.com/rahulprasath-s/portfolio.git
cd portfolio
npm install
```

Create `.env.local` if you want to test the contact form:

```env
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=rahulprasathselvaraj@gmail.com
```

Start the development server and open [http://localhost:3000](http://localhost:3000):

```bash
npm run dev
```

Useful checks:

```bash
npm run lint
npm run build
```

Resend's default testing sender can only deliver to the email associated with its account. For production delivery, verify a sending domain in Resend and update the `from` address in `app/api/contact/route.ts`.

## Deployment

The application is ready for deployment on Vercel. Add `RESEND_API_KEY` and `CONTACT_EMAIL` to the project's environment variables, then redeploy so the contact route can access them.

## Contact

I am open to discussing AI engineering, automation, and applied AI projects.

- Email: [rahulprasathselvaraj@gmail.com](mailto:rahulprasathselvaraj@gmail.com)
- LinkedIn: [linkedin.com/in/rahulprasath-s](https://linkedin.com/in/rahulprasath-s)
