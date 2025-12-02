# Installation & Verification Checklist

## ✅ Pre-Installation Checklist

- [ ] Node.js 18.0.0 or higher installed
- [ ] npm 8.0.0 or higher installed
- [ ] Internet connection available (for downloading packages)
- [ ] 500MB+ free disk space available
- [ ] Administrator access to install packages

### Verify Prerequisites

```powershell
# Check Node.js version
node --version

# Check npm version
npm --version

# Expected output:
# v18.0.0 or higher
# 8.0.0 or higher
```

---

## 📦 Installation Steps

### Step 1: Navigate to Project Directory

```powershell
cd "c:\Users\pandu\Downloads\cyber quiz"
```

### Step 2: Install Dependencies

```powershell
npm install
```

**What it does:**
- Downloads all required packages from npm registry
- Installs React, Next.js, TypeScript, Tailwind CSS, etc.
- Creates `node_modules` folder
- Generates `package-lock.json`

**Time**: 2-5 minutes depending on internet speed

### Step 3: Verify Installation

```powershell
# Check if node_modules exists
ls node_modules | head -5

# List installed packages
npm list --depth=0
```

---

## ✅ Post-Installation Verification

### Check Core Dependencies

```powershell
npm list next react react-dom typescript
```

Should show versions like:
- next@14.0.0 or later
- react@18.2.0 or later
- typescript@5.3.0 or later

### Verify Project Structure

Check that these files exist:

```
✓ package.json
✓ tsconfig.json
✓ next.config.js
✓ tailwind.config.ts
✓ postcss.config.js
✓ src/app/layout.tsx
✓ src/app/page.tsx
✓ src/app/quiz/page.tsx
✓ src/app/admin/page.tsx
✓ src/components/
✓ src/utils/
✓ src/types/
✓ .github/
```

---

## 🚀 Start Development Server

```powershell
npm run dev
```

### Expected Output

```
> cyber-quiz-portal@1.0.0 dev
> next dev

▲ Next.js 14.0.0
- ready started server on 0.0.0.0:3000, url: http://localhost:3000
- event compiled client and server successfully
```

---

## 🌐 Test in Browser

### 1. Home Page

- **URL**: `http://localhost:3000`
- **Expected**: 
  - ✅ Hacker-themed welcome page
  - ✅ Green text on dark background
  - ✅ "START QUIZ" button visible
  - ✅ Portal information displayed

### 2. User Registration

- **Action**: Click "START QUIZ"
- **Expected**:
  - ✅ Registration form appears
  - ✅ Fields: Name, Email, USN, User Type
  - ✅ "PROCEED TO QUIZ" button enabled

### 3. Quiz Interface

- **Action**: Fill form and proceed
- **Expected**:
  - ✅ Quiz page loads with first question
  - ✅ Timer displays at top
  - ✅ Multiple choice options visible
  - ✅ Progress bar shows completion percentage
  - ✅ Can navigate between questions

### 4. Results Page

- **Action**: Answer questions and submit
- **Expected**:
  - ✅ Score displayed (X/20)
  - ✅ Percentage shown
  - ✅ Time taken displayed
  - ✅ Certificate eligibility indicated
  - ✅ Option to return home

### 5. Admin Dashboard

- **URL**: `http://localhost:3000/admin`
- **Password**: `CyberSecure2024`
- **Expected**:
  - ✅ Login form with password field
  - ✅ Dashboard loads after correct password
  - ✅ Three tabs visible (Overview, Results, Analytics)
  - ✅ Statistics displayed correctly

---

## 🔍 Browser DevTools Verification

### Console (F12 → Console)

Should show:
- ✅ No errors
- ✅ No warnings (or minimal)
- ✅ Possible info messages from Next.js

### Network Tab (F12 → Network)

Should show:
- ✅ document loaded successfully
- ✅ CSS files loaded
- ✅ JavaScript bundles loaded
- ✅ No 404 or 500 errors

### Application Tab (F12 → Application → LocalStorage)

Should contain:
- ✅ `http://localhost:3000`
- ✅ Can store user profile (after registration)
- ✅ Can store quiz results (after submission)

---

## ⚠️ Common Issues & Solutions

### Issue 1: "npm command not found"

**Cause**: Node.js not installed or PATH not set
**Solution**:
1. Download Node.js from https://nodejs.org/
2. Run installer with recommended settings
3. Restart terminal/PowerShell
4. Verify: `node --version`

### Issue 2: Port 3000 Already in Use

**Cause**: Another application using port 3000
**Solution**:

Option A: Use different port
```powershell
npm run dev -- -p 3001
```

Option B: Find and kill process
```powershell
Get-Process | Where-Object {$_.Port -eq 3000} | Stop-Process -Force
```

### Issue 3: Module Not Found Errors

**Cause**: Dependencies not installed
**Solution**:
```powershell
# Clear and reinstall
rm -r node_modules
rm package-lock.json
npm install
npm run dev
```

### Issue 4: Styles Not Loading

**Cause**: CSS not compiled
**Solution**:
1. Clear browser cache (Ctrl+Shift+Delete)
2. Hard refresh (Ctrl+Shift+R)
3. Check if `node_modules` exists
4. Restart dev server

### Issue 5: Quiz Questions Not Loading

**Cause**: Import issue or data corruption
**Solution**:
1. Check `src/utils/quizData.ts` exists
2. Verify file has 20 questions
3. Check browser console for errors
4. Restart development server

---

## 📋 Build Verification

### Test Production Build

```powershell
# Create optimized build
npm run build

# Expected output:
# ✓ Compiled client and server successfully
# ✓ Created optimized production build
```

### Start Production Server

```powershell
npm start

# Expected:
# ▲ Next.js 14.0.0
# - ready started server on 0.0.0.0:3000
```

---

## 🧪 Functional Testing

### User Flow Test

- [ ] Register with test data
- [ ] See quiz start
- [ ] Answer all 20 questions
- [ ] See submit button on last question
- [ ] Submit and view results
- [ ] Check certificate eligibility
- [ ] Verify data in admin panel

### Admin Dashboard Test

- [ ] Access /admin
- [ ] Enter correct password
- [ ] View Overview tab
  - [ ] Total submissions count
  - [ ] Certificate eligible count
  - [ ] Average score
  - [ ] Average percentage
- [ ] View Results tab
  - [ ] User table displays
  - [ ] Can see all columns
  - [ ] Data matches user submissions
- [ ] View Analytics tab
  - [ ] Score distribution displays
  - [ ] Statistics calculated correctly
- [ ] Export CSV
  - [ ] File downloads
  - [ ] Contains user data

### Timing Test

- [ ] Timer counts down
- [ ] Time format displays correctly
- [ ] Results show total time
- [ ] Nanoseconds recorded (very large number)

---

## 📊 Performance Verification

### Initial Load Time
- **Expected**: < 3 seconds
- **Check**: Network tab in DevTools

### Quiz Responsiveness
- **Expected**: Smooth transitions between questions
- **Check**: No lag when clicking buttons

### Admin Dashboard Load
- **Expected**: < 2 seconds
- **Check**: Data displays quickly

---

## 🔐 Security Verification

### LocalStorage Test

Open DevTools → Application → LocalStorage:

1. **After Registration**:
   ```json
   {
     "userProfile": {
       "name": "Test User",
       "email": "test@example.com",
       "usn": "TEST001",
       "userType": "student"
     }
   }
   ```

2. **After Quiz Submission**:
   ```json
   {
     "quizResults": [
       {
         "userName": "Test User",
         "score": 15,
         "percentage": 75,
         "eligible": true
       }
     ]
   }
   ```

3. **After Admin Login**:
   ```json
   {
     "adminAuth": "true"
   }
   ```

---

## 🎯 Final Verification Checklist

- [ ] npm install completed without errors
- [ ] Development server starts with `npm run dev`
- [ ] Home page loads at localhost:3000
- [ ] Registration form works
- [ ] Quiz interface responsive and functional
- [ ] All 20 questions load
- [ ] Results display correctly
- [ ] Admin portal password works
- [ ] Admin dashboard displays data
- [ ] CSV export functions
- [ ] LocalStorage working
- [ ] No console errors
- [ ] Responsive on mobile browser
- [ ] Production build creates successfully
- [ ] Production server starts

---

## 🎉 Success!

If all checks pass, your CyberSecure Quiz Portal is ready!

### Next Steps

1. **Customize**:
   - Edit quiz questions in `src/utils/quizData.ts`
   - Change colors in `tailwind.config.ts`
   - Modify admin password in `src/app/admin/page.tsx`

2. **Test**:
   - Take quiz as user
   - Check admin panel
   - Verify certificate eligibility

3. **Deploy**:
   - Connect to GitHub
   - Deploy to Vercel or other platform
   - Share link with students

4. **Monitor**:
   - Check admin dashboard regularly
   - Export results as needed
   - Track student progress

---

**Version**: 1.0.0
**Last Verified**: November 2024
**Status**: ✅ Ready for Production
