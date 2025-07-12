# Safarihoo Website - GitHub Pages Deployment Guide

## 🚀 Free Hosting with GitHub Pages

This guide will help you deploy your Safarihoo website for free using GitHub Pages.

## Prerequisites

1. **Install Git** (if not already installed):
   - Download from: https://git-scm.com/download/win
   - Install with default settings

2. **Create a GitHub Account** (if you don't have one):
   - Go to: https://github.com
   - Sign up for a free account

## Step-by-Step Deployment

### Step 1: Create GitHub Repository

1. Go to https://github.com
2. Click the "+" icon → "New repository"
3. Repository name: `safarihoo-website`
4. **Important**: Make it **Public** (required for free GitHub Pages)
5. Don't initialize with README
6. Click "Create repository"

### Step 2: Upload Your Files

After creating the repository, GitHub will show you commands. Use these:

```bash
# Navigate to your project folder
cd C:\Users\pc\Downloads\safarihoo-website

# Initialize Git repository
git init

# Add all files
git add .

# Commit your files
git commit -m "Initial commit - Safarihoo travel website"

# Add GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/safarihoo-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username**

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" section (left sidebar)
4. Under "Source", select "Deploy from a branch"
5. Select "main" branch
6. Select "/ (root)" folder
7. Click "Save"

### Step 4: Access Your Live Website

After a few minutes, your website will be available at:
```
https://YOUR_USERNAME.github.io/safarihoo-website
```

## Features That Will Work

✅ **All your current features will work:**
- Search interface with Travelpayouts integration
- AI chat functionality
- Interactive Google Maps
- Mobile responsive design
- Contact form
- All affiliate links

## Custom Domain (Optional)

If you want a custom domain later:
1. Buy a domain (e.g., from Namecheap, GoDaddy)
2. In GitHub Pages settings, add your custom domain
3. Configure DNS settings with your domain provider

## Updating Your Website

To update your website after making changes:

```bash
git add .
git commit -m "Update website content"
git push origin main
```

GitHub Pages will automatically rebuild and deploy your changes.

## Troubleshooting

- **If you see a 404 error**: Wait 5-10 minutes for initial deployment
- **If images don't load**: Check that all file paths are relative
- **If features don't work**: Ensure all external scripts are loading properly

## Benefits of GitHub Pages

✅ **Completely Free**
✅ **Automatic HTTPS**
✅ **Global CDN**
✅ **Easy Updates**
✅ **Version Control**
✅ **Custom Domain Support**

Your Safarihoo website will be live and accessible worldwide! 