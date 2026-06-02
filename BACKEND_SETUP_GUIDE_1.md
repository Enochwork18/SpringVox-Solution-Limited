# SpringVox Backend Setup & Deployment Guide

## COMPLETE STEP-BY-STEP INSTRUCTIONS

This guide will walk you through setting up the complete backend for your SpringVox website.

---

## PART 1: UNDERSTANDING THE ARCHITECTURE 🏗️

### What We're Building

```
Your Frontend (Vercel)
         ↓
    API Requests
         ↓
Your Backend Server
         ↓
  MongoDB Database
  Email Service
```

### Components:

1. **Backend Server** - Node.js/Express (handles API requests)
2. **Database** - MongoDB (stores forms, consultations, testimonials)
3. **Email Service** - Nodemailer/SendGrid (sends emails)
4. **Frontend Updates** - Contact forms that talk to backend

---

## PART 2: LOCAL DEVELOPMENT SETUP 💻

### Step 1: Install Node.js

1. Download from https://nodejs.org/ (LTS version)
2. Install it
3. Verify installation:
   ```bash
   node --version
   npm --version
   ```

### Step 2: Create Backend Folder

```bash
# Create a new folder for your backend
mkdir springvox-backend
cd springvox-backend
```

### Step 3: Initialize Project

```bash
# Create package.json
npm init -y

# OR copy the provided backend-package.json:
# Rename backend-package.json to package.json and run:
npm install
```

### Step 4: Install Dependencies

```bash
npm install express mongoose dotenv cors helmet express-rate-limit nodemailer validator bcryptjs jsonwebtoken
npm install --save-dev nodemon
```

### Step 5: Copy Project Files

Copy these files into your springvox-backend folder:

- `server.js` - Main server file
- `.env.example` - Environment template

### Step 6: Create .env File

Copy `.env.example` to `.env.local` and fill in:

```bash
# Copy the file
cp .env.example .env.local

# Then edit .env.local with your values
```

---

## PART 3: DATABASE SETUP (MongoDB) 🗄️

### Option A: MongoDB Atlas (Cloud - Recommended)

1. **Go to MongoDB Atlas**: https://www.mongodb.com/cloud/atlas

2. **Create Account** (free tier available)

3. **Create a Project**:
   - Click "Create a Project"
   - Name it "SpringVox"
   - Click "Next"

4. **Create a Database Cluster**:
   - Click "Create Cluster"
   - Choose "M0 Tier" (FREE - perfect for starting)
   - Choose your region (closest to you)
   - Click "Create Cluster"

5. **Add Database Access**:
   - Go to "Database Access"
   - Click "Add Database User"
   - Create username/password (save these!)
   - Click "Add User"

6. **Get Connection String**:
   - Go to "Clusters"
   - Click "Connect"
   - Choose "Drivers"
   - Select "Node.js"
   - Copy the connection string

7. **Format Connection String**:
   Replace `<password>` with your password:

   ```
   mongodb+srv://username:password@cluster0.mongodb.net/springvox
   ```

8. **Add to .env**:
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster0.mongodb.net/springvox
   ```

### Option B: Local MongoDB (Development Only)

```bash
# Download from https://www.mongodb.com/try/download/community

# After installation, add to .env:
MONGODB_URI=mongodb://localhost:27017/springvox

# Start MongoDB:
# On Windows: mongod
# On Mac: brew services start mongodb-community
# On Linux: sudo systemctl start mongod
```

---

## PART 4: EMAIL SERVICE SETUP 📧

### Option A: Gmail (Easiest for Testing)

1. **Go to Google Account**: https://myaccount.google.com

2. **Enable 2-Factor Authentication**:
   - Click "Security" on left
   - Enable "2-Step Verification"

3. **Get App Password**:
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and "Windows Computer" (or your OS)
   - Copy the 16-character password

4. **Add to .env**:
   ```env
   EMAIL_SERVICE=gmail
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-16-char-password
   ADMIN_EMAIL=your-email@gmail.com
   ```

### Option B: SendGrid (Production Recommended)

1. **Create SendGrid Account**: https://sendgrid.com

2. **Get API Key**:
   - Go to Settings → API Keys
   - Create new key with "Mail Send" access
   - Copy the key

3. **Add to .env**:
   ```env
   EMAIL_SERVICE=SendGrid
   SENDGRID_API_KEY=SG.xxxxxxxxxxxxxxxxx
   ```

### Option C: Resend (Best for Web Apps)

1. **Create Resend Account**: https://resend.com

2. **Get API Key**:
   - Go to API Keys
   - Copy your key

3. **Add to .env**:
   ```env
   EMAIL_SERVICE=resend
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxx
   ```

---

## PART 5: RUN BACKEND LOCALLY 🚀

### Start the Server

```bash
# Development (with auto-reload)
npm run dev

# You should see:
# ╔════════════════════════════════════╗
# ║  SpringVox Backend Server          ║
# ║  Running on port 5000               ║
# ║  Environment: development     ║
# ╚════════════════════════════════════╝
```

### Test the API

Open in your browser or use curl:

```bash
# Health check
curl http://localhost:5000/api/health

# Should return:
# {"status":"Server is running","timestamp":"2024-..."}
```

---

## PART 6: UPDATE FRONTEND 🎨

### Add API URL to Frontend

In your Next.js project:

1. **Create/Update .env.local**:

   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3000
   # For production, use your backend URL:
   # NEXT_PUBLIC_API_URL=https://your-backend-url.com
   ```

2. **Replace CTA Components**:
   - Replace your button clicks with the new `ContactForm.tsx` component
   - Replace consultation buttons with `ConsultationBooking.tsx`

3. **Update page.tsx** to include forms:

   ```jsx
   import ContactForm from '@/components/ContactForm'
   import ConsultationBooking from '@/components/ConsultationBooking'

   // Add these to your main page
   <ContactForm />
   <ConsultationBooking />
   ```

---

## PART 7: DEPLOY BACKEND 🌍

### Option A: Deploy on Railway (Recommended - Easy)

1. **Create Account**: https://railway.app

2. **Connect GitHub**:
   - Click "New Project"
   - Select "GitHub Repo"
   - Connect your repo with backend code

3. **Add Environment Variables**:
   - Click "Add Variable"
   - Copy all variables from your .env file

4. **Deploy**:
   - Click "Deploy"
   - Get your URL (e.g., https://springvox-backend.railway.app)

### Option B: Deploy on Render

1. **Create Account**: https://render.com

2. **Create New Service**:
   - Click "New +"
   - Select "Web Service"
   - Connect GitHub repo

3. **Configure**:
   - Runtime: Node
   - Build command: `npm install`
   - Start command: `npm start`

4. **Add Environment Variables** from .env

5. **Deploy**

### Option C: Deploy on Heroku

```bash
# Install Heroku CLI
npm install -g heroku

# Login
heroku login

# Create app
heroku create springvox-backend

# Add environment variables
heroku config:set MONGODB_URI="your_mongodb_uri"
heroku config:set EMAIL_USER="your_email"
# ... add all other variables

# Deploy
git push heroku main
```

### Option D: Self-Host on VPS (Advanced)

If you have a VPS (AWS, DigitalOcean, Linode):

```bash
# SSH into server
ssh root@your-server-ip

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 (process manager)
sudo npm install -g pm2

# Clone your repo
git clone your-repo-url
cd springvox-backend

# Install dependencies
npm install

# Create .env with variables
nano .env

# Start with PM2
pm2 start server.js --name "springvox-backend"

# Make it permanent
pm2 startup
pm2 save
```

---

## PART 8: GET PRODUCTION URL 🔗

After deployment, you'll have a URL like:

- Railway: `https://springvox-backend-production.up.railway.app`
- Render: `https://springvox-backend.onrender.com`
- Heroku: `https://springvox-backend.herokuapp.com`
- Custom: `https://api.springvox.com`

### Update Frontend for Production

In your Next.js `.env.production`:

```env
NEXT_PUBLIC_API_URL=https://your-backend-url.com
```

---

## PART 9: TEST EVERYTHING 🧪

### Test Contact Form

```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+2348012345678",
    "subject": "Test Inquiry",
    "message": "This is a test message",
    "type": "inquiry"
  }'
```

### Test Consultation Booking

```bash
curl -X POST http://localhost:5000/api/consultation \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+2348012345678",
    "company": "Test Company",
    "serviceType": "AI Solutions",
    "preferredDate": "2024-12-20",
    "preferredTime": "9AM-12PM",
    "details": "Test consultation"
  }'
```

---

## PART 10: DATABASE MANAGEMENT 📊

### View Your Data

#### Using MongoDB Atlas Web UI:

1. Go to MongoDB Atlas
2. Click "Clusters"
3. Click "Collections"
4. Browse your data

#### Using MongoDB CLI:

```bash
# Install mongo shell
brew install mongosh

# Connect to your database
mongosh "mongodb+srv://username:password@cluster0.mongodb.net/springvox"

# List all databases
show dbs

# Use springvox database
use springvox

# List collections
show collections

# View contacts
db.contacts.find()

# View consultations
db.consultations.find()

# View testimonials
db.testimonials.find()
```

---

## PART 11: MONITORING & LOGGING 📈

### Add Error Tracking (Sentry)

```bash
npm install @sentry/node

# Update server.js:
import * as Sentry from "@sentry/node";

Sentry.init({ dsn: process.env.SENTRY_DSN });
app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.errorHandler());
```

### Add to .env:

```env
SENTRY_DSN=https://your-sentry-dsn@sentry.io/xxxxx
```

---

## COMMON ISSUES & SOLUTIONS 🔧

### Issue: "MongoDB connection error"

**Solution**: Check MONGODB_URI in .env, ensure IP whitelist is configured

### Issue: "Email not sending"

**Solution**:

- Check SMTP credentials
- Enable "Less secure apps" for Gmail
- Check spam folder
- Try different email service

### Issue: "CORS error"

**Solution**: Add your frontend URL to CORS whitelist in server.js

### Issue: "Port 5000 already in use"

**Solution**:

```bash
# On Mac/Linux:
lsof -i :5000
kill -9 <PID>

# On Windows:
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

---

## NEXT STEPS 📝

1. ✅ Set up backend locally
2. ✅ Test with contact forms
3. ✅ Deploy to production
4. ✅ Update frontend to use production URL
5. ✅ Monitor submissions
6. ✅ Respond to inquiries
7. 📊 Add analytics (Google Analytics 4)
8. 🔒 Add authentication for admin panel
9. 💬 Add live chat (optional)
10. 📧 Set up email automation

---

## SUPPORT & RESOURCES 📚

- **Express.js Docs**: https://expressjs.com
- **MongoDB Docs**: https://docs.mongodb.com
- **Nodemailer Docs**: https://nodemailer.com
- **Railway Docs**: https://docs.railway.app
- **Render Docs**: https://render.com/docs

---

## QUICK CHECKLIST ✓

- [ ] Node.js installed
- [ ] MongoDB Atlas account created
- [ ] Email service configured
- [ ] .env file created with all variables
- [ ] Backend server running locally
- [ ] Contact form submitting successfully
- [ ] Emails being received
- [ ] Backend deployed to production
- [ ] Frontend updated with production API URL
- [ ] All forms tested end-to-end

You're done! 🎉 Your SpringVox backend is now live!
