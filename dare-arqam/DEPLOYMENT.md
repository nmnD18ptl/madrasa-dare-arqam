# Vercel Deployment Guide

## Prerequisites

1. **GitHub/GitLab/Bitbucket Account** - Your code should be in a Git repository
2. **Vercel Account** - Sign up at [vercel.com](https://vercel.com)

## Deployment Steps

### Method 1: Deploy via Vercel Dashboard (Recommended)

#### Step 1: Prepare Your Repository
```bash
# Make sure your code is committed and pushed to GitHub/GitLab/Bitbucket
cd dare-arqam
git init  # if not already initialized
git add .
git commit -m "Initial commit - Ready for deployment"
git branch -M main
git remote add origin YOUR_REPO_URL
git push -u origin main
```

#### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New Project"** or **"Import Project"**
3. Import your Git repository (GitHub/GitLab/Bitbucket)
4. Vercel will auto-detect it's a Create React App project
5. Configure settings:
   - **Framework Preset**: Create React App (auto-detected)
   - **Root Directory**: `dare-arqam` (if your repo has the project in a subfolder)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `build` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)
6. Click **"Deploy"**
7. Wait for the build to complete (2-5 minutes)

#### Step 3: Access Your Site
- Your site will be live at: `https://your-project-name.vercel.app`
- You can customize the domain in Project Settings

### Method 2: Deploy via Vercel CLI

#### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

#### Step 2: Login to Vercel
```bash
vercel login
```

#### Step 3: Deploy
```bash
cd dare-arqam
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? (Select your account)
- Link to existing project? **N** (for first deployment)
- Project name? (Press Enter for default or enter custom name)
- Directory? `./` (Press Enter)
- Override settings? **N** (Press Enter)

#### Step 4: Production Deployment
```bash
vercel --prod
```

## Post-Deployment Configuration

### 1. Environment Variables (if needed)
If you have API keys or environment variables:
1. Go to Project Settings → Environment Variables
2. Add your variables
3. Redeploy the project

### 2. Custom Domain
1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

### 3. Automatic Deployments
- Every push to `main` branch = Production deployment
- Every push to other branches = Preview deployment
- Pull Requests = Preview deployment with unique URL

## Build Optimization

### Check Build Locally
Before deploying, test the production build:
```bash
cd dare-arqam
npm run build
npm install -g serve
serve -s build
```

Visit `http://localhost:3000` to test the production build.

## Troubleshooting

### Build Fails
1. Check build logs in Vercel dashboard
2. Common issues:
   - Missing dependencies → Check `package.json`
   - TypeScript errors → Fix all TS errors
   - Environment variables → Add them in Vercel dashboard

### Assets Not Loading
- Ensure all assets are in the `public/` folder
- Check that paths use `/` not `./`
- Verify `manifest.json` has correct paths

### Routing Issues
- The `vercel.json` file includes SPA routing support
- All routes redirect to `index.html` for client-side routing

### Performance
- Images should be optimized
- Consider using Next.js Image component for better optimization
- Enable Vercel Analytics for performance monitoring

## Useful Commands

```bash
# View deployment logs
vercel logs

# Check deployment status
vercel inspect

# Remove deployment
vercel rm

# List all deployments
vercel ls
```

## Important Notes

1. **Build Directory**: Vercel automatically detects `build/` as output directory
2. **Node Version**: Vercel uses Node.js 18.x by default
3. **Build Time**: First build may take 3-5 minutes
4. **Subsequent Builds**: Usually 1-2 minutes
5. **Free Tier Limits**:
   - 100GB bandwidth/month
   - Unlimited deployments
   - Automatic HTTPS
   - Custom domains

## Quick Deploy Button

You can also use this markdown in your README for one-click deploy:

```markdown
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=YOUR_REPO_URL)
```

## Support

- Vercel Documentation: [vercel.com/docs](https://vercel.com/docs)
- Vercel Community: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)

