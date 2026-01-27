# Fix: Seeing Someone Else's Profile in Vercel

## Why This Happens

You're likely viewing a **team/organization workspace** instead of your **personal workspace**. This can happen if:
- You're part of a GitHub organization
- You connected a GitHub organization to Vercel
- You're viewing a shared team project

## How to Fix It

### Option 1: Switch to Your Personal Workspace

1. **In Vercel Dashboard:**
   - Look at the **top left corner** of the screen
   - You'll see a dropdown with your name/avatar
   - Click on it - you should see:
     - Your Personal Account (your name)
     - Any teams/organizations you're part of

2. **Select Your Personal Account:**
   - Click on your personal account (your name)
   - This switches you to your personal workspace
   - You should only see your own deployments now

### Option 2: Check Your GitHub Connection

1. **Go to Vercel Settings:**
   - Click your profile icon (top right)
   - Go to **"Settings"** → **"Git"**
   - Check which GitHub account is connected

2. **If Wrong Account:**
   - Disconnect the current GitHub account
   - Reconnect with your personal GitHub account

### Option 3: Create a New Project in Personal Workspace

1. **Make sure you're in Personal Workspace:**
   - Check the top left dropdown
   - Select your personal account

2. **Create New Project:**
   - Click "Add New..." → "Project"
   - Import your repository
   - This will be in your personal workspace

## How to Tell Which Workspace You're In

- **Top Left Corner:** Shows current workspace name
- **Personal Workspace:** Shows your name/username
- **Team Workspace:** Shows organization/team name

## Best Practice

- **For personal projects:** Use your **Personal Workspace**
- **For team projects:** Use the **Team/Organization Workspace**

## If You Still See Issues

1. **Check GitHub Organizations:**
   - Go to GitHub → Settings → Organizations
   - See if you're part of any organizations
   - These might be auto-connected to Vercel

2. **Disconnect Unwanted Connections:**
   - In Vercel: Settings → Git
   - Remove any unwanted GitHub connections

3. **Create Fresh Project:**
   - Delete the current project
   - Create a new one in your personal workspace
   - Re-import your repository

---

**Quick Fix:** Just switch to your personal workspace using the dropdown in the top left corner!

