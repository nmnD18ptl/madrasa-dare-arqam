# GitHub Pages Deployment Guide

## Quick Steps to Deploy on GitHub Pages

### Step 1: Install gh-pages Package

```bash
cd dare-arqam
npm install --save-dev gh-pages
```

### Step 2: Add Scripts to package.json

Add these scripts to your `package.json`:
- `"predeploy": "npm run build"`
- `"deploy": "gh-pages -d build"`

### Step 3: Add Homepage Field

Add homepage field to `package.json` with your GitHub repository URL:
```json
"homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"
```

### Step 4: Create GitHub Repository

1. Go to [github.com](https://github.com) and create a new repository
2. Name it (e.g., `jamia-dar-e-arqam` or `madrasa-karoshi`)
3. Don't initialize with README (you already have files)

### Step 5: Push Code to GitHub

```bash
cd dare-arqam
git init
git add .
git commit -m "Initial commit - Ready for GitHub Pages"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### Step 6: Deploy to GitHub Pages

```bash
npm run deploy
```

This will:
- Build your project
- Create a `gh-pages` branch
- Deploy to GitHub Pages
- Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

### Step 7: Enable GitHub Pages (if needed)

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **gh-pages branch**
4. Click **Save**

## Important Notes

### Custom Domain (Optional)
If you have a custom domain:
1. Add `CNAME` file in `public/` folder with your domain
2. Configure DNS settings with GitHub Pages IP addresses
3. Repository will update automatically

### Future Updates
Every time you make changes:
```bash
git add .
git commit -m "Your update message"
git push origin main
npm run deploy
```

## Troubleshooting

### 404 Error on Routes
- This is normal for SPAs on GitHub Pages
- The configuration I'll add handles this automatically

### Assets Not Loading
- Check that paths use `/` not `./`
- Verify `homepage` field is correct in package.json

### Build Fails
- Check for TypeScript errors: `npm run build`
- Ensure all dependencies are installed: `npm install`

## Sharing with Client

Once deployed, share this URL:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME
```

### Professional Option: Custom Domain
If you have a domain, you can:
1. Point it to GitHub Pages
2. Share the custom domain URL
3. Looks more professional: `https://jamiadarqamkaroshi.com`

