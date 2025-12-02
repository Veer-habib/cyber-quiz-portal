# CyberSecure Quiz Portal - Deployment Guide

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

#### Prerequisites
- GitHub account (free)
- Git installed
- Vercel account (free)

#### Steps

**1. Push Code to GitHub**

```powershell
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit: CyberSecure Quiz Portal"

# Create repository on GitHub (github.com/new)
# Then push code:
git remote add origin https://github.com/YOUR_USERNAME/cyber-quiz.git
git branch -M main
git push -u origin main
```

**2. Deploy to Vercel**

1. Go to https://vercel.com
2. Click "New Project"
3. Select your GitHub repository
4. Vercel auto-detects Next.js
5. Click "Deploy"
6. Wait for deployment (2-3 minutes)
7. Get production URL

**3. Configure (Optional)**

In Vercel Project Settings:
```
Environment Variables:
- NEXT_PUBLIC_ADMIN_PASSWORD = "CyberSecure2024"
- (Add any other needed vars)
```

**4. Test Production**

Visit your Vercel deployment URL and verify:
- ✓ Home page loads
- ✓ Quiz works
- ✓ Admin dashboard accessible
- ✓ Results saved

---

### Option 2: Heroku

#### Prerequisites
- Heroku account
- Heroku CLI installed
- Git installed

#### Steps

**1. Create Procfile**

Create `Procfile` in root:
```
web: npm start
```

**2. Create Heroku App**

```powershell
heroku login
heroku create YOUR_APP_NAME
```

**3. Set Environment Variables**

```powershell
heroku config:set NEXT_PUBLIC_ADMIN_PASSWORD=CyberSecure2024
```

**4. Deploy**

```powershell
git push heroku main
```

**5. View Logs**

```powershell
heroku logs --tail
```

---

### Option 3: AWS EC2

#### Prerequisites
- AWS account
- EC2 instance (t2.micro eligible for free tier)
- Ubuntu 20.04 LTS AMI

#### Steps

**1. Connect to Instance**

```bash
ssh -i your-key.pem ubuntu@your-instance-ip
```

**2. Install Node.js**

```bash
curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

**3. Clone Repository**

```bash
git clone https://github.com/YOUR_USERNAME/cyber-quiz.git
cd cyber-quiz
npm install
```

**4. Build Application**

```bash
npm run build
```

**5. Start Application**

```bash
# Option A: Direct
npm start

# Option B: Use PM2 (recommended)
sudo npm install -g pm2
pm2 start "npm start" --name "cyber-quiz"
pm2 startup
pm2 save
```

**6. Setup Nginx Reverse Proxy**

```bash
sudo apt-get install nginx
```

Create `/etc/nginx/sites-available/cyber-quiz`:
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable site:
```bash
sudo ln -s /etc/nginx/sites-available/cyber-quiz /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

**7. Setup SSL (Let's Encrypt)**

```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

---

### Option 4: Azure App Service

#### Prerequisites
- Azure account
- Azure CLI installed

#### Steps

**1. Create Resource Group**

```bash
az group create --name cyber-quiz --location eastus
```

**2. Create App Service Plan**

```bash
az appservice plan create \
  --name cyber-quiz-plan \
  --resource-group cyber-quiz \
  --sku B1 --is-linux
```

**3. Create Web App**

```bash
az webapp create \
  --resource-group cyber-quiz \
  --plan cyber-quiz-plan \
  --name cyber-quiz-app \
  --runtime "node|18-lts"
```

**4. Configure Deployment**

```bash
az webapp config appsettings set \
  --resource-group cyber-quiz \
  --name cyber-quiz-app \
  --settings WEBSITES_ENABLE_APP_SERVICE_STORAGE=false
```

**5. Deploy Code**

```bash
az webapp deployment source config-zip \
  --resource-group cyber-quiz \
  --name cyber-quiz-app \
  --src build.zip
```

---

### Option 5: Docker Deployment

#### Dockerfile

Create `Dockerfile` in root:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

#### docker-compose.yml

```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

#### Deploy

```bash
# Build image
docker build -t cyber-quiz .

# Run container
docker run -p 3000:3000 cyber-quiz

# Or use docker-compose
docker-compose up -d
```

---

## 📋 Pre-Deployment Checklist

- [ ] All files committed to git
- [ ] No sensitive data in code
- [ ] Production build tested locally (`npm run build && npm start`)
- [ ] Environment variables configured
- [ ] Admin password changed from default
- [ ] SSL certificate ready (if using custom domain)
- [ ] Database/storage configured (if using backend)
- [ ] Email service configured (for certificates, if needed)
- [ ] Monitoring/logging setup
- [ ] Error handling verified
- [ ] Performance tested
- [ ] Security headers configured

---

## 🔐 Security Checklist

Before going live:

- [ ] Change default admin password in `src/app/admin/page.tsx`
- [ ] Enable HTTPS/SSL
- [ ] Set secure headers
- [ ] Configure CORS if needed
- [ ] Implement rate limiting
- [ ] Add error logging
- [ ] Hide sensitive environment variables
- [ ] Backup user data regularly
- [ ] Monitor admin access logs
- [ ] Use strong authentication if adding backend

### Security Headers (nginx example)

```nginx
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "no-referrer-when-downgrade" always;
add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
```

---

## 🌐 Custom Domain Setup

### For Vercel

1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. Vercel handles SSL automatically

### For Other Platforms

1. Point domain DNS to platform
2. Add DNS records as instructed
3. Request SSL certificate
4. Configure in web server

---

## 📊 Post-Deployment Monitoring

### Things to Monitor

- [ ] Uptime (99.9%+ target)
- [ ] Response time (< 3 seconds)
- [ ] Error rates (< 1%)
- [ ] User submissions
- [ ] Storage usage
- [ ] Security logs

### Setup Monitoring

Use tools like:
- Vercel Analytics
- AWS CloudWatch
- Azure Monitor
- Google Cloud Monitoring
- Sentry for error tracking
- LogRocket for session replay

---

## 🔄 Continuous Deployment

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Install Vercel CLI
        run: npm i -g vercel
      
      - name: Deploy to Vercel
        run: vercel --prod
        env:
          VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
```

---

## 🆘 Troubleshooting Deployments

### Issue: "Module not found"

```bash
# Rebuild
rm -rf node_modules
npm install
npm run build
```

### Issue: Port Already in Use

```bash
# Find and kill process
lsof -i :3000 | grep LISTEN | awk '{print $2}' | xargs kill

# Or use different port
PORT=3001 npm start
```

### Issue: Out of Memory

```bash
# Increase Node memory
NODE_OPTIONS=--max_old_space_size=4096 npm start
```

### Issue: Slow Deployment

- Check bundle size: `npm run build`
- Optimize images
- Enable caching
- Check network connection
- Review logs for bottlenecks

---

## 📈 Scaling Considerations

### Current Setup
- Single Node.js instance
- Browser LocalStorage for data
- Suitable for: ~1000-5000 concurrent users

### For Larger Scale

Upgrade to:
1. **Multiple Server Instances**
   - Load balancer (Nginx, HAProxy)
   - Multiple app servers

2. **Database Backend**
   - MongoDB, PostgreSQL
   - Replace LocalStorage

3. **Caching Layer**
   - Redis for session data
   - CDN for static assets

4. **Authentication**
   - JWT tokens
   - OAuth integration

---

## 🔄 Rollback Procedures

### Vercel

```bash
# View deployments
vercel deployments

# Rollback to previous
vercel rollback
```

### Other Platforms

```bash
# Git rollback
git revert <commit-hash>
git push

# Redeploy
# (use platform's deploy command)
```

---

## 📞 Post-Deployment Support

### Common Post-Launch Issues

1. **White Page on Load**
   - Check browser console (F12)
   - Check server logs
   - Verify environment variables

2. **Quiz Not Working**
   - Check LocalStorage is enabled
   - Verify JavaScript enabled
   - Check server logs

3. **Admin Dashboard Not Accessible**
   - Verify password in code
   - Check authentication not blocked
   - Clear browser cache

4. **Slow Performance**
   - Check database/API calls
   - Review network tab
   - Check server resources
   - Optimize images

---

## 🎯 Launch Checklist

Day Before Launch:
- [ ] Backup all data
- [ ] Test all features
- [ ] Run security scan
- [ ] Verify SSL certificate
- [ ] Test admin functions
- [ ] Prepare announcement

Day of Launch:
- [ ] Monitor uptime
- [ ] Check error logs
- [ ] Verify quiz submissions
- [ ] Test admin dashboard
- [ ] Monitor performance

Week After Launch:
- [ ] Analyze user feedback
- [ ] Check server performance
- [ ] Review security logs
- [ ] Update documentation
- [ ] Plan improvements

---

## 📚 Deployment Resources

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Deployment**: https://nextjs.org/docs/deployment
- **Docker Docs**: https://docs.docker.com/
- **AWS Docs**: https://docs.aws.amazon.com/
- **Azure Docs**: https://docs.microsoft.com/azure/

---

## 🎓 Production Environment Variables

Recommended to set:

```
NODE_ENV=production
NEXT_PUBLIC_ADMIN_PASSWORD=YourSecurePassword123!
```

---

**Deployment Guide Version**: 1.0
**Last Updated**: November 2024
**Status**: Ready for Production
