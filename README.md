# Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🌓 Dark mode with smooth transitions
- ✨ Smooth animations using Framer Motion
- 📱 Fully responsive design
- 📧 Contact form with email integration
- 🎨 Modern, clean UI design
- ⚡ Optimized for performance

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
Create a `.env.local` file in the root directory:
```
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=your_email@example.com
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Adding Your Resume Content

Edit `lib/data.ts` to add your personal information:

- **Personal Info**: Name, title, bio, contact details
- **Experience**: Work history with descriptions
- **Education**: Academic background
- **Skills**: Technical skills organized by category
- **Projects**: Portfolio projects with details

### Contact Form Setup

1. Sign up for [Resend](https://resend.com) (or use Formspree/another service)
2. Get your API key
3. Add it to `.env.local`
4. Update the `from` email in `app/api/contact/route.ts` with your verified domain

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

The site will be automatically optimized and deployed.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email**: Resend API

## License

MIT

