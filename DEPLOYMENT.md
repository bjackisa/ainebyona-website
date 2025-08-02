# Deploying Ainebyona Campaign Website to Vercel

## Prerequisites
- Vercel account (free tier available)
- GitHub repository of your project
- Node.js 18+ installed locally

## Step 1: Prepare Your Project for Deployment

### 1.1 Create Build Script
Ensure your `package.json` has the correct build script. The current setup should work as is:

```json
{
  "scripts": {
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

### 1.2 Create Vercel Configuration
Create a `vercel.json` file in your root directory:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/api/$1"
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

## Step 2: Deploy to Vercel

### Option A: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from your project directory**
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Set up and deploy? → Yes
   - Which scope? → Your personal account
   - Link to existing project? → No
   - Project name → `ainebyona-campaign` (or your preferred name)
   - In which directory is your code located? → `./`

4. **Production Deployment**
   ```bash
   vercel --prod
   ```

### Option B: Deploy via GitHub Integration

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Configure settings:
     - Framework Preset: Vite
     - Root Directory: `./`
     - Build Command: `npm run build`
     - Output Directory: `dist`

3. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete

## Step 3: Configure Environment Variables (If Needed)

If your application uses environment variables:

1. In Vercel Dashboard, go to your project
2. Navigate to Settings → Environment Variables
3. Add any required variables:
   - `VITE_API_URL` (if different from default)
   - Any other `VITE_` prefixed variables

## Step 4: Custom Domain (Optional)

1. In Vercel Dashboard, go to your project
2. Navigate to Settings → Domains
3. Add your custom domain
4. Configure DNS records as instructed by Vercel

## Step 5: Automatic Deployments

Once connected to GitHub:
- Every push to `main` branch triggers a production deployment
- Pull requests create preview deployments
- You can configure branch-specific deployments

## Troubleshooting

### Common Issues:

1. **Build Fails**
   - Check that all dependencies are in `package.json`
   - Ensure TypeScript types are correct
   - Run `npm run build` locally first

2. **Routing Issues**
   - Ensure `vercel.json` has correct routing configuration
   - Check that all routes are properly handled by your router

3. **Asset Loading Issues**
   - Verify image URLs are absolute (using Cloudinary links)
   - Check that all imports use correct paths

## Production Checklist

- [ ] All images using Cloudinary URLs
- [ ] No console.log statements in production code
- [ ] All TypeScript errors resolved
- [ ] Responsive design tested
- [ ] All donation features working
- [ ] Contact information verified
- [ ] Performance optimized (under 3 seconds load time)

## Post-Deployment

1. **Test all functionality**
   - Navigation between pages
   - Donation form submission
   - Payment instructions generation
   - Mobile responsiveness

2. **Monitor Performance**
   - Use Vercel Analytics (free)
   - Check Core Web Vitals
   - Monitor error rates

3. **SEO Optimization**
   - Verify meta tags
   - Test social media previews
   - Submit to search engines

Your campaign website will be available at: `https://your-project-name.vercel.app`

## Support

For deployment issues:
- Vercel Documentation: https://vercel.com/docs
- Community Support: https://github.com/vercel/vercel/discussions
- Contact developer: Jackisa Daniel Barack