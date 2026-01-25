# Deployment Guide - Deploy Your Portfolio for Free

## Option 1: Deploy to Vercel (Recommended - Easiest & Free)

Vercel is made by the creators of Next.js and offers free hosting with automatic deployments.

### Step 1: Prepare Your Code

1. **Make sure your code is ready:**
   - All your images are in the `/public` folder
   - Your `.env.local` file is set up (but don't commit it - it's already in .gitignore)

### Step 2: Push to GitHub

1. **Initialize Git (if not already done):**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Portfolio website"
   ```

2. **Create a GitHub repository:**
   - Go to [github.com](https://github.com) and sign in
   - Click the "+" icon in the top right → "New repository"
   - Name it (e.g., "portfolio" or "rahul-portfolio")
   - Don't initialize with README (you already have one)
   - Click "Create repository"

3. **Push your code:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```
   Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

### Step 3: Deploy to Vercel

1. **Sign up for Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign Up"
   - Choose "Continue with GitHub" (easiest option)

2. **Import your project:**
   - After signing in, click "Add New..." → "Project"
   - You'll see your GitHub repositories
   - Find and click "Import" next to your portfolio repository

3. **Configure your project:**
   - **Framework Preset:** Next.js (should auto-detect)
   - **Root Directory:** `./` (leave as default)
   - **Build Command:** `npm run build` (should be auto-filled)
   - **Output Directory:** `.next` (should be auto-filled)
   - Click "Deploy"

4. **Add Environment Variables (for Contact Form):**
   - After deployment starts, go to "Settings" → "Environment Variables"
   - Add these variables:
     - `RESEND_API_KEY` = your Resend API key
     - `CONTACT_EMAIL` = rahulprasath17@gmail.com
   - Click "Save"
   - Go to "Deployments" tab and redeploy (click the three dots → "Redeploy")

5. **Your site is live!**
   - Vercel will give you a URL like: `https://your-portfolio.vercel.app`
   - You can customize the domain in "Settings" → "Domains"

### Step 4: Custom Domain (Optional)

1. In Vercel dashboard, go to "Settings" → "Domains"
2. Enter your domain name
3. Follow the DNS configuration instructions
4. Vercel will handle SSL certificates automatically

---

## Option 2: Deploy to Netlify (Alternative Free Option)

### Step 1-2: Same as Vercel (Push to GitHub)

### Step 3: Deploy to Netlify

1. **Sign up:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub

2. **Import project:**
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and select your repository

3. **Build settings:**
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
   - Click "Deploy"

4. **Add environment variables:**
   - Go to "Site settings" → "Environment variables"
   - Add `RESEND_API_KEY` and `CONTACT_EMAIL`

---

## Important Notes

### Before Deploying:

1. **Test locally:**
   ```bash
   npm run build
   npm start
   ```
   Make sure everything works!

2. **Check your images:**
   - All images should be in `/public` folder
   - Profile picture should be named `profile-picture.jpg`

3. **Environment Variables:**
   - Don't commit `.env.local` (it's already in .gitignore)
   - Add environment variables in Vercel/Netlify dashboard

### After Deploying:

1. **Test your contact form:**
   - Make sure you've added `RESEND_API_KEY` in Vercel
   - Test the contact form on your live site

2. **Update your resume/LinkedIn:**
   - Add your portfolio URL to your resume
   - Update your LinkedIn profile with the link

3. **Share your portfolio:**
   - Your site is now live and shareable!

---

## Troubleshooting

### Build Fails:
- Check the build logs in Vercel/Netlify
- Make sure all dependencies are in `package.json`
- Run `npm run build` locally to see errors

### Images Not Showing:
- Make sure images are in `/public` folder
- Check image paths in your code (should start with `/`)
- Clear browser cache

### Contact Form Not Working:
- Verify `RESEND_API_KEY` is set in environment variables
- Check Vercel function logs for errors
- Make sure you've redeployed after adding environment variables

---

## Quick Commands Reference

```bash
# Build locally to test
npm run build

# Run production build locally
npm start

# Check for errors
npm run lint

# Start development server
npm run dev
```

---

**Need Help?** Check the [Vercel Documentation](https://vercel.com/docs) or [Next.js Deployment Guide](https://nextjs.org/docs/deployment)

