# Image and Video Placement Guide

## Where to Put Your Files

Place all your images and videos in the `/public` folder.

## Required Images

### 1. Profile Picture (REQUIRED)
- **File name:** `profile-picture.jpg` (or `.png`)
- **Location:** `/public/profile-picture.jpg`
- **Recommended size:** 800x800px or larger (square)
- **Usage:** Displayed on the Hero/Home page
- **Format:** JPG or PNG

## Optional Images for Projects

For each project, you can add an image. Name them as follows:

### Project Images
- **Narrator:** `/public/project-narrator.png`
- **Careflow Intelligence:** `/public/project-careflow-intelligence.jpg`
- **Medical Report Summariser:** `/public/project-medical-report.jpg`
- **AI-Daily-Brief:** `/public/project-ai-daily-brief.jpg`
- **FabricIRIS:** `/public/project-fabriciris.jpg`
- **Sign2Say:** `/public/project-sign2say.jpg`

**Recommended size:** 1200x600px (2:1 ratio)
**Format:** JPG or PNG

## Optional: Additional Images

You can add images to other sections:
- **About section background:** `/public/about-bg.jpg`
- **Skills section:** `/public/skills-image.jpg`
- **Contact section:** `/public/contact-bg.jpg`

## Videos

If you want to add videos:
- **Location:** `/public/videos/`
- **Format:** MP4 (recommended)
- **Example:** `/public/videos/project-demo.mp4`

## Image Naming Convention

Use lowercase letters, hyphens for spaces:
- ✅ `profile-picture.jpg`
- ✅ `project-medical-report.jpg`
- ✅ `about-background.png`
- ❌ `Profile Picture.jpg` (spaces and capitals)
- ❌ `project_medical_report.jpg` (underscores)

## After Adding Images

1. Place your images in the `/public` folder
2. The website will automatically use them
3. Refresh your browser to see the changes

## Tips

- Use high-quality images (but optimize file size)
- Keep file sizes reasonable (< 1MB for images)
- Use JPG for photos, PNG for graphics with transparency
- Square images work best for profile pictures
- Landscape (2:1) works best for project images

## Narrator Cover

- Asset: `public/project-narrator.png`
- Created with the built-in image generation tool.
- Style: cinematic 16:9 reading studio, dark materials, amber and cyan lighting to match the existing project covers.
- The original prompt below records the earlier macOS implementation. The cover is illustrative; Narrator now generates speech with KittenTTS Nano on the Python server's CPU, without a macOS-only speech dependency.

<details>
<summary>Generation prompt</summary>

Use case: stylized-concept. Asset type: wide 16:9 portfolio project cover illustration for Narrator, a React/Python reading and listening studio. Create a premium cinematic photorealistic 3D editorial still matching a portfolio collection of dark charcoal workspaces, brushed black metal and glass, warm amber practical lighting with restrained cool cyan signal accents, realistic materials and crisp focal subjects. Main subject: an open academic book and a few paper PDF pages on the left flowing into a quiet desktop reading studio on a sleek Mac-like silver laptop at center-right. On the laptop screen show an elegant minimal split reading interface: source text column and spoken-script column with a small seven-word amber highlight, a thin audio waveform and playback timeline along the bottom. A pair of high-quality headphones rests beside the laptop, subtly glowing amber and cyan sound-wave ribbons visually connect the page, screen, and headphones. A small discrete stack of three AI-news summary cards near the source papers suggests saved daily news briefings. This is a text-to-listening product, no recording microphone. Landscape composition legible at small card size; all important objects within central 75%, clean focal hierarchy, moderate contrast, refined not cluttered, fully rendered edge-to-edge 16:9 artwork. No project name lettering, no slogans, no readable dense paragraphs, no brand logos, no watermark. Text should be represented by quiet typographic lines, not gibberish. Do not depict browser voice selection or a cloud voice service; audio is generated locally on a Mac.

</details>

