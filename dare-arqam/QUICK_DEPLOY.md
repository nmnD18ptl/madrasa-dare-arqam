# Quick Deployment Guide - Share with Client

## 🚀 Deploy on GitHub Pages (Free & Easy)

### Step-by-Step Instructions

#### 1. Install gh-pages (one time only)
```bash
cd dare-arqam
npm install
```

#### 2. Update Homepage in package.json
Open `package.json` and replace this line:
```json
"homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"
```

With your actual GitHub details:
```json
"homepage": "https://yourgithubusername.github.io/madrasa-karoshi"
```

#### 3. Create GitHub Repository
1. Go to [github.com](https://github.com)
2. Click **"New repository"**
3. Name it (e.g., `madrasa-karoshi` or `jamia-dare-arqam`)
4. Make it **Public** (required for free GitHub Pages)
5. Click **"Create repository"**

#### 4. Push Code to GitHub
```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Jamia Dar-E-Arqam Website"

# Rename branch to main
git branch -M main

# Add your repository (replace with your actual repo URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

#### 5. Deploy to GitHub Pages
```bash
npm run deploy
```

This will:
- Build your website
- Create a `gh-pages` branch
- Deploy to GitHub Pages
- Take 1-2 minutes

#### 6. Enable GitHub Pages (First Time Only)
1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under "Source", select **"gh-pages"** branch
5. Click **Save**

#### 7. Access Your Live Website
Your website will be available at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME
```

Example: `https://yourname.github.io/madrasa-karoshi`

---

## 📤 Share with Client

Once deployed, share this link with your client:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME
```

### Example Email Template:
```
Subject: Jamia Dar-E-Arqam Website - Live Preview

Dear [Client Name],

The website for Jamia Dar-E-Arqam Karoshi is now live and ready for your review.

Live URL: https://YOUR_USERNAME.github.io/YOUR_REPO_NAME

Please review and let me know if you'd like any changes.

Best regards,
[Your Name]
```

---

## 🔄 Updating the Website

Whenever you make changes:

```bash
# Make your changes, then:

git add .
git commit -m "Description of changes"
git push origin main
npm run deploy
```

The website will update automatically in 1-2 minutes.

---

## 🌐 Custom Domain (Optional - Professional Option)

If you have a domain name (e.g., `jamiadarqamkaroshi.com`):

1. Create `public/CNAME` file with your domain:
   ```
   jamiadarqamkaroshi.com
   www.jamiadarqamkaroshi.com
   ```

2. Configure DNS:
   - Add CNAME record: `@` → `YOUR_USERNAME.github.io`
   - Add CNAME record: `www` → `YOUR_USERNAME.github.io`
   - Wait 24-48 hours for DNS to propagate

3. In GitHub repository:
   - Go to **Settings** → **Pages**
   - Enter your custom domain
   - Enable HTTPS (automatic)

---

## ✅ Checklist Before Deployment

- [ ] Updated homepage URL in `package.json`
- [ ] Replaced placeholder contact info (phone, email, WhatsApp)
- [ ] Added actual logo image to `public/logo.png` (optional)
- [ ] Tested build locally: `npm run build`
- [ ] All images loading correctly
- [ ] Forms working properly
- [ ] Responsive on mobile devices

---

## 🆘 Troubleshooting

### Build Fails
- Check for TypeScript errors
- Ensure all dependencies installed: `npm install`
- Try: `npm run build` locally first

### 404 Error
- Normal for first deployment
- Wait 5-10 minutes after `npm run deploy`
- Check GitHub Pages settings (gh-pages branch selected)

### Images Not Showing
- Verify images are in `public/` folder
- Check image paths use `/` not `./`

### Website Not Updating
- Clear browser cache (Ctrl+F5)
- Check GitHub Pages settings
- Redeploy: `npm run deploy`

---

## 💡 Tips

1. **Test First**: Always run `npm run build` before deploying
2. **Git Status**: Use `git status` to see what changed
3. **Preview**: Visit the URL immediately after deployment
4. **Backup**: Your code is safely stored on GitHub
5. **Free Forever**: GitHub Pages is free for public repositories

---

## 📞 Need Help?

- GitHub Pages Docs: https://pages.github.com
- React Deployment: https://create-react-app.dev/docs/deployment/#github-pages

