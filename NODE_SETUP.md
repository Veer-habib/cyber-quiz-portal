# 🚀 Node.js Installation & Setup Guide

## ⚠️ Node.js Not Found

Your system doesn't have Node.js installed, which is required to run this project.

---

## 📥 Step 1: Download & Install Node.js

### Option A: Using Windows Installer (Recommended)

1. **Go to**: https://nodejs.org/
2. **Download**: LTS version (18.18.0 or higher)
3. **Run**: The installer executable
4. **Follow**: Default installation steps
5. **Restart**: Your computer (important!)
6. **Verify**: Open PowerShell and run:
   ```powershell
   node --version
   npm --version
   ```

### Option B: Using Chocolatey (if you have it)

```powershell
choco install nodejs
```

---

## 🔍 Verify Installation

After installation, open PowerShell and check:

```powershell
# Check Node version (should be 18+)
node --version

# Check npm version (should be 8+)
npm --version

# Example output:
# v18.18.0
# 9.8.1
```

---

## 🚀 Once Node.js is Installed

### Step 1: Navigate to Project
```powershell
cd "c:\Users\pandu\Downloads\cyber quiz"
```

### Step 2: Install Dependencies
```powershell
npm install
```
(This will take 2-5 minutes)

### Step 3: Start Server
```powershell
npm run dev
```

### Step 4: Open in Browser
Visit: **http://localhost:3000**

---

## ✅ Success Indicators

After `npm run dev`, you should see:
```
▲ Next.js 14.0.0
- ready started server on 0.0.0.0:3000, url: http://localhost:3000
```

---

## 🆘 Troubleshooting

### "npm is not recognized"
- **Solution**: Restart PowerShell or your computer after installing Node.js
- The PATH environment variable needs to be updated

### "Port 3000 already in use"
- **Solution**: 
  ```powershell
  npm run dev -- -p 3001
  ```
  Or restart your computer to free the port

### "Missing node_modules"
- **Solution**:
  ```powershell
  npm install
  ```

---

## 📝 What Node.js Does

Node.js allows:
- Running JavaScript on your computer
- Installing packages with npm
- Using modern web frameworks (like Next.js)
- Building and serving web applications

---

## ✅ Once Installed & Running

Your quiz portal will be accessible at:
- **Home**: http://localhost:3000
- **Quiz**: http://localhost:3000/quiz
- **Admin**: http://localhost:3000/admin (Password: CyberSecure2024)

---

## 📞 Need More Help?

1. Read: **START_HERE.md**
2. Read: **QUICKSTART.md**
3. Read: **SETUP.md**

All files are in your project directory!

---

**Go install Node.js, then come back and run the commands above!** 🚀
